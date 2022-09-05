<template>
  <div class="flex justify-between mb-2">
    <h1 class="text-2xl font-bold">
      Invoices
    </h1>
    <router-link :to="{name:'invoice.create'}" class="link-blue"> Add </router-link>

  </div>

  <div class="bg-white overflow-hidden shadow-sm rounded-lg">
    <div class="p-6 bg-white border-b border-gray-200">
      <app-datatables :pagination="pagination" @changePageEvent="searchData">
        <table class="min-w-max w-full table-auto">
          <thead>
            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th class="py-2 px-2 text-left">Invoice No.</th>
              <th class="py-2 px-2 text-left">Customer</th>
              <th class="py-2 px-2 text-left">Invoice Date</th>
              <th class="py-2 px-2 text-left">Amount</th>
              <th class="py-2 px-2 text-left">Status</th>
              <th class="py-2 px-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody class="text-gray-900 text-sm font-light">
            <template v-for="(item, index) in invoices" :key="index">
              <tr class="border-b border-gray-200 hover:bg-gray-100">
                <td class="py-2 px-2 text-left whitespace-nowrap">
                  {{item.invoice_number}}
                </td>
                <td class="py-2 px-2 text-left whitespace-nowrap">
                  {{item.customer_id}}
                </td>
                <td class="py-2 px-2 text-left whitespace-nowrap">
                  {{item.invoice_date}}
                </td>
                <td class="py-2 px-2 text-left whitespace-nowrap">
                  {{item.total_amount}}
                </td>
                <td class="py-2 px-2 text-left whitespace-nowrap">
                  {{item.payment}}
                </td>
                <td class="py-2 px-2 text-center whitespace-nowrap">
                  <div class="flex item-center justify-center">
                    <router-link :to="{name:'invoice.edit', params: {id:item.id}}"  class="no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
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
  <app-confirm-delete v-show="showModal" modalHeadline="Delete Invoice?" deleteMessage="Are you sure?" @deleteRecordEvent="destroyInvoice(item_id)" @close="togglePopup" ></app-confirm-delete>
</template>


<script>
import { onMounted, ref } from 'vue';
import useInvoices from "../../composables/invoice";

export default {
  setup(props) {
    const { invoices, pagination, getInvoices, deleteInvoice} = useInvoices();
    const showModal = ref(false);
    const item_id = ref(0);
    const emitPaginationLocal = ref({});

    onMounted(async () => {
      // await getUsers();
    })

    const searchData = async (emitPagination) => {
      emitPaginationLocal.value = emitPaginationLocal;
      await getInvoices(emitPagination);
    }
    const destroyInvoice = async (itemId) => {
      await deleteInvoice(itemId);
      await getInvoices(emitPaginationLocal.value);
      togglePopup();
    }
    const togglePopup = () => {
      showModal.value = !showModal.value;
    }
    return {
      invoices,
      item_id,
      showModal,
      pagination,
      searchData,
      togglePopup,
      destroyInvoice
    }
  },
}
</script>