import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default function useUsers() {
    const baseApiUrl = '/api/user-leaves/';
    const router = useRouter();
    const leaves = ref([]);
    const pagination = ref({
        current_page: 1,
        total: 0,
        per_page: 5,
        last_page: 0,
        links: [],
    });
    const leave = ref({
        description: '',
        comment: '',
        start_date: '',
        end_date: '',
        type: 'Half',
        status: 'Applied',
        _method: 'post',
    });
    const errors = ref({
        description: '',
        comment: '',
        start_date: '',
        end_date: '',
        type: '',
        status: '',
        type: '',
    });

    const getLeaves = async(data) => {
        let parameters = "?";
        for (const key in data) {
            parameters += key + "=" + data[key] + "&";
        }
        const response = await axios.get(baseApiUrl + parameters);
        leaves.value = response.data.data;
        for (const key in pagination.value) {
            pagination.value[key] = response.data[key];
        }
    }

    const getLeave = async(id) => {
        const response = await axios.get(baseApiUrl + id);
        leave.value = response.data;
    }

    const storeLeave = async(data) => {
        for (const key in errors.value) {
            errors.value[key] = '';
        }
        try {
            await axios.post(baseApiUrl, data);
            await router.push({ name: 'leave.index' });
        } catch (error) {
            if (error.response.status === 422) {
                const responseErrors = error.response.data.errors;
                for (const key in responseErrors) {
                    errors.value[key] = responseErrors[key][0];
                }
            }
        }
    }

    const updateLeave = async(id, data) => {
        for (const key in errors.value) {
            errors.value[key] = '';
        }
        try {
            await axios.post(baseApiUrl + id, data);
            await router.push({ name: 'leave.index' });
        } catch (error) {
            if (error.response.status === 422) {
                const responseErrors = error.response.data.errors;
                for (const key in responseErrors) {
                    errors.value[key] = responseErrors[key][0];
                }
            }
        }
    }

    const deleteLeave = async(id) => {
        await axios.delete(baseApiUrl + id);
        await router.push({ name: 'leave.index' });
    }
    return {
        leave,
        leaves,
        errors,
        getLeave,
        getLeaves,
        storeLeave,
        pagination,
        deleteLeave,
        updateLeave
    }
}