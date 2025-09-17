<script setup lang="ts">
defineProps<{ id?: string; title: string; subtitle?: string }>()
</script>

<template>
  <section :id="id" class="py-20 max-w-6xl mx-auto px-6">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{{ title }}</h2>
      <p v-if="subtitle" class="text-lg text-gray-600 max-w-2xl mx-auto">{{ subtitle }}</p>
      <div class="mt-6 flex justify-center">
        <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </div>
    </div>
    <div>
      <slot />
    </div>
  </section>
</template>

<style scoped>
section {
  position: relative;
}

section:not(:first-child)::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(0, 0, 0, 0.1), transparent);
}
</style>
