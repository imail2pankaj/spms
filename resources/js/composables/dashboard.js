import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default function useDashboard() {
    const baseApiUrl = '/api/dashboard';

    const getStatistics = async(data) => {
        const response = await axios.get(baseApiUrl);
        return response.data;
    }

    const getStatistic = async(id) => {
        const response = await axios.get(baseApiUrl + '/' + id);
        return response.data;
    }

    return {
        getStatistic,
        getStatistics,
    }
}