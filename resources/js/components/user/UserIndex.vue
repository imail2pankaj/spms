<template>
  <div class="flex justify-between mb-2">
    <h1 class="text-2xl font-bold">
      Users
    </h1>
    <router-link :to="{name:'user.create'}" class="p-2 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-sm rounded-lg focus:border-4 border-indigo-300">
          Add
    </router-link>
    
  </div>
  <div class="bg-white overflow-hidden shadow-sm rounded-lg">
    <div class="p-6 bg-white border-b border-gray-200">
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
                  <Status :status="item.user_status" />
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

    </div>
  </div>
  <confirm-delete v-show="showModal" modalHeadline="Delete User?" deleteMessage="Are you sure?" @deleteRecordEvent="destroyUser(item_id)" @close="togglePopup" ></confirm-delete>
</template>


<script>
import { onMounted, ref } from 'vue';
import Status from '../common/Status';
import ConfirmDelete from '../common/ConfirmDelete.vue';
import useUsers from "../../composables/user";


export default {
  components: {
    Status,
    ConfirmDelete
  },
  setup(props) {
    const { users, getUsers, deleteUser} = useUsers();
    const showModal = ref(false);
    const item_id = ref(0);

    onMounted(async () => {
      await getUsers();
    })

    const destroyUser = async (itemId) => {
      await deleteUser(itemId);
      togglePopup();
    }
    const togglePopup = () => {
      showModal.value = !showModal.value;
    }
    return {
      item_id,
      users,
      showModal,
      togglePopup,
      destroyUser
    }
  },
}
</script>