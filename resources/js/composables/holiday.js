import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default function useUsers() {
    const baseApiUrl = '/api/holidays/';
    const router = useRouter();
    const holidays = ref([]);
    const pagination = ref({
        current_page: 1,
        total: 0,
        per_page: 5,
        last_page: 0,
        links: [],
    });
    const holiday = ref({
        title: '',
        holiday_date: '',
        _method: 'post',
    });
    const errors = ref({
        title: '',
        holiday_date: '',
    });

    const getHolidays = async(data) => {
        let parameters = "?";
        for (const key in data) {
            parameters += key + "=" + data[key] + "&";
        }
        const response = await axios.get(baseApiUrl + parameters);
        holidays.value = response.data.data;
        for (const key in pagination.value) {
            pagination.value[key] = response.data[key];
        }
    }

    const getHoliday = async(id) => {
        const response = await axios.get(baseApiUrl + id);
        holiday.value = response.data;
    }

    const storeHoliday = async(data) => {
        for (const key in errors.value) {
            errors.value[key] = '';
        }
        try {
            await axios.post(baseApiUrl, data);
            await router.push({ name: 'holiday.index' });
        } catch (error) {
            if (error.response.status === 422) {
                const responseErrors = error.response.data.errors;
                for (const key in responseErrors) {
                    errors.value[key] = responseErrors[key][0];
                }
            }
        }
    }

    const updateHoliday = async(id, data) => {
        for (const key in errors.value) {
            errors.value[key] = '';
        }
        try {
            await axios.post(baseApiUrl + id, data);
            await router.push({ name: 'holiday.index' });
        } catch (error) {
            if (error.response.status === 422) {
                const responseErrors = error.response.data.errors;
                for (const key in responseErrors) {
                    errors.value[key] = responseErrors[key][0];
                }
            }
        }
    }

    const deleteHoliday = async(id) => {
        await axios.delete(baseApiUrl + id);
        await router.push({ name: 'holiday.index' });
    }
    return {
        holiday,
        holidays,
        errors,
        getHoliday,
        getHolidays,
        storeHoliday,
        pagination,
        deleteHoliday,
        updateHoliday
    }
}