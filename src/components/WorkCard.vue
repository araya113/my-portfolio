<script setup lang="ts">
defineProps<{
  title: string
  tags: string[]
  description: string
  repo?: string
  demo?: string
  thumb?: string
}>()
</script>

<template>
  <article
    class="group relative bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 hover:-translate-y-2"
  >
    <div
      class="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    ></div>
    <div class="relative">
      <div v-if="thumb" class="relative overflow-hidden">
        <img
          :src="thumb"
          alt=""
          class="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        ></div>
      </div>
      <div class="p-8">
        <h3
          class="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300 mb-4"
        >
          {{ title }}
        </h3>
        <div class="flex flex-wrap gap-2 mb-4">
          <span
            v-for="t in tags"
            :key="t"
            class="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border border-purple-200 font-medium"
          >
            {{ t }}
          </span>
        </div>
        <p class="text-gray-600 leading-relaxed mb-6">{{ description }}</p>
        <div class="flex gap-4">
          <a
            v-if="repo"
            :href="repo"
            target="_blank"
            class="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors duration-200"
          >
            Repository
            <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
          </a>
          <a
            v-if="demo"
            :href="demo"
            target="_blank"
            class="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-sm transition-colors duration-200"
          >
            Demo
            <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </article>
</template>
