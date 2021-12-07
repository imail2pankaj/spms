<template>
  <div class="p-1 text-sm flex flex-row justify-between hover:bg-gray-100 cursor-pointer border border-gray-200 rounded-md mt-1 ">
    <!-- <span @click="openModal(task.id)">
      {{ task.title }}
    </span> -->
    <router-link :to="{name: 'project.task.edit', params: {slug:'title', id: task.id}}">
        {{ task.title }}
    </router-link>
    <span>
      <button class="w-4 p-1 transform hover:text-purple-500 hover:scale-110 focus:outline-none focus:ring focus:border-blue-300">
        <play-icon />
      </button>
      <button class="w-5 p-1 transform hover:text-purple-500 hover:scale-110 focus:outline-none focus:ring focus:border-blue-300">
        <delete-icon />
      </button>
    </span>
  </div>
</template>

<script>
export default {
    props :{
        task: {required: true, type:Object}
    },
    setup(props) {
        const {task} = props;

        const openModal = (id) => {

        }

        return {
            task
        }
    },
}
</script>