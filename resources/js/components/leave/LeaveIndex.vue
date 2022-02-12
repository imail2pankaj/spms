<template>
  <div class="flex justify-between mb-2">
    <h1 class="text-2xl font-bold">
      Leaves
    </h1>
    <router-link :to="{name:'leave.create'}" class="link-blue"> Add </router-link>

  </div>

  <div class="bg-white overflow-hidden shadow-sm rounded-lg">
    <div class="p-6 bg-white border-b border-gray-200">
      <app-datatables :pagination="pagination" @changePageEvent="searchData">
        <table class="min-w-max w-full table-auto">
          <thead>
            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th v-if="managementRoles().includes(user.role)" class="py-2 px-2 text-left">Employee</th>
              <th class="py-2 px-2 text-left">Reason</th>
              <th class="py-2 px-2 text-left">Leave Date</th>
              <th class="py-2 px-2 text-left">Type</th>
              <th class="py-2 px-2 text-left">Status</th>
              <th class="py-2 px-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody class="text-gray-900 text-sm font-light">
            <template v-for="(item, index) in leaves" :key="index">
              <tr class="border-b border-gray-200 hover:bg-gray-100">
                <td v-if="managementRoles().includes(user.role)" class="py-2 px-2 text-left whitespace-nowrap">
                  {{item.user.first_name}} {{item.user.last_name}}
                </td>
                <td class="py-2 px-2 text-left whitespace-nowrap">
                  {{item.description}}
                </td>
                <td class="py-2 px-2 text-left whitespace-nowrap">
                  {{item.start_date}} to {{item.end_date}}
                </td>
                <td class="py-2 px-2 text-left whitespace-nowrap">
                  {{item.type}} Day
                </td>
                <td class="py-2 px-2 text-left whitespace-nowrap">
                  {{item.status}}
                </td>
                <td class="py-2 px-2 text-center whitespace-nowrap">
                  <div class="flex item-center justify-center">
                    <!-- <router-link to="" class="no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <view-icon />
                    </router-link> -->
                    <router-link :to="{name:'leave.edit', params: {id:item.id}}"  class="no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
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
      </app-datatables>
    </div>
  </div>
  <app-confirm-delete v-show="showModal" modalHeadline="Delete Leave?" deleteMessage="Are you sure?" @deleteRecordEvent="destroyLeave(item_id)" @close="togglePopup" ></app-confirm-delete>
</template>


<script>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import useLeaves from "../../composables/leave";
import {managementRoles} from "../../utils";

export default {
  setup(props) {
    const store = useStore();
    const user = computed(() => store.state.user);
    const { leaves, pagination, getLeaves, deleteLeave} = useLeaves();
    const showModal = ref(false);
    const item_id = ref(0);
    const emitPaginationLocal = ref({});

    const searchData = async (emitPagination) => {
      emitPaginationLocal.value = emitPaginationLocal;
      await getLeaves(emitPagination);
    }
    const destroyLeave = async (itemId) => {
      await deleteLeave(itemId);
      await getLeaves(emitPaginationLocal.value);
      togglePopup();
    }
    const togglePopup = () => {
      showModal.value = !showModal.value;
    }
    return {
      user,
      leaves,
      item_id,
      showModal,
      pagination,
      searchData,
      togglePopup,
      destroyLeave,
      managementRoles
    }
  },
}
</script>