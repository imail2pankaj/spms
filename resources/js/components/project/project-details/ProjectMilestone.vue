<template>
  <div class="flex justify-between flex-col md:flex-row mb-2">
    <h1 class="mt-3 text-2xl font-bold">
      {{project.title}} | Milestones
    </h1>
    <app-project-nav :slug="slug"></app-project-nav>
  </div>

  <div class="bg-white overflow-hidden shadow-sm rounded-lg">
    <div class="p-6 bg-white border-b border-gray-200">
      <div class="grid grid-cols-3 gap-4">
        <div class="">
          <form @submit.prevent="saveMilestone">
            <div class="mb-6">
              <label for="title" class="input-form-label" >Title <app-required/></label>
              <input type="text" placeholder="Title" v-model="form.title" id="title" name="title" class="input-form-control" required />
              <!-- <span class="input-error" v-if="errors.title">{{ errors.title }}</span> -->
            </div>
            <div class="mb-6">
              <label for="start_date" class="input-form-label" >Start Date <app-required/></label>
              <input type="date" placeholder="Start Date" v-model="form.start_date" id="start_date" name="start_date" class="input-form-control" required />
              <!-- <span class="input-error" v-if="errors.start_date">{{ errors.start_date }}</span> -->
            </div>
            <div class="mb-6">
              <label for="end_date" class="input-form-label" >End Date <app-required/></label>
              <input type="date" placeholder="End Date" v-model="form.end_date" id="end_date" name="end_date" class="input-form-control" required />
              <!-- <span class="input-error" v-if="errors.end_date">{{ errors.end_date }}</span> -->
            </div>
            <div class="mb-6">
                <button type="submit" class="btn-blue">
                  Submit
                </button>
            </div>
          </form>
        </div>
        <div class="col-span-2">
          <table class="min-w-max w-full table-auto">
            <thead>
              <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th class="py-2 px-2 text-left">Title</th>
                <th class="py-2 px-2 text-left">Start Date</th>
                <th class="py-2 px-2 text-left">End Date</th>
                <th class="py-2 px-2 text-center">Action</th>
              </tr>
            </thead>
            <tbody class="text-gray-900 text-sm font-light">
              <template v-for="(milestone, index) in milestones" :key="index">
                <tr class="border-b border-gray-200 hover:bg-gray-100">
                  <td class="py-2 px-2 text-left whitespace-nowrap">{{milestone.title}}</td>
                  <td class="py-2 px-2 text-left whitespace-nowrap">{{milestone.start_date}}</td>
                  <td class="py-2 px-2 text-left whitespace-nowrap">{{milestone.end_date}}</td>
                  <td class="py-2 px-2 text-center">
                    <button type="button" @click="item_id = milestone.id; togglePopup();" class="no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <delete-icon />
                    </button>
                  </td>
                </tr>
              </template>
              <tr v-if="!milestones.length">
                <td class="py-2 px-2 text-center" colspan="4">No Milestones found</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <app-confirm-delete v-show="showModal" modalHeadline="Delete Milestone?" deleteMessage="Are you sure?" @deleteRecordEvent="destroyRecord(item_id)" @close="togglePopup" ></app-confirm-delete>
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
    const milestones = ref([]);
    const showModal = ref(false);
    const item_id = ref(0);
    const {project, deleteMilestone, getProjectBySlug, getProjectMilestones, submitProjectMilestone} = useProjects();
    const form = ref({
      title : '',
      start_date : '',
      end_date : ''
    });

    onMounted(async () => {
      await getProjectBySlug(slug,'milestone');
      await fetchMilestones();
    })

    const fetchMilestones = async () => {
      milestones.value = await getProjectMilestones();
    }
    const togglePopup = () => {
      showModal.value = !showModal.value;
    }

    const destroyRecord = async (itemId) => {
      await deleteMilestone(project.value.id,itemId);
      await fetchMilestones();
      togglePopup();
    }
    const saveMilestone = async () => {

      // submitting.value = true;
      const formData = new FormData();
      for (const key in form.value) {
        formData.append(key, form.value[key]);
      }
      await submitProjectMilestone(project.value.id, formData)
      await fetchMilestones();
      // submitting.value = false;
    }

    return {
      project,
      form,
      slug,
      saveMilestone,
      item_id,
      milestones,
      destroyRecord,
      showModal,
      togglePopup,
    }
  },
}
</script>