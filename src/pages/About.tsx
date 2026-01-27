import { motion } from "framer-motion";
import { ArrowRight, Target, Lightbulb, Rocket, Code, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Cross-Platform Expertise",
      description: "Moving fluidly between frontend, backend, cloud infrastructure, and data workflows depending on the team's needs.",
    },
    {
      icon: Target,
      title: "Data Flow Focus",
      description: "Always following the flow of data — designing systems that are reliable, automated, and AI-ready.",
    },
    {
      icon: Lightbulb,
      title: "Clean Code Practices",
      description: "Recognized for clean code practices, team collaboration, and a growth-oriented mindset.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "Deliberately expanding into data engineering and AI-ready pipelines to build intelligent systems.",
    },
  ];

  const careerPath = [
    { stage: "Current", role: "Cross-Platform Software Developer", status: "active" },
    { stage: "Growing Into", role: "Data & AI Engineering", status: "upcoming" },
    { stage: "Core Principle", role: "Always Follow the Flow of Data", status: "goal" },
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
              I'm a results-driven cross-platform software developer who builds fast, scalable, and user-focused web applications while working across frontend, backend, cloud, and databases.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I specialize in React.js, Next.js, JavaScript, HTML5, and CSS, and I'm proficient in Python and SQL. I always follow the flow of data, designing systems that are reliable, automated, and AI-ready.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This portfolio reflects how I work: <span className="text-foreground font-medium">adaptable, system-focused, growth-oriented, and always learning.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* What I Do Day-to-Day */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              How I Work
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I work primarily as a cross-platform developer, moving fluidly between frontend, backend, cloud infrastructure, and data workflows depending on the team's needs. Some days I design UI/UX and wireframes, other days I build backend services, automate data pipelines, or manage cloud systems.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
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

      {/* Experience Summary */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Experience & Background
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I have experience in frontend technologies, Python, SQL, AWS cloud platforms, and containerized systems, and I'm currently expanding into data engineering and AI-ready pipelines. My goal is to build platforms that turn raw data into intelligent, production-ready systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Career Direction */}
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
              Career Direction
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              An intentional journey from software engineering to AI systems
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
                  className={`text-center p-6 rounded-2xl border-2 min-w-[200px] ${
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
                View My Full Journey
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
