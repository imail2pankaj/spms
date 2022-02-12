<template>
  <div class="flex-shrink-0 flex border-t border-gray-200">
    <div class="relative w-full">

      <div
        class="flex-shrink-0 w-full group block profile-section"
      >
        <div class="flex items-center px-4 py-4 ">
          <div>
            <img v-if="user.profile_image != 'null' && user.profile_image != null"
              class="inline-block h-10 w-10 rounded-full"
              :src="'/uploads/user/profile_image/' + user.profile_image"
              alt=""
            />
            <img v-else
              class="inline-block h-10 w-10 rounded-full"
              :src="'https://ui-avatars.com/api/?name=' + user.first_name + ' ' + user.last_name + '&rounded=true&background=a0a0a0'"
              alt=""
            />
          </div>
          <div class="ml-3">
            <p class="text-base font-medium text-gray-700 group-hover:text-gray-900" >
              {{ user.first_name }} {{ user.last_name }}
            </p>
            <router-link :to="{ name: 'user-profile' }" style="background:transparent !important" class="text-sm font-medium text-gray-500 bg-transparent dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600" >
              View profile
            </router-link>
          </div>
        </div>
        <div :class="`profile-section-sub flex-shrink-0 absolute w-11/12 bottom-20 mt-2 rounded-md shadow-lg mx-auto right-3`">
          <div class="bg-white rounded-md shadow dark-mode:bg-gray-800">
            <template  v-for="(route, index) in profileRoutes" :key="index">
              <router-link
                :to="{ name: route.name }"
                exact
                class="hover:bg-gray-50 text-gray-600 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
              >
                {{ route.meta.title }}
              </router-link>
            </template>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);
    const router = useRouter();
    const profileRoutes = computed(() => router.options.routes.filter(route => route.meta.profile));

    return {
      user,
      profileRoutes
    };
  },
};
</script>
<style>
.profile-section {
  cursor: pointer;
}
.profile-section-sub {
  display: none;
}
.profile-section:hover .profile-section-sub {
  display: block;
}
</style>