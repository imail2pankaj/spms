<template>
  <transition name="modal-fade">
    <form @submit.prevent="importFile">
      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div
          class="
            flex
            items-end
            justify-center
            min-h-screen
            pt-4
            px-4
            pb-20
            text-center
            sm:block sm:p-0
          "
        >
          <div class="fixed inset-0 transition-opacity" aria-hidden="true">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
            >&#8203;</span
          >
          <div
            class="
              inline-block
              align-bottom
              bg-white
              rounded-lg
              text-left
              overflow-hidden
              shadow-xl
              transform
              transition-all
              sm:my-8 sm:align-middle sm:max-w-lg sm:w-full
            "
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div
                  class="
                    mx-auto
                    flex-shrink-0 flex
                    items-center
                    justify-center
                    h-12
                    w-12
                    rounded-full
                    bg-green-100
                    sm:mx-0 sm:h-10 sm:w-10
                  "
                >
                  <!-- Heroicon name: outline/exclamation -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person-rolodex"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    <path
                      d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1H1Zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1V2Z"
                    />
                  </svg>
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    class="text-lg p-2 leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    Import File
                  </h3>
                  <div class="mt-2">
                    <div
                      class="dropzone text-sm text-gray-500"
                      @dragenter.prevent="toggleActive"
                      @dragleave.prevent="toggleActive"
                      @dragover.prevent
                      @change="selectedFile"
                      @drop.prevent="drop"
                      :class="{ 'active-dropzone': active }"
                    >
                      <span>Drag or Drop File</span>
                      <span>OR</span>
                      <label for="dropzoneFile">Select File</label>
                      <input
                        type="file"
                        id="dropzoneFile"
                        class="dropzoneFile"
                        accept=".csv,.xlsx"
                      />
                    </div>
                  </div>
                  <small class="allowedFile"
                    >Only csv,xlsx Files are allowed to import</small
                  ><br />
                  <span class="file-info">File: {{ dropzoneFile.name }}</span>
                </div>
              </div>
            </div>

            <div
              class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
            >
              <button
                type="button"
                @click="importFile"
                class="
                  w-full
                  inline-flex
                  justify-center
                  rounded-md
                  border border-transparent
                  shadow-sm
                  px-4
                  py-2
                  bg-blue-600
                  text-base
                  font-medium
                  text-white
                  hover:bg-green-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-green-500
                  sm:ml-3 sm:w-auto sm:text-sm
                "
              >
                Import
              </button>
              <button
                type="button"
                @click="close"
                class="
                  mt-3
                  w-full
                  inline-flex
                  justify-center
                  rounded-md
                  border border-gray-300
                  shadow-sm
                  px-4
                  py-2
                  bg-white
                  text-base
                  font-medium
                  text-gray-700
                  hover:bg-gray-50
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm
                "
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </transition>
</template>
<script>
import { ref, useSSRContext } from "vue";
import useContacts from "../../composables/contacts";

export default {
  name: "ImportFile",
  emits: ["close"],
  setup(props, { emit }) {
    const { importContact } = useContacts();

    const active = ref(false);
    const toggleActive = () => {
      active.value = !active.value;
    };
    const close = () => {
      emit("close");
    };
    let dropzoneFile = ref("");
    const drop = (e) => {
      dropzoneFile.value = e.dataTransfer.files[0];
    };
    const selectedFile = (e) => {
      dropzoneFile.value = e.target.files[0];
    };

    const importFile = async (e) => {
      const formData = new FormData();
      formData.append("file", dropzoneFile.value);
      await importContact(formData);
      emit("close");
    };
    return {
      active,
      importFile,
      toggleActive,
      close,
      dropzoneFile,
      drop,
      selectedFile,
    };
  },
};
</script>
<style scoped>
.dropzone {
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
  border: 2px dashed #41b883;
  background-color: #fff;
  transition: 0.3s ease all;
}
.active-dropzone {
  color: #fff;
  border-color: #fff;
  background-color: #41b883;
}
input {
  display: none;
}
.allowedFile {
  opacity: 0.5;
  color: black;
}
</style>