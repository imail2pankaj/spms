<template>
    <span v-if="status === 1" class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Active</span>
    <!-- <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Completed</span>
    <span class="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">Scheduled</span> -->
    <span v-else-if="status === 0" class="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">In Active</span>
</template>

<script>
export default {
    props: {
        status: {
            required: true,
            type: Number
        }
    },
    setup(props) {
        const {status} = props;
        return {status};
    },
}
</script>