<template>
  <div class="flex justify-between mb-2">
    <h1 class="mt-3 text-2xl font-bold">
      {{project.title}} | Attachments
    </h1>
    <app-project-nav :slug="slug"></app-project-nav>
  </div>

  <div class="bg-white overflow-hidden shadow-sm rounded-lg">
    <div class="p-6 bg-white border-b border-gray-200">
      <div class="grid grid-cols-3 gap-4">
        <div class="">
          <form @submit.prevent="saveAttachment">
            <div class="mb-6">
              <label for="title" class="input-form-label" >Title <app-required/></label>
              <input type="text" placeholder="Title" v-model="form.title" id="title" name="title" class="input-form-control" required />
            </div>
            <div class="mb-6">
                <label for="file_name" class="input-form-label">Attachment <app-required/></label>
                <input type="file" ref="file" v-on:change="handleFileUpload"  id="file_name" name="file_name" class="input-form-control" required>
                <!-- <span v-if="errors.file_name">{{errors.file_name}}</span> -->
            </div>
            <div class="mb-6">
                <button type="submit" class="btn-blue">
                  {{submitting ? 'Submitting' : 'Submit'}}
                </button>
            </div>
          </form>
        </div>
        <div class="col-span-2">
          <table class="min-w-max w-full table-auto">
            <thead>
              <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th class="py-2 px-2 text-left">Title</th>
                <th class="py-2 px-2 text-left">File </th>
                <th class="py-2 px-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody class="text-gray-900 text-sm font-light">
              <template v-for="(attachment, index) in attachments" :key="index">
                <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-2 px-2 text-left whitespace-nowrap">{{attachment.title}}</td>
                  <td class="py-2 px-2 text-left whitespace-nowrap">
                    {{attachment.file_name}} <a :href="`https://spms.local/uploads/project/${attachment.file_name}`" download="" class="no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110"><i class="fa fa-download"></i></a>
                  </td>
                  <td class="py-2 px-2 text-center">
                    <button type="button" @click="item_id = attachment.id; togglePopup();" class="no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <delete-icon />
                    </button>
                  </td>
                </tr>
              </template>
              <tr v-if="!attachments.length">
                <td class="py-2 px-2 text-center" colspan="4">No Milestones found</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <app-confirm-delete v-show="showModal" modalHeadline="Delete Attachment?" deleteMessage="Are you sure?" @deleteRecordEvent="destroyRecord(item_id)" @close="togglePopup" ></app-confirm-delete>
</template>


<script>
import { onMounted, ref } from 'vue';
import useProjects from '../../../composables/project';
export default {
  props: {
    slug: {required: true, type: String}
  },
  setup(props) {
    const {slug} = props;
    const {project, getProjectBySlug, submitProjectAttachment, deleteAttachment} = useProjects();
    const attachments = ref([]);
    const submitting = ref(false);
    const item_id = ref(0);
    const showModal = ref(false);
    const file = ref(null);
    const form = ref({
      title: '',
      file_name: ''
    });

    onMounted(async () => {
      await getAttachments();
    });
    const getAttachments = async () => {
      await getProjectBySlug(slug,'attachment');
      attachments.value = project.value.attachments;
    }
    const handleFileUpload = (e) => {
      file.value = e.target.files[0];
    }

    const togglePopup = () => {
      showModal.value = !showModal.value;
    }

    const saveAttachment = async () => {
      submitting.value = true;
      const formData = new FormData();
      for(const key in form.value) {
        if(key === 'file_name'){
          formData.append('file_name', file.value);
        } else {
          formData.append(key, form.value[key]);
        }
      }
      await submitProjectAttachment(project.value.id, formData);
      await getAttachments();
      form.value.title = '';
      form.value.file_name = '';
      file.value = '';
      submitting.value = false;
    }
    const destroyRecord = async(itemId) => {
        await deleteAttachment(project.value.id, itemId);
        await getAttachments();
        togglePopup();
    }

    return {
      attachments,
      showModal,
      togglePopup,
      saveAttachment,
      handleFileUpload,
      item_id,
      submitting,
      project,
      slug,
      form,
      destroyRecord
    }
  },
}
</script>