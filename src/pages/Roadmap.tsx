import { motion } from "framer-motion";
import { CheckCircle, Circle, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

interface Phase {
  number: number;
  title: string;
  status: "completed" | "current" | "upcoming";
  description: string;
  items: Array<{
    name: string;
    completed: boolean;
    link?: string;
  }>;
}

const roadmapPhases: Phase[] = [
  {
    number: 1,
    title: "Foundations",
    status: "completed",
    description: "Building the core technical skills that underpin everything else.",
    items: [
      { name: "Cloud infrastructure (AWS)", completed: true, link: "/projects#observability" },
      { name: "RESTful API design", completed: true },
      { name: "Relational databases", completed: true },
      { name: "Version control & CI/CD", completed: true },
      { name: "Containerization (Docker)", completed: true },
    ],
  },
  {
    number: 2,
    title: "Data Engineering",
    status: "current",
    description: "Learning to build robust data pipelines and manage data at scale.",
    items: [
      { name: "ETL/ELT pipelines", completed: true, link: "/projects#cloud-pipeline" },
      { name: "Data lake architecture", completed: true },
      { name: "Data warehousing", completed: false },
      { name: "Stream processing", completed: false },
      { name: "Data quality & governance", completed: false },
    ],
  },
  {
    number: 3,
    title: "ML Systems",
    status: "upcoming",
    description: "Building the infrastructure that powers machine learning at scale.",
    items: [
      { name: "Feature stores", completed: false },
      { name: "Model training pipelines", completed: false },
      { name: "Model serving & inference", completed: false },
      { name: "ML monitoring", completed: false },
      { name: "Experiment tracking", completed: false },
    ],
  },
  {
    number: 4,
    title: "Production AI",
    status: "upcoming",
    description: "Deploying and maintaining AI systems in production environments.",
    items: [
      { name: "MLOps practices", completed: false },
      { name: "Scalability patterns", completed: false },
      { name: "AI governance", completed: false },
      { name: "Cost optimization", completed: false },
      { name: "A/B testing frameworks", completed: false },
    ],
  },
];

const Roadmap = () => {
  const getStatusStyles = (status: Phase["status"]) => {
    switch (status) {
      case "completed":
        return "border-accent bg-accent/10";
      case "current":
        return "border-accent bg-accent/5 ring-2 ring-accent/20";
      case "upcoming":
        return "border-border bg-card";
    }
  };

  const getStatusLabel = (status: Phase["status"]) => {
    switch (status) {
      case "completed":
        return { text: "Completed", color: "text-accent" };
      case "current":
        return { text: "In Progress", color: "text-accent" };
      case "upcoming":
        return { text: "Upcoming", color: "text-muted-foreground" };
    }
  };

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
              AI Data Engineer Roadmap
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A transparent view of my learning journey — from foundations to production AI systems. This isn't just a list of skills; it's a commitment to continuous growth.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-12">
              {roadmapPhases.map((phase, index) => {
                const statusLabel = getStatusLabel(phase.status);
                
                return (
                  <motion.div
                    key={phase.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Phase number indicator */}
                    <div className="absolute left-0 top-0 hidden md:flex">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center font-display font-bold text-xl z-10 ${
                          phase.status === "completed" || phase.status === "current"
                            ? "bg-accent text-accent-foreground"
                            : "bg-muted text-muted-foreground border-2 border-border"
                        }`}
                      >
                        {phase.number}
                      </div>
                    </div>

                    {/* Content card */}
                    <div className={`md:ml-24 rounded-2xl border-2 p-8 ${getStatusStyles(phase.status)}`}>
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="md:hidden w-10 h-10 rounded-full flex items-center justify-center font-display font-bold bg-accent text-accent-foreground">
                          {phase.number}
                        </span>
                        <h2 className="font-display text-2xl font-bold text-foreground">
                          Phase {phase.number}: {phase.title}
                        </h2>
                        <span className={`text-sm font-medium ${statusLabel.color}`}>
                          {statusLabel.text}
                        </span>
                      </div>

                      <p className="text-muted-foreground mb-6">
                        {phase.description}
                      </p>

                      <ul className="space-y-3">
                        {phase.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center gap-3">
                            {item.completed ? (
                              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                            ) : (
                              <Circle className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                            )}
                            <span
                              className={
                                item.completed
                                  ? "text-foreground"
                                  : "text-muted-foreground"
                              }
                            >
                              {item.name}
                            </span>
                            {item.link && (
                              <Link
                                to={item.link}
                                className="text-accent hover:underline text-sm flex items-center gap-1"
                              >
                                <ExternalLink className="w-3 h-3" />
                                View
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 text-center"
          >
            <p className="text-muted-foreground text-lg mb-6">
              Interested in following my journey or collaborating?
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Let's Connect
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Roadmap;
