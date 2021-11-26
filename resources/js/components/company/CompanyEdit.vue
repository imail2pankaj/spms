<template>
  <div class="flex justify-between mb-2">
    <h1 class="text-2xl font-bold">
      Company Edit
    </h1>
    <router-link :to="{name:'company'}" class="link-blue">
      List
    </router-link>
  </div>
  <div class="bg-white overflow-hidden shadow-sm rounded-lg">
    <div class="p-6 bg-white border-b border-gray-200">
      <form @submit.prevent="updateCompany">
        <div class="mb-6">
            <label for="name" class="input-form-label">Company Name</label>
            <input type="text" v-model="company.name" id="name" name="name" class="input-form-control" placeholder="Company name" required >
            <span v-if="errors.name">{{errors.name}}</span>
        </div>

        <div class="mb-6">
            <label for="logo" class="input-form-label">Company Logo</label>
            <input type="file" ref="file" v-on:change="handleFileUpload" id="logo" name="logo" class="input-form-control" placeholder="Company email" required >
            <span v-if="errors.logo">{{errors.logo}}</span>
            <img v-if="company.logo" :src="'/uploads/company/' + company.logo" class="w-20" alt="">
        </div>

        <div class="mb-6">
            <label for="email" class="input-form-label">Company email</label>
            <input type="email" v-model="company.email" id="email" name="email" class="input-form-control" placeholder="Company email" required >
            <span v-if="errors.email">{{errors.email}}</span>
        </div>

        <div class="mb-6">
            <label for="address" class="input-form-label">Company address</label>
            <input type="text" v-model="company.address" id="address" name="address" class="input-form-control" placeholder="Company address" required >
            <span v-if="errors.address">{{errors.address}}</span>
        </div>

        <div class="mb-6">
            <label for="website" class="input-form-label">Company Website</label>
            <input type="text" v-model="company.website" id="website" name="website" class="input-form-control" placeholder="Company website" required >
            <span v-if="errors.website">{{errors.website}}</span>
        </div>

        <div class="mb-6">
            <label for="status" class="input-form-label">Company Status</label>
            <select v-model="company.status" name="status" id="status" class="input-form-control">
              <option v-for="item in statusOptions" :key="item.value" :value="item.value">
                {{item.display}}
              </option>
            </select>
        </div>
        <button type="submit" class="btn-blue">
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