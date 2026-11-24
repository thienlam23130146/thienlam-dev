export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
};
export const projects: Project[] = [
  {
    slug: 'portfolio',
    title: 'Portfolio cá nhân',
    description: 'HTML, CSS, JS, React, Next.js',
    tags: ['web'],
  },
  {
    slug: 'IoT',
    title: 'IoT - Nhà kho thông minh',
    description: 'Arduino IDE, Thingsboard',
    tags: ['IoT'],
  },
  {
    slug: 'AR',
    title: 'YANA - Người bạn ảo',
    description: 'Machine Learning, Unity, AI, Web',
    tags: ['Ai', 'AR'],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}