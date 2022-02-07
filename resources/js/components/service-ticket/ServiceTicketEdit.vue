<template>
  <div class="flex justify-between mb-2">
    <h1 class="text-2xl font-bold">
      Service Ticket Edit
    </h1>
    <router-link :to="{name:'service-ticket.index'}" class="link-blue">
      List
    </router-link>
  </div>
  <div class="bg-white overflow-hidden shadow-sm rounded-lg">
    <div class="p-6 bg-white border-b border-gray-200">
      <form @submit.prevent="saveServiceTicket">
        <div class="mb-6">
            <label for="title" class="input-form-label">Title</label>
            <input type="text" v-model="serviceTicket.title" id="title" title="title" class="input-form-control" placeholder="Title" required >
            <span v-if="errors.title">{{errors.title}}</span>
        </div>

        <div class="mb-6">
            <label for="description" class="input-form-label">Description</label>
            <textarea v-model="serviceTicket.description" id="description" name="description" class="input-form-control" placeholder="Description" required ></textarea>
            <span v-if="errors.description">{{errors.description}}</span>
        </div>
        <div class=" mb-6">
            <label for="type" class="input-form-label">Type</label>
            <select v-model="serviceTicket.type" name="type" id="type" class="input-form-control">
              <option v-for="item in serviceTicketTypeOptions" :key="item" :value="item">
                {{item}}
              </option>
            </select>
        </div>

        <div class="mb-6">
            <label for="priority" class="input-form-label">Priority</label>
            <select v-model="serviceTicket.priority" name="priority" id="priority" class="input-form-control">
              <option v-for="item in priorityOptions" :key="item" :value="item">
                {{item}}
              </option>
            </select>
        </div>

        <div v-if="['super-admin','admin','hr'].includes(user.role)" class="mb-6">
            <label for="status" class="input-form-label">Status</label>
            <select v-model="serviceTicket.status" name="status" id="status" class="input-form-control">
              <option v-for="item in serviceTicketStatusOptions" :key="item" :value="item">
                {{item}}
              </option>
            </select>
        </div>
        <button type="submit" class="btn-blue">
          Save
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { useStore } from "vuex";
import useServiceTicket from "../../composables/service-ticket";
import {priorityOptions, serviceTicketTypeOptions, serviceTicketStatusOptions} from '../../utils';
export default {
  props: {
    id: { required: true, type: String }
  },
  setup(props) {
    const store = useStore();
    const user = computed(() => store.state.user);
    const { id } = props;
    const {errors, serviceTicket, getServiceTicket, updateServiceTicket} = useServiceTicket();
    onMounted(async () => {
      getServiceTicket(id);
    });

    const saveServiceTicket = async (e) => {
      e.preventDefault();
      const formData = new  FormData();
      for(const key in serviceTicket.value) {
        formData.append(key, serviceTicket.value[key]);
      }
      formData.append("_method", "PATCH");
      await updateServiceTicket(id, formData);
    }

    return {
      user,
      errors,
      serviceTicket,
      saveServiceTicket,
      priorityOptions,
      serviceTicketTypeOptions,
      serviceTicketStatusOptions
    }
  },
}
</script>