import Image from 'next/image';
import Link from 'next/link';
import ContactActions from '@/components/ContactActions';
import NowSection from '@/components/NowSection';
import ProjectFeature from '@/components/ProjectFeature';
import { projects } from '@/lib/projects';
import { site } from '@/lib/site';
import headshot from '@/public/images/drake-krommenhoek.jpg';

// Headline is a placeholder until Drake picks one of his favorite quotes.
const headline = 'Hi, I’m Drake.';

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
              {headline}
            </h1>
            <p className="mt-7 max-w-prose text-[1.15rem] leading-relaxed">
              I&rsquo;m a junior at Washington and Lee University, studying economics with minors in entrepreneurship
              and philosophy. When I&rsquo;m not in class, I love playing anything active or competitive. From Euchre
              with family to basketball and pickleball with friends, if you need an extra player, I&rsquo;ll be there.
            </p>
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

      <section aria-label="Why I care about AI" className="page pb-20 lg:pb-28">
        <div className="max-w-[42rem] space-y-5 border-l-2 border-navy pl-6 text-[1.15rem] leading-relaxed lg:ml-[8.33%]">
          <p>
            Professionally, I&rsquo;m fascinated by AI. Not because it makes everything faster; frankly, I could
            stand to stop and smell the roses more often. It&rsquo;s because AI is already lowering the barrier to
            building new products, solving &ldquo;impossible&rdquo; problems, and changing the world for the better.
          </p>
          <p>
            I&rsquo;m not blind to the opposite possibility, but I&rsquo;m an optimist, and I try not to let the
            headlines dim my glow. I can&rsquo;t promise to leave the world better than I found it, but I&rsquo;m
            going to try, and worrying about &ldquo;what if&rdquo; won&rsquo;t get it done.
          </p>
          <p className="text-muted">
            I hope you enjoy the site. If you have questions, my contact info is easy to find, and I&rsquo;d love to
            chat.
          </p>
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
