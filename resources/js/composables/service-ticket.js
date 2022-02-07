import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default function useServiceTicket() {
    const baseApiUrl = '/api/service-tickets/';
    const router = useRouter();
    const serviceTickets = ref([]);
    const pagination = ref({
        current_page: 1,
        total: 0,
        per_page: 5,
        last_page: 0,
        links: [],
    });
    const serviceTicket = ref({
        title: '',
        description: '',
        priority: '',
        status: '',
        type: '',
        user_id: '',
        _method: 'post',
    });
    const errors = ref({
        title: '',
        description: '',
        priority: '',
        status: '',
        type: '',
        user_id: '',
    });

    const getServiceTickets = async(data) => {
        let parameters = "?";
        for (const key in data) {
            parameters += key + "=" + data[key] + "&";
        }
        const response = await axios.get(baseApiUrl + parameters);
        serviceTickets.value = response.data.data;
        for (const key in pagination.value) {
            pagination.value[key] = response.data[key];
        }
    }

    const getServiceTicket = async(id) => {
        const response = await axios.get(baseApiUrl + id);
        serviceTicket.value = response.data;
    }

    const storeServiceTicket = async(data) => {
        for (const key in errors.value) {
            errors.value[key] = '';
        }
        try {
            await axios.post(baseApiUrl, data);
            await router.push({ name: 'service-ticket.index' });
        } catch (error) {
            if (error.response.status === 422) {
                const responseErrors = error.response.data.errors;
                for (const key in responseErrors) {
                    errors.value[key] = responseErrors[key][0];
                }
            }
        }
    }

    const updateServiceTicket = async(id, data) => {
        for (const key in errors.value) {
            errors.value[key] = '';
        }
        try {
            await axios.post(baseApiUrl + id, data);
            await router.push({ name: 'service-ticket.index' });
        } catch (error) {
            if (error.response.status === 422) {
                const responseErrors = error.response.data.errors;
                for (const key in responseErrors) {
                    errors.value[key] = responseErrors[key][0];
                }
            }
        }
    }

    const deleteServiceTicket = async(id) => {
        await axios.delete(baseApiUrl + id);
        await router.push({ name: 'service-ticket.index' });
    }
    return {
        serviceTicket,
        serviceTickets,
        errors,
        getServiceTicket,
        getServiceTickets,
        storeServiceTicket,
        pagination,
        deleteServiceTicket,
        updateServiceTicket,
    }
}