<template>
  <div class="flex justify-between mb-2">
    <h1 class="text-2xl font-bold">
      Product Edit
    </h1>
    <router-link :to="{name:'product.index'}" class="link-blue">
      List
    </router-link>
  </div>
  <div class="bg-white overflow-hidden shadow-sm rounded-lg">
    <div class="p-6 bg-white border-b border-gray-200">
      <form @submit.prevent="saveProduct">
        <div class="mb-6">
            <label for="name" class="input-form-label">Name</label>
            <input type="text" v-model="product.name" id="name" name="name" class="input-form-control" placeholder="Name" required >
            <span v-if="errors.name">{{errors.name}}</span>
        </div>

        <div class="mb-6">
            <label for="description" class="input-form-label">Description</label>
            <ckeditor :editor="editor" v-model="product.description"></ckeditor>
            <span v-if="errors.description">{{errors.description}}</span>
        </div>

        <div class="mb-6">
            <label for="short_description" class="input-form-label">Short Description</label>
            <ckeditor :editor="editor" v-model="product.short_description"></ckeditor>
            <span v-if="errors.short_description">{{errors.short_description}}</span>
        </div>

        <div class="mb-6">
            <label for="regular_price" class="input-form-label">Regular Price</label>
            <input type="number" v-model="product.regular_price" id="regular_price" name="regular_price" class="input-form-control" placeholder="Regular Price" required >
            <span v-if="errors.regular_price">{{errors.regular_price}}</span>
        </div>

        <div class="mb-6">
            <label for="sale_price" class="input-form-label">Sale Price</label>
            <input type="number" v-model="product.sale_price" id="sale_price" name="sale_price" class="input-form-control" placeholder="Sale Price" required >
            <span v-if="errors.sale_price">{{errors.sale_price}}</span>
        </div>

        <div class="mb-6">
            <label for="image" class="input-form-label">Image</label>
            <input type="file" ref="file" v-on:change="handleFileUpload"  id="image" name="image" class="input-form-control">
            <span v-if="errors.image">{{errors.image}}</span>

            <img v-if="product.image" :src="'/uploads/product/' + product.image" alt="">
        </div>

        <div class=" mb-6">
            <label for="category_id" class="input-form-label">Category</label>
            <select v-model="product.category_id" name="category_id" id="category_id" class="input-form-control">
              <option value="">None</option>
              <option v-for="item in categoryOptions" :key="item.id" :value="item.id">
                {{item.name}}
              </option>
            </select>
        </div>

        <div class="mb-6">
            <label for="status" class="input-form-label">Status</label>
            <select v-model="product.status" name="status" id="status" class="input-form-control">
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