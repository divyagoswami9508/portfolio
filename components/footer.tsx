"use client";

import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import {
  ArrowUp,
  Github,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Heart,
  Sparkles,
} from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-border/60 bg-background/90 backdrop-blur-md pt-12 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border/40">
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link
              href="#"
              className="font-heading font-bold text-lg text-foreground flex items-center gap-2"
            >
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 p-[1px]">
                <div className="w-full h-full bg-background rounded-[7px] flex items-center justify-center">
                  <span className="font-heading font-bold text-xs bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                    DG
                  </span>
                </div>
              </div>
              <span>{profileData.name}</span>
            </Link>
            <p className="text-xs text-muted-foreground mt-1.5 max-w-sm">
              {profileData.tagline}
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2.5">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-border/70 bg-card/60 text-muted-foreground hover:text-foreground hover:border-violet-500/50 hover:bg-violet-500/10 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profileData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-border/70 bg-card/60 text-muted-foreground hover:text-foreground hover:border-pink-500/50 hover:bg-pink-500/10 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={profileData.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-border/70 bg-card/60 text-muted-foreground hover:text-foreground hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-colors"
              aria-label="X / Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-border/70 bg-card/60 text-muted-foreground hover:text-foreground hover:border-blue-500/50 hover:bg-blue-500/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="p-2.5 rounded-xl border border-border/70 bg-card/60 text-muted-foreground hover:text-foreground hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium border border-border/70 bg-card/60 text-muted-foreground hover:text-foreground hover:border-violet-500/50 hover:bg-accent/40 transition-all duration-200"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-3">
          <p className="flex items-center gap-1.5">
            <span>Built by {profileData.name} · © 2026</span>
          </p>
          <p className="text-[11px] font-mono text-muted-foreground/75">
            Crafted with Next.js 15, Tailwind CSS &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}

