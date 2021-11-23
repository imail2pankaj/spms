import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default function useProducts() {
    const router = useRouter();
    const errors = ref({
        name: '',
        description: '',
        short_description: '',
        image: '',
        regular_price: "",
        sale_price: "",
        category_id: "",
        status: "",
    });
    const product = ref({
        name: '',
        description: '',
        short_description: '',
        image: '',
        regular_price: 0.00,
        sale_price: 0.00,
        category_id: 0,
        status: 0,
    });
    const products = ref([]);
    const categoryOptions = ref([]);

    const getProducts = async() => {
        const response = await axios.get('/api/products');
        products.value = response.data;
    }

    const getProduct = async(id) => {
        const response = await axios.get('/api/products/' + id);
        product.value = response.data;
    }

    const getCategoryOptions = async() => {
        const response = await axios.get('/api/categories');
        categoryOptions.value = response.data;
    }

    const storeProduct = async(data) => {
        for (const key in errors.value) {
            errors.value[key] = "";
        }
        try {
            await axios.post('/api/products', data);
            await router.push({ name: 'product.index' });
        } catch (error) {
            if (error.response.code === 422) {
                const errorResponse = error.response.data.errors;
                for (const key in errorResponse) {
                    errors.value[key] = errorResponse[key][0];
                }
            }

        }
    }

    const updateProduct = async(id, data) => {
        for (const key in errors.value) {
            errors.value[key] = "";
        }
        try {
            await axios.post('/api/products/' + id, data);
            await router.push({ name: "product.index" })
        } catch (error) {
            if (error.response.code === 422) {
                const errorResponse = error.response.data.errors;
                for (const key in errorResponse) {
                    errors.value[key] = errorResponse[key][0];
                }
            }

        }
    }

    const deleteProduct = async(id) => {
        await axios.delete('/api/products/' + id);
        await getProducts();
    }

    return {
        errors,
        product,
        products,
        getProduct,
        getProducts,
        storeProduct,
        deleteProduct,
        updateProduct,
        categoryOptions,
        getCategoryOptions
    }
}