<template>
  <div v-if="active_task"
    :class="`justify-center absolute top align-middle ${ currentRoute === 'project.task.edit' ? 'z-10' : 'z-30' } text-center left-1/2 w-2/3 max-w-sm`"
    style="transform: translate(-50%, 0%)">
    <div class=" flex flex-column justify-between py-1 px-2 rounded-b-lg bg-white shadow-lg text-xs border-b border-l border-r border-blue-500 min-w-lg text-left">
      <div>
        {{ active_task.title }} <label class=" inline-block rounded-xl text-white px-0.5 bg-yellow-400">{{active_task.total_time}}</label>
      </div>
      <div>
        <button title="Pause Task" class="w-4 p-1 transform hover:text-purple-500 hover:scale-110 focus:outline-none focus:ring focus:border-blue-300">
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
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
  props: {
    active_task: { required: true, type: Object },
  },
  setup(props) {
    const { active_task } = props;

    const currentRoute = computed(() => {
      return useRoute().name;
    });

    return {
      active_task,
      currentRoute,
    };
  },
};
</script>