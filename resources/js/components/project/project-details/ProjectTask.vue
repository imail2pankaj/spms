<template>
  <div class="flex justify-between mb-2">
    <h1 class="mt-3 text-2xl font-bold">{{ project.title }} | Tasks</h1>
    <app-project-nav :slug="slug"></app-project-nav>
  </div>

  <div class="bg-white overflow-hidden shadow-sm rounded-lg">
    <div class="p-6 bg-white border-b border-gray-200">
      <div class="md:grid md:grid-cols-3 md:gap-6 mb-6">
        <div class="block">
          <h3 class="input-form-sub-heading mb-4" :style="{paddingTop:0}">Created</h3>
          <div class="shadow-md p-4 rounded-md border border-gray-200 mb-4">
            <form @submit.prevent="saveTask">
              <input
                type="text"
                placeholder="Enter task title"
                name="task_title"
                autocomplete="off"
                v-model="task_title"
                class="input-form-control"
              />
              <div class="flex justify-between mt-2">
                <span class="pt-0.5 text-xs text-gray-400"
                  >Press enter to save task</span
                >
                <button type="submit" class="link-blue text-xs p-1 pull-right">
                  Save
                </button>
              </div>
            </form>
          </div>

          <div>
            <TaskItem
              v-for="(task, index) in tasks.created"
              :key="index"
              :task="task"
            ></TaskItem>
          </div>
        </div>
        <div class="block">
          <h3 class="input-form-sub-heading mb-4" :style="{paddingTop:0}">Active</h3>
          <div>
            <!-- <TaskItem
              v-for="(task, index) in project.created"
              :key="index"
              :task="task"
            ></TaskItem> -->
          </div>
        </div>
        <div class="block">
          <h3 class="input-form-sub-heading mb-4" :style="{paddingTop:0}">Completed</h3>
          <div>
            <!-- <TaskItem
              v-for="(task, index) in project.created"
              :key="index"
              :task="task"
            ></TaskItem> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view v-bind="$attrs" v-slot="{ Component }" @clicked="onClickChild">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>


<script>
import { onMounted, ref, watchEffect, watch, computed } from "vue";
import useProjects from "../../../composables/project";
import TaskItem from "../../common/TaskItem";
import { useRoute } from 'vue-router';
export default {
  components: { TaskItem },
  props: {
    slug: { required: true, type: String },
  },
  setup(props) {
    const route = useRoute()
    const { slug } = props;
    const { project, storeTask, getProjectBySlug, getTasks } = useProjects();
    const task_title = ref(null);
    const tasks = ref({created: [], active: [], completed:[]});

    onMounted(async () => {
        await getProjectBySlug(slug, "task");
        tasks.value.created = [];
        tasks.value = await getTasks();
    });
    watch(
      () => route.params.slug,
      async newSlug => {
        if(newSlug){
          await getProjectBySlug(newSlug, "task");
          tasks.value.created = [];
          tasks.value = await getTasks();
        }
      }
    );

    const saveTask = async () => {
      if (task_title.value) {
        await storeTask(project.value.id, { title: task_title.value });
        await getProjectBySlug(slug, "task");
        task_title.value = "";
      }
    };

    const onClickChild = async (value) => {
      setTimeout(async () => {
        await getProjectBySlug(slug, "task");
        tasks.value = await getTasks();
      }, 3000);
    }
    return {
      task_title,
      tasks,
      saveTask,
      project,
      slug,
      onClickChild,
    };
  },
};
</script>