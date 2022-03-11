<template>
  <h1 class="text-2xl font-bold mb-2">Dashboard</h1>
  <div class="grid gap-6 mb-4 md:grid-cols-4 xl:grid-cols-4">
    <div class="min-w-0 rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800" >
      <div class="p-4 flex items-center">
        <div class="p-3 rounded-full mr-2" >
          <i class="fa fa-home fa-2x"></i>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            Leaves Applied
          </p>
          <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {{statistics.leavesApplied}}
          </p>
        </div>
      </div>
    </div>
    <div class="min-w-0 rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 " >
      <div class="p-4 flex items-center">
        <div class="p-3 rounded-full mr-2" >
          <i class="fa fa-tasks fa-2x"></i>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            Active Tasks
          </p>
          <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {{statistics.activeTasks}}
          </p>
        </div>
      </div>
    </div>
    <div class="min-w-0 rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800" >
      <div class="p-4 flex items-center">
        <div class="p-3 rounded-full mr-2" >
          <i class="fa fa-sign-out-alt fa-2x"></i>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            Pending Leaves
          </p>
          <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {{statistics.pendingLeaves}} Day(s)
          </p>
        </div>
      </div>
    </div>
    <div class="min-w-0 rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800">
      <div class="p-4 flex items-center">
        <div class="p-3 rounded-full mr-2" >
          <i class="fa fa-ticket-alt fa-2x"></i>
        </div>
        <div>
          <p class="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            Open Service Tickets
          </p>
          <p class="text-lg font-semibold text-gray-700 dark:text-gray-200">
            {{statistics.openServiceTicket}}
          </p>
        </div>
      </div>
    </div>
  </div>
  <HoursChart/>
  <div class="bg-white overflow-hidden shadow-sm rounded-lg mt-2">
    <div class="grid grid-cols-4 gap-4">
      <div class="col-span-3">
          <div class="p-6 bg-white border-b border-gray-200">
            <div class="mb-2 text-xs">
              <span class="bg-yellow-200 rounded-md p-1 mr-1">Company Holiday</span>
              <span class="bg-yellow-400 rounded-md p-1 mr-1">Leave Applied</span>
              <span class="bg-yellow-500 rounded-md p-1 mr-1">Leave Approved</span>
              <span class="bg-blue-500 rounded-md p-1 mr-1">Birthday</span>
              <span class="bg-blue-200 rounded-md p-1 mr-1">Work Anniversary</span>
            </div>
            <FullCalendar :options="calendarOptions"></FullCalendar>
          </div>
      </div>
      <div class="pr-6 pt-6">
        <h3>My Active Tasks</h3>
        <TaskItem
              v-for="(task, index) in statistics.activeTasksList"
              :key="index"
              :task="task"
              :task_type="'Active'"
            ></TaskItem>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch, computed, provide } from "vue";
import { useStore } from "vuex";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import useDashboard from '../composables/dashboard';
import TaskItem from "../components/common/TaskItem.vue";
import HoursChart from "../components/common/HoursChart.vue";

export default {
  components: {
    FullCalendar,
    TaskItem,
    HoursChart
  },
  setup(props, {}) {
    const user = ref({id: 0, first_name: '',last_name :''});
    const store = useStore();
    const currentTask = computed(() => store.state.currentTask);
    const { getStatistics, getStatistic } = useDashboard();
    const statistics = ref({
      leavesApplied: 0,
      activeTasks:0,
      pendingLeaves: 0,
      openServiceTicket: 0,
      activeTasksList: [],
      chart:{}
    });

    provide('chart', computed(() => statistics.value.chart));

    const calendarOptions = {
      plugins: [dayGridPlugin, interactionPlugin],
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth",
      },
      initialView: "dayGridMonth",
      initialEvents: [],
      eventSources: [
        {
          events(start, callback) {
            axios.get("/api/user").then((response) => {
              callback(response.data.events);
            });
          },
        },
      ],
    };

    watch(
      () => currentTask.value.time,
      async newSlug => {
        if(newSlug){
          user.value = [];
          getUser();
        }
      }
    );

    function getUser() {
      axios
        .get("/api/user")
        .then(async (response) => {
          statistics.value = {};
          user.value = response.data;
          const data = await getStatistic(user.value.id);
          statistics.value = data;
        })
        .catch((error) => (user.value = error));
    }

    onMounted(async () => {
      getUser();
    });

    return {
      user,
      statistics,
      calendarOptions,
    };
  },
};
</script>

