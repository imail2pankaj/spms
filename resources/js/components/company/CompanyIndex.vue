<template>
  <div class="flex justify-between mb-2">
    <h1 class="text-2xl font-bold">
      Companies
    </h1>
    <router-link :to="{name:'company.create'}" class="p-2 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-sm rounded-lg focus:border-4 border-indigo-300">
          Add
    </router-link>
  </div>
  <div class="bg-white overflow-hidden shadow-sm rounded-lg">
    <div class="p-6 bg-white border-b border-gray-200">
      <table class="min-w-max w-full table-auto">
        <thead>
          <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th class="py-2 px-2 text-left">Logo</th>
            <th class="py-2 px-2 text-left">Name</th>
            <th class="py-2 px-2 text-left">Email</th>
            <th class="py-2 px-2 text-left">Address</th>
            <th class="py-2 px-2 text-left">Website</th>
            <th class="py-2 px-2 text-center">Status</th>
            <th class="py-2 px-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody class="text-gray-900 text-sm font-light">
          <template v-for="(item, index) in companies" :key="index">
            <tr class="border-b border-gray-200 hover:bg-gray-100">
              <td class="py-2 px-2 text-left whitespace-nowrap"><img :src="'/uploads/company/' + item.logo" alt="" class="w-20 rounded "></td>
              <td class="py-2 px-2 text-left whitespace-nowrap">{{ item.name }}</td>
              <td class="py-2 px-2 text-left whitespace-nowrap">{{ item.email }}</td>
              <td class="py-2 px-2 text-left whitespace-nowrap">{{ item.address }}</td>
              <td class="py-2 px-2 text-left whitespace-nowrap">{{ item.website }}</td>
              <td class="py-2 px-2 text-center whitespace-nowrap"><span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Active</span></td>
              <td class="py-2 px-2 text-center whitespace-nowrap">
                <div class="flex item-center justify-center">
                  <router-link to="" class="no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <img src="/images/view-icon.svg" alt="View" />
                  </router-link>
                  <router-link :to="{name:'company.edit', params: {id:item.id}}"  class="no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <img src="/images/edit-icon.svg" alt="Edit" />
                  </router-link>
                  <button type="button" @click="destroyCompany(item.id)" class="no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
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
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import useCompanies from "../../composables/companies";
export default {
  setup() {
    const { companies, getCompanies, deleteCompany } = useCompanies();

    onMounted(getCompanies);

    const destroyCompany = async(id) => {
      if(!confirm('Are you sure?')) {
        return false;
      }
      await deleteCompany(id);
      await getCompanies();
    }
    return {
      companies,
      destroyCompany
    };
  },
};
</script>