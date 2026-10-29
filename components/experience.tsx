"use client";

import React from "react";
import { experienceData, ExperienceItem } from "@/data/experience";
import {
  GraduationCap,
  Briefcase,
  Trophy,
  Users,
  Calendar,
  MapPin,
  CheckCircle2,
  Award,
} from "lucide-react";

const typeIconMap: Record<string, React.ReactNode> = {
  Education: <GraduationCap className="w-4 h-4 text-violet-400" />,
  Leadership: <Users className="w-4 h-4 text-cyan-400" />,
  Technical: <Trophy className="w-4 h-4 text-amber-400" />,
  Community: <Briefcase className="w-4 h-4 text-emerald-400" />,
};

export function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-xs font-semibold text-violet-400 uppercase tracking-widest mb-3">
            <Award className="w-3.5 h-3.5" />
            Milestones &amp; Journey
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Experience &amp;{" "}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl text-sm sm:text-base">
            Academic foundations, hackathon sprints, student tech initiatives, and open-source explorations.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-border/80 space-y-12">
          {experienceData.map((item, index) => (
            <div key={item.id} className="relative group">
              {/* Timeline dot marker */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-background border-2 border-violet-500 flex items-center justify-center shadow-md shadow-violet-500/20 group-hover:scale-125 group-hover:border-cyan-400 transition-all duration-300">
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-card/60 border border-border/70 hover:border-violet-500/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-violet-500/5 backdrop-blur-sm">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-secondary/80 border border-border/50">
                      {typeIconMap[item.type] || <Briefcase className="w-4 h-4" />}
                    </span>
                    <span className="text-xs font-mono font-medium text-cyan-400">
                      {item.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-violet-400" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Role & Org */}
                <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.role}
                </h3>
                <p className="text-sm font-medium text-muted-foreground mb-3">
                  {item.organization}
                </p>

                {/* Description */}
                <p className="text-sm text-foreground/85 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-5">
                  {item.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-xs text-muted-foreground"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-background/80 text-muted-foreground border border-border/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

