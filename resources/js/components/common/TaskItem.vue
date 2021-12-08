<template>
  <div @click="openModal(task.project.slug, task.id)" class="p-1 text-sm flex flex-row justify-between hover:bg-gray-100 cursor-pointer border border-gray-200 rounded-md mt-1 ">
    <span>
      {{ task.title }}
    </span>
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
import {useRouter} from 'vue-router';
export default {
    props :{
        task: {required: true, type:Object}
    },
    setup(props) {
        const router = useRouter();
        const {task} = props;

        const openModal = (slug, id) => {
          const data = {name: 'project.task.edit', params: {slug:slug, id: id}};
          router.push(data);
        }

        return {
            task,
            openModal
        }
    },
}
</script>