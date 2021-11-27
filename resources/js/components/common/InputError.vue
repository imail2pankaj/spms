<template>
  <span class="input-error" v-if="err">{{ err }}</span>
</template>

<script>
export default {
  props: {
    err: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    const { err } = props;
console.log(err);
    return { err };
  },
};
</script>