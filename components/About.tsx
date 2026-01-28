'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const About = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Image paths based on the folder structure
    const imagePaths = [
      '/images/golf/golf-1.jpg.jpeg',
      '/images/basketball/basketball-1.jpg.jpeg',
      '/images/about/Senior Photo.jpeg',
      '/images/about/travel-1.jpg.jpeg',
      '/images/about/surf-1.jpg.jpeg',
      '/images/family/TST W&L Photo.jpeg',
    ];

    setImages(imagePaths);
  }, []);

  return (
    <section id="about" className="bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Who Am I</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Story Text */}
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Born in <span className="font-semibold text-wl-blue">Arizona</span> and raised in{' '}
              <span className="font-semibold text-wl-blue">Rapid City, South Dakota</span>, I
              spent my formative years in the heart of the Great Plains before moving to{' '}
              <span className="font-semibold text-wl-blue">Colorado</span>, where I&apos;ve lived
              for over the past decade. Now, I&apos;m pursuing my education at{' '}
              <span className="font-semibold text-wl-blue">
                Washington and Lee University in Lexington, Virginia
              </span>
              .
            </p>

            <p>
              Competition has always been a driving force in my life. Whether it was four years of{' '}
              <span className="font-semibold text-wl-blue">high school golf</span>, where I served
              as team captain and helped secure back-to-back regional championships, or playing{' '}
              <span className="font-semibold text-wl-blue">club basketball</span> with friends, I
              thrive in environments that demand focus, strategy, and teamwork.
            </p>

            <p>
              Beyond sports, I grew up playing{' '}
              <span className="font-semibold text-wl-blue">card games with my family</span> since
              childhood—a pastime that taught me the value of calculated risk, reading people, and
              staying calm under pressure. These experiences shaped my approach to problem-solving
              and decision-making.
            </p>

            <p>
              At my core, I believe in{' '}
              <span className="font-semibold text-wl-blue">
                discipline, consistency, and a long-term growth mindset
              </span>
              . Whether in finance, entrepreneurship, or life, I&apos;m committed to continuous
              improvement and finding ways to create lasting value.
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 gap-4">
            {images.map((imgPath, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ${
                  index === 0 ? 'col-span-2 h-64' : 'h-48'
                }`}
              >
                <Image
                  src={imgPath}
                  alt={`Drake Krommenhoek ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
