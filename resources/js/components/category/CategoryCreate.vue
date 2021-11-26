<template>
  <div class="flex justify-between mb-2">
    <h1 class="text-2xl font-bold">
      Category Create
    </h1>
    <router-link :to="{name:'category.index'}" class="link-blue">
      List
    </router-link>
  </div>
  <div class="bg-white overflow-hidden shadow-sm rounded-lg">
    <div class="p-6 bg-white border-b border-gray-200">
      <form @submit.prevent="saveCategory">
        <div class="mb-6">
            <label for="name" class="text-sm font-medium text-gray-900 block mb-2">Name</label>
            <input type="text" v-model="form.name" id="name" name="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Name" required >
            <span v-if="errors.name">{{errors.name}}</span>
        </div>

        <div class="mb-6">
            <label for="description" class="text-sm font-medium text-gray-900 block mb-2">Description</label>
            <ckeditor :editor="editor" v-model="form.description"></ckeditor>
            <span v-if="errors.description">{{errors.description}}</span>
        </div>

        <div class="mb-6">
            <label for="short_description" class="text-sm font-medium text-gray-900 block mb-2">Short Description</label>
            <ckeditor :editor="editor" v-model="form.short_description"></ckeditor>
            <span v-if="errors.short_description">{{errors.short_description}}</span>
        </div>

        <div class="mb-6">
            <label for="image" class="text-sm font-medium text-gray-900 block mb-2">Image</label>
            <input type="file" ref="file" v-on:change="handleFileUpload"  id="image" name="image" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <span v-if="errors.image">{{errors.image}}</span>
        </div>

        <div class=" mb-6">
            <label for="parent_id" class="text-sm font-medium text-gray-900 block mb-2">Parent</label>
            <select v-model="form.parent_id" name="parent_id" id="parent_id" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option :key="0" :value="0">None</option>
              <option v-for="item in categoryOptions" :key="item.value" :value="item.value">
                {{item.name}}
              </option>
            </select>
        </div>

        <div class="mb-6">
            <label for="status" class="text-sm font-medium text-gray-900 block mb-2">Status</label>
            <select v-model="form.status" name="status" id="status" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option v-for="item in statusOptions" :key="item.value" :value="item.value">
                {{item.display}}
              </option>
            </select>
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
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {statusOptions} from '../../utils';
import useCategories from "../../composables/category";
export default {
  setup() {
    const {errors, storeCategory, categoryOptions, getCategoriesDropdown} = useCategories();
    const file = ref(null);
    const form = ref({
      name: '',
      description: '',
      short_description: '',
      image: '',
      parent_id: 0,
      status: 0,
    });

    onMounted(async () => {
      await getCategoriesDropdown();
    });

    const handleFileUpload = (e) => {
      file.value = e.target.files[0];
    }

    const saveCategory = async () => {
      const formData = new FormData();
      for(const key in form.value) {
        if(key === 'image'){
          formData.append('image', file.value);
        } else {
          formData.append(key, form.value[key]);
        }
      }
      await storeCategory(formData);
    }
    return {
      form,
      errors,
      saveCategory,
      statusOptions,
      categoryOptions,
      handleFileUpload,
      editor: ClassicEditor,
}
  },
}
</script>