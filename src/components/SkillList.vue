<script setup lang="ts">
defineProps<{ data: { name: string; items: string[] }[] }>()
</script>

<template>
  <div class="grid md:grid-cols-2 gap-10">
    <div
      v-for="c in data"
      :key="c.name"
      class="group bg-white/70 backdrop-blur-sm rounded-3xl p-10 border border-gray-200/50 hover:bg-white hover:shadow-lg hover:shadow-gray-200/50 hover:border-gray-300/50 transition-all duration-500 ease-out"
    >
      <div class="space-y-6">
        <h4 class="text-2xl font-light text-gray-900 tracking-wide leading-tight">
          {{ c.name }}
        </h4>
        <div class="flex flex-wrap gap-3">
          <span
            v-for="i in c.items"
            :key="i"
            class="text-sm px-4 py-2 rounded-full bg-gray-100/60 text-gray-700 border border-gray-200/50 font-medium tracking-wide transition-all duration-300 hover:bg-gray-200/60 hover:border-gray-300/60"
          >
            {{ i }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
