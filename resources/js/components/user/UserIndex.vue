<template>
  <div class="flex justify-between mb-2">
    <h1 class="text-2xl font-bold">
      Users
    </h1>
    <router-link :to="{name:'user.create'}" class="link-blue"> Add </router-link>

  </div>

  <div class="bg-white overflow-hidden shadow-sm rounded-lg">

    <div class="p-6 bg-white border-b border-gray-200">
      <div class="mb-4 flex sm:flex-row flex-col justify-end">
        <div class="flex flex-row mb-1 sm:mb-0">
            <div class="relative">
                <select @change="searchData" v-model="searchPanelForm.pagination"
                    class="h-full rounded-l border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                    <option value="1">1</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </select>
            </div>
            <div class="relative">
                <select @change="searchData" v-model="searchPanelForm.status" class="h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                    <option value="-1">All</option>
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                </select>
            </div>
        </div>
        <div class="block relative">
            <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                    <path
                        d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                    </path>
                </svg>
            </span>
            <input v-model="searchPanelForm.keyword" @keyup="searchData" placeholder="Search"
                class="rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
        </div>
    </div>
      <table class="min-w-max w-full table-auto">
        <thead>
          <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th class="py-2 px-2 text-left">Name</th>
            <th class="py-2 px-2 text-left">Role</th>
            <th class="py-2 px-2 text-left">Email</th>
            <th class="py-2 px-2 text-center">Status</th>
            <th class="py-2 px-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody class="text-gray-900 text-sm font-light">
          <template v-for="(item, index) in users" :key="index">
            <tr class="border-b border-gray-200 hover:bg-gray-100">
              <td class="py-2 px-2 text-left whitespace-nowrap">
                {{item.first_name + " " + item.last_name}}
              </td>
              <td class="py-2 px-2 text-left whitespace-nowrap">
                <template v-for="(role, index1) in item.roles" :key="index1">
                  {{role.name}}
                </template>
              </td>
              <td class="py-2 px-2 text-left whitespace-nowrap">{{ item.email }}</td>
              <td class="py-2 px-2 text-center whitespace-nowrap">
                  <app-status :status="item.user_status"></app-status>
                </td>
              <td class="py-2 px-2 text-center whitespace-nowrap">
                <div class="flex item-center justify-center">
                  <router-link to="" class="no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <img src="/images/view-icon.svg" alt="View" />
                  </router-link>
                  <router-link :to="{name:'user.edit', params: {id:item.id}}"  class="no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <img src="/images/edit-icon.svg" alt="Edit" />
                  </router-link>
                  <button type="button" @click="item_id = item.id; togglePopup();" class="no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <img src="/images/delete-icon.svg" alt="Delete" />
                  </button>
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
      <div
          class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
          <span class="text-xs xs:text-sm text-gray-900">
              Showing 1 to 4 of {{pagination.total}} Entries
          </span>
          <div class="inline-flex mt-2 xs:mt-0">
              <button
                  class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                  Prev
              </button>
              <button
                  class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                  Next
              </button>
          </div>
      </div>
    </div>
  </div>
  <app-confirm-delete v-show="showModal" modalHeadline="Delete User?" deleteMessage="Are you sure?" @deleteRecordEvent="destroyUser(item_id)" @close="togglePopup" ></app-confirm-delete>
</template>


<script>
import { onMounted, ref } from 'vue';
import useUsers from "../../composables/user";

export default {
  setup(props) {
    const { users, pagination, getUsers, deleteUser} = useUsers();
    const showModal = ref(false);
    const item_id = ref(0);

    const searchPanelForm = ref({
      pagination: 1,
      status: -1,
      keyword: '',
    })


    onMounted(async () => {
      await getUsers(searchPanelForm.value);
    })

    const searchData = async () => {
      await getUsers(searchPanelForm.value);
    }
    const destroyUser = async (itemId) => {
      await deleteUser(itemId);
      await getUsers();
      togglePopup();
    }
    const togglePopup = () => {
      showModal.value = !showModal.value;
    }
    return {
      users,
      item_id,
      showModal,
      pagination,
      searchData,
      togglePopup,
      destroyUser,
      searchPanelForm,
    }
  },
}
</script>