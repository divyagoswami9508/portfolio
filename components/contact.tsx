"use client";

import React, { useState } from "react";
import { profileData } from "@/data/profile";
import {
  Mail,
  Send,
  Github,
  Instagram,
  Twitter,
  Linkedin,
  MapPin,
  CheckCircle,
  AlertCircle,
  Loader2,
  Copy,
  ExternalLink,
} from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [responseMsg, setResponseMsg] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setResponseMsg("Please fill in all fields before sending.");
      return;
    }

    setStatus("loading");
    setResponseMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setResponseMsg(
          data.fallback
            ? "Opening your default email app with the message pre-filled..."
            : "Message sent successfully! I'll get back to you shortly."
        );
        setFormData({ name: "", email: "", message: "" });

        if (data.fallback && data.mailtoUrl) {
          window.location.href = data.mailtoUrl;
        }
      } else {
        // Fallback to mailto directly on error
        const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;

        setStatus("success");
        setResponseMsg("Launching mail client to send your message...");
      }
    } catch (err) {
      // Direct mailto fallback
      const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;

      setStatus("success");
      setResponseMsg("Opened mail client to deliver your message.");
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">
            <Mail className="w-3.5 h-3.5" />
            Let&apos;s Connect
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Get In{" "}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl text-sm sm:text-base">
            Have an innovative idea, AI collaboration, robotics experiment, or opportunity? My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Info Panel (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 p-7 rounded-3xl bg-card/60 border border-border/70 backdrop-blur-sm">
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                Let&apos;s build something exceptional
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                I am actively exploring AI engineering, hardware systems, and startup ventures. Feel free to reach out directly through email, GitHub, or social channels.
              </p>

              {/* Direct Email Card */}
              <div className="p-4 rounded-2xl bg-background/80 border border-border/80 flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="truncate">
                    <p className="text-[11px] text-muted-foreground font-mono">
                      DIRECT EMAIL
                    </p>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-xs sm:text-sm font-medium text-foreground hover:text-cyan-400 transition-colors truncate block"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-card hover:bg-accent border border-border text-muted-foreground hover:text-foreground transition-all shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-background/80 border border-border/80 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-muted-foreground font-mono">
                    LOCATION
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-foreground">
                    {profileData.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div>
              <p className="text-xs font-mono text-muted-foreground mb-3 uppercase tracking-wider">
                Connect on Socials
              </p>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-card/80 border border-border hover:border-violet-500/50 hover:bg-violet-500/10 text-foreground transition-colors"
                >
                  <Github className="w-4 h-4 text-violet-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href={profileData.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-card/80 border border-border hover:border-pink-500/50 hover:bg-pink-500/10 text-foreground transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Instagram</span>
                </a>
                <a
                  href={profileData.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-card/80 border border-border hover:border-cyan-500/50 hover:bg-cyan-500/10 text-foreground transition-colors"
                >
                  <Twitter className="w-4 h-4 text-cyan-400" />
                  <span>X / Twitter</span>
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-card/80 border border-border hover:border-blue-500/50 hover:bg-blue-500/10 text-foreground transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Form (7 cols) */}
          <div className="lg:col-span-7 p-7 sm:p-9 rounded-3xl bg-card/60 border border-border/70 backdrop-blur-sm relative">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground mb-2">
              Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-6">
              Fill out the form below and I&apos;ll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-foreground mb-1.5"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="e.g. Alex Sharma"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border/80 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-foreground mb-1.5"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="e.g. alex@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border/80 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-medium text-foreground mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project, idea, or collaboration..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-background/80 border border-border/80 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 text-sm text-foreground placeholder:text-muted-foreground/60 transition-all outline-none resize-none"
                />
              </div>

              {/* Status Message */}
              {status === "success" && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>{responseMsg}</span>
                </div>
              )}

              {status === "error" && (
                <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/30 text-destructive text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{responseMsg}</span>
                </div>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white shadow-lg shadow-violet-600/25 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:pointer-events-none"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

