<template>
  <div class="flex justify-between mb-2">
    <h1 class="text-2xl font-bold">
      Products
    </h1>
    <router-link :to="{name:'product.create'}" class="p-2 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-sm rounded-lg focus:border-4 border-indigo-300">
          Add
    </router-link>
    
  </div>
    <div class="bg-white overflow-hidden shadow-sm rounded-lg">
    <div class="p-6 bg-white border-b border-gray-200">
      <table class="min-w-max w-full table-auto">
        <thead>
          <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th class="py-2 px-2 text-left">Image</th>
            <th class="py-2 px-2 text-left">Name</th>
            <th class="py-2 px-2 text-left">Category</th>
            <th class="py-2 px-2 text-center">Status</th>
            <th class="py-2 px-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody class="text-gray-900 text-sm font-light">
          <template v-for="(item, index) in products" :key="index">
            <tr class="border-b border-gray-200 hover:bg-gray-100">
              <td class="py-2 px-2 text-left whitespace-nowrap">
                <img v-if="item.image" :src="'/uploads/product/' + item.image" class="w-20 rounded ">
                <img v-if="!item.image" src="/images/no-image.png" class="w-20 rounded ">
                </td>
              <td class="py-2 px-2 text-left whitespace-nowrap">{{ item.name }}</td>
              <td class="py-2 px-2 text-left whitespace-nowrap">{{ item.category_name ? item.category_name :"None" }}</td>
              <td class="py-2 px-2 text-center whitespace-nowrap">
                  <Status :status="item.status" />
                </td>
              <td class="py-2 px-2 text-center whitespace-nowrap">
                <div class="flex item-center justify-center">
                  <router-link to="" class="no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <img src="/images/view-icon.svg" alt="View" />
                  </router-link>
                  <router-link :to="{name:'product.edit', params: {id:item.id}}"  class="no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <img src="/images/edit-icon.svg" alt="Edit" />
                  </router-link>
                  <button type="button" @click="item_id = item.id; togglePopup();" class="no-underline w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <img src="/images/delete-icon.svg" alt="Delete" />
                  </button>
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>

    </div>
  </div>
  <confirm-delete v-show="showModal" modalHeadline="Delete Product?" deleteMessage="Are you sure?" @deleteRecordEvent="destroyProduct(item_id)" @close="togglePopup" ></confirm-delete>
</template>


<script>
import { onMounted, ref } from 'vue';
import Status from '../common/Status';
import ConfirmDelete from '../common/ConfirmDelete.vue';
import useProducts from "../../composables/product";


export default {
  components: {
    Status,
    ConfirmDelete
  },
  setup(props) {
    const { products, getProducts, deleteProduct} = useProducts();
    const showModal = ref(false);
    const item_id = ref(0);

    onMounted(async () => {
      await getProducts();
    })

    const destroyProduct = async (itemId) => {
      await deleteProduct(itemId);
      togglePopup();
    }
    const togglePopup = () => {
      showModal.value = !showModal.value;
    }
    return {
      item_id,
      products,
      showModal,
      togglePopup,
      destroyProduct
    }
  },
}
</script>