<template>
  <div class="flex justify-between mb-2">
    <h1 class="text-2xl font-bold">Contact Edit</h1>
    <router-link :to="{ name: 'contacts.index' }" class="link-blue">
      List
    </router-link>
  </div>
  <form @submit="saveContact">
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
              v-model="contact.name"
              id="name"
              name="name"
              class="input-form-control"
              required
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
              v-model="contact.email"
              id="email"
              name="email"
              class="input-form-control"
              required
            />
            <span class="input-error" v-if="errors.email">{{
              errors.email
            }}</span>
          </div>
          <div class="mb-6">
            <label for="phone" class="input-form-label"
              >Phone<app-required
            /></label>
            <input
              type="tel"
              placeholder="(+91) 123-456-789"
              v-model="contact.phone"
              id="phone"
              name="phone"
              class="input-form-control"
              required
            />
            <span class="input-error" v-if="errors.phone">{{
              errors.phone
            }}</span>
          </div>
          <div class="mb-6">
            <label for="business_name" class="input-form-label"
              >Business Name<app-required
            /></label>
            <input
              type="text"
              placeholder="Enter Business Name"
              v-model="contact.business_name"
              id="business_name"
              name="business_name"
              class="input-form-control"
              required
            />
            <span class="input-error" v-if="errors.business_name">{{
              errors.business_name
            }}</span>
          </div>
          <div class="mb-6">
            <label for="city" class="input-form-label"
              >City<app-required
            /></label>
            <input
              type="text"
              placeholder="Enter City Name"
              v-model="contact.city"
              id="city"
              name="city"
              class="input-form-control"
              required
            />
            <span class="input-error" v-if="errors.city">{{
              errors.city
            }}</span>
          </div>
          <div class="mb-6">
            <label for="country" class="input-form-label"
              >Country<app-required
            /></label>
            <input
              type="text"
              placeholder="Enter Country Name"
              v-model="contact.country"
              id="country"
              name="country"
              class="input-form-control"
              required
            />
            <span class="input-error" v-if="errors.country">{{
              errors.country
            }}</span>
          </div>

          <div class="px-4 py-3 bg-gray-50 text-left sm:px-6">
            <button type="submit" class="btn-blue" :disabled="submitting">
              {{ submitting ? "Saving" : "Save" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { onMounted, ref, computed } from "vue";
import { useStore } from "vuex";
import useContacts from "../../composables/contacts";

export default {
  props: {
    id: { required: true, type: String },
  },

  setup(props) {
    const store = useStore();
    const user = computed(() => store.state.user);
    const submitting = ref(false);
    const disabled = ref(false);
    const { id } = props;
    const { errors, contact, updateContact, getContact } = useContacts();

    onMounted(async () => {
      await getContact(id);
    });

    const saveContact = async () => {
      submitting.value = true;
      const formData = new FormData();
      for (const key in contact.value) {
        formData.append(key, contact.value[key]);
      }
      formData.append("_method", "PATCH");

      await updateContact(id, formData);
      submitting.value = false;
    };

    return {
      contact,
      errors,
      user,
      saveContact,
      submitting,
      disabled,
    };
  },
};
</script>