import Image from 'next/image';
import Placeholder from '@/components/Placeholder';
import type { ProjectSummary } from '@/lib/projects';

/**
 * A project's cover: the real screenshot once it exists, otherwise the placeholder slot (development) or a
 * typographic card (production). Alternate tones keep neighbouring cards from reading as copies.
 */
export default function ProjectCover({
  project,
  index = 0,
  ratio = '16 / 10',
  priority = false,
}: {
  project: ProjectSummary;
  index?: number;
  ratio?: string;
  priority?: boolean;
}) {
  if (project.coverImage) {
    return (
      <Image
        src={project.coverImage.src}
        alt={project.coverImage.alt}
        width={1600}
        height={1000}
        priority={priority}
        sizes="(min-width: 1024px) 60vw, 100vw"
        style={{ aspectRatio: ratio }}
        className="w-full border border-rule object-cover object-top"
      />
    );
  }

  return (
    <Placeholder
      label={project.cover}
      ratio={ratio}
      fallback={
        <div
          style={{ aspectRatio: ratio }}
          className={`flex flex-col justify-between p-8 transition-colors sm:p-10 ${
            index % 2 === 0
              ? 'bg-navy text-paper hover:bg-ink'
              : 'border border-ink bg-[#EAE5DA] text-ink hover:bg-[#E2DCCF]'
          }`}
        >
          <span className="text-[0.9rem] opacity-70">{project.period}</span>
          <span className="font-display text-[2.4rem] leading-[1.02] tracking-[-0.02em] sm:text-[3.4rem]">
            {project.name}
          </span>
        </div>
      }
    />
  );
}
