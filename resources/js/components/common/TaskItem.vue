<template>
  <div class="p-1 text-sm flex hover:bg-gray-100 cursor-pointer border border-gray-200 rounded-md mt-1 ">
    <span class="flex-1" @click="openModal(task.project.slug, task.id)">
      {{ task.title }}
    </span>
    <span>
      <button @click="startTaskStatus(task.id, (task.task_status == 'Created') ? 'Started' : (task.task_status == 'Active' ? 'Paused' :'Active'))" class="w-4 p-1 transform hover:text-purple-500 hover:scale-110 focus:outline-none focus:ring focus:border-blue-300">
        <play-icon v-if="task.task_status != 'Paused'" />
        <pause-icon v-if="task.task_status == 'Paused'" />
      </button>
      <button @click="deleteTask(task.id)" class="w-5 p-1 transform hover:text-purple-500 hover:scale-110 focus:outline-none focus:ring focus:border-blue-300">
        <delete-icon />
      </button>
    </span>
  </div>
</template>

<script>
import {useRouter} from 'vue-router';
import useProjects from '../../composables/project';
export default {
    props :{
        task: {required: true, type:Object}
    },
    setup(props) {
        const router = useRouter();
        const { startTask } = useProjects();
        const {task} = props;

        const openModal = (slug, id) => {
          const data = { name: 'project.task.edit', params: { slug:slug, id: id } };
          router.push(data);
        }
        const startTaskStatus = async (task_id, status) => {
          await startTask(task_id, status);
        }
        const deleteTask = () => {

        }
        return {
            task,
            deleteTask,
            startTaskStatus,
            openModal
        }
    },
}
</script>