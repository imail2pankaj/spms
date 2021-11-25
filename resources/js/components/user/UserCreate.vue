<template>
  <div class="flex justify-between mb-2">
    <h1 class="text-2xl font-bold">
      User Create
    </h1>
    <router-link :to="{name:'user.index'}" class="p-2 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-sm rounded-lg focus:border-4 border-indigo-300">
      List
    </router-link>
  </div>
  <div class="bg-white overflow-hidden shadow-sm rounded-lg">
    <div class="p-6 bg-white border-b border-gray-200">
      <form @submit.prevent="saveUser">
        <div class="grid grid-cols-2 gap-6">

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
              <label for="description" class="text-sm font-medium text-gray-900 block mb-2">Description</label>
              <ckeditor :editor="editor" v-model="form.description"></ckeditor>
              <span v-if="errors.description">{{errors.description}}</span>
          </div>

          <div class="">
              <label for="short_description" class="text-sm font-medium text-gray-900 block mb-2">Short Description</label>
              <ckeditor :editor="editor" v-model="form.short_description"></ckeditor>
              <span v-if="errors.short_description">{{errors.short_description}}</span>
          </div>

          <div class="">
              <label for="regular_price" class="text-sm font-medium text-gray-900 block mb-2">Regular Price</label>
              <input type="number" v-model="form.regular_price" id="regular_price" name="regular_price" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Regular Price" required >
              <span v-if="errors.regular_price">{{errors.regular_price}}</span>
          </div>

          <div class="">
              <label for="sale_price" class="text-sm font-medium text-gray-900 block mb-2">Sale Price</label>
              <input type="number" v-model="form.sale_price" id="sale_price" name="sale_price" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Sale Price" required >
              <span v-if="errors.sale_price">{{errors.sale_price}}</span>
          </div>

          <div class="">
              <label for="image" class="text-sm font-medium text-gray-900 block mb-2">Image</label>
              <input type="file" ref="file" v-on:change="handleFileUpload"  id="image" name="image" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <span v-if="errors.image">{{errors.image}}</span>
          </div>

          <div class=" ">
              <label for="category_id" class="text-sm font-medium text-gray-900 block mb-2">Category</label>
              <select v-model="form.category_id" name="category_id" id="category_id" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option value="">None</option>
                <option v-for="item in categoryOptions" :key="item.id" :value="item.id">
                  {{item.name}}
                </option>
              </select>
          </div>

          <div class="">
              <label for="status" class="text-sm font-medium text-gray-900 block mb-2">Status</label>
              <select v-model="form.status" name="status" id="status" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option v-for="item in statusOptions" :key="item.value" :value="item.value">
                  {{item.display}}
                </option>
              </select>
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
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {statusOptions} from '../../utils';
import useProducts from "../../composables/product";
export default {
  setup() {
    const {errors, storeProduct, categoryOptions, getCategoryOptions} = useProducts();
    const file = ref(null);
    const form = ref({
      name: '',
      description: '',
      short_description: '',
      image: '',
      regular_price: 0,
      sale_price: 0,
      image: '',
      category_id: '',
      status: 0,
    });

    onMounted(async () => {
      await getCategoryOptions();
    });

    const handleFileUpload = (e) => {
      file.value = e.target.files[0];
    }

    const saveUser = async () => {
      const formData = new FormData();
      for(const key in form.value) {
        if(key === 'image'){
          formData.append('image', file.value);
        } else {
          formData.append(key, form.value[key]);
        }
      }
      await storeProduct(formData);
    }
    return {
      form,
      errors,
      saveUser,
      statusOptions,
      categoryOptions,
      handleFileUpload,
      editor: ClassicEditor,
}
  },
}
</script>