<template>
  <Search @changePageEvent="searchData"></Search>
  <slot></slot>
  <Pagination
    :pagination="pagination"
    @changePageEvent="searchData"
  ></Pagination>
</template>

<script>
import Search from "./Search";
import Pagination from "./Pagination";
import { ref } from '@vue/reactivity';
export default {
  props: { pagination: { required: true, type: Object } },
  emits: ["changePageEvent"],
  components: {
    Search,
    Pagination,
  },
  setup(props, { emit }) {
    const { pagination } = props;
    const searchPanelForm = ref({});

    const searchData = (pgData) => {
        if(typeof pgData == 'object'){
            searchPanelForm.value = pgData;
        } else {
            searchPanelForm.value.page = pgData;
        }
      emit("changePageEvent", searchPanelForm.value);
    };

    return {
      pagination,
      searchData,
    };
  },
};
</script>