<template>
  <div class="flex-shrink-0 flex border-t border-gray-200">
    <router-link
      :to="{ name: 'user-profile' }"
      exact
      class="flex-shrink-0 w-full group block p-4"
    >
      <div class="flex items-center">
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
          <p
            class="text-base font-medium text-gray-700 group-hover:text-gray-900"
          >
            {{ user.first_name }} {{ user.last_name }}
          </p>
          <p
            class="text-sm font-medium text-gray-500 group-hover:text-gray-700"
          >
            View profile
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);

    return {
      user,
    };
  },
};
</script>
