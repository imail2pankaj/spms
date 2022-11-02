import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default function useContacts() {
    const baseApiUrl = '/api/contacts';
    const router = useRouter();
    const contacts = ref([]);
    const pagination = ref({
        current_page: 1,
        total: 0,
        per_page: 5,
        last_page: 0,
    });
    const contact = ref({
        name: '',
        email: '',
        phone: '',
        business_name: '',
        city: '',
        country: '',
        _method: 'post',
    });
    const errors = ref({
        name: '',
        email: '',
        phone: '',
        business_name: '',
        city: '',
        country: '',
    });

    const getContacts = async (data) => {
        let parameters = "?";
        for (const key in data) {
            parameters += key + "=" + data[key] + "&";
        }
        const response = await axios.get(baseApiUrl + parameters);
        contacts.value = response.data.data;
        for (const key in pagination.value) {
            pagination.value[key] = response.data[key];
        }
    }

    const getContact = async (id) => {
        const response = await axios.get(baseApiUrl + '/' + id);
        contact.value = response.data;
    }

    const storeContact = async (data) => {

        for (const key in errors.value) {
            errors.value[key] = '';
        }
        try {
            return await axios.post(baseApiUrl, data);
            await router.push({ name: 'contacts.index' });
        } catch (error) {
            if (error.response.status === 422) {
                const responseErrors = error.response.data.errors;
                for (const key in responseErrors) {
                    errors.value[key] = responseErrors[key][0];
                }
            }
        }
    }

    const importContact = async (data) => {
        try {
            return await axios.post(baseApiUrl + '/import', data);
        } catch (error) {

        }
    }

    const updateContact = async (id, data) => {
        for (const key in errors.value) {
            errors.value[key] = '';
        }
        try {
            await axios.post(baseApiUrl + '/' + id, data);
            await router.push({ name: 'contacts.index' });
        } catch (error) {
            if (error.response.status === 422) {
                const responseErrors = error.response.data.errors;
                for (const key in responseErrors) {
                    errors.value[key] = responseErrors[key][0];
                }
            }
        }
    }

    const deleteContact = async (id) => {
        await axios.delete(baseApiUrl + '/' + id);
        await router.push({ name: 'contacts.index' });
    }
    return {
        contact,
        contacts,
        errors,
        getContact,
        getContacts,
        storeContact,
        pagination,
        deleteContact,
        updateContact,
        importContact
    }
}