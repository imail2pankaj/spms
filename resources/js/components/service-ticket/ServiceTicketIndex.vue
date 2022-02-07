<template>
  <div class="flex justify-between mb-2">
    <h1 class="text-2xl font-bold">
      Service Tickets
    </h1>
    <router-link :to="{name:'service-ticket.create'}" class="link-blue">
      Add
    </router-link>

  </div>
    <div class="bg-white overflow-hidden shadow-sm rounded-lg">
    <div class="p-6 bg-white border-b border-gray-200">
      <table class="min-w-max w-full table-auto">
        <thead>
          <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th class="py-2 px-2 text-left">Title</th>
            <th class="py-2 px-2 text-left">Employee</th>
            <th class="py-2 px-2 text-center">Type</th>
            <th class="py-2 px-2 text-center">Priority</th>
            <th class="py-2 px-2 text-center">Status</th>
            <th class="py-2 px-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody class="text-gray-900 text-sm font-light">
          <template v-for="(item, index) in serviceTickets" :key="index">
            <tr class="border-b border-gray-200 hover:bg-gray-100">
              <td class="py-2 px-2 text-left whitespace-nowrap">{{ item.title }}</td>
              <td class="py-2 px-2 text-left whitespace-nowrap">{{ item.user.first_name }} {{ item.user.last_name }}</td>
              <td class="py-2 px-2 text-center whitespace-nowrap">{{ item.type}}</td>
              <td class="py-2 px-2 text-center whitespace-nowrap">{{ item.priority}}</td>
              <td class="py-2 px-2 text-center whitespace-nowrap">{{ item.status}}</td>
              <td class="py-2 px-2 text-center whitespace-nowrap">
                <div class="flex item-center justify-center">
                  <!-- <router-link to="" class="no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    <view-icon />
                  </router-link> -->
                  <router-link :to="{name:'service-ticket.edit', params: {id:item.id}}"  class="no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    <edit-icon />
                  </router-link>
                  <button type="button" @click="item_id = item.id; togglePopup();" class="no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    <delete-icon />
                  </button>
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>

    </div>
  </div>
  <app-confirm-delete v-show="showModal" modalHeadline="Delete Service Ticket?" deleteMessage="Are you sure?" @deleteRecordEvent="destroyServiceTicket(item_id)" @close="togglePopup" ></app-confirm-delete>
</template>

<script>
import { computed, onMounted, ref, watch } from 'vue';
import useServiceTicket from '../../composables/service-ticket';

export default {
    setup(props) {
        const showModal = ref(false);
        const item_id = ref(0);

        const { serviceTickets, getServiceTickets, deleteServiceTicket} = useServiceTicket();

        onMounted(getServiceTickets);

        const togglePopup = async () => {
          showModal.value = !showModal.value;
        }
        const destroyServiceTicket = async (id) => {
          await deleteServiceTicket(id);
          togglePopup()
          await getServiceTickets();
        }

        return {
            item_id,
            showModal,
            serviceTickets,
            destroyServiceTicket,
            togglePopup,
            deleteServiceTicket
        }
    },
}
</script>