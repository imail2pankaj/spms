import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default function useUsers() {
    const router = useRouter();
    const users = ref([]);
    const rolesOptions = ref([]);
    const user = ref({
        first_name: '',
        middle_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
        phone_number: '',
        emergency_phone_number: '',
        profile_image: '',
        gender: '',
        marital_status: '',
        dob: '',
        join_date: '',
        resign_date: '',
        resume_file: '',
        address: '',
        city: '',
        state: '',
        country: '',
        user_status: '',
        roles: [],
        _method: 'post',
    });
    const errors = ref({
        first_name: '',
        middle_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
        phone_number: '',
        emergency_phone_number: '',
        profile_image: '',
        gender: '',
        marital_status: '',
        dob: '',
        join_date: '',
        resign_date: '',
        resume_file: '',
        address: '',
        city: '',
        state: '',
        country: '',
        user_status: '',
        roles: '',
    });

    const getUsers = async() => {
        const response = await axios.get('/api/users');
        users.value = response.data;
    }

    const getUser = async(id) => {
        const response = await axios.get('/api/users/' + id);
        user.value = response.data;
        user.value.roles = response.data.roles[0].id;
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
            if (error.response.status === 422) {
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
            if (error.response.status === 422) {
                const responseErrors = error.response.data.errors;
                for (const key in responseErrors) {
                    errors.value[key] = responseErrors[key][0];
                }
            }
        }
    }

    const deleteUser = async(id) => {
        await axios.delete('/api/users/' + id);
        await router.push({ name: 'user.index' });
    }
    return {
        user,
        users,
        errors,
        getUser,
        getUsers,
        storeUser,
        deleteUser,
        updateUser,
        rolesOptions,
        getRolesDropdown
    }
}