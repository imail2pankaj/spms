<template>
  <div class="flex justify-between mb-2">
    <h1 class="text-2xl font-bold">
      Role Edit
    </h1>
    <router-link :to="{name:'role.index'}" class="link-blue">
      List
    </router-link>
  </div>
  <div class="bg-white overflow-hidden shadow-sm rounded-lg">
    <div class="p-6 bg-white border-b border-gray-200">
      <form @submit.prevent="saveRole">
        <div class="mb-6">
            <label for="name" class="input-form-label">Name</label>
            <input type="text" v-model="role.name" id="name" name="name" class="input-form-control" placeholder="Name" required >
            <span v-if="errors.name">{{errors.name}}</span>
        </div>
        <div class="mb-6">
            <label for="permisions" class="input-form-label">Permissions</label>
            <div v-for="item in permissionsOptions" :key="item.value">
              <label class="inline-flex items-center">
                <input v-model="role.permission" type="checkbox" :value="item.id" class="form-checkbox"/>
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