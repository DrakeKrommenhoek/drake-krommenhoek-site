import type { Metadata } from 'next';
import PageIntro from '@/components/PageIntro';
import ProjectFeature from '@/components/ProjectFeature';
import { projects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'The Answer Movement and Ascend: what Drake Krommenhoek has built, and what is still planned.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  return (
    <>
      <PageIntro title="Projects">
        <p>
          The two apps I&rsquo;ve built so far. Each write-up marks what actually works today and what is still on
          the roadmap.
        </p>
      </PageIntro>
      <section className="page border-b border-rule" aria-label="Project list">
        {projects.map((project, i) => (
          <ProjectFeature key={project.slug} project={project} index={i} />
        ))}
      </section>
    </>
  );
}
