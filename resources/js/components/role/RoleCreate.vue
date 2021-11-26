<template>
  <div class="flex justify-between mb-2">
    <h1 class="text-2xl font-bold">
      Role Create
    </h1>
    <router-link :to="{name:'role.index'}" class="link-blue">
      List
    </router-link>
  </div>
  <div class="bg-white overflow-hidden shadow-sm rounded-lg">
    <div class="p-6 bg-white border-b border-gray-200">
      <form @submit.prevent="saveRole">
        <div class="mb-6">
            <label for="name" class="text-sm font-medium text-gray-900 block mb-2">Name</label>
            <input type="text" v-model="form.name" id="name" name="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Name" required >
            <span v-if="errors.name">{{errors.name}}</span>
        </div>

        <div class="mb-6">
            <label for="permisions" class="text-sm font-medium text-gray-900 block mb-2">Permissions</label>
            <div v-for="item in permissionsOptions" :key="item.value">
              <label class="inline-flex items-center">
                <input v-model="form.permission" type="checkbox" :value="item.id" class="form-checkbox"/>
                <span class="ml-2">{{item.name}}</span>
              </label>
            </div>
        </div>
        <button type="submit" class="btn-blue">
          Save
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import {statusOptions} from '../../utils';
import useRoles from "../../composables/role";
export default {
  setup() {
    const {errors, storeRole, permissionsOptions, getPermissionsDropdown} = useRoles();
    const form = ref({
      name: '',
      permission: [],
    });

    onMounted(async () => {
      await getPermissionsDropdown();
    });

    const saveRole = async () => {
      await storeRole({...form.value});
    }
    return {
      form,
      errors,
      saveRole,
      permissionsOptions
}
  },
}
</script>