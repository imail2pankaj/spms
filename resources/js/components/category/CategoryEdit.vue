<template>
  <div class="flex justify-between mb-2">
    <h1 class="text-2xl font-bold">
      Category Edit
    </h1>
    <router-link :to="{name:'category.index'}" class="link-blue">
      List
    </router-link>
  </div>
  <div class="bg-white overflow-hidden shadow-sm rounded-lg">
    <div class="p-6 bg-white border-b border-gray-200">
      <form @submit.prevent="saveCategory">
        <div class="mb-6">
            <label for="name" class="input-form-label">Name</label>
            <input type="text" v-model="category.name" id="name" name="name" class="input-form-control" placeholder="Name" required >
            <span v-if="errors.name">{{errors.name}}</span>
        </div>

        <div class="mb-6">
            <label for="description" class="input-form-label">Description</label>
            <ckeditor :editor="editor" v-model="category.description"></ckeditor>
            <span v-if="errors.description">{{errors.description}}</span>
        </div>

        <div class="mb-6">
            <label for="short_description" class="input-form-label">Short Description</label>
            <ckeditor :editor="editor" v-model="category.short_description"></ckeditor>
            <span v-if="errors.short_description">{{errors.short_description}}</span>
        </div>

        <div class="mb-6">
            <label for="image" class="input-form-label">Image</label>
            <input type="file" ref="file" v-on:change="handleFileUpload"  id="image" name="image" class="input-form-control">
            <span v-if="errors.image">{{errors.image}}</span>
            <img v-if="category.image" :src="'/uploads/category/' + category.image" class="w-20" alt="">
        </div>

        <div class=" mb-6">
            <label for="parent_id" class="input-form-label">Parent</label>
            <select v-model="category.parent_id" name="parent_id" id="parent_id" class="input-form-control">
              <option :key="0" :value="0">None</option>
              <template v-for="item in categoryOptions" :key="item.value">
                <option :value="item.value" v-if="item.value !== category.id">
                  {{item.name}}
                </option>
              </template>
            </select>
        </div>

        <div class="mb-6">
            <label for="status" class="input-form-label">Status</label>
            <select v-model="category.status" name="status" id="status" class="input-form-control">
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
import useCategories from "../../composables/category";
import { statusOptions } from "../../utils";
export default {
  props: {
    id: { required: true, type: String }
  },
  setup(props) {
    const { id } = props;
    const file = ref(null);
    const {errors, category, getCategory, categoryOptions, getCategoriesDropdown, updateCategory} = useCategories();
    onMounted(async () => {
      await getCategoriesDropdown();
      getCategory(id);
    });

    const handleFileUpload = (e) => {
      e.preventDefault();
      file.value = e.target.files[0];
    }

    const saveCategory = async (e) => {
      e.preventDefault();
      const formData = new  FormData();
      for(const key in category.value) {
        if(key === 'image') {
          formData.append('image',file.value)
        } else {
          formData.append(key, category.value[key]);
        }
      }
      formData.append("_method", "PATCH");
      await updateCategory(id, formData);
    }

    return {
      errors,
      category,
      saveCategory,
      statusOptions,
      categoryOptions,
      handleFileUpload,
      editor: ClassicEditor,
    }
  },
}
</script>