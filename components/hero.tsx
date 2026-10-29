"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { ArrowRight, FileDown, Sparkles, MapPin, GraduationCap, Github, Mail } from "lucide-react";

export function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const titles = profileData.typewriterTitles;
    const currentWord = titles[currentTitleIndex];

    const typeSpeed = isDeleting ? 45 : 90;
    const pauseBeforeDelete = 1800;
    const pauseBeforeNext = 400;

    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText === currentWord) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseBeforeDelete);
    } else if (isDeleting && displayedText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }, pauseBeforeNext);
    } else {
      timeout = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? currentWord.substring(0, prev.length - 1)
            : currentWord.substring(0, prev.length + 1)
        );
      }, typeSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] bg-gradient-to-tr from-violet-600/15 via-purple-500/10 to-cyan-500/15 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center z-10 flex flex-col items-center">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-md mb-6 transition-transform hover:scale-105">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-xs font-medium tracking-wide text-foreground/90">
            Open for AI & Robotics Collaborations
          </span>
        </div>

        {/* Big Name */}
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-4">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-violet-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            {profileData.name}
          </span>
        </h1>

        {/* Animated Typewriter Title */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
          <p className="font-heading text-xl sm:text-3xl font-semibold text-muted-foreground flex items-center gap-1.5">
            <span>Passionate</span>
            <span className="text-foreground bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent border-b-2 border-cyan-400/60 pb-0.5">
              {displayedText}
            </span>
            <span className="inline-block w-0.5 h-6 sm:h-8 bg-cyan-400 animate-pulse" />
          </p>
        </div>

        {/* Tagline & Focus */}
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-6 font-normal">
          {profileData.tagline}
        </p>

        {/* Badges for Pursuit and Location */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-muted-foreground mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-card/70 border border-border/70 backdrop-blur-sm">
            <GraduationCap className="w-4 h-4 text-violet-400" />
            {profileData.currentPursuit}
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-card/70 border border-border/70 backdrop-blur-sm">
            <MapPin className="w-4 h-4 text-cyan-400" />
            {profileData.location}
          </span>
        </div>

        {/* Two CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm font-semibold bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white shadow-lg shadow-violet-600/30 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] group"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href={profileData.resumeUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm font-semibold bg-card/80 hover:bg-card border border-border/80 hover:border-violet-500/50 text-foreground transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            <FileDown className="w-4 h-4 text-cyan-400" />
            <span>Download Resume</span>
          </a>
        </div>

        {/* Quick Social Icon Row */}
        <div className="flex items-center gap-3 mt-10">
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-border/60 bg-card/50 text-muted-foreground hover:text-foreground hover:border-violet-500/40 hover:bg-violet-500/10 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${profileData.email}`}
            className="p-2.5 rounded-xl border border-border/60 bg-card/50 text-muted-foreground hover:text-foreground hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-colors"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <div className="h-4 w-[1px] bg-border/60 mx-1" />
          <span className="text-xs text-muted-foreground font-mono">
            {profileData.email}
          </span>
        </div>
      </div>
    </section>
  );
}

