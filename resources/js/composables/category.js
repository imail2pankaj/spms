import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default function useCategories() {
    const router = useRouter();
    const category = ref({
        name: '',
        description: '',
        short_description: '',
        parent_id: 0,
        image: '',
        status: 0,
    });
    const categories = ref([]);
    const categoryOptions = ref([]);
    const errors = ref({
        name: '',
        description: '',
        short_description: '',
        parent_id: '',
        image: '',
        status: '',
    });

    const getCategories = async() => {
        const response = await axios.get('/api/categories');
        categories.value = response.data;
    }

    const getCategory = async(id) => {
        const response = await axios.get('/api/categories/' + id);
        category.value = response.data;
    }
    const getCategoriesDropdown = async() => {
        const response = await axios.get('/api/categories');
        categoryOptions.value = response.data.map((c) => {
            return {
                name: c.name,
                value: c.id,
            }
        });
    }

    const storeCategory = async(data) => {
        for (const key in errors.value) {
            errors.value[key] = '';
        }
        try {
            await axios.post('/api/categories', data);
            await router.push({ name: 'category.index' });
        } catch (error) {
            if (error.response.code === 422) {
                const responseErrors = error.response.data.errors;
                for (const key in responseErrors) {
                    errors.value[key] = responseErrors[key][0];
                }
            }
        }
    }

    const updateCategory = async(id, data) => {
        for (const key in errors.value) {
            errors.value[key] = '';
        }
        try {
            await axios.post('/api/categories/' + id, data);
            await router.push({ name: 'category.index' });
        } catch (error) {
            if (error.response.code === 422) {
                const responseErrors = error.response.data.errors;
                for (const key in responseErrors) {
                    errors.value[key] = responseErrors[key][0];
                }
            }
        }
    }
    const deleteCategory = async(id) => {
        await axios.delete('/api/categories/' + id);
    }
    return {
        errors,
        category,
        categories,
        getCategory,
        getCategories,
        storeCategory,
        deleteCategory,
        updateCategory,
        categoryOptions,
        getCategoriesDropdown
    }
}