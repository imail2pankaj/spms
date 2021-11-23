import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default function useCompanies() {
    const companies = ref([]);
    const company = ref({
        id: 0,
        name: '',
        email: '',
        address: '',
        website: '',
        status: 0
    });
    const router = useRouter();
    const errors = ref({
        name: '',
        email: '',
        address: '',
        website: ''
    })

    const getCompanies = async() => {
        let response = await axios.get('/api/companies');
        companies.value = response.data;
    }

    const getCompany = async(id) => {
        let response = await axios.get('/api/companies/' + id);
        company.value = response.data;
    }

    const storeCompany = async(data) => {
        errors.value['name'] = '';
        errors.value['email'] = '';
        errors.value['address'] = '';
        errors.value['website'] = '';
        try {
            await axios.post('/api/companies', data);
            await router.push({ name: 'company' });
        } catch (error) {
            if (error.response.status === 422) {
                const er = error.response.data.errors;
                for (const key in er) {
                    errors.value[key] = er[key][0];
                }
            }
        }
    }

    const saveCompany = async(id, data) => {
        errors.value['name'] = '';
        errors.value['email'] = '';
        errors.value['address'] = '';
        errors.value['website'] = '';
        try {
            await axios.post('/api/companies/' + id, data);
            await router.push({ name: 'company' });
        } catch (error) {
            if (error.response.status === 422) {
                const er = error.response.data.errors;
                for (const key in er) {
                    errors.value[key] = er[key][0];
                }
            }
        }
    }

    const deleteCompany = async(id) => {
        await axios.delete('/api/companies/' + id);
    }
    return {
        errors,
        company,
        companies,
        getCompany,
        getCompanies,
        storeCompany,
        saveCompany,
        deleteCompany
    }
}