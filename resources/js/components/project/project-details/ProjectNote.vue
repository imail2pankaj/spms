<template>
  <div class="flex justify-between flex-col md:flex-row mb-2">
    <h1 class="mt-3 text-2xl font-bold">
      {{project.title}} | Note
    </h1>
    <app-project-nav :slug="slug"></app-project-nav>
  </div>

  <div class="bg-white overflow-hidden shadow-sm rounded-lg">
    <div class="p-6 bg-white border-b border-gray-200">
      <form @submit.prevent="saveStatus">
        <ckeditor :editor="editor" v-model="description"></ckeditor>
        <div class="py-4 text-left">
          <button type="submit" class="btn-blue">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import { onMounted, ref } from 'vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import useProjects from '../../../composables/project';
export default {
  props: {
    slug: {required: true, type: String}
  },
  setup(props) {
    const {slug} = props;
    const {project, getProjectBySlug, submitProjectNote} = useProjects();
    const submitting = ref(false);
    const description = ref(null);

    onMounted(async () => {
      await getProjectBySlug(slug,'note');
      description.value = project.value.note.description;
    })

    const saveStatus = async (e) => {
      submitting.value = true;
      const data = {
        description: description.value
      }
      await submitProjectNote(project.value.id, data);
      submitting.value = false;
    }
    return {
      project,
      slug,
      saveStatus,
      description,
      editor: ClassicEditor,
    }
  },
}
</script>
<style>
  .ck-editor__editable {
    min-height: 400px;
  }
</style>