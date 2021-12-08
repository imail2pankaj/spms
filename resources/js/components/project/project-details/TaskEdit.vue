<template>
  <div class="fixed inset-0 flex justify-end z-40">
    <div class="fixed inset-0">
      <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
    </div>
    <transition name="slide-from-left">
      <div class="relative flex-1 flex flex-col max-w-xs md:max-w-sm lg:max-w-lg bg-white">
        <div class="absolute top-0 left-0 -ml-12 pt-2">
          <button @click="goBack()" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none">
            <span class="sr-only">Close</span>
            <svg
              class="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form @submit.prevent="saveTask">
          <div class="block pt-4 pb-4 overflow-y-auto">
            <div class="block w-full px-4 mb-12">
              <h3 class="input-form-sub-heading mb-4 w-full" :style="{paddingTop:0}">{{task.title ?? "Edit Task" }}</h3>
              <div class="mb-6">
                <label for="title" class="input-form-label">Title <app-required/></label>
                <input type="text" placeholder="Task Title" v-model="task.title" class="input-form-control" required />
                <span class="input-error" v-if="errors.title">{{ errors.title }}</span>
              </div>
              <div class="mb-6">
                <label for="description" class="input-form-label">Description <app-required/></label>
                <textarea type="text" placeholder="Task description" v-model="task.description" class="input-form-control" required></textarea>
                <span class="input-error" v-if="errors.description">{{ errors.description }}</span>
              </div>
              <div class="md:grid md:grid-cols-2 md:gap-6 mb-6">
                <div>
                  <label for="task_type" class="input-form-label">Task Type</label>
                  <select v-model="task.task_type" class="input-form-control">
                    <option v-for="item in taskTypeOptions" :key="item" :value="item" >
                      {{ item }}
                    </option>
                  </select>
                </div>

                <div>
                  <label for="priority" class="input-form-label">Task Priority</label>
                  <select v-model="task.priority" class="input-form-control" >
                    <option v-for="item in priorityOptions" :key="item" :value="item">
                      {{ item }}
                    </option>
                  </select>
                </div>
              </div>


              <div class="md:grid md:grid-cols-2 md:gap-6 mb-6">
                <div class="mb-6">
                  <label for="due_date" class="input-form-label">Due Date <app-required/></label>
                  <input type="date" placeholder="Task Due Date" v-model="task.due_date" class="input-form-control" required />
                  <span class="input-error" v-if="errors.due_date">{{ errors.due_date }}</span>
                </div>
                <div>
                  <label for="completion_rate" class="input-form-label">Completed<app-required/></label>
                  <input type="range" step="1" min="0" max="100" class="w-full" v-model="task.completion_rate"><br/>
                  <span class="text-xs text-gray-400">{{task.completion_rate}}%</span>
                </div>
              </div>
            </div>
            <div class="absolute bottom-0 right-0 w-full">
              <div class="px-4 py-3 bg-gray-200 text-left sm:px-6">
                <button type="submit" class="btn-blue">
                  Save
                </button>
                <button @click="goBack()" type="button" class="btn-red ml-3">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </transition>
    <div class="flex-shrink-0"></div>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import useProjects from '../../../composables/project';
import {taskTypeOptions, priorityOptions} from '../../../utils';

export default {
  props: {
    slug: { required: true, type: String},
    id: { required: true, type: String}
  },
  setup(props) {
    const router = useRouter();
    const {id, slug} = props;
    const { task, errors, getTask, updateTask } = useProjects();

    onMounted(async () => {
      await getTask(id);
    });

    const saveTask = async () => {
      task.value['_method'] = 'put';
      await updateTask(id, task.value);
      goBack();
    }
    const goBack = () => {
      router.push({name: 'project.task', params: {slug: slug}})
    }

    return {
      task,
      errors,
      saveTask,
      taskTypeOptions,
      priorityOptions,
      goBack
    }
  },
}
</script>