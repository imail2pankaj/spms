import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { strtotime } from '../utils';

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
        id: 0,
        title: '',
        description: '',
        start_date: '',
        end_date: '',
        approx_hours: '',
        internal_non_project: '',
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
        note: { description: '' },
        attachments: []
    });
    const task = ref({});
    const errors = ref({
        title: '',
        description: '',
        start_date: '',
        end_date: '',
        approx_hours: '',
        internal_non_project: '',
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
    const tasks = ref({ created: [], active: [], completed: [] });

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
    }

    const getProjectBySlug = async(slug, page) => {
        const response = await axios.get('/api/projects/' + slug + '/' + page);
        project.value = response.data;
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

    const getTask = async(id) => {
        const response = await axios.get('/api/tasks/' + id);
        task.value = response.data;
    }

    const storeTask = async(id, data) => {
        for (const key in errors.value) {
            errors.value[key] = '';
        }
        try {
            await axios.post('/api/projects/' + id + '/store-task', data);
        } catch (error) {
            if (error.response.status === 422) {
                const responseErrors = error.response.data.errors;
                for (const key in responseErrors) {
                    errors.value[key] = responseErrors[key][0];
                }
            }
        }
    }

    const updateTask = async(id, data) => {
        for (const key in errors.value) {
            errors.value[key] = '';
        }
        try {
            await axios.post('/api/tasks/' + id, data);
        } catch (error) {
            if (error.response.status === 422) {
                const responseErrors = error.response.data.errors;
                for (const key in responseErrors) {
                    errors.value[key] = responseErrors[key][0];
                }
            }
        }
    }

    const getAssignedToUsers = async(id) => {
        const response = await axios.get('/api/tasks/assigned-to-users');
        return response.data;
    }

    const getTasks = async() => {
        const tasks = {
            time: strtotime(),
            active: [],
            completed: [],
            created: []
        }
        const response = await axios.get('/api/tasks/' + project.value.id + '/project');
        tasks.active = response.data.active.map((active) => {
            return active;
        });
        tasks.created = response.data.created.map((created) => {
            return created;
        });
        tasks.completed = response.data.completed.map((completed) => {
            return completed;
        });
        return tasks;
    }

    const startTask = async(task_id, status) => {
        const data = {
            task_id: task_id,
            status: status,
            _method: 'put'
        }
        return await axios.put('/api/tasks/' + task_id + '/update-status', data);
    }

    const submitProjectStatus = async(id, data) => {
        // for (const key in errors.value) {
        //     errors.value[key] = '';
        // }
        try {
            await axios.post('/api/project/' + id + '/update-status', data);
        } catch (error) {
            // if (error.response.status === 422) {
            //     const responseErrors = error.response.data.errors;
            //     for (const key in responseErrors) {
            //         errors.value[key] = responseErrors[key][0];
            //     }
            // }
        }
    }

    const getProjectUpdates = async() => {
        const response = await axios.get('/api/project/' + project.value.id + '/update-status');
        return response.data;
    }

    const submitProjectMilestone = async(id, data) => {
        // for (const key in errors.value) {
        //     errors.value[key] = '';
        // }
        try {
            await axios.post('/api/project/' + id + '/milestone', data);
        } catch (error) {
            // if (error.response.status === 422) {
            //     const responseErrors = error.response.data.errors;
            //     for (const key in responseErrors) {
            //         errors.value[key] = responseErrors[key][0];
            //     }
            // }
        }
    }


    const getProjectMilestones = async() => {
        const response = await axios.get('/api/project/' + project.value.id + '/milestone');
        return response.data;
    }


    const deleteMilestone = async(id, milestone_id) => {
        await axios.delete('/api/project/' + id + '/milestone/' + milestone_id);
    }


    const submitProjectNote = async(id, data) => {
        // for (const key in errors.value) {
        //     errors.value[key] = '';
        // }
        try {
            await axios.post('/api/project/' + id + '/notes', data);
        } catch (error) {
            // if (error.response.status === 422) {
            //     const responseErrors = error.response.data.errors;
            //     for (const key in responseErrors) {
            //         errors.value[key] = responseErrors[key][0];
            //     }
            // }
        }
    }

    const submitProjectAttachment = async(id, data) => {
        try {
            await axios.post('/api/project/' + id + '/attachment', data);
        } catch (error) {

        }
    }


    const deleteAttachment = async(id, attachment_id) => {
        await axios.delete('/api/project/' + id + '/attachment/' + attachment_id);
    }
    return {
        task,
        project,
        projects,
        errors,
        startTask,
        getTasks,
        getProject,
        getProjects,
        storeProject,
        getProjectBySlug,
        pagination,
        deleteProject,
        updateProject,
        usersOptions,
        getUsersDropdown,
        getAssignedToUsers,
        getTask,
        storeTask,
        updateTask,
        submitProjectStatus,
        getProjectUpdates,
        submitProjectMilestone,
        getProjectMilestones,
        deleteMilestone,
        submitProjectNote,
        submitProjectAttachment,
        deleteAttachment
    }
}