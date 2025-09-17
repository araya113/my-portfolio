export type SkillCategory = {
  name: string
  items: string[]
}

export const skills: SkillCategory[] = [
  { name: 'Frontend', items: ['Vue 3 / Nuxt', 'TypeScript', 'Tailwind CSS', 'React'] },
  { name: 'Backend', items: ['Node.js', 'Express', 'Prisma', 'MySQL'] },
  { name: 'Infra/Tools', items: ['Docker', 'GitHub Actions', 'Vite', 'ESLint/Prettier'] },
  { name: 'Others', items: ['ServiceNow', 'UI/UX設計', '要件定義/設計/テスト'] },
]
