<template>
  <div class="flex justify-between mb-2">
    <h1 class="text-2xl font-bold">
      Roles
    </h1>
    <router-link :to="{name:'role.create'}" class="link-blue">
          Add
    </router-link>
    
  </div>
    <div class="bg-white overflow-hidden shadow-sm rounded-lg">
    <div class="p-6 bg-white border-b border-gray-200">
      <table class="min-w-max w-full table-auto">
        <thead>
          <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th class="py-2 px-2 text-left">Name</th>
            <th class="py-2 px-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody class="text-gray-900 text-sm font-light">
          <template v-for="(item, index) in roles" :key="index">
            <tr class="border-b border-gray-200 hover:bg-gray-100">
              <td class="py-2 px-2 text-left whitespace-nowrap">{{ item.name }}</td>
              <td class="py-2 px-2 text-center whitespace-nowrap">
                <div class="flex item-center justify-center">
                  <router-link to="" class="no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <img src="/images/view-icon.svg" alt="View" />
                  </router-link>
                  <router-link :to="{name:'role.edit', params: {id:item.id}}"  class="no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
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
  <app-confirm-delete v-show="showModal" modalHeadline="Delete Role?" deleteMessage="Are you sure?" @deleteRecordEvent="destroyRole(item_id)" @close="togglePopup" ></app-confirm-delete>
</template>

<script>
import { onMounted, ref } from 'vue';
import useRoles from '../../composables/role';

export default {
    setup(props) {
        const showModal = ref(false);
        const item_id = ref(0);
        
        const { roles, getRoles, deleteRole} = useRoles();

        onMounted(getRoles);

        const togglePopup = async () => {
          showModal.value = !showModal.value;
        }
        const destroyRole = async (id) => {
          await deleteRole(id);
          togglePopup()
          await getRoles();
        }

        return {
            item_id,
            showModal,
            roles,
            destroyRole,
            togglePopup,
            deleteRole
        }        
    },
}
</script>