<template>
    <router-link :to="{name:pathName}" class="p-2 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-sm rounded-lg focus:border-4 border-indigo-300">
      Create
    </router-link>
</template>

<script>
export default {
    props: {
        pathName: {
            required: true,
        }
    },
    setup(props) {
        const { pathName } = props;

        return {
            pathName
        }
    },
}
</script>