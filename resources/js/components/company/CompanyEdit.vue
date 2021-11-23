<template>
  <div class="flex justify-between mb-2">
    <h1 class="text-2xl font-bold">
      Company Edit
    </h1>
    <router-link :to="{name:'company'}" class="p-2 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-sm rounded-lg focus:border-4 border-indigo-300">
      List
    </router-link>
  </div>
  <div class="bg-white overflow-hidden shadow-sm rounded-lg">
    <div class="p-6 bg-white border-b border-gray-200">
      <form @submit.prevent="updateCompany">
        <div class="mb-6">
            <label for="name" class="text-sm font-medium text-gray-900 block mb-2">Company Name</label>
            <input type="text" v-model="company.name" id="name" name="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Company name" required >
            <span v-if="errors.name">{{errors.name}}</span>
        </div>

        <div class="mb-6">
            <label for="logo" class="text-sm font-medium text-gray-900 block mb-2">Company Logo</label>
            <input type="file" ref="file" v-on:change="handleFileUpload" id="logo" name="logo" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Company email" required >
            <span v-if="errors.logo">{{errors.logo}}</span>
            <img v-if="company.logo" :src="'/uploads/company/' + company.logo" class="w-20" alt="">
        </div>

        <div class="mb-6">
            <label for="email" class="text-sm font-medium text-gray-900 block mb-2">Company email</label>
            <input type="email" v-model="company.email" id="email" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Company email" required >
            <span v-if="errors.email">{{errors.email}}</span>
        </div>

        <div class="mb-6">
            <label for="address" class="text-sm font-medium text-gray-900 block mb-2">Company address</label>
            <input type="text" v-model="company.address" id="address" name="address" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Company address" required >
            <span v-if="errors.address">{{errors.address}}</span>
        </div>

        <div class="mb-6">
            <label for="website" class="text-sm font-medium text-gray-900 block mb-2">Company Website</label>
            <input type="text" v-model="company.website" id="website" name="website" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Company website" required >
            <span v-if="errors.website">{{errors.website}}</span>
        </div>

        <div class="mb-6">
            <label for="status" class="text-sm font-medium text-gray-900 block mb-2">Company Status</label>
            <select v-model="company.status" name="status" id="status" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option v-for="item in statusOptions" :key="item.value" :value="item.value">
                {{item.display}}
              </option>
            </select>
        </div>
        <button type="submit" class="p-2 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-sm rounded-lg focus:border-4 border-indigo-300">
          Update Company
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import useCompanies from "../../composables/companies";
import { onMounted, ref } from 'vue';
export default {
  props: {
    id: {
      required:true,
      type: String
    }
  },
  setup(props) {
    const { errors, company, saveCompany, getCompany } = useCompanies();
    const file = ref(null);

    const statusOptions = [ 
        {
          value: 1,
          display: 'Active',
        },
        {
          value: 0,
          display: 'InActive',
        }
    ];

    onMounted(getCompany(props.id));

    const updateCompany = async (e) => {
      e.preventDefault();
      const formData = new FormData();

      for (const i of Object.keys(company.value)) {
        if(i === 'logo') {
          formData.append('logo', file.value);
        } else {
          formData.append(i, company.value[i]);
        }
      }
      formData.append('_method', 'patch');

      await saveCompany(props.id, formData);
    }

    
    const handleFileUpload = async (e) => {
      e.preventDefault();
      file.value = e.target.files[0];
    }

    return {
      errors,
      company,
      updateCompany,
      statusOptions,
      handleFileUpload
    };
  },
};
</script>