import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, TrendingUp } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  tags: string[];
  learnings: string[];
  impact?: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "data-automation",
    title: "Data Automation & Reporting",
    category: "Data Engineering",
    problem: "Manual reporting processes consumed significant time and were prone to errors, delaying critical business insights.",
    solution: "Developed batch jobs using ECS containers and Docker images. Created Python scripts and SQL code to generate daily, weekly, and monthly sales reports for companies like Sakso and The Beverage Company. Extracted logs, processed data for specific date ranges, and automated uploads/downloads.",
    tags: ["Python", "SQL", "Docker", "AWS ECS", "Batch Jobs", "S3", "CloudWatch"],
    learnings: [
      "Container orchestration with ECS",
      "Reliable job scheduling patterns",
      "Error handling in data pipelines",
    ],
    impact: [
      "Reduced manual reporting time by 80%",
      "Delivered timely and accurate cost and sales insights",
      "Improved auditability and reliability of internal data processes",
    ],
    featured: true,
  },
  {
    id: "cloud-systems",
    title: "Cloud & Containerized Systems",
    category: "Cloud & DevOps",
    problem: "Need for scalable, automated, and event-driven architectures that can handle varying workloads reliably.",
    solution: "Built scalable infrastructure using AWS ECS containers, Docker image deployments, batch job scheduling, serverless workflows, and comprehensive CloudWatch monitoring.",
    tags: ["AWS ECS", "Docker", "Lambda", "Step Functions", "CloudWatch", "S3"],
    learnings: [
      "Event-driven architecture patterns",
      "Serverless best practices",
      "Infrastructure monitoring and alerting",
    ],
    featured: true,
  },
  {
    id: "cross-platform",
    title: "Cross-Platform Applications",
    category: "Full-Stack Development",
    problem: "Organizations need complete systems that work seamlessly across frontend, backend, and cloud infrastructure.",
    solution: "Delivered full-stack projects using React.js and Next.js for frontend, Node.js and Python for backend, with API integrations, responsive design, and database integrations using MongoDB, Firebase, and AWS databases.",
    tags: ["React.js", "Next.js", "Node.js", "MongoDB", "Firebase", "REST APIs"],
    learnings: [
      "Component architecture patterns",
      "API design and integration",
      "Responsive design principles",
    ],
    featured: true,
  },
  {
    id: "data-engineering",
    title: "Data Engineering Projects",
    category: "Data Engineering (In Progress)",
    problem: "Building stronger foundations in data engineering to prepare for AI-ready systems.",
    solution: "Working on SQL analytics, Athena queries, ETL pipelines, and data preparation workflows to strengthen data engineering skills.",
    tags: ["SQL", "Athena", "ETL", "Python", "Data Modeling"],
    learnings: [
      "SQL analytics and optimization",
      "Data lake architectures",
      "ETL pipeline design",
    ],
  },
  {
    id: "ai-pipelines",
    title: "AI-Ready Pipelines",
    category: "AI/ML (Exploratory)",
    problem: "Preparing data and infrastructure for machine learning and AI workflows.",
    solution: "Exploring feature engineering, dataset validation, and Amazon Bedrock experimentation to build AI-ready data pipelines.",
    tags: ["Python", "Amazon Bedrock", "Feature Engineering", "Data Validation"],
    learnings: [
      "Feature engineering concepts",
      "Dataset quality validation",
      "AI service integration",
    ],
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
              Real-world projects demonstrating my journey across cross-platform development, cloud systems, and data engineering.
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
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 mt-2">
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

                  {/* Learnings & Impact */}
                  <div className="space-y-6">
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

                    {project.impact && (
                      <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
                        <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-accent" />
                          Impact
                        </h3>
                        <ul className="space-y-3">
                          {project.impact.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="text-accent font-bold">•</span>
                              <span className="text-foreground text-sm font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
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
                In Progress & Exploratory
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
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3 mt-2">
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
