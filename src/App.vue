<script setup lang="ts">
import Section from './components/Section.vue'
import ProjectCard from './components/ProjectCard.vue'
import SkillList from './components/SkillList.vue'
import WorkCard from './components/WorkCard.vue'

import { projects } from './data/projects'
import { skills } from './data/skills'
import { works } from './data/works'

const name = 'Yamato Araya'
const title = 'Full-Stack Engineer / Frontend Focus'
const links = [
  { label: 'GitHub', url: 'https://github.com/araya113' },
  { label: 'Email', url: 'mailto:yamato120@gmail.com' },
]
</script>

<template>
  <main class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
    <!-- Hero -->
    <section class="max-w-6xl mx-auto px-6 pt-20 pb-16">
      <div class="text-center space-y-6">
        <div
          class="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-100"
        >
          <svg
            class="w-4 h-4 text-blue-600 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            ></path>
          </svg>
          <span class="text-blue-600 text-sm font-medium">Welcome to my portfolio</span>
        </div>
        <h1
          class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent"
        >
          {{ name }}
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto">{{ title }}</p>
        <nav class="flex justify-center gap-6 flex-wrap mt-8">
          <a
            v-for="l in links"
            :key="l.url"
            :href="l.url"
            target="_blank"
            class="group relative px-6 py-3 bg-white rounded-full border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            <span class="text-gray-700 group-hover:text-blue-600 font-medium">{{ l.label }}</span>
          </a>
        </nav>
      </div>
    </section>

    <!-- 対応可能技術 -->
    <Section id="skills" title="Skills" subtitle="対応可能技術">
      <SkillList :data="skills" />
    </Section>

    <!-- 参加プロジェクト -->
    <Section id="projects" title="Projects" subtitle="過去の参加プロジェクト">
      <div class="grid lg:grid-cols-2 gap-8">
        <ProjectCard
          v-for="p in projects"
          :key="p.title"
          :title="p.title"
          :period="p.period"
          :role="p.role"
          :stack="p.stack"
          :summary="p.summary"
          :links="p.links"
        />
      </div>
    </Section>

    <!-- 個人制作 -->
    <Section id="works" title="Personal Works" subtitle="個人制作作品">
      <div v-if="works.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <WorkCard
          v-for="w in works"
          :key="w.title"
          :title="w.title"
          :tags="w.tags"
          :description="w.description"
          :repo="w.repo"
          :demo="w.demo"
          :thumb="w.thumb"
        />
      </div>
      <div v-else class="text-center py-16">
        <div class="relative inline-block">
          <div
            class="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center"
          >
            <svg
              class="w-12 h-12 text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              ></path>
            </svg>
          </div>
          <div
            class="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse"
          >
            <svg class="w-3 h-3 text-yellow-700" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              ></path>
            </svg>
          </div>
        </div>
        <h3 class="text-2xl font-bold text-gray-900 mb-3">Coming Soon</h3>
        <p class="text-gray-600 max-w-md mx-auto leading-relaxed">
          新しいプロジェクトを準備中です。<br />
          近日公開予定ですので、お楽しみにお待ちください。
        </p>
        <div class="mt-6 flex justify-center">
          <div
            class="px-6 py-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-600 rounded-full border border-purple-200 font-medium text-sm inline-flex items-center"
          >
            <svg
              class="w-4 h-4 text-purple-600 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
            In Development
          </div>
        </div>
      </div>
    </Section>

    <footer class="py-16 text-center">
      <div class="max-w-6xl mx-auto px-6">
        <div class="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8"></div>
        <p class="text-gray-500 text-sm">
          © {{ new Date().getFullYear() }} {{ name }}. Built with Vue 3
        </p>
      </div>
    </footer>
  </main>
</template>
