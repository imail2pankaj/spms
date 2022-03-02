<template>
  <div class="flex justify-between mb-2">
    <h1 class="text-2xl font-bold">Project Create</h1>
    <router-link :to="{ name: 'project.index' }" class="link-blue">
      List
    </router-link>
  </div>
  <form @submit.prevent="saveProject">
    <div class="bg-white overflow-hidden shadow-sm rounded-lg">
      <div class="bg-white border-b border-gray-200">
        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div class="md:grid md:grid-cols-4 md:gap-6 mb-6">
            <div>
              <label for="title" class="input-form-label" >Project Title <app-required/></label>
              <input type="text" placeholder="Project Title" v-model="form.title" id="title" name="title" class="input-form-control" required />
              <span class="input-error" v-if="errors.title">{{ errors.title }}</span>
            </div>
            <div>
              <label for="project_type" class="input-form-label">Project Type</label>
              <select v-model="form.project_type" name="project_type" id="project_type" class="input-form-control" >
                <option v-for="item in projectTypeOptions" :key="item" :value="item" >
                  {{ item }}
                </option>
              </select>
            </div>
            <div>
              <label for="internal_non_project" class="input-form-label" >Internal/Non/Client</label>
              <select v-model="form.internal_non_project" name="internal_non_project" id="internal_non_project" class="input-form-control">
                <option v-for="item in internalNonProject" :key="item" :value="item" >
                  {{ item }}
                </option>
              </select>
            </div>
            <div>
              <label for="project_status" class="input-form-label" >Project Status</label>
              <select v-model="form.project_status" name="project_status" id="project_status" class="input-form-control">
                <option v-for="item in projectStatusOptions" :key="item" :value="item" >
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
          <div class="md:grid md:grid-cols-4 md:gap-6 mb-6">
            <div>
              <label for="approx_hours" class="input-form-label">Approx Hours <app-required/></label>
              <input
                type="number"
                placeholder="Approx. Hours"
                v-model="form.approx_hours"
                id="approx_hours"
                name="approx_hours"
                class="input-form-control"
                required
              />
              <span class="input-error" v-if="errors.approx_hours">{{
                errors.approx_hours
              }}</span>
            </div>
            <div>
              <label for="project_cost" class="input-form-label"
                >Project Cost <app-required/></label>
              <input
                type="number"
                placeholder="Project Cost"
                v-model="form.project_cost"
                id="project_cost"
                name="project_cost"
                class="input-form-control"
                required
              />
              <span class="input-error" v-if="errors.project_cost">{{
                errors.project_cost
              }}</span>
            </div>
            <div>
              <label for="start_date" class="input-form-label"
                >Start Date</label
              >
              <input
                type="date"
                v-model="form.start_date"
                id="start_date"
                name="start_date"
                class="input-form-control"
                placeholder="Start Date"
              />
              <span class="input-error" v-if="errors.start_date">{{
                errors.start_date
              }}</span>
            </div>
            <div>
              <label for="end_date" class="input-form-label"
                >End Date</label
              >
              <input
                type="date"
                v-model="form.end_date"
                id="end_date"
                name="end_date"
                class="input-form-control"
                placeholder="End Date"
              />
              <span class="input-error" v-if="errors.end_date">{{
                errors.end_date
              }}</span>
            </div>
          </div>

          <div class="md:grid md:grid-cols-3 md:gap-6 mb-6">
            <div>
              <label for="pm" class="input-form-label">Project Manager</label>
              <select v-model="form.pm" name="pm" id="pm" class="input-form-control" multiple>
                <option v-for="item in usersOptions.pm" :key="item.id" :value="item.id">
                  {{ item.first_name }} {{ item.last_name }}
                </option>
              </select>
            </div>
            <div>
              <label for="developer" class="input-form-label">Developer</label>
              <select v-model="form.developer" name="developer" id="developer" class="input-form-control" multiple>
                <option v-for="item in usersOptions.developer" :key="item.id" :value="item.id">
                  {{ item.first_name }} {{ item.last_name }}
                </option>
              </select>
            </div>
            <div>
              <label for="designer" class="input-form-label">Designer</label>
              <select v-model="form.designer" name="designer" id="designer" class="input-form-control" multiple>
                <option v-for="item in usersOptions.designer" :key="item.id" :value="item.id">
                  {{ item.first_name }} {{ item.last_name }}
                </option>
              </select>
            </div>
            <div>
              <label for="qa" class="input-form-label">QA</label>
              <select v-model="form.qa" name="qa" id="qa" class="input-form-control" multiple>
                <option v-for="item in usersOptions.qa" :key="item.id" :value="item.id">
                  {{ item.first_name }} {{ item.last_name }}
                </option>
              </select>
            </div>
            <div>
              <label for="bde" class="input-form-label">BDE</label>
              <select v-model="form.bde" name="bde" id="bde" class="input-form-control" multiple>
                <option v-for="item in usersOptions.bde" :key="item.id" :value="item.id">
                  {{ item.first_name }} {{ item.last_name }}
                </option>
              </select>
            </div>
            <div>
              <label for="customer" class="input-form-label">Customer</label>
              <select v-model="form.customer" name="customer" id="customer" class="input-form-control" multiple>
                <option v-for="item in usersOptions.customer" :key="item.id" :value="item.id">
                  {{ item.first_name }} {{ item.last_name }}
                </option>
              </select>
            </div>
          </div>

          <div class="md:grid md:grid-cols-1 md:gap-6 mb-6">
            <div>
              <label for="description" class="input-form-label">Description</label>
              <ckeditor :editor="editor" v-model="form.description"></ckeditor>
              <span v-if="errors.description">{{errors.description}}</span>
            </div>
            <div>
              <label for="note" class="input-form-label">Notes</label>
              <textarea class="input-form-control" v-model="form.note"></textarea>
              <span v-if="errors.note">{{errors.note}}</span>
            </div>
          </div>
        </div>
        <div class="px-4 py-3 bg-gray-50 text-left sm:px-6">
          <button type="submit" class="btn-blue">
            {{ submitting ? "Saving" : "Save" }}
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { projectStatusOptions, projectTypeOptions, internalNonProject } from "../../utils";
import useProjects from "../../composables/project";
export default {
  setup() {
    const submitting = ref(false);
    const { errors, storeProject, usersOptions, getUsersDropdown } = useProjects();
    const profile_image = ref(null);
    const resume_file = ref(null);
    const form = ref({
        title: '',
        description: '',
        start_date: '',
        end_date: '',
        approx_hours: '',
        internal_non_project: 'Internal',
        project_type: '',
        project_cost: '',
        project_status: '',
        developer: [],
        qa: [],
        bde: [],
        pm: [],
        designer: [],
        customer: [],
    });

    onMounted(async () => {
      await getUsersDropdown();
    });

    const handleFileUpload = (e, file_type) => {
      e.preventDefault();
      e.stopPropagation();
      if (file_type === "profile_image") {
        profile_image.value = e.target.files[0];
      } else if (file_type === "resume_file") {
        resume_file.value = e.target.files[0];
      }
    };

    const saveProject = async () => {
      submitting.value = true;
      const formData = new FormData();
      for (const key in form.value) {
        if (key === "profile_image") {
          formData.append(key, profile_image.value);
        } else if (key === "resume_file") {
          formData.append(key, resume_file.value);
        } else {
          formData.append(key, form.value[key]);
        }
      }
      await storeProject(formData);
      submitting.value = false;
    };
    return {
      form,
      errors,
      saveProject,
      submitting,
      usersOptions,
      projectStatusOptions,
      projectTypeOptions,
      handleFileUpload,
      internalNonProject,
      editor: ClassicEditor,
    };
  },
};
</script>