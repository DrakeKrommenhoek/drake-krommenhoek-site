import Image from 'next/image';
import Link from 'next/link';
import ContactActions from '@/components/ContactActions';
import NowSection from '@/components/NowSection';
import ProjectFeature from '@/components/ProjectFeature';
import { projects } from '@/lib/projects';
import { site } from '@/lib/site';
import headshot from '@/public/images/drake-krommenhoek.jpg';

const heroes = {
  facts: {
    headline: 'I’m Drake, an economics junior at Washington and Lee.',
    intro: (
      <>
        This summer I did private equity diligence at Mountaingate Capital in Denver. During the school year I build
        apps: The Answer Movement, a wellness program now used by 240 people in 3 countries, and Ascend, a recruiting
        planner that placed top 10 of about 120 W&amp;L ventures.
      </>
    ),
  },
  casual: {
    headline: 'Econ student at W&L. I build the apps I wish existed.',
    intro: (
      <>
        PE intern at Mountaingate Capital this summer. Co-founder of The Answer Movement (240 users in 3 countries).
        Builder of Ascend, a recruiting planner for college students.
      </>
    ),
  },
  hi: {
    headline: 'Hi, I’m Drake.',
    intro: (
      <>
        I study economics at Washington and Lee, spent the summer building models at a private equity firm in
        Denver, and spend the school year building apps: The Answer Movement and Ascend.
      </>
    ),
  },
};

// Which hero is live. Kept as data so the other drafts are easy to compare.
const hero = heroes[(process.env.NEXT_PUBLIC_HERO as keyof typeof heroes) ?? 'facts'] ?? heroes.facts;

export default function Home() {
  return (
    <>
      <section className="page pb-20 pt-8 sm:pt-16 lg:pb-28 lg:pt-20">
        <div className="grid-page items-center gap-y-8">
          {/* Photo: the single focal point. Top right on desktop (Z pattern), first thing on mobile. */}
          <figure className="col-span-4 hidden sm:col-span-2 sm:block lg:order-2 lg:col-span-4 lg:col-start-9">
            <Image
              src={headshot}
              alt="Drake Krommenhoek"
              placeholder="blur"
              priority
              sizes="(min-width: 1024px) 26vw, (min-width: 640px) 40vw, 90vw"
              className="aspect-[4/5] w-full object-cover object-top"
            />
            <figcaption className="mt-3 text-[0.85rem] text-muted">On the Colonnade at W&amp;L</figcaption>
          </figure>

          <div className="col-span-4 lg:order-1 lg:col-span-8">
            {/* Mobile: the photo pairs with the name so the actions stay above the fold. */}
            <div className="flex items-center gap-5 sm:hidden">
              <Image
                src={headshot}
                alt="Drake Krommenhoek"
                placeholder="blur"
                priority
                sizes="8rem"
                className="aspect-[4/5] w-[7.5rem] shrink-0 object-cover object-top"
              />
              <div>
                <p className="font-display text-[1.4rem] leading-tight">{site.name}</p>
                <p className="mt-1 text-[0.95rem] leading-snug text-muted">Economics, W&amp;L, Class of 2028</p>
              </div>
            </div>
            <h1 className="mt-7 text-balance font-display text-[2.15rem] font-normal leading-[1.08] tracking-[-0.025em] sm:mt-0 sm:text-[3rem] xl:text-[3.5rem]">
              {hero.headline}
            </h1>
            <p className="mt-7 max-w-prose text-[1.15rem] leading-relaxed">{hero.intro}</p>
            <div className="mt-9">
              <ContactActions />
              <p className="mt-4 text-[0.95rem] text-muted">
                Looking for a Summer 2027 internship in product, analytics, or venture capital.{' '}
                <a href="#projects" className="link text-ink">
                  See my work
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" aria-labelledby="projects-heading" className="page scroll-mt-20">
        <h2 id="projects-heading" className="font-display text-[1.6rem] tracking-[-0.01em]">
          Projects
        </h2>
        <div className="mt-6 border-b border-rule">
          {projects.map((project, i) => (
            <ProjectFeature key={project.slug} project={project} index={i} />
          ))}
        </div>
      </section>

      <NowSection />

      <section className="page mt-16">
        <p className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/about" className="link">
            More about me
          </Link>
          <Link href="/experience" className="link">
            Experience and resume
          </Link>
        </p>
      </section>
    </>
  );
}
