<script setup lang="ts">
type Link = { label: string; url: string }
defineProps<{
  title: string
  period: string
  role: string
  stack: string[]
  summary: string
  links?: Link[]
}>()
</script>

<template>
  <article
    class="group relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2"
  >
    <div
      class="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
    ></div>
    <div class="relative">
      <header class="flex items-start justify-between gap-4 mb-4">
        <h3
          class="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300"
        >
          {{ title }}
        </h3>
        <span class="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full font-medium">{{
          period
        }}</span>
      </header>
      <p class="text-blue-600 font-semibold mb-4">{{ role }}</p>
      <div class="flex flex-wrap gap-2 mb-6">
        <span
          v-for="s in stack"
          :key="s"
          class="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 border border-gray-200 font-medium"
        >
          {{ s }}
        </span>
      </div>
      <p class="text-gray-600 leading-relaxed mb-6">{{ summary }}</p>
      <div v-if="links?.length" class="flex flex-wrap gap-4">
        <a
          v-for="l in links"
          :key="l.url"
          :href="l.url"
          target="_blank"
          class="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
        >
          {{ l.label }}
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
  </article>
</template>
