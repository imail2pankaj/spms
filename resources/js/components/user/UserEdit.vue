<template>
  <div class="flex justify-between mb-2">
    <h1 class="text-2xl font-bold">
      Product Edit
    </h1>
    <router-link :to="{name:'product.index'}" class="p-2 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-sm rounded-lg focus:border-4 border-indigo-300">
      List
    </router-link>
  </div>
  <div class="bg-white overflow-hidden shadow-sm rounded-lg">
    <div class="p-6 bg-white border-b border-gray-200">
      <form @submit.prevent="saveProduct">
        <div class="mb-6">
            <label for="name" class="text-sm font-medium text-gray-900 block mb-2">Name</label>
            <input type="text" v-model="product.name" id="name" name="name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Name" required >
            <span v-if="errors.name">{{errors.name}}</span>
        </div>

        <div class="mb-6">
            <label for="description" class="text-sm font-medium text-gray-900 block mb-2">Description</label>
            <ckeditor :editor="editor" v-model="product.description"></ckeditor>
            <span v-if="errors.description">{{errors.description}}</span>
        </div>

        <div class="mb-6">
            <label for="short_description" class="text-sm font-medium text-gray-900 block mb-2">Short Description</label>
            <ckeditor :editor="editor" v-model="product.short_description"></ckeditor>
            <span v-if="errors.short_description">{{errors.short_description}}</span>
        </div>

        <div class="mb-6">
            <label for="regular_price" class="text-sm font-medium text-gray-900 block mb-2">Regular Price</label>
            <input type="number" v-model="product.regular_price" id="regular_price" name="regular_price" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Regular Price" required >
            <span v-if="errors.regular_price">{{errors.regular_price}}</span>
        </div>

        <div class="mb-6">
            <label for="sale_price" class="text-sm font-medium text-gray-900 block mb-2">Sale Price</label>
            <input type="number" v-model="product.sale_price" id="sale_price" name="sale_price" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Sale Price" required >
            <span v-if="errors.sale_price">{{errors.sale_price}}</span>
        </div>

        <div class="mb-6">
            <label for="image" class="text-sm font-medium text-gray-900 block mb-2">Image</label>
            <input type="file" ref="file" v-on:change="handleFileUpload"  id="image" name="image" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <span v-if="errors.image">{{errors.image}}</span>

            <img v-if="product.image" :src="'/uploads/product/' + product.image" alt="">
        </div>

        <div class=" mb-6">
            <label for="category_id" class="text-sm font-medium text-gray-900 block mb-2">Category</label>
            <select v-model="product.category_id" name="category_id" id="category_id" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option value="">None</option>
              <option v-for="item in categoryOptions" :key="item.id" :value="item.id">
                {{item.name}}
              </option>
            </select>
        </div>

        <div class="mb-6">
            <label for="status" class="text-sm font-medium text-gray-900 block mb-2">Status</label>
            <select v-model="product.status" name="status" id="status" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              <option v-for="item in statusOptions" :key="item.value" :value="item.value">
                {{item.display}}
              </option>
            </select>
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
  props: {
    id: {
      required: true
    }
  },
  setup(props) {
    const {errors, product, getProduct, updateProduct, categoryOptions, getCategoryOptions} = useProducts();
    const file = ref(null);

    onMounted(async () => {
      await getCategoryOptions();
      await getProduct(props.id);
    });

    const handleFileUpload = (e) => {
      file.value = e.target.files[0];
    }

    const saveProduct = async () => {
      const formData = new FormData();
      for(const key in product.value) {
        if(key === 'image'){
          formData.append('image', file.value);
        } else {
          formData.append(key, product.value[key]);
        }
        formData.append('_method', 'patch');
      }
      await updateProduct(props.id, formData);
    }
    return {
      errors,
      product,
      saveProduct,
      statusOptions,
      categoryOptions,
      handleFileUpload,
      editor: ClassicEditor,
    }
  },
}
</script>