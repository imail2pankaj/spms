<template>
  <nav class="mt-5 space-y-1 border-0 border-t border-yellow-500">
    <ul>
    <li v-for="(route, index) in primaryRoutes" :key="index">
      <router-link
        v-if="route.meta.roles.includes(user.role)"
        :to="{ name: route.name }"
        exact
        class="hover:bg-gray-50 text-gray-600 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
      >
        {{ route.meta.title }}
      </router-link>
    </li>
    </ul>
    <h3 class="bg-yellow-500 p-2 font-semibold uppercase text-sm text-white">Active Projects</h3>
    <router-link
      v-for="(project, index) in user.active_projects"
      :key="index"
      :to="{ name: 'project.task', params: {'slug' : project.slug} }"
      exact
      class="hover:bg-gray-50 text-gray-600 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
    >
      {{ project.title }}
    </router-link>
    <h3 class="bg-yellow-500 p-2 font-semibold uppercase text-sm text-white">Hold Projects</h3>
    <router-link
      v-for="(project, index) in user.hold_projects"
      :key="index"
      :to="{ name: 'project.task', params: {'slug' : project.slug} }"
      exact
      class="hover:bg-gray-50 text-gray-600 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
    >
      {{ project.title }}
    </router-link>
  </nav>
</template>

<script>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);
    const router = useRouter();
    const primaryRoutes = computed(() => router.options.routes.filter(route => route.meta.primary));

    return {
      // Data
      user,
      primaryRoutes
    }
  }
};
</script>
