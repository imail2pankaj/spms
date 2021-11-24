import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default function useUsers() {
    const router = useRouter();
    const user = ref({
        name: '',
        permission: [],
        _method: 'post',
    });
    const users = ref([]);
    const rolesOptions = ref([]);
    const errors = ref({
        name: '',
        permission: '',
    });

    const getUsers = async() => {
        const response = await axios.get('/api/users');
        users.value = response.data;
    }

    const getUser = async(id) => {
        const response = await axios.get('/api/users/' + id);
        user.value = response.data;
    }

    const getRolesDropdown = async() => {
        const response = await axios.get('/api/roles');
        rolesOptions.value = response.data;
    }

    const storeUser = async(data) => {
        for (const key in errors.value) {
            errors.value[key] = '';
        }
        try {
            await axios.post('/api/users', data);
            await router.push({ name: 'user.index' });
        } catch (error) {
            if (error.response.code === 422) {
                const responseErrors = error.response.data.errors;
                for (const key in responseErrors) {
                    errors.value[key] = responseErrors[key][0];
                }
            }
        }
    }

    const updateUser = async(id, data) => {
        for (const key in errors.value) {
            errors.value[key] = '';
        }
        try {
            await axios.post('/api/users/' + id, data);
            await router.push({ name: 'user.index' });
        } catch (error) {
            if (error.response.code === 422) {
                const responseErrors = error.response.data.errors;
                for (const key in responseErrors) {
                    errors.value[key] = responseErrors[key][0];
                }
            }
        }
    }

    const deleteUser = async(id) => {
        await axios.delete('/api/users/' + id);
    }
    return {
        errors,
        user,
        users,
        getUser,
        getUsers,
        storeUser,
        deleteUser,
        updateUser,
        rolesOptions,
        getRolesDropdown
    }
}