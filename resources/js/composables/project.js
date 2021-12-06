import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default function useProjects() {
    const router = useRouter();
    const projects = ref([]);
    const usersOptions = ref({
        pm: [],
        developer: [],
        designer: [],
        bde: [],
        qa: [],
        customer: [],
    });
    const pagination = ref({
        current_page: 1,
        total: 0,
        per_page: 5,
        last_page: 0,
        links: [],
    });
    const project = ref({
        title: '',
        description: '',
        start_date: '',
        end_date: '',
        approx_hours: '',
        project_type: '',
        project_cost: '',
        project_status: '',
        developer: [],
        qa: [],
        bde: [],
        pm: [],
        designer: [],
        customer: [],
        _method: 'post',
    });
    const errors = ref({
        title: '',
        description: '',
        start_date: '',
        end_date: '',
        approx_hours: '',
        project_type: '',
        project_cost: '',
        project_status: '',
        developer: "",
        qa: '',
        bde: '',
        pm: '',
        designer: '',
        customer: '',
    });

    const getProjects = async(data) => {
        let parameters = "?";
        for (const key in data) {
            parameters += key + "=" + data[key] + "&";
        }
        const response = await axios.get('/api/projects' + parameters);
        projects.value = response.data.data;
        for (const key in pagination.value) {
            pagination.value[key] = response.data[key];
        }
    }

    const getProject = async(id) => {
        const response = await axios.get('/api/projects/' + id);
        project.value = response.data;
        // project.value.roles = response.data.roles[0].id;
    }

    const getUsersDropdown = async() => {
        const response = await axios.get('/api/project/users');
        for (const key in usersOptions.value) {
            usersOptions.value[key] = response.data[key];
        }
    }

    const storeProject = async(data) => {
        for (const key in errors.value) {
            errors.value[key] = '';
        }
        try {
            await axios.post('/api/projects', data);
            await router.push({ name: 'project.index' });
        } catch (error) {
            if (error.response.status === 422) {
                const responseErrors = error.response.data.errors;
                for (const key in responseErrors) {
                    errors.value[key] = responseErrors[key][0];
                }
            }
        }
    }

    const updateProject = async(id, data) => {
        for (const key in errors.value) {
            errors.value[key] = '';
        }
        try {
            await axios.post('/api/projects/' + id, data);
            await router.push({ name: 'project.index' });
        } catch (error) {
            if (error.response.status === 422) {
                const responseErrors = error.response.data.errors;
                for (const key in responseErrors) {
                    errors.value[key] = responseErrors[key][0];
                }
            }
        }
    }

    const deleteProject = async(id) => {
        await axios.delete('/api/projects/' + id);
        await router.push({ name: 'project.index' });
    }
    return {
        project,
        projects,
        errors,
        getProject,
        getProjects,
        storeProject,
        pagination,
        deleteProject,
        updateProject,
        usersOptions,
        getUsersDropdown
    }
}