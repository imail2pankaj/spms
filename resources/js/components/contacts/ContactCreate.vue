<template>
  <div class="flex justify-between mb-2">
    <h1 class="text-2xl font-bold">Create Contact</h1>
    <router-link :to="{ name: 'contacts.index' }" class="link-blue">
      List
    </router-link>
  </div>
  <!-- {{ error }} -->
  <form @submit.prevent="saveContact">
    <div class="bg-white overflow-hidden shadow-sm rounded-lg">
      <div class="bg-white border-b border-gray-200">
        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
          <div class="mb-6">
            <label for="name" class="input-form-label"
              >Name <app-required
            /></label>
            <input
              type="text"
              placeholder="Name"
              v-model="form.name"
              id="name"
              name="name"
              class="input-form-control"
            />
            <span class="input-error" v-if="errors.name">{{
              errors.name
            }}</span>
          </div>
          <div class="mb-6">
            <label for="email" class="input-form-label"
              >Email <app-required
            /></label>
            <input
              type="email"
              placeholder="mail@gmail.com"
              v-model="form.email"
              id="email"
              name="email"
              class="input-form-control"
            />
            <span class="input-error" v-if="errors.email">{{
              errors.email
            }}</span>
          </div>
          <div class="mb-6">
            <label for="phone" class="input-form-label"
              >Phone <app-required
            /></label>
            <input
              type="tel"
              placeholder="(+91) 123-456-789"
              v-model="form.phone"
              id="phone"
              name="phone"
              class="input-form-control"
            />
            <span class="input-error" v-if="errors.phone">{{
              errors.phone
            }}</span>
          </div>
          <div class="mb-6">
            <label for="business_name" class="input-form-label"
              >Business Name <app-required
            /></label>
            <input
              type="text"
              placeholder="Enter Business Name"
              v-model="form.business_name"
              id="business_name"
              name="business_name"
              class="input-form-control"
            />
            <span class="input-error" v-if="errors.business_name">{{
              errors.business_name
            }}</span>
          </div>
          <div class="mb-6">
            <label for="city" class="input-form-label"
              >City <app-required
            /></label>
            <input
              type="text"
              placeholder="Enter City Name"
              v-model="form.city"
              id="city"
              name="city"
              class="input-form-control"
            />
            <span class="input-error" v-if="errors.city">{{
              errors.city
            }}</span>
          </div>
          <div class="mb-6">
            <label for="country" class="input-form-label"
              >Country <app-required
            /></label>
            <input
              type="text"
              placeholder="Enter Country Name"
              v-model="form.country"
              id="country"
              name="country"
              class="input-form-control"
            />
            <span class="input-error" v-if="errors.country">{{
              errors.country
            }}</span>
          </div>
        </div>
        <div class="px-4 py-3 bg-gray-50 text-left sm:px-6">
          <button
            type="submit"
            class="btn-blue"
            :disabled="disabled || submitting"
          >
            {{ submitting ? "Saving" : "Save" }}
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import useContacts from "../../composables/contacts";
export default {
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);
    const submitting = ref(false);
    const disabled = ref(false);
    const { errors, storeContact } = useContacts();

    const form = ref({
      name: "",
      email: "",
      phone: "",
      business_name: "",
      city: "",
      country: "",
    });

    const saveContact = async () => {
      submitting.value = true;
      const formData = new FormData();
      for (const key in form.value) {
        formData.append(key, form.value[key]);
      }
      await storeContact(formData);
      submitting.value = false;
    };

    return {
      form,
      errors,
      saveContact,
      submitting,
      user,
      disabled,
    };
  },
};
</script>