<template>
  <div class="flex justify-between mb-2">
    <h1 class="mt-3 text-2xl font-bold">
      {{project.title}} | Note
    </h1>
    <app-project-nav :slug="slug"></app-project-nav>
  </div>

  <div class="bg-white overflow-hidden shadow-sm rounded-lg">
    <div class="p-6 bg-white border-b border-gray-200">
      <div class="md:grid md:grid-cols-3 md:gap-6 mb-6">
        <div class="block">
          Created
        </div>
        <div class="block">
          Active
        </div>
        <div class="block">
          Completed
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { onMounted } from '@vue/runtime-core';
import useProjects from '../../../composables/project';
export default {
  props: {
    slug: {required: true, type: String}
  },
  setup(props) {
    const {slug} = props;
    const {project, getProjectBySlug} = useProjects();

    onMounted(async () => {
      await getProjectBySlug(slug,'note');
    })
    return {
      project,
      slug,
    }
  },
}
</script>