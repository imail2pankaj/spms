<template>
  <div class="flex justify-between mb-2">
    <h1 class="text-2xl font-bold">
      User Create
    </h1>
    <router-link :to="{name:'user.index'}" class="link-blue">
      List
    </router-link>
  </div>
  <div class="bg-white overflow-hidden shadow-sm rounded-lg">
    <div class="p-6 bg-white border-b border-gray-200">
      <form @submit.prevent="saveUser">
        
        <div class="py-4 px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
        </div>
        <div class="md:grid md:grid-cols-3 md:gap-6 mb-6">
          <div class="">
              <label for="first_name" class="text-sm font-medium text-gray-900 block mb-2">First Name</label>
              <input type="text" placeholder="First Name" v-model="form.first_name" id="first_name" name="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required >
              <span v-if="errors.first_name">{{errors.first_name}}</span>
          </div>
          <div class="">
              <label for="middle_name" class="text-sm font-medium text-gray-900 block mb-2">Middle Name</label>
              <input type="text" placeholder="Middle Name" v-model="form.middle_name" id="middle_name" name="middle_name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required >
              <span v-if="errors.middle_name">{{errors.middle_name}}</span>
          </div>
          <div class="">
              <label for="last_name" class="text-sm font-medium text-gray-900 block mb-2">Last Name</label>
              <input type="text" placeholder="Last Name" v-model="form.last_name" id="last_name" name="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required >
              <span v-if="errors.last_name">{{errors.last_name}}</span>
          </div>
          <div class="">
              <label for="gender" class="text-sm font-medium text-gray-900 block mb-2">Gender</label>
              <select v-model="form.gender" name="gender" id="gender" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option v-for="item in genderOptions" :key="item.value" :value="item.value">
                  {{item.display}}
                </option>
              </select>
          </div>
          <div class="">
              <label for="marital_status" class="text-sm font-medium text-gray-900 block mb-2">Marital Status</label>
              <select v-model="form.marital_status" name="marital_status" id="marital_status" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option v-for="item in maritalStatusOptions" :key="item.value" :value="item.value">
                  {{item.display}}
                </option>
              </select>
          </div>
          <div class="">
              <label for="dob" class="text-sm font-medium text-gray-900 block mb-2">Date of Birth</label>
              <input type="date" v-model="form.dob" id="dob" name="dob" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Joining Date" required >
              <span v-if="errors.dob">{{errors.dob}}</span>
          </div>
        </div>
        <div class="py-4 px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Profile Information</h3>
        </div>
        <div class="md:grid md:grid-cols-3 md:gap-6 mb-6">
          <div class="">
              <label for="email" class="text-sm font-medium text-gray-900 block mb-2">Email</label>
              <input type="email" placeholder="Email" v-model="form.email" id="email" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required >
              <span v-if="errors.email">{{errors.email}}</span>
          </div>

          <div class="">
              <label for="password" class="text-sm font-medium text-gray-900 block mb-2">Password</label>
              <input type="password" placeholder="Password" v-model="form.password" id="password" name="password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required >
              <span v-if="errors.password">{{errors.password}}</span>
          </div>
          <div class="">
            <label for="confirm_password" class="text-sm font-medium text-gray-900 block mb-2">Confirm Password</label>
            <input type="password" placeholder="Confirm Password" v-model="form.confirm_password" id="confirm_password" name="confirm_password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required >
            <span v-if="errors.confirm_password">{{errors.confirm_password}}</span>
          </div>
          <div class=" ">
              <label for="roles" class="text-sm font-medium text-gray-900 block mb-2">Role</label>
              <select v-model="form.roles" name="roles" id="roles" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option value=""> - Select Role -</option>
                <option v-for="item in rolesOptions" :key="item.id" :value="item.id">
                  {{item.name}}
                </option>
              </select>
              <span v-if="errors.roles">{{errors.roles}}</span>
          </div>
          <div class="">
            <label for="join_date" class="text-sm font-medium text-gray-900 block mb-2">Joining Date</label>
            <input type="date" v-model="form.join_date" id="join_date" name="join_date" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Joining Date" required >
            <span v-if="errors.join_date">{{errors.join_date}}</span>
          </div>

          <div class="">
            <label for="resign_date" class="text-sm font-medium text-gray-900 block mb-2">Resign Date</label>
            <input type="date" v-model="form.resign_date" id="resign_date" name="resign_date" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Resign Date" required >
            <span v-if="errors.resign_date">{{errors.resign_date}}</span>
          </div>
        </div>

        <div class="md:grid md:grid-cols-3 md:gap-6 mb-6">

          <div class="">
              <label for="phone_number" class="text-sm font-medium text-gray-900 block mb-2">Phone Number</label>
              <input type="tel" placeholder="Phone Number" v-model="form.phone_number" id="phone_number" name="phone_number" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required >
              <span v-if="errors.phone_number">{{errors.phone_number}}</span>
          </div>

          <div class="">
              <label for="emergency_phone_number" class="text-sm font-medium text-gray-900 block mb-2">Emergency Phone Number</label>
              <input type="tel" placeholder="Emergency Phone Number" v-model="form.emergency_phone_number" id="emergency_phone_number" name="emergency_phone_number" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required >
              <span v-if="errors.emergency_phone_number">{{errors.emergency_phone_number}}</span>
          </div>



          <div class="">
              <label for="profile_image" class="text-sm font-medium text-gray-900 block mb-2">Profile Image</label>
              <input type="file" ref="profile_image" v-on:change="(e) => handleFileUpload(e, 'profile_image')" id="profile_image" name="profile_image" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <span v-if="errors.profile_image">{{errors.profile_image}}</span>
          </div>

          <div class="">
              <label for="resume_file" class="text-sm font-medium text-gray-900 block mb-2">Resume</label>
              <input type="file" ref="resume_file" v-on:change="(e) => handleFileUpload(e, 'resume_file')" id="resume_file" name="resume_file" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <span v-if="errors.resume_file">{{errors.resume_file}}</span>
          </div>

          <div class="">
              <label for="user_status" class="text-sm font-medium text-gray-900 block mb-2">Status</label>
              <select v-model="form.user_status" name="user_status" id="user_status" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option v-for="item in statusOptions" :key="item.value" :value="item.value">
                  {{item.display}}
                </option>
              </select>
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
import {statusOptions, genderOptions, maritalStatusOptions} from '../../utils';
import useUsers from "../../composables/user";
export default {
  setup() {
    const {errors, storeUser, rolesOptions, getRolesDropdown} = useUsers();
    const profile_image = ref(null);
    const resume_file = ref(null);
    const form = ref({
        first_name: '',
        middle_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
        phone_number: '',
        emergency_phone_number: '',
        profile_image: '',
        gender: 0,
        marital_status: 0,
        dob: '',
        join_date: '',
        resign_date: '',
        resume_file: '',
        address: '',
        city: '',
        state: '',
        country: '',
        user_status: 0,
        roles: '',
    });

    onMounted(async () => {
      await getRolesDropdown();
    });

    const handleFileUpload = (e, file_type) => {
      if(file_type === 'profile_image') {
        profile_image.value = e.target.files[0];
      } else if(file_type === 'resume_file') {
        resume_file.value = e.target.files[0];
      }
      
    }

    const saveUser = async () => {
      const formData = new FormData();
      for(const key in form.value) {
        if(key === 'profile_image' || key === 'resume_file'){
          formData.append(key, file.value);
        } else {
          formData.append(key, form.value[key]);
        }
      }
      await storeUser(formData);
    }
    return {
      form,
      errors,
      saveUser,
      rolesOptions,
      statusOptions,
      genderOptions,
      handleFileUpload,
      maritalStatusOptions
}
  },
}
</script>