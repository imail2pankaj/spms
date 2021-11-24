import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default function useRoles() {
    const router = useRouter();
    const role = ref({
        name: '',
        permission: [],
        _method: 'post',
    });
    const roles = ref([]);
    const permissionsOptions = ref([]);
    const errors = ref({
        name: '',
        permission: '',
    });

    const getRoles = async() => {
        const response = await axios.get('/api/roles');
        roles.value = response.data;
    }

    const getRole = async(id) => {
        const response = await axios.get('/api/roles/' + id);
        role.value = response.data;
    }

    const getPermissionsDropdown = async() => {
        const response = await axios.get('/api/permissions');
        permissionsOptions.value = response.data;
    }

    const storeRole = async(data) => {
        for (const key in errors.value) {
            errors.value[key] = '';
        }
        try {
            await axios.post('/api/roles', data);
            await router.push({ name: 'role.index' });
        } catch (error) {
            if (error.response.code === 422) {
                const responseErrors = error.response.data.errors;
                for (const key in responseErrors) {
                    errors.value[key] = responseErrors[key][0];
                }
            }
        }
    }

    const updateRole = async(id, data) => {
        for (const key in errors.value) {
            errors.value[key] = '';
        }
        try {
            await axios.post('/api/roles/' + id, data);
            await router.push({ name: 'role.index' });
        } catch (error) {
            if (error.response.code === 422) {
                const responseErrors = error.response.data.errors;
                for (const key in responseErrors) {
                    errors.value[key] = responseErrors[key][0];
                }
            }
        }
    }

    const deleteRole = async(id) => {
        await axios.delete('/api/roles/' + id);
    }
    return {
        errors,
        role,
        roles,
        getRole,
        getRoles,
        storeRole,
        deleteRole,
        updateRole,
        permissionsOptions,
        getPermissionsDropdown
    }
}