<template>
  <div class="fixed inset-0 flex justify-end z-50">
    <div class="fixed inset-0">
      <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
    </div>
    <transition name="slide-from-left">
      <div class="relative flex-1 flex flex-col max-w-xs md:max-w-sm lg:max-w-lg bg-white">
        <div class="absolute top-0 left-0 -ml-12 pt-2">
          <button @click="goBack()" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none">
            <span class="sr-only">Close</span>
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form @submit.prevent="saveBank">
          <div class="block pt-4 pb-4 overflow-y-auto h-screen">
            <div class="block w-full px-4 mb-12">
              <h3 class="input-form-sub-heading mb-4 w-full" :style="{paddingTop:0}">Edit Bank</h3>
              <div class="mb-6">
                <label for="account_name" class="input-form-label">Account Name <app-required/></label>
                <input type="text" placeholder="Account Name" v-model="user.account_name" class="input-form-control" />
                <!-- <span class="input-error" v-if="errors.account_name">{{ errors.account_name }}</span> -->
              </div>
              <div class="mb-6">
                <label for="account_number" class="input-form-label">Account Number </label>
                <input type="text" placeholder="Account Number" v-model="user.account_number" class="input-form-control" />
                <!-- <span class="input-error" v-if="errors.account_number">{{ errors.account_number }}</span> -->
              </div>
              <div class="mb-6">
                <label for="ifsc_code" class="input-form-label">IFS Code </label>
                <input type="text" placeholder="IFS Code" v-model="user.ifsc_code" class="input-form-control" />
                <!-- <span class="input-error" v-if="errors.ifsc_code">{{ errors.ifsc_code }}</span> -->
              </div>
              <div class="mb-6">
                <label for="bank_name" class="input-form-label">Bank Name </label>
                <input type="text" placeholder="Bank Name" v-model="user.bank_name" class="input-form-control" />
                <!-- <span class="input-error" v-if="errors.bank_name">{{ errors.bank_name }}</span> -->
              </div>
              <div class="mb-6">
                <label for="branch_name" class="input-form-label">Branch Name </label>
                <input type="text" placeholder="Branch Name" v-model="user.branch_name" class="input-form-control" />
                <!-- <span class="input-error" v-if="errors.branch_name">{{ errors.branch_name }}</span> -->
              </div>
              <div class="mb-6">
                <label for="pan_number" class="input-form-label">PAN Number </label>
                <input type="text" placeholder="PAN Number" v-model="user.pan_number" class="input-form-control" />
                <!-- <span class="input-error" v-if="errors.pan_number">{{ errors.pan_number }}</span> -->
              </div>
            </div>
            <div class="absolute bottom-0 right-0 w-full">
              <div class="px-4 py-3 bg-gray-200 text-left sm:px-6">
                <button type="submit" class="btn-blue">
                  Save
                </button>
                <button @click="goBack()" type="button" class="btn-red ml-3">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </transition>
    <div class="flex-shrink-0"></div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import useUsers from '../../composables/user';
import {strtotime} from '../../utils';

export default {
  props: {
    id: { required: true, type: String}
  },
  setup(props, {emit}) {
    const router = useRouter();
    const {id} = props;
    const user = ref({
      account_name: '',
      account_number: '',
      ifsc_code:'',
      bank_name:'',
      branch_name:'',
      pan_number:''
    });
    const { getBank, updateBank } = useUsers();

    onMounted(async () => {
      user.value = await getBank(id);
    });

    const saveBank = async () => {
      user.value['_method'] = 'put';
      await updateBank(id, user.value);
      goBack();
    }
    const goBack = () => {
      router.push({name: 'user.index', params: {time: strtotime()}})
    }

    return {
      saveBank,
      user,
      goBack
    }
  },
}
</script>