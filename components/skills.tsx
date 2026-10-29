"use client";

import React, { useState } from "react";
import { skillCategories, SkillCategory } from "@/data/skills";
import {
  Brain,
  Globe,
  Cpu,
  Wrench,
  Sparkles,
  Layers,
  CheckCircle2,
} from "lucide-react";

const categoryIconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-5 h-5" />,
  Globe: <Globe className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
};

const categoryBadgeColorMap: Record<string, string> = {
  violet: "text-violet-400 bg-violet-500/10 border-violet-500/30",
  cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
  emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
  blue: "text-blue-400 bg-blue-500/10 border-blue-500/30",
  amber: "text-amber-400 bg-amber-500/10 border-amber-500/30",
};

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const displayedCategories =
    selectedCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-20 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">
            <Layers className="w-3.5 h-3.5" />
            Technical Arsenal
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Skills &amp;{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl text-sm sm:text-base">
            From low-level microcontrollers and sensor hardware to modern deep learning models and scalable web interfaces.
          </p>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === "all"
                  ? "bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-md shadow-violet-500/20"
                  : "bg-card/70 border border-border/70 text-muted-foreground hover:text-foreground hover:border-violet-500/40"
              }`}
            >
              All Domains
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-md shadow-violet-500/20"
                    : "bg-card/70 border border-border/70 text-muted-foreground hover:text-foreground hover:border-violet-500/40"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((cat) => (
            <div
              key={cat.id}
              className="group relative p-6 rounded-2xl bg-card/60 border border-border/70 hover:border-violet-500/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-violet-500/5 hover:-translate-y-1 backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-xl border ${
                      categoryBadgeColorMap[cat.color] ||
                      categoryBadgeColorMap.violet
                    } group-hover:scale-110 transition-transform`}
                  >
                    {categoryIconMap[cat.icon] || <Cpu className="w-5 h-5" />}
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground px-2 py-0.5 rounded-md bg-secondary/80">
                    {cat.skills.length} skills
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-background/80 hover:bg-violet-500/10 border border-border/80 hover:border-violet-500/40 text-foreground/90 hover:text-foreground transition-all duration-200"
                    >
                      <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between text-[11px] text-muted-foreground font-mono">
                <span>Domain</span>
                <span className="capitalize">{cat.id.replace("-", " ")}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

