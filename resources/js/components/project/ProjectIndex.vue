<template>
  <div class="flex justify-between mb-2">
    <h1 class="text-2xl font-bold">
      Projects
    </h1>
    <router-link :to="{name:'project.create'}" class="link-blue"> Add </router-link>

  </div>

  <div class="bg-white overflow-hidden shadow-sm rounded-lg">
    <div class="p-6 bg-white border-b border-gray-200">
      <app-datatables :pagination="pagination" @changePageEvent="searchData">
        <table class="min-w-max w-full table-auto">
          <thead>
            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th class="py-2 px-2 text-left">Name</th>
              <th class="py-2 px-2 text-left">Assigned</th>
              <th class="py-2 px-2 text-left">Type</th>
              <th class="py-2 px-2 text-center">Status</th>
              <th class="py-2 px-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody class="text-gray-900 text-sm font-light">
            <template v-for="(item, index) in projects" :key="index">
              <tr class="border-b border-gray-200 hover:bg-gray-100">
                <td class="py-2 px-2 text-left whitespace-nowrap">
                  {{item.title}}
                </td>
                <td class="py-2 px-2 text-left whitespace-nowrap">
                  <template v-for="(dev, index1) in item.developers" :key="index1">
                    <b>Dev - </b>{{dev.first_name}}<br/>
                  </template>
                  <template v-for="(des, index1) in item.designers" :key="index1">
                    <b>Des - </b>{{des.first_name}}<br/>
                  </template>
                  <template v-for="(pm, index1) in item.pms" :key="index1">
                    <b>PM - </b>{{pm.first_name}}<br/>
                  </template>
                  <template v-for="(bde, index1) in item.bdes" :key="index1">
                    <b>BDE - </b>{{bde.first_name}}<br/>
                  </template>
                  <template v-for="(qa, index1) in item.qas" :key="index1">
                    <b>QA - </b>{{qa.first_name}}<br/>
                  </template>
                </td>
                <td class="py-2 px-2 text-left whitespace-nowrap">{{ item.project_type }}</td>
                <td class="py-2 px-2 text-center whitespace-nowrap">
                    {{item.project_status}}
                  </td>
                <td class="py-2 px-2 text-center whitespace-nowrap">
                  <div class="flex item-center justify-center">
                    <router-link to="" class="no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <view-icon />
                    </router-link>
                    <router-link :to="{name:'project.edit', params: {id:item.id}}"  class="no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <edit-icon />
                    </router-link>
                    <button type="button" @click="item_id = item.id; togglePopup();" class="no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <delete-icon />
                    </button>
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </app-datatables>
    </div>
  </div>
  <app-confirm-delete v-show="showModal" modalHeadline="Delete Project?" deleteMessage="Are you sure?" @deleteRecordEvent="destroyProject(item_id)" @close="togglePopup" ></app-confirm-delete>
</template>


<script>
import { onMounted, ref } from 'vue';
import useProjects from "../../composables/project";

export default {
  setup(props) {
    const { projects, pagination, getProjects, deleteProject} = useProjects();
    const showModal = ref(false);
    const item_id = ref(0);
    const emitPaginationLocal = ref({});

    onMounted(async () => {
      // await getUsers();
    })

    const searchData = async (emitPagination) => {
      emitPaginationLocal.value = emitPaginationLocal;
      await getProjects(emitPagination);
    }
    const destroyProject = async (itemId) => {
      await deleteProject(itemId);
      await getProjects(emitPaginationLocal.value);
      togglePopup();
    }
    const togglePopup = () => {
      showModal.value = !showModal.value;
    }
    return {
      projects,
      item_id,
      showModal,
      pagination,
      searchData,
      togglePopup,
      destroyProject
    }
  },
}
</script>