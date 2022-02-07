<template>
  <div class="flex justify-between mb-2">
    <h1 class="text-2xl font-bold">
      Holiday Create
    </h1>
    <router-link :to="{name:'holiday.index'}" class="link-blue">
      List
    </router-link>
  </div>
  <form @submit.prevent="saveHoliday">
    <div class="bg-white overflow-hidden shadow-sm rounded-lg">
      <div class="bg-white border-b border-gray-200">
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div class="md:grid md:grid-cols-2 md:gap-6 mb-6">
              <div>
                  <label for="title" class="input-form-label">Title <app-required /></label>
                  <input type="text" placeholder="Title" v-model="form.title" id="title" name="title" class="input-form-control" required >
                  <span class="input-error" v-if="errors.title">{{errors.title}}</span>
              </div>
              <div>
                  <label for="holiday_date" class="input-form-label">Date <app-required /></label>
                  <input type="date" v-model="form.holiday_date" id="holiday_date" name="holiday_date" class="input-form-control" placeholder="Joining Date" required >
                  <span class="input-error" v-if="errors.holiday_date">{{errors.holiday_date}}</span>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-left sm:px-6">
            <button type="submit" class="btn-blue" :disabled="submitting">
              {{submitting ? 'Saving' : "Save"}}
            </button>
          </div>
      </div>
    </div>
  </form>
</template>

<script>
import { onMounted, ref } from 'vue';
import useHolidays from "../../composables/holiday";
export default {
  setup() {
    const submitting = ref(false);
    const {errors, storeHoliday} = useHolidays();
    const form = ref({
        title: '',
        holiday_date: '',
    });

    const saveHoliday = async () => {
      submitting.value = true;
      const formData = new FormData();
      for(const key in form.value) {
          formData.append(key, form.value[key]);
      }
      await storeHoliday(formData);
      submitting.value = false;
    }
    return {
      form,
      errors,
      saveHoliday,
      submitting,
}
  },
}
</script>