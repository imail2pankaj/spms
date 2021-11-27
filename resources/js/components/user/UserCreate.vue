<template>
  <div class="flex justify-between mb-2">
    <h1 class="text-2xl font-bold">
      User Create
    </h1>
    <router-link :to="{name:'user.index'}" class="link-blue">
      List
    </router-link>
  </div>
  <form @submit.prevent="saveUser">
    <div class="bg-white overflow-hidden shadow-sm rounded-lg">
      <div class="bg-white border-b border-gray-200">
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
            <h3 class="input-form-sub-heading">Personal Information</h3>
            <div class="md:grid md:grid-cols-3 md:gap-6 mb-6">
              <div>
                  <label for="first_name" class="input-form-label">First Name <app-required /></label>
                  <input type="text" placeholder="First Name" v-model="form.first_name" id="first_name" name="first_name" class="input-form-control" required >
                  <span class="input-error" v-if="errors.first_name">{{errors.first_name}}</span>
              </div>
              <div>
                  <label for="middle_name" class="input-form-label">Middle Name</label>
                  <input type="text" placeholder="Middle Name" v-model="form.middle_name" id="middle_name" name="middle_name" class="input-form-control" required >
                  <span class="input-error" v-if="errors.middle_name">{{errors.middle_name}}</span>
              </div>
              <div>
                  <label for="last_name" class="input-form-label">Last Name <app-required /></label>
                  <input type="text" placeholder="Last Name" v-model="form.last_name" id="last_name" name="last_name" class="input-form-control" required >
                  <span class="input-error" v-if="errors.last_name">{{errors.last_name}}</span>
              </div>
              <div>
                  <label for="gender" class="input-form-label">Gender</label>
                  <select v-model="form.gender" name="gender" id="gender" class="input-form-control">
                    <option v-for="item in genderOptions" :key="item.value" :value="item.value">
                      {{item.display}}
                    </option>
                  </select>
              </div>
              <div>
                  <label for="marital_status" class="input-form-label">Marital Status</label>
                  <select v-model="form.marital_status" name="marital_status" id="marital_status" class="input-form-control">
                    <option v-for="item in maritalStatusOptions" :key="item.value" :value="item.value">
                      {{item.display}}
                    </option>
                  </select>
              </div>
              <div>
                  <label for="dob" class="input-form-label">Date of Birth</label>
                  <input type="date" v-model="form.dob" id="dob" name="dob" class="input-form-control" placeholder="Joining Date" required >
                  <span class="input-error" v-if="errors.dob">{{errors.dob}}</span>
              </div>
            </div>
            <h3 class="input-form-sub-heading">Profile Information</h3>
            <div class="md:grid md:grid-cols-3 md:gap-6 mb-6">
              <div>
                  <label for="email" class="input-form-label">Email <app-required /></label>
                  <input type="email" placeholder="Email" v-model="form.email" id="email" name="email" class="input-form-control" required >
                  <span class="input-error" v-if="errors.email">{{errors.email}}</span>
              </div>

              <div>
                  <label for="password" class="input-form-label">Password <app-required /></label>
                  <input type="password" placeholder="Password" v-model="form.password" id="password" name="password" class="input-form-control" required >
                  <span class="input-error" v-if="errors.password">{{errors.password}}</span>
              </div>
              <div>
                <label for="password_confirmation" class="input-form-label">Confirm Password <app-required /></label>
                <input type="password" placeholder="Confirm Password" v-model="form.password_confirmation" id="password_confirmation" name="password_confirmation" class="input-form-control" required >
                <span class="input-error" v-if="errors.password_confirmation">{{errors.password_confirmation}}</span>
              </div>
              <div class=" ">
                  <label for="roles" class="input-form-label">Role <app-required /></label>
                  <select v-model="form.roles" name="roles" id="roles" class="input-form-control">
                    <option value=""> - Select Role -</option>
                    <option v-for="item in rolesOptions" :key="item.id" :value="item.id">
                      {{item.name}}
                    </option>
                  </select>
                  <span class="input-error" v-if="errors.roles">{{errors.roles}}</span>
              </div>
              <div>
                <label for="join_date" class="input-form-label">Joining Date</label>
                <input type="date" v-model="form.join_date" id="join_date" name="join_date" class="input-form-control" placeholder="Joining Date">
                <span class="input-error" v-if="errors.join_date">{{errors.join_date}}</span>
              </div>
              <div>
                <label for="resign_date" class="input-form-label">Resign Date</label>
                <input type="date" v-model="form.resign_date" id="resign_date" name="resign_date" class="input-form-control" placeholder="Resign Date">
                <span class="input-error" v-if="errors.resign_date">{{errors.resign_date}}</span>
              </div>
            </div>
            <h3 class="input-form-sub-heading">Contact Information</h3>
            <div class="md:grid md:grid-cols-3 md:gap-6 mb-6">
              <div>
                <label for="phone_number" class="input-form-label">Phone Number <app-required /></label>
                <input type="tel" placeholder="Phone Number" v-model="form.phone_number" id="phone_number" name="phone_number" class="input-form-control" required>
                <span class="input-error" v-if="errors.phone_number">{{errors.phone_number}}</span>
              </div>
              <div>
                <label for="emergency_phone_number" class="input-form-label">Emergency Phone Number</label>
                <input type="tel" placeholder="Emergency Phone Number" v-model="form.emergency_phone_number" id="emergency_phone_number" name="emergency_phone_number" class="input-form-control">
                <span class="input-error" v-if="errors.emergency_phone_number">{{errors.emergency_phone_number}}</span>
              </div>
              <div>
                <label for="address" class="input-form-label">Address <app-required /></label>
                <input type="text" placeholder="Address" v-model="form.address" id="address" name="address" class="input-form-control" required >
                <span class="input-error" v-if="errors.address">{{errors.address}}</span>
              </div>
              <div>
                <label for="city" class="input-form-label">City <app-required /></label>
                <input type="text" placeholder="City" v-model="form.city" id="city" name="city" class="input-form-control" required >
                <span class="input-error" v-if="errors.city">{{errors.city}}</span>
              </div>
              <div>
                <label for="state" class="input-form-label">State <app-required /></label>
                <input type="text" placeholder="State" v-model="form.state" id="state" name="state" class="input-form-control" required >
                <span class="input-error" v-if="errors.state">{{errors.state}}</span>
              </div>
              <div>
                <label for="country" class="input-form-label">Country <app-required /></label>
                <input type="text" v-model="form.country" id="country" name="country" class="input-form-control" placeholder="Country" required >
                <span class="input-error" v-if="errors.country">{{errors.country}}</span>
              </div>
            </div>
            <h3 class="input-form-sub-heading">Other Information</h3>
            <div class="md:grid md:grid-cols-3 md:gap-6 mb-6">
              <div>
                <label for="profile_image" class="input-form-label">Profile Image</label>
                <input type="file" ref="profile_image" v-on:change="(e) => handleFileUpload(e, 'profile_image')" id="profile_image" name="profile_image" class="input-form-control">
                <span class="input-error" v-if="errors.profile_image">{{errors.profile_image}}</span>
              </div>

              <div>
                <label for="resume_file" class="input-form-label">Resume</label>
                <input type="file" ref="resume_file" v-on:change="(e) => handleFileUpload(e, 'resume_file')" id="resume_file" name="resume_file" class="input-form-control">
                <span class="input-error" v-if="errors.resume_file">{{errors.resume_file}}</span>
              </div>

              <div>
                  <label for="user_status" class="input-form-label">Status  <app-required /></label>
                  <select v-model="form.user_status" name="user_status" id="user_status" class="input-form-control">
                    <option v-for="item in statusOptions" :key="item.value" :value="item.value">
                      {{item.display}}
                    </option>
                  </select>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-left sm:px-6">
            <button type="submit" class="btn-blue" :disabled="submitting">
              {{submitting ? 'Saving' : "Save"}}
            </button>
          </div>
      </div>
    </div>
  </form>
</template>

<script>
import { onMounted, ref } from 'vue';
import {statusOptions, genderOptions, maritalStatusOptions} from '../../utils';
import useUsers from "../../composables/user";
export default {
  setup() {
    const submitting = ref(false);
    const {errors, storeUser, rolesOptions, getRolesDropdown} = useUsers();
    const profile_image = ref(null);
    const resume_file = ref(null);
    const form = ref({
        first_name: 'Bruce',
        middle_name: 'Nethar',
        last_name: 'Wayne',
        email: 'bruce@scenicitsolutions.com',
        password: '123456789',
        password_confirmation: '123456789',
        phone_number: '9876543210',
        emergency_phone_number: '9876543210',
        profile_image: '',
        gender: 0,
        marital_status: 0,
        dob: '1987-07-04',
        join_date: '2021-11-20',
        resign_date: '',
        resume_file: '',
        address: '47, Ankur Comm. Center',
        city: 'Rajkot',
        state: 'Gujarat',
        country: 'India',
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
      submitting.value = true;
      const formData = new FormData();
      for(const key in form.value) {
        if(key === 'profile_image'){
          formData.append(key, profile_image.value);
        } else if(key === 'resume_file') {
          formData.append(key, resume_file.value);
        } else {
          formData.append(key, form.value[key]);
        }
      }
      await storeUser(formData);
      submitting.value = false;
    }
    return {
      form,
      errors,
      saveUser,
      submitting,
      rolesOptions,
      statusOptions,
      genderOptions,
      handleFileUpload,
      maritalStatusOptions
}
  },
}
</script>