import { motion } from "framer-motion";
import { ArrowRight, Target, Lightbulb, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const About = () => {
  const highlights = [
    {
      icon: Lightbulb,
      title: "Engineering-First Mindset",
      description: "Every solution starts with understanding the problem deeply, then building with precision and scalability in mind.",
    },
    {
      icon: Target,
      title: "Strong Cloud Background",
      description: "Deep experience with AWS services, infrastructure as code, and building reliable distributed systems.",
    },
    {
      icon: Rocket,
      title: "Intentional Transition",
      description: "Deliberately building expertise in data engineering and AI systems to shape the future of intelligent applications.",
    },
  ];

  const careerPath = [
    { stage: "Current", role: "Cross-platform Developer", status: "active" },
    { stage: "Next", role: "Data Engineer", status: "upcoming" },
    { stage: "Target", role: "AI / ML Platform Engineer", status: "goal" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              I'm a developer with a strong foundation in cloud-native systems and a growing focus on data engineering and AI. My goal is to design pipelines and platforms that turn raw data into intelligent systems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With years of experience building scalable applications and infrastructure, I'm now channeling that expertise toward the exciting intersection of data and machine learning — where engineering meets intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Sets Me Apart */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Sets Me Apart
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated p-8 rounded-2xl border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Direction */}
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
              Career Direction
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A deliberate journey from software engineering to AI systems
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {careerPath.map((step, index) => (
              <motion.div
                key={step.stage}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex items-center gap-4 md:gap-8"
              >
                <div
                  className={`text-center p-6 rounded-2xl border-2 ${
                    step.status === "active"
                      ? "border-accent bg-accent/10"
                      : step.status === "upcoming"
                      ? "border-border bg-card"
                      : "border-accent/50 bg-accent/5"
                  }`}
                >
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    {step.stage}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-1">
                    {step.role}
                  </h3>
                </div>
                {index < careerPath.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-accent hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Button variant="hero" size="lg" asChild>
              <Link to="/roadmap">
                View My Full Roadmap
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
