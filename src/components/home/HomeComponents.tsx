import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Database, Cloud, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden hero-gradient">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Data particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--accent)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-primary-foreground text-sm font-medium">Open to opportunities</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Building scalable systems today —{" "}
            <span className="text-gradient">engineering AI-ready data</span> for tomorrow.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto"
          >
            Cross-platform Developer • Cloud & DevOps • Aspiring AI Data Engineer
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="lg" asChild>
              <Link to="/projects">
                View Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="/resume.pdf" download>
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </Button>
          </motion.div>

          {/* Terminal preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 bg-primary/50 backdrop-blur-sm rounded-xl border border-accent/20 p-4 text-left max-w-xl mx-auto"
          >
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <div className="font-mono text-sm text-primary-foreground/80">
              <span className="text-accent">$</span> brandon.current_focus
              <br />
              <span className="text-accent/70">→</span> ["data_engineering", "cloud_architecture", "ml_systems"]
              <br />
              <span className="text-accent">$</span> brandon.build_pipeline()
              <span className="cursor-blink">▋</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function WhatIDoSection() {
  const services = [
    {
      icon: Database,
      title: "Software Engineering",
      description: "Web & cross-platform apps, clean APIs, and scalable architecture that forms the foundation for data-intensive systems.",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "AWS infrastructure, CI/CD pipelines, observability & security — building reliable foundations for data workflows.",
    },
    {
      icon: Brain,
      title: "Data & AI Engineering",
      description: "Data pipelines, analytics foundations, and machine learning readiness — bridging software and intelligence.",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            What I Do
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Combining engineering excellence with data-driven thinking
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-elevated p-8 rounded-2xl border border-border group hover:border-accent/30"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedProjectsSection() {
  const projects = [
    {
      title: "Cloud Data Pipeline",
      description: "Event-driven data ingestion with S3, Lambda transforms, and real-time analytics.",
      tags: ["AWS", "Python", "Lambda", "S3"],
      href: "/projects#cloud-pipeline",
    },
    {
      title: "AI-Ready Dataset Builder",
      description: "Automated data cleaning, feature engineering, and model-ready output generation.",
      tags: ["Python", "Pandas", "SQL", "Docker"],
      href: "/projects#dataset-builder",
    },
    {
      title: "Observability Platform",
      description: "Comprehensive logging, metrics collection, and alerting system for distributed services.",
      tags: ["CloudWatch", "Grafana", "Terraform"],
      href: "/projects#observability",
    },
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4"
        >
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Real-world solutions demonstrating my journey from software to data engineering
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/projects">
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link
                to={project.href}
                className="block card-elevated p-8 rounded-2xl border border-border h-full hover:border-accent/30 transition-all"
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-badge text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
