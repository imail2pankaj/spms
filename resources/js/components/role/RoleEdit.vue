<template>
  <div class="flex justify-between mb-2">
    <h1 class="text-2xl font-bold">
      Role Edit
    </h1>
    <router-link :to="{name:'role.index'}" class="p-2 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-sm rounded-lg focus:border-4 border-indigo-300">
      List
    </router-link>
  </div>
  <div class="bg-white overflow-hidden shadow-sm rounded-lg">
    <div class="p-6 bg-white border-b border-gray-200">
      <form @submit.prevent="saveRole">
        <div class="mb-6">
            <label for="name" class="text-sm font-medium text-gray-900 block mb-2">Name</label>
            <input type="text" v-model="role.name" id="name" name="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Name" required >
            <span v-if="errors.name">{{errors.name}}</span>
        </div>
        <div class="mb-6">
            <label for="permisions" class="text-sm font-medium text-gray-900 block mb-2">Permissions</label>
            <div v-for="item in permissionsOptions" :key="item.value">
              <label class="inline-flex items-center">
                <input v-model="role.permission" type="checkbox" :value="item.id" class="form-checkbox"/>
                <span class="ml-2">{{item.name}}</span>
              </label>
            </div>
        </div>
        <button type="submit" class="p-2 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-sm rounded-lg focus:border-4 border-indigo-300">
          Save
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import useRoles from "../../composables/role";
export default {
  props: {
    id: { required: true, type: String }
  },
  setup(props) {
    const { id } = props;
    const {errors, role, getRole, permissionsOptions, getPermissionsDropdown, updateRole} = useRoles();
    onMounted(async () => {
      await getPermissionsDropdown();
      getRole(id);
    });

    const saveRole = async (e) => {
      e.preventDefault();
      role.value['_method'] = 'PATCH';
      await updateRole(id, {...role.value});
    }

    return {
      errors,
      role,
      saveRole,
      permissionsOptions
    }
  },
}
</script>