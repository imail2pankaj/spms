<template>
  <div v-if="activeTask.title"
    :class="`justify-center absolute top align-middle ${ currentRoute === 'project.task.edit' ? 'z-10' : 'z-30' } text-center left-1/2 w-2/3 max-w-sm`"
    style="transform: translate(-50%, 0%)">
    <div class=" flex flex-column justify-between py-1 px-2 rounded-b-lg bg-white shadow-lg text-xs border-b border-l border-r border-blue-500 min-w-lg text-left">
      <div>
        {{ activeTask.title }} <label class=" inline-block rounded-xl text-white px-0.5 bg-yellow-400">{{activeTask.total_time_converted}}</label>
      </div>
      <div>
        <button title="Pause Task" @click="startTaskStatus(activeTask.id, (activeTask.task_status == 'Active' ? 'Paused' :'Active'))" class="w-4 p-1 transform hover:text-purple-500 hover:scale-110 focus:outline-none focus:ring focus:border-blue-300">
          <pause-icon />
        </button>
        <button title="Stop Task" class="w-4 p-1 transform hover:text-purple-500 hover:scale-110 focus:outline-none focus:ring focus:border-blue-300">
          <stop-icon />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import useProjects from "../../composables/project";
import {strtotime} from '../../utils';
export default {
  props: {
    active_task: { required: true, type: Object },
  },
  setup(props) {
    const { active_task } = props;
    const { startTask } = useProjects();
    const store = useStore();
    const activeTask = computed(() => store.state.currentTask);

    const currentRoute = computed(() => {
      return useRoute().name;
    });
    onMounted(() => {
      store.commit('setCurrentTask', active_task);
    });
    const startTaskStatus = async (task_id, status) => {
      const initialization = { id: 0, project_id: 0, user_id: 0, title: null, total_time: 0, task_status: '', time: strtotime()};
      const response = await startTask(task_id, status);
      if (response.data.status === "Started" || response.data.status === "Active") {
        store.commit("setCurrentTask", response.data);
      } else if (response.status === "Paused") {
        store.commit("setCurrentTask", initialization);
      } else {
        store.commit("setCurrentTask", initialization);
      }
    };
    return {
      active_task,
      activeTask,
      currentRoute,
      startTaskStatus,
    };
  },
};
</script>