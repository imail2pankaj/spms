<template>
  <div class="flex justify-between mb-2">
    <h1 class="text-2xl font-bold">Contacts</h1>
    <router-link :to="{ name: 'contacts.create' }" class="add link-blue">
      Add
    </router-link>
    <button @click="filePopup()" class="link-blue">Import</button>
  </div>
  <div class="bg-white overflow-hidden shadow-sm rounded-lg">
    <div class="p-6 bg-white border-b border-gray-200">
      <app-datatables :pagination="pagination" @changePageEvent="searchData">
        <table class="min-w-max w-full table-auto">
          <thead>
            <tr
              class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
            >
              <th
                v-if="managementRoles().includes(user.role)"
                class="py-2 px-2 text-left"
              ></th>
              <th class="py-2 px-2 text-left">Name</th>
              <th class="py-2 px-2 text-left">Email</th>
              <th class="py-2 px-2 text-left">Phone</th>
              <th class="py-2 px-2 text-left">City</th>
              <th class="py-2 px-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody class="text-gray-900 text-sm font-light">
            <template v-for="(item, index) in contacts" :key="index">
              <tr class="border-b border-gray-200 hover:bg-gray-100">
                <td
                  v-if="managementRoles().includes(user.role)"
                  class="py-2 px-2 text-left whitespace-nowrap"
                >
                  {{ item.user.name }}
                </td>
                <td class="py-2 px-2 text-left whitespace-nowrap">
                  {{ item.name }}
                </td>
                <td class="py-2 px-2 text-left whitespace-nowrap">
                  {{ item.email }}
                </td>
                <td class="py-2 px-2 text-left whitespace-nowrap">
                  {{ item.phone }}
                </td>

                <td class="py-2 px-2 text-left whitespace-nowrap">
                  {{ item.city }}
                </td>
                <td class="py-2 px-2 text-center whitespace-nowrap">
                  <div class="flex item-center justify-center">
                    <!-- <router-link to="" class="no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <view-icon />
                    </router-link> -->
                    <router-link
                      :to="{ name: 'contacts.edit', params: { id: item.id } }"
                      class="
                        no-underline
                        w-4
                        mr-2
                        transform
                        hover:text-purple-500 hover:scale-110
                      "
                    >
                      <edit-icon />
                    </router-link>
                    <button
                      type="button"
                      @click="
                        item_id = item.id;
                        togglePopup();
                      "
                      class="
                        no-underline
                        w-4
                        mr-2
                        transform
                        hover:text-purple-500 hover:scale-110
                      "
                    >
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
  <div>
    <ImportFile v-show="fileModal" @close="filePopup" @drop.prevent="drop" />
  </div>
  <app-confirm-delete
    v-show="showModal"
    modalHeadline="Delete Contact?"
    deleteMessage="Are you sure?"
    @deleteRecordEvent="destroyContact(item_id)"
    @close="togglePopup"
  ></app-confirm-delete>
</template>


<script>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import useContacts from "../../composables/contacts";
import { managementRoles } from "../../utils";
import ImportFile from "../common/ImportFile.vue";

export default {
  components: {
    ImportFile,
  },
  emits: ["close"],
  setup(props) {
    const store = useStore();
    const user = computed(() => store.state.user);
    const { contacts, pagination, getContacts, deleteContact } = useContacts();
    const showModal = ref(false);
    const fileModal = ref(false);
    const item_id = ref(0);
    const emitPaginationLocal = ref({});

    const searchData = async (emitPagination) => {
      emitPaginationLocal.value = emitPaginationLocal;
      await getContacts(emitPagination);
    };
    const destroyContact = async (itemId) => {
      togglePopup();
      await deleteContact(itemId);
      await getContacts({});
    };
    const togglePopup = () => {
      showModal.value = !showModal.value;
    };
   
    const importFile = async () => {
      filePopup();
    };
    const filePopup = async () => {
      await getContacts({});
      fileModal.value = !fileModal.value;
    };
    const close = () => {
      
      emit("close");
    };
    let dropzoneFile = ref("");
    const drop = (e) => {
      dropzoneFile.value = e.dataTransfer.files[0];
    };
    const selectedFile = () => {
      dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
    };

    return {
      user,
      contacts,
      item_id,
      showModal,
      fileModal,
      pagination,
      searchData,
      togglePopup,
      destroyContact,
      managementRoles,
      dropzoneFile,
      drop,
      close,
      selectedFile,
      filePopup,
      importFile,
      
    };
  },
};
</script>
<style scoped>
.add {
  margin-left: 800px;
}
</style>