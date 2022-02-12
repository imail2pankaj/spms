<template>
  <div class="flex justify-between mb-2">
    <h1 class="text-2xl font-bold">
      Leave Create
    </h1>
    <router-link :to="{name:'leave.index'}" class="link-blue">
      List
    </router-link>
  </div>
  <form @submit.prevent="saveLeave">
    <div class="bg-white overflow-hidden shadow-sm rounded-lg">
      <div class="bg-white border-b border-gray-200">
          <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
            <div class="mb-6">
                <label for="description" class="input-form-label">Description <app-required /></label>
                <textarea placeholder="Description" v-model="form.description" id="description" name="description" class="input-form-control" required ></textarea>
                <span class="input-error" v-if="errors.description">{{errors.description}}</span>
            </div>
            <div class="md:grid md:grid-cols-3 md:gap-6">

              <div class="mb-6">
                  <label for="start_date" class="input-form-label">Date <app-required /></label>
                  <input type="date" @change="handleDate" v-model="form.start_date" id="start_date" name="start_date" class="input-form-control" placeholder="Joining Date" required >
                  <span class="input-error" v-if="errors.start_date">{{errors.start_date}}</span>
              </div>

              <div class="mb-6">
                  <label for="end_date" class="input-form-label">End Date <app-required /></label>
                  <input type="date" @change="handleDate" v-model="form.end_date" id="end_date" name="end_date" class="input-form-control" placeholder="Joining Date" required >
                  <span class="input-error" v-if="errors.end_date">{{errors.end_date}}</span>
              </div>

              <div class="mb-6">
                  <label for="type" class="input-form-label">Type</label>
                  <select v-model="form.type" name="type" id="type" class="input-form-control">
                    <option v-for="item in leaveTypeOptions" :key="item" :value="item">
                      {{item}} Day
                    </option>
                  </select>
              </div>

              <div class="mb-6" v-if="managementRoles().includes(user.role)">
                  <label for="status" class="input-form-label">Status</label>
                  <select v-model="form.status" name="status" id="status" class="input-form-control">
                    <option v-for="item in leaveStatusOptions" :key="item" :value="item">
                      {{item}}
                    </option>
                  </select>
              </div>

              <div class="mb-6" v-if="form.status !== 'Applied'">
                  <label for="comment" class="input-form-label">Comment</label>
                  <textarea placeholder="Comment" v-model="form.comment" id="comment" name="comment" class="input-form-control"></textarea>
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-left sm:px-6">
            <button type="submit" class="btn-blue" :disabled="disabled || submitting">
              {{submitting ? 'Saving' : "Save"}}
            </button>
            <span v-if="diffDays >=0"> Leave {{diffDays + 1}} Day(s)</span>
          </div>
      </div>
    </div>
  </form>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import moment from 'moment';
import useLeaves from "../../composables/leave";
import { leaveStatusOptions, leaveTypeOptions, managementRoles } from "../../utils";
export default {
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);
    const diffDays = ref(0);
    const submitting = ref(false);
    const disabled = ref(false);
    const {errors, storeLeave} = useLeaves();
    const form = ref({
        description: '',
        comment: '',
        start_date: moment().format("YYYY-MM-DD"),
        end_date: moment().format("YYYY-MM-DD"),
        type: 'Half',
        status: 'Applied',
    });

    const saveLeave = async () => {
      submitting.value = true;
      const formData = new FormData();
      for(const key in form.value) {
          formData.append(key, form.value[key]);
      }
      await storeLeave(formData);
      submitting.value = false;
    }
    const handleDate = (e) => {
      var start = moment(form.value.start_date, "YYYY-MM-DD");
      var end = moment(form.value.end_date, "YYYY-MM-DD");
      if(start > end) {
        errors.value.end_date = 'End date can not be less than start date';
        disabled.value = true;
      } else {
        errors.value.end_date = '';
        disabled.value = false;
      }
      diffDays.value = moment.duration(end.diff(start)).asDays();
      if(diffDays >= 1) {
        form.value.type = 'Full';
      } else {
        form.value.type = 'Half';
      }
    }
    return {
      form,
      errors,
      saveLeave,
      submitting,
      handleDate,
      managementRoles,
      user,
      disabled,
      leaveStatusOptions,
      leaveTypeOptions,
      diffDays
    }
  },
}
</script>