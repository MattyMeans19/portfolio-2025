'use client';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import { ExistingProject } from '@/lib/definitions';

export default function Project({ project }: { project: ExistingProject }) {
    return(
   <main className="grow mt-10 px-6 py-12 lg:px-0 text-(--primary) flex justify-center">
      <div className="w-full max-w-6xl lg:px-5">
        <div className="mb-12 lg:mb-16 flex items-center justify-between gap-4">
          <Link href="/" className="text-(--secondary) hover:text-(--primary) transition">
            ← Back to home
          </Link>
          <span className="rounded-full bg-(--secondary) px-4 py-2 text-sm text-white font-semibold">
            {project.type}
          </span>
        </div>

        <div className="space-y-10 lg:space-y-14">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-8 text-center">{project.title.replace(/-/g, ' ')}</h1>
          </div>

          <div className="space-y-2 text-center">
            <h2 className="text-xl lg:text-2xl font-semibold">Live site</h2>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="text-(--secondary) hover:underline break-all text-base lg:text-lg"
            >
              {project.url}
            </a>
          </div>

            <div className="space-y-6">
              <p className="text-xl lg:text-2xl leading-relaxed text-(--tertiary)">{project.info}</p>

              <div className="flex flex-wrap gap-3 justify-center">
                {project.stack.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-flex rounded-full bg-(--secondary) px-4 py-2 text-sm lg:text-base font-semibold text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-full rounded-3xl overflow-hidden border border-(--tertiary) bg-black shadow-lg">
              <CldImage
                src={project.thumbnail}
                width={1600}
                height={1050}
                alt={`${project.title} preview`}
                className="w-full h-[40vh]"
              />
            </div>

          <div className="rounded-3xl border border-(--tertiary) p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl text-center font-semibold mb-6">Case Study</h2>
            <p className="text-lg lg:text-xl leading-relaxed whitespace-pre-line text-(--tertiary)">{project.caseStudy}</p>
          </div>
        </div>
      </div>
    </main>
    )
}