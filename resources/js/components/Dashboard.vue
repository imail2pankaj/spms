<template>
  <h1 class="text-2xl font-bold mb-2">Dashboard</h1>
  <div class="bg-white overflow-hidden shadow-sm rounded-lg">
    <div class="p-6 bg-white border-b border-gray-200">
      {{ user.events }}
      <FullCalendar :options="calendarOptions"></FullCalendar>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

export default {
  components: {
    FullCalendar,
  },
  setup(props, {}) {
    const user = ref({});

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
            axios.get("/api/user/").then((response) => {
              callback(response.data.events);
            });
          },
        },
      ],
    };

    function getUser() {
      axios
        .get("/api/user/")
        .then((response) => {
          user.value = response.data;
        })
        .catch((error) => (user.value = error));
    }

    onMounted(() => {
      getUser();
    });

    return {
      user,
      calendarOptions,
    };
  },
};
</script>
