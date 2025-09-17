<script setup lang="ts">
defineProps<{ data: { name: string; items: string[] }[] }>()
</script>

<template>
  <div class="grid md:grid-cols-2 gap-8">
    <div
      v-for="c in data"
      :key="c.name"
      class="group relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-500 hover:-translate-y-1"
    >
      <div
        class="absolute inset-0 bg-gradient-to-br from-green-50/50 to-blue-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      ></div>
      <div class="relative">
        <h4
          class="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300 mb-6"
        >
          {{ c.name }}
        </h4>
        <div class="flex flex-wrap gap-3">
          <span
            v-for="i in c.items"
            :key="i"
            class="text-sm px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-blue-50 text-green-700 border border-green-200 font-medium hover:shadow-md transition-shadow duration-200"
          >
            {{ i }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
