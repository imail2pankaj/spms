<template>
  <div
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
      </template>
    </div>
  </div>
</template>
<script>
export default {
  props: { pagination: { required: true, type: Object } },
  emits: ["changePageEvent"],
  setup(props, {emit}) {
    const changePage = (page) => {
        emit('changePageEvent', page);
    };
    return {
      changePage,
    };
  },
};
</script>
