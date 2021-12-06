<template>
  <div class="flex justify-between mb-2">
    <h1 class="text-2xl font-bold">
      Project Edit
    </h1>
    <router-link :to="{name:'project.index'}" class="link-blue">
      List
    </router-link>
  </div>
<form @submit.prevent="saveProject">
    <div class="bg-white overflow-hidden shadow-sm rounded-lg">
      <div class="bg-white border-b border-gray-200">
        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div class="md:grid md:grid-cols-3 md:gap-6 mb-6">
            <div>
              <label for="title" class="input-form-label"
                >Project Title <app-required/></label>
              <input
                type="text"
                placeholder="Project Title"
                v-model="project.title"
                id="title"
                name="title"
                class="input-form-control"
                required
              />
              <span class="input-error" v-if="errors.title">{{
                errors.title
              }}</span>
            </div>
            <div>
              <label for="project_type" class="input-form-label">Project Type</label>
              <select
                v-model="project.project_type"
                name="project_type"
                id="project_type"
                class="input-form-control"
              >
                <option
                  v-for="item in projectTypeOptions"
                  :key="item"
                  :value="item"
                >
                  {{ item }}
                </option>
              </select>
            </div>
            <div>
              <label for="project_status" class="input-form-label"
                >Project Status</label
              >
              <select
                v-model="project.project_status"
                name="project_status"
                id="project_status"
                class="input-form-control"
              >
                <option
                  v-for="item in projectStatusOptions"
                  :key="item"
                  :value="item"
                >
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
                v-model="project.approx_hours"
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
                v-model="project.project_cost"
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
                v-model="project.start_date"
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
                v-model="project.end_date"
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
              <select v-model="project.pm" name="pm" id="pm" class="input-form-control" multiple>
                <option v-for="item in usersOptions.pm" :key="item.id" :value="item.id">
                  {{ item.first_name }} {{ item.last_name }}
                </option>
              </select>
            </div>
            <div>
              <label for="developer" class="input-form-label">Developer</label>
              <select v-model="project.developer" name="developer" id="developer" class="input-form-control" multiple>
                <option v-for="item in usersOptions.developer" :key="item.id" :value="item.id">
                  {{ item.first_name }} {{ item.last_name }}
                </option>
              </select>
            </div>
            <div>
              <label for="designer" class="input-form-label">Designer</label>
              <select v-model="project.designer" name="designer" id="designer" class="input-form-control" multiple>
                <option v-for="item in usersOptions.designer" :key="item.id" :value="item.id">
                  {{ item.first_name }} {{ item.last_name }}
                </option>
              </select>
            </div>
            <div>
              <label for="qa" class="input-form-label">QA</label>
              <select v-model="project.qa" name="qa" id="qa" class="input-form-control" multiple>
                <option v-for="item in usersOptions.qa" :key="item.id" :value="item.id">
                  {{ item.first_name }} {{ item.last_name }}
                </option>
              </select>
            </div>
            <div>
              <label for="bde" class="input-form-label">BDE</label>
              <select v-model="project.bde" name="bde" id="bde" class="input-form-control" multiple>
                <option v-for="item in usersOptions.bde" :key="item.id" :value="item.id">
                  {{ item.first_name }} {{ item.last_name }}
                </option>
              </select>
            </div>
            <div>
              <label for="customer" class="input-form-label">Customer</label>
              <select v-model="project.customer" name="customer" id="customer" class="input-form-control" multiple>
                <option v-for="item in usersOptions.customer" :key="item.id" :value="item.id">
                  {{ item.first_name }} {{ item.last_name }}
                </option>
              </select>
            </div>
          </div>

          <div class="md:grid md:grid-cols-1 md:gap-6 mb-6">
            <div>
              <label for="description" class="input-form-label">Description</label>
              <ckeditor :editor="editor" v-model="project.description"></ckeditor>
              <span v-if="errors.description">{{errors.description}}</span>
            </div>
            <div>
              <label for="note" class="input-form-label">Notes</label>
              <textarea class="input-form-control" v-model="project.note"></textarea>
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
import { onMounted, ref } from 'vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {projectTypeOptions, projectStatusOptions} from '../../utils';
import useProjects from "../../composables/project";
export default {
  props: {
    id: {required: true, type: String}
  },
  setup(props) {
    const submitting = ref(false);
    const { id } = props;
    const {errors, project, updateProject, getProject, usersOptions, getUsersDropdown} = useProjects();

    onMounted(async () => {
      await getUsersDropdown();
      await getProject(id);
    });

    const saveProject = async () => {
      submitting.value = true;
      const formData = new FormData();
      for(const key in project.value) {
        formData.append(key, project.value[key]);
      }
      formData.append('_method', 'PATCH');

      await updateProject(id, formData);
      submitting.value = false;
    }
    return {
      project,
      errors,
      saveProject,
      submitting,
      usersOptions,
      projectTypeOptions,
      projectStatusOptions,
      editor: ClassicEditor,
}
  },
}
</script>