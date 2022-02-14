<template>
  <div class="flex justify-between mb-2">
    <h1 class="mt-3 text-2xl font-bold">
      {{project.title}} | Update
    </h1>
    <app-project-nav :slug="slug"></app-project-nav>
  </div>

  <div class="bg-white overflow-hidden shadow-sm rounded-lg">
    <div class="p-6 bg-white border-b border-gray-200">


  <div>
    <div class="container">
      <div class="flex flex-col md:grid grid-cols-12 text-gray-50">

        <div class="flex md:contents">
          <div class="col-start-2 col-end-4 mr-5 md:mx-auto relative">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-yellow-500 pointer-events-none"></div>
            </div>
            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-yellow-500 shadow text-center">
              <i class="fas fa-check-circle text-white"></i>
            </div>
          </div>
          <div class="border border-gray-200 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full text-gray-600">
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

        <template v-for="(status, index) in statuses" :key="index">
          <div class="flex md:contents">
            <div class="col-start-2 col-end-4 mr-5 md:mx-auto relative">
              <div class="h-full w-6 flex items-center justify-center">
                <div class="h-full w-1 bg-yellow-500 pointer-events-none"></div>
              </div>
              <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-yellow-500 shadow text-center">
                <i class="fas fa-check-circle text-white"></i>
              </div>
            </div>
            <div class="border border-gray-200 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full text-gray-600">
              <p class="leading-tight text-justify w-full mb-4" v-html="status.description"></p>
              <b>{{status.user.first_name}} {{status.user.last_name}}</b>
              <p class="leading-tight text-justify w-full">{{$filters.convertOnlyDateFormat(status.created_at)}}</p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>

    </div>
  </div>
</template>


<script>
import { onMounted, ref } from '@vue/runtime-core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import useProjects from '../../../composables/project';
export default {
  props: {
    slug: {required: true, type: String}
  },
  setup(props) {
    const {slug} = props;
    const submitting = ref(false);
    const statuses = ref([]);
    const {project, getProjectBySlug, getProjectUpdates, submitProjectStatus} = useProjects();
    const description = ref("");

    onMounted(async () => {
      await getProjectBySlug(slug,'update');
      await fetchUpdates();
    });

    const fetchUpdates = async () => {
      statuses.value = await getProjectUpdates();
    }
    const saveStatus = async (e) => {
      submitting.value = true;
      const data = {
        description: description.value
      }
      await submitProjectStatus(project.value.id, data);
      description.value = '';
      submitting.value = false;
      await fetchUpdates();
    }
    return {
      project,
      slug,
      description,
      saveStatus,
      statuses,
      editor: ClassicEditor,
    }
  },
}
</script>
<style>
  .ck-editor__editable {
    min-height: 200px;
  }
</style>