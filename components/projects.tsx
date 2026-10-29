"use client";

import React, { useState } from "react";
import { projectsData, projectCategories, ProjectItem } from "@/data/projects";
import {
  FolderGit2,
  ExternalLink,
  Github,
  Sparkles,
  CheckCircle2,
  Layers,
  ArrowUpRight,
} from "lucide-react";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-xs font-semibold text-violet-400 uppercase tracking-widest mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            Featured Work
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Projects &amp;{" "}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Innovations
            </span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl text-sm sm:text-base">
            Real-world systems spanning embedded edge AI, computer vision, autonomous rovers, and developer tools.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-md shadow-violet-600/25"
                    : "bg-card/70 border border-border/70 text-muted-foreground hover:text-foreground hover:border-violet-500/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col justify-between p-7 rounded-3xl bg-card/60 border border-border/70 hover:border-violet-500/50 transition-all duration-300 shadow-sm hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-1.5 backdrop-blur-sm"
            >
              <div>
                {/* Top badges & links */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-violet-500/10 text-violet-400 border border-violet-500/20">
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    {project.badge || project.category}
                  </span>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl border border-border/60 bg-card/80 text-muted-foreground hover:text-foreground hover:border-violet-500/40 hover:bg-accent/40 transition-colors"
                      aria-label={`${project.title} GitHub Source`}
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.demoUrl && project.demoUrl !== "#" ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl border border-border/60 bg-card/80 text-muted-foreground hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-colors"
                        aria-label={`${project.title} Live Demo`}
                        title="View Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : null}
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground/40 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>
                <p className="text-xs font-medium text-cyan-400 mb-3">
                  {project.tagline}
                </p>

                {/* Summary */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {project.summary}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-6">
                  {project.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs text-foreground/80"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-border/50 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-background/80 text-muted-foreground border border-border/60"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

