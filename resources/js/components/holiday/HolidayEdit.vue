<template>
  <div class="flex justify-between mb-2">
    <h1 class="text-2xl font-bold">
      Holiday Edit
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
                  <input type="text" placeholder="Title" v-model="holiday.title" id="title" name="title" class="input-form-control" required >
                  <span class="input-error" v-if="errors.title">{{errors.title}}</span>
              </div>
              <div>
                  <label for="holiday_date" class="input-form-label">Date <app-required /></label>
                  <input type="date" v-model="holiday.holiday_date" id="holiday_date" name="holiday_date" class="input-form-control" placeholder="Date" required >
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
  props: {
    id: {required: true, type: String}
  },
  setup(props) {
    const submitting = ref(false);
    const { id } = props;
    const {errors, holiday, updateHoliday, getHoliday} = useHolidays();

    onMounted(async () => {
      await getHoliday(id);
    });

    const saveHoliday = async () => {
      submitting.value = true;
      const formData = new FormData();
      for(const key in holiday.value) {
          formData.append(key, holiday.value[key]);
      }
      formData.append('_method', 'PATCH');

      await updateHoliday(id, formData);
      submitting.value = false;
    }
    return {
      holiday,
      errors,
      saveHoliday,
      submitting
    }
  },
}
</script>