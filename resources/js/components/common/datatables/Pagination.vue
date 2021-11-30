<template>
  <div
    v-if="pagination.total"
    class="
      px-5
      py-5
      bg-white
      border-t
      flex flex-col
      xs:flex-row
      items-center
      xs:justify-between
    "
  >
    <div class="inline-flex mt-2 xs:mt-0">
      <template v-for="(pagi, index) in pagination.links" :key="index">
        <button
          v-if="index === 0"
          @click="() => changePage(pagination.current_page - 1)"
          class="pagination-previous"
          :disabled="pagination.current_page === 1 ? true : false"
        >
          <span v-html="pagi.label"></span>
        </button>

        <button
          v-if="index !== 0 && (index !== pagination.links.length - 1)"
          @click="() => changePage(pagi.label)"
          :class="
            index == 0
              ? 'pagination-previous'
              : index === pagination.links.length - 1
              ? 'pagination-next'
              : pagi.label == pagination.current_page
              ? 'pagination-active'
              : 'pagination-number'
          "
          :disabled="pagi.label == pagination.current_page ? true : false"
        >
          <span v-html="pagi.label"></span>
        </button>

        <button
          v-if="index === pagination.links.length - 1"
          @click="() => changePage(pagination.current_page + 1)"
          class="pagination-next"
          :disabled="pagination.current_page === pagination.last_page ? true : false"
        >
          <span v-html="pagi.label"></span>
        </button>
      </template>
    </div>
  </div>
</template>
<script>
import { ref } from "@vue/reactivity";
export default {
  props: { pagination: { required: true, type: Object } },
  emits: ["changePageEvent"],
  setup(props, { emit }) {
    const changePage = (page) => {
      emit("changePageEvent", page);
    };
    return {
      changePage,
    };
  },
};
</script>
