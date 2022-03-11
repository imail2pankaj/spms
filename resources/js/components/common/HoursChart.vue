<template>
    <div class="text-xs mb-4 text-center" v-if="chart">
      <div class="w-full bg-gray-200 h-8 dark:bg-gray-700 flex">
        <div class="bg-yellow-400 h-8 text-center pt-2" :style="`width: ${chart.int_perc}%`">{{chart.int_hr}}</div>
        <div class="bg-yellow-600 h-8 text-center pt-2" :style="`width: ${chart.non_perc}%`">{{chart.non_hr}}</div>
        <div class="bg-yellow-500 h-8 text-center pt-2" :style="`width: ${chart.pro_perc}%`">{{chart.pro_hr}}</div>
      </div>
      <div class="mt-2">
        <span class="bg-yellow-400 rounded-md p-1 mr-1">Internal Projects</span>
        <span class="bg-yellow-600 rounded-md p-1 mr-1">Non Projects</span>
        <span class="bg-yellow-500 rounded-md p-1 mr-1">Active Projects</span>
        <span class="bg-gray-200 rounded-md p-1 mr-1">Available Time</span>
      </div>
    </div>
</template>

<script>
import { inject, onMounted } from 'vue';
export default {
    setup() {
        const chart = inject('chart');

        return {
            chart
        }
    },
}
</script>