import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Download,
  Code,
  Cloud,
  Database,
  Brain,
  Server,
  Palette,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden hero-gradient">
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
            backgroundSize: "60px 60px",
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
            <span className="text-primary-foreground text-sm font-medium">
              Open to opportunities
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Building scalable systems today —{" "}
            <span className="text-gradient">engineering AI-ready data</span> for
            tomorrow.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto"
          >
            Software Engineering • moving to • Data & Engineering (In
            Progress)
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
              <a
                href="/Brandon CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-5 h-5" />
                View CV
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
              <span className="text-accent/70">→</span> ["Software
              Engineer", "moving to data_engineering", "ai_pipelines"]
              <br />
              <span className="text-accent">$</span> brandon.core_principle
              <br />
              <span className="text-accent/70">→</span> "Always follow the flow
              of data"
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
      icon: Code,
      title: "Cross-Platform Development",
      description:
        "Build responsive web and mobile-friendly applications with React.js, HTML 5, CSS and Javascript. Apply UI/UX design principles for exceptional user experiences.",
    },
    {
      icon: Database,
      title: "Databases & Data Management",
      description:
        "MongoDB for document-based apps, Firebase for realtime applications, AWS databases for cloud-native storage.",
    },
    {
      icon: Cloud,
      title: "Cloud & Containerized Systems",
      description:
        "Deploy using AWS ECS containers, build Docker images, manage serverless architectures, and monitor workflows for reliability.",
    },
    {
      icon: Brain,
      title: "Data & AI Foundations",
      description:
        "Moving in to building data pipelines, ETL processes for analytics, prepare datasets for AI/ML workflows, and automate business reporting.",
    },
    {
      icon: Palette,
      title: "Design & Collaboration",
      description:
        "UI/UX design and wireframing with Figma. Problem-solving, time management, teamwork, and attention to detail.",
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
            Adaptable, system-focused, growth-oriented — moving fluidly between
            frontend, backend, cloud, and data workflows
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      title: "Data Automation & Reporting",
      description:
        "ECS batch jobs and Docker images generating daily, weekly, and monthly sales reports. Reduced manual reporting time by 80%.",
      tags: ["Python", "SQL", "Docker", "AWS ECS", "S3"],
      href: "/projects#data-automation",
    },
    {
      title: "Cloud & Containerized Systems",
      description:
        "Scalable, automated, event-driven architectures with AWS ECS, Docker deployments, and CloudWatch monitoring.",
      tags: ["AWS", "Docker", "ECS", "CloudWatch"],
      href: "/projects#cloud-systems",
    },
    {
      title: "SJP Cross-Platform Application",
      description:
        "A modern, responsive portfolio website showcasing the SirJoshPlz brand’s creative media projects and professional work. The site features intuitive navigation and dynamic content management for an engaging user experience",
      tags: ["React.js", "Next.js", "Node.js", "MongoDB"],
      href: "https://sjp-j2tp.vercel.app/",
      external: true,
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
              Real-world solutions demonstrating my journey from software to
              data engineering
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
              {project.external ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
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
                </a>
              ) : (
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
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
