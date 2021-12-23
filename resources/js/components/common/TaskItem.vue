<template>
  <div class="p-1 text-sm flex hover:bg-gray-100 cursor-pointer border border-gray-200 rounded-md mt-1 ">
    <span class="flex-1" @click="openModal(task.project.slug, task.id)">
      {{ task.title }}
    </span>
    <span>
      <button title="Start Task" v-if="task_type === 'Created'" @click="startTaskStatus(task.id, 'Started')" class="w-4 p-1 transform hover:text-purple-500 hover:scale-110 focus:outline-none focus:ring focus:border-blue-300">
        <play-icon />
      </button>
      <button v-if="user.id === task.user_id && task_type === 'Active'" @click="startTaskStatus(task.id, (task.task_status == 'Active' ? 'Paused' :'Active'))" class="w-4 p-1 transform hover:text-purple-500 hover:scale-110 focus:outline-none focus:ring focus:border-blue-300">
        <play-icon v-if="task.task_status == 'Paused'" />
        <pause-icon v-if="task.task_status == 'Active' || task.task_status == 'Started'" />
      </button>
      <button title="Delete Task" @click="deleteTask(task.id)" class="w-5 p-1 transform hover:text-purple-500 hover:scale-110 focus:outline-none focus:ring focus:border-blue-300">
        <delete-icon />
      </button>
    </span>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from "vuex";
import useProjects from '../../composables/project';
export default {
    props :{
        task: {required: true, type:Object},
        task_type: {required:true, type: String}
    },
    setup(props) {
        const store = useStore();
        const user = computed(() => store.state.user);
        const router = useRouter();
        const { startTask } = useProjects();
        const {task, task_type} = props;

        const openModal = (slug, id) => {
          const data = { name: 'project.task.edit', params: { slug:slug, id: id } };
          router.push(data);
        }
        const startTaskStatus = async (task_id, status) => {
          const initialization = { id: 0, project_id: 0, user_id: 0, title: null, total_time: 0, task_status: '' };
          const response = await startTask(task_id, status);
          if(response.data.task_status === 'Started' || response.data.task_status === 'Active') {
            store.commit('setCurrentTask', response.data);
          } else if(response.data.task_status === 'Paused') {
            store.commit('setCurrentTask', initialization);
          }
        }
        const deleteTask = () => {

        }
        return {
            task,
            user,
            task_type,
            deleteTask,
            startTaskStatus,
            openModal
        }
    },
}
</script>