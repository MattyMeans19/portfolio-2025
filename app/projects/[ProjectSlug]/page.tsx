'use server';

import Link from "next/link";
import { db } from "@/db";
import { PortfolioItem } from "@/db/schema";
import { ExistingProject } from "@/lib/definitions";
import { eq } from "drizzle-orm";
import Project from "@/components/project-page";

type PageProps = {
  params: {
    ProjectSlug: string;
  };
};

export async function generateMetadata({ params }: PageProps) {

}

export default async function ProjectPage({ params }: PageProps) {
  const {ProjectSlug} = await params;
  const projectSearch = (await db.select().from(PortfolioItem).where(eq(PortfolioItem.title, ProjectSlug)));
  const project = projectSearch[0] as ExistingProject | undefined;

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-xl text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <p className="text-(--tertiary) mb-8">
            We couldn’t find a project matching that slug. Try returning to the
            portfolio list.
          </p>
          <Link href="/" className="text-(--secondary) underline font-semibold">
            Back to home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <Project project={project} />
  );
}
