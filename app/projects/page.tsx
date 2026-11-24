import { TagFilter } from '@/components/TagFilter';
import { projects } from '@/lib/projects';
export default function ProjectsPage() {
// Tự động lấy toàn bộ tag duy nhất từ lib/projects.ts
  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Danh sách dự án</h1>

        {/* <TagFilter tags={["web", "IoT", "Ai", "AR"]} /> */}
        <TagFilter tags={allTags} />

      <ul className="list-disc pl-6 space-y-2 mt-4">
        {projects.map((project) => (
          <li key={project.slug} className="text-lg">
            {project.title}
          </li>
        ))}
      </ul>
    </main>
  );
}
