"use client";

import React from "react";
import Image from "next/image";
import { profileData } from "@/data/profile";
import {
  Sparkles,
  Cpu,
  Users,
  Compass,
  ArrowUpRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

const valueIcons: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-5 h-5 text-violet-400" />,
  Cpu: <Cpu className="w-5 h-5 text-cyan-400" />,
  Users: <Users className="w-5 h-5 text-indigo-400" />,
  Compass: <Compass className="w-5 h-5 text-emerald-400" />,
};

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-xs font-semibold text-violet-400 uppercase tracking-widest mb-3">
            <Zap className="w-3.5 h-3.5" />
            About Me
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Driven by Curiosity, Built for{" "}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Impact
            </span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl text-sm sm:text-base">
            Bridging theoretical AI foundations with real-world physical and digital applications.
          </p>
        </div>

        {/* Main Content Grid: Bio & Photo Slot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          {/* Photo Slot (4 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              {/* Outer decorative gradient glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-violet-600/30 via-indigo-500/20 to-cyan-400/30 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Card Container */}
              <div className="relative rounded-3xl p-2.5 bg-gradient-to-b from-border/80 via-border/40 to-border/80 border border-border/80 shadow-2xl backdrop-blur-xl">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-card/60 flex items-center justify-center border border-border/40">
                  <Image
                    src={profileData.avatarUrl}
                    alt={profileData.name}
                    width={400}
                    height={400}
                    priority
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay badge with initials in case avatar is replaced */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-5">
                    <span className="font-heading text-lg font-bold text-white tracking-wide">
                      {profileData.name}
                    </span>
                    <span className="text-xs text-cyan-300 font-mono">
                      {profileData.currentPursuit}
                    </span>
                  </div>
                </div>

                {/* Status bottom pill */}
                <div className="mt-3 px-3 py-2 rounded-xl bg-card/80 border border-border/50 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5 font-medium text-foreground">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Delhi NCR, India
                  </span>
                  <span className="font-mono text-[11px] text-violet-400">
                    AI / Robotics
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Chunks (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-foreground/90 leading-relaxed">
            <div className="p-6 rounded-2xl bg-card/50 border border-border/60 backdrop-blur-sm hover:border-violet-500/30 transition-colors">
              <p className="font-medium text-foreground/95">
                {profileData.aboutBio.lead}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card/50 border border-border/60 backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
              <p className="text-muted-foreground leading-relaxed">
                {profileData.aboutBio.vision}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card/50 border border-border/60 backdrop-blur-sm hover:border-indigo-500/30 transition-colors">
              <p className="text-muted-foreground leading-relaxed">
                {profileData.aboutBio.philosophy}
              </p>
            </div>
          </div>
        </div>

        {/* 4 Core Value Cards */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Core Principles & Guiding Values
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              The mindset that powers my engineering approach
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {profileData.coreValues.map((val) => (
              <div
                key={val.title}
                className="group p-6 rounded-2xl bg-card/60 border border-border/70 hover:border-violet-500/40 hover:bg-card/90 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-violet-500/5 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {valueIcons[val.icon] || <Sparkles className="w-5 h-5 text-violet-400" />}
                </div>
                <div className="inline-block px-2 py-0.5 rounded-md bg-secondary/80 text-[10px] font-mono text-muted-foreground mb-2">
                  {val.badge}
                </div>
                <h4 className="font-heading text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {val.title}
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-3xl bg-gradient-to-r from-violet-950/20 via-background to-cyan-950/20 border border-border/60">
          {profileData.stats.map((stat) => (
            <div key={stat.label} className="text-center p-3">
              <span className="block font-heading text-2xl sm:text-3xl font-bold text-foreground bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="block text-xs font-semibold text-foreground mt-1">
                {stat.label}
              </span>
              <span className="block text-[11px] text-muted-foreground mt-0.5">
                {stat.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

