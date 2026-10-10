import type { Metadata } from 'next';
import PageIntro from '@/components/PageIntro';
import AnalyticalWorkSlot from '@/components/AnalyticalWorkSlot';
import ProjectFeature from '@/components/ProjectFeature';
import { projects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Ascend and The Answer Movement: what Drake Krommenhoek has built, how, and what is still planned.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  return (
    <>
      <PageIntro title="Projects">
        <p>
          Two products, each started from a problem I knew firsthand. Every case study separates what is built
          from what is still planned.
        </p>
      </PageIntro>
      <section className="page" aria-label="Project list">
        {projects.map((project) => (
          <ProjectFeature key={project.slug} project={project} />
        ))}
        <AnalyticalWorkSlot headingLevel="h2" />
      </section>
    </>
  );
}
