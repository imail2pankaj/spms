<template>
  <div class="mb-4 flex sm:flex-row flex-col justify-end">
    <div class="flex flex-row mb-1 sm:mb-0">
      <div class="relative">
        <select
          @change="searchData"
          v-model="searchPanelForm.pagination"
          class="datatable-pages"
        >
          <option value="1">1</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
      <div class="relative">
        <select
          @change="searchData"
          v-model="searchPanelForm.status"
          class="datatable-status"
        >
          <option value="-1">All</option>
          <option value="1">Active</option>
          <option value="0">Inactive</option>
        </select>
      </div>
    </div>
    <div class="block relative">
      <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
        <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
          <path
            d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
          ></path>
        </svg>
      </span>
      <input
        @keyup="searchData"
        v-model="searchPanelForm.keyword"
        placeholder="Search"
        class=" datatable-search" />
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from '@vue/runtime-core';
export default {
  emits: ["changePageEvent"],
  setup(props, {emit}) {
    const searchPanelForm = ref({
      pagination: 1,
      status: -1,
      keyword: "",
      page: 1,
    });

    onMounted(() => searchData());
    const searchData = () => {
        searchPanelForm.value.page = 1;
        emit('changePageEvent', searchPanelForm.value);
    };
    return {
      searchData,
      searchPanelForm,
    };
  },
};
</script>
