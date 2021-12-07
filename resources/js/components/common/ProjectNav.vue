<template>
    <nav class="flex flex-col sm:flex-row">
        <router-link :to="{name:'project.task', params: {slug : slug}}" class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
            Tasks
        </router-link>
        <router-link :to="{name:'project.update', params: {slug : slug}}" class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
            Updates
        </router-link>
        <router-link :to="{name:'project.milestone', params: {slug : slug}}" class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
            Milestones
        </router-link>
        <router-link :to="{name:'project.attachment', params: {slug : slug}}" class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
            Attachments
        </router-link>
        <router-link :to="{name:'project.note', params: {slug : slug}}" class="text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none">
            Notes
        </router-link>
    </nav>
</template>
<script>
export default {
  name: "ProjectNav",
  props: {
    slug: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    const {slug} = props;
    return {
        slug,
    }
  },
};
</script>
