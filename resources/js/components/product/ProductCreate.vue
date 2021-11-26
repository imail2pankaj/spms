<template>
  <div class="flex justify-between mb-2">
    <h1 class="text-2xl font-bold">
      Product Create
    </h1>
    <router-link :to="{name:'product.index'}" class="link-blue">
      List
    </router-link>
  </div>
  <div class="bg-white overflow-hidden shadow-sm rounded-lg">
    <div class="p-6 bg-white border-b border-gray-200">
      <form @submit.prevent="saveProduct">
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
            <label for="regular_price" class="text-sm font-medium text-gray-900 block mb-2">Regular Price</label>
            <input type="number" v-model="form.regular_price" id="regular_price" name="regular_price" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Regular Price" required >
            <span v-if="errors.regular_price">{{errors.regular_price}}</span>
        </div>

        <div class="mb-6">
            <label for="sale_price" class="text-sm font-medium text-gray-900 block mb-2">Sale Price</label>
            <input type="number" v-model="form.sale_price" id="sale_price" name="sale_price" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Sale Price" required >
            <span v-if="errors.sale_price">{{errors.sale_price}}</span>
        </div>

        <div class="mb-6">
            <label for="image" class="text-sm font-medium text-gray-900 block mb-2">Image</label>
            <input type="file" ref="file" v-on:change="handleFileUpload"  id="image" name="image" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <span v-if="errors.image">{{errors.image}}</span>
        </div>

        <div class=" mb-6">
            <label for="category_id" class="text-sm font-medium text-gray-900 block mb-2">Category</label>
            <select v-model="form.category_id" name="category_id" id="category_id" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option value="">None</option>
              <option v-for="item in categoryOptions" :key="item.id" :value="item.id">
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

    const saveProduct = async () => {
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
      saveProduct,
      statusOptions,
      categoryOptions,
      handleFileUpload,
      editor: ClassicEditor,
}
  },
}
</script>