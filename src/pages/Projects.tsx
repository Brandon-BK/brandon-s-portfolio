import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  problem: string;
  solution: string;
  tags: string[];
  learnings: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "cloud-pipeline",
    title: "Cloud Data Pipeline",
    problem: "Organizations struggle to ingest and transform data at scale with reliable event-driven processing.",
    solution: "Built an AWS-native data pipeline using S3 for storage, Lambda for serverless transforms, and EventBridge for orchestration. Implemented error handling with DLQs and monitoring with CloudWatch.",
    tags: ["AWS", "Python", "Lambda", "S3", "EventBridge", "CloudWatch"],
    learnings: [
      "Event-driven architecture patterns",
      "Cost optimization at scale",
      "Monitoring distributed systems",
    ],
    github: "https://github.com/brandon/cloud-pipeline",
    featured: true,
  },
  {
    id: "dataset-builder",
    title: "AI-Ready Dataset Builder",
    problem: "Raw data requires extensive cleaning and transformation before it can be used for machine learning.",
    solution: "Created an automated pipeline that ingests raw data, performs cleaning, feature engineering, and outputs model-ready datasets with versioning and validation.",
    tags: ["Python", "Pandas", "SQL", "Docker", "Great Expectations"],
    learnings: [
      "Feature engineering best practices",
      "Data validation strategies",
      "Reproducible data workflows",
    ],
    github: "https://github.com/brandon/dataset-builder",
    featured: true,
  },
  {
    id: "observability",
    title: "Observability Platform",
    problem: "Distributed systems lack unified visibility into logs, metrics, and traces for effective debugging.",
    solution: "Deployed a comprehensive observability stack with centralized logging, custom metrics dashboards, and intelligent alerting based on anomaly detection.",
    tags: ["CloudWatch", "Grafana", "Terraform", "Python"],
    learnings: [
      "SLO/SLI definition",
      "Alert fatigue reduction",
      "Infrastructure as code",
    ],
    github: "https://github.com/brandon/observability-platform",
    featured: true,
  },
  {
    id: "ml-classifier",
    title: "ML Classification Project",
    problem: "Needed hands-on experience building an end-to-end machine learning pipeline.",
    solution: "Built a classification model from data collection through deployment, including feature selection, hyperparameter tuning, and model evaluation.",
    tags: ["Python", "scikit-learn", "FastAPI", "Docker"],
    learnings: [
      "Model evaluation metrics",
      "Cross-validation techniques",
      "Model serving basics",
    ],
    github: "https://github.com/brandon/ml-classifier",
  },
];

const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Projects
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Real-world projects demonstrating my journey from software engineering to data and AI systems.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="space-y-8 mb-20">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                id={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated p-8 md:p-10 rounded-2xl border border-border"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Main Content */}
                  <div className="lg:col-span-2">
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {project.title}
                    </h2>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                          Problem
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.problem}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                          Solution
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tech-badge">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      {project.github && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                            View Code
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button variant="hero" size="sm" asChild>
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Learnings */}
                  <div className="bg-muted rounded-xl p-6">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                      Key Learnings
                    </h3>
                    <ul className="space-y-3">
                      {project.learnings.map((learning, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{learning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="font-display text-2xl font-bold text-foreground mb-8"
              >
                More Projects
              </motion.h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {otherProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    id={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card-elevated p-6 rounded-2xl border border-border"
                  >
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.solution}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span key={tag} className="tech-badge text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.github && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          View Code
                        </a>
                      </Button>
                    )}
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
