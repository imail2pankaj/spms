<template>
  <div class="flex justify-between mb-2">
    <h1 class="text-2xl font-bold">
      Holidays
    </h1>
    <router-link :to="{name:'holiday.create'}" class="link-blue"> Add </router-link>

  </div>

  <div class="bg-white overflow-hidden shadow-sm rounded-lg">
    <div class="p-6 bg-white border-b border-gray-200">
      <app-datatables :pagination="pagination" @changePageEvent="searchData">
        <table class="min-w-max w-full table-auto">
          <thead>
            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th class="py-2 px-2 text-left">Title</th>
              <th class="py-2 px-2 text-left">Date</th>
              <th class="py-2 px-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody class="text-gray-900 text-sm font-light">
            <template v-for="(item, index) in holidays" :key="index">
              <tr class="border-b border-gray-200 hover:bg-gray-100">
                <td class="py-2 px-2 text-left whitespace-nowrap">
                  {{item.title}}
                </td>
                <td class="py-2 px-2 text-left whitespace-nowrap">
                  {{item.holiday_date}}
                </td>
                <td class="py-2 px-2 text-center whitespace-nowrap">
                  <div class="flex item-center justify-center">
                    <!-- <router-link to="" class="no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <view-icon />
                    </router-link> -->
                    <router-link :to="{name:'holiday.edit', params: {id:item.id}}"  class="no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
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
  <app-confirm-delete v-show="showModal" modalHeadline="Delete Holiday?" deleteMessage="Are you sure?" @deleteRecordEvent="destroyHoliday(item_id)" @close="togglePopup" ></app-confirm-delete>
</template>


<script>
import { onMounted, ref } from 'vue';
import useHolidays from "../../composables/holiday";

export default {
  setup(props) {
    const { holidays, pagination, getHolidays, deleteHoliday} = useHolidays();
    const showModal = ref(false);
    const item_id = ref(0);
    const emitPaginationLocal = ref({});

    onMounted(async () => {
      // await getUsers();
    })

    const searchData = async (emitPagination) => {
      emitPaginationLocal.value = emitPaginationLocal;
      await getHolidays(emitPagination);
    }
    const destroyHoliday = async (itemId) => {
      await deleteHoliday(itemId);
      await getHolidays(emitPaginationLocal.value);
      togglePopup();
    }
    const togglePopup = () => {
      showModal.value = !showModal.value;
    }
    return {
      holidays,
      item_id,
      showModal,
      pagination,
      searchData,
      togglePopup,
      destroyHoliday
    }
  },
}
</script>