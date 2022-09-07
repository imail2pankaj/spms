import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default function useUsers() {
    const baseApiUrl = '/api/invoices';
    const router = useRouter();
    const invoices = ref([]);
    const customers = ref([]);
    const pagination = ref({
        current_page: 1,
        total: 0,
        per_page: 5,
        last_page: 0,
        links: [],
    });
    const invoice = ref({
        customer_id: '',
        invoice_date: '',
        invoice_number: '',
        tax_rate: 0,
        tax_amount: 0,
        subtotal: 0,
        total_amount: 0,
        notes: "",
        payment: "Pending",
        payment_date: "",
        invoice_items: [],
        _method: 'post',
    });
    const errors = ref({
        customer_id: '',
        invoice_date: '',
        invoice_number: '',
        tax_rate: "",
        subtotal: '',
        tax_amount: '',
        total_amount: '',
        notes: "",
        payment: "",
        payment_date: "",
    });

    const getInvoices = async (data) => {
        let parameters = "?";
        for (const key in data) {
            parameters += key + "=" + data[key] + "&";
        }
        const response = await axios.get(baseApiUrl + parameters);
        invoices.value = response.data.data;
        for (const key in pagination.value) {
            pagination.value[key] = response.data[key];
        }
    }

    const getInvoice = async (id) => {
        const response = await axios.get(baseApiUrl + '/' + id);
        invoice.value = response.data;
    }

    const getInvoiceNewInvoiceNumber = async () => {
        const response = await axios.get(baseApiUrl + '/new/invoice/number');
        return response.data;
    }

    const getCustomerDetails = async (user_id) => {
        const response = await axios.get(baseApiUrl + '/customer/' + user_id);
        return response.data;
    }

    const storeInvoice = async (data) => {
        for (const key in errors.value) {
            errors.value[key] = '';
        }
        try {
            await axios.post(baseApiUrl, data);
            await router.push({ name: 'invoice.index' });
        } catch (error) {
            if (error.response.status === 422) {
                const responseErrors = error.response.data.errors;
                for (const key in responseErrors) {
                    errors.value[key] = responseErrors[key][0];
                }
            }
        }
    }

    const updateInvoice = async (id, data) => {
        for (const key in errors.value) {
            errors.value[key] = '';
        }
        try {
            await axios.post(baseApiUrl + '/' + id, data);
            await router.push({ name: 'invoice.index' });
        } catch (error) {
            if (error.response.status === 422) {
                const responseErrors = error.response.data.errors;
                for (const key in responseErrors) {
                    errors.value[key] = responseErrors[key][0];
                }
            }
        }
    }

    const deleteInvoice = async (id) => {
        await axios.delete(baseApiUrl + '/' + id);
        await router.push({ name: 'invoice.index' });
    }


    const getUsersDropdown = async() => {
        const response = await axios.get('/api/project/users');
        customers.value = response.data['customer'];
    }

    return {
        invoice,
        invoices,
        customers,
        errors,
        getInvoice,
        getInvoices,
        storeInvoice,
        getInvoiceNewInvoiceNumber,
        pagination,
        deleteInvoice,
        updateInvoice,
        getUsersDropdown,
        getCustomerDetails
    }
}