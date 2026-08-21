import { motion } from "framer-motion";
import {
  ArrowRight,
  Target,
  Lightbulb,
  Code,
  TrendingUp,
  Download,
  GraduationCap,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CV_PATH, CV_FILENAME } from "@/lib/cv";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Production-Ready Applications",
      description: "Building responsive web applications with React.js, TypeScript, and modern CSS frameworks for real clients.",
    },
    {
      icon: Target,
      title: "Automation & Reporting",
      description: "Automating daily, weekly, and monthly reporting workflows with Python and SQL to remove manual effort.",
    },
    {
      icon: Lightbulb,
      title: "Cloud Infrastructure",
      description: "Designing containerized batch jobs and event-driven workflows on AWS ECS, Lambda, Athena, S3, and Step Functions.",
    },
    {
      icon: TrendingUp,
      title: "Mentorship & Teaching",
      description: "Leading interns and teaching IT fundamentals, HTML, CSS, JavaScript, and React.js to new developers.",
    },
  ];

  const experience = [
    {
      role: "Software Developer",
      company: "Rapidtrade",
      period: "2024 – Present",
      points: [
        "Build responsive, production-ready web applications using React.js",
        "Design and execute containerized batch jobs using Docker, AWS ECS, Python, and SQL",
        "Develop Python and SQL reporting systems for daily, weekly, and monthly sales reporting for clients including Sasko and The Beverage Company",
        "Automate infrastructure and batch processes to improve operational efficiency and reduce costs",
        "Build and maintain cloud-integrated workflows using AWS ECS, Lambda, Athena, S3, Step Functions, and CloudWatch",
      ],
    },
    {
      role: "Software Developer",
      company: "Active Media Industries",
      period: "2022 – 2023",
      points: [
        "Developed and maintained web applications using JavaScript, HTML, CSS, and React.js",
        "Built responsive landing pages and reusable UI components",
        "Worked in Agile cross-functional teams",
        "Contributed to the Active Foundation and Active Media platforms using React.js",
        "Led and mentored interns through hands-on development projects and live client work",
      ],
    },
    {
      role: "IT Course Instructor",
      company: "Active Media Industries – December IT Program",
      period: "December 2022 & December 2023",
      points: [
        "Taught IT fundamentals and practical web development concepts",
        "Delivered lessons on HTML, CSS, JavaScript, and React.js",
        "Guided students through hands-on projects and real-world applications",
        "Mentored learners on development best practices and problem-solving approaches",
      ],
    },
    {
      role: "Junior Developer (Intern)",
      company: "Active Media Industries",
      period: "Internship",
      points: [
        "Assisted in frontend and web development",
        "Supported debugging, testing, and database integration",
        "Contributed to feature implementation and system maintenance",
        "Gained hands-on experience across the software development lifecycle (SDLC)",
      ],
    },
  ];

  const education = [
    {
      qualification: "CS50 Computer Science",
      institution: "Harvard University",
      period: "Certificate",
    },
    {
      qualification: "National Senior Certificate",
      institution: "The Hill High School",
      period: "2015 – 2019",
    },
  ];

  const certifications = [
    "AWS Certified Cloud Practitioner",
    "Harvard University CS50 Computer Science Certificate",
    "JavaScript",
    "React.js",
    "Python",
    "Golang",
    "Responsive Web Design",
    "CSS",
    "Node.js",
  ];

  const careerPath = [
    { stage: "Current", role: "Software Developer", status: "active" },
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
              I'm a Software Developer with experience building responsive web applications, automation systems, and cloud-based solutions using React.js, Python, SQL, and AWS.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I've developed production-ready applications, automated reporting workflows, and worked with scalable cloud infrastructure. I have a strong interest in data engineering, AI-ready systems, and automation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I'm passionate about continuous learning and building systems that <span className="text-foreground font-medium">improve efficiency and solve real-world problems.</span>
            </p>
            <Button variant="hero" size="lg" asChild>
              <a
                href={CV_PATH}
                download={CV_FILENAME}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-5 h-5" />
                Download My CV
              </a>
            </Button>
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
              I move fluidly between frontend, backend, cloud infrastructure, and data workflows depending on the team's needs. Some days I build React interfaces, other days I write Python and SQL reporting jobs, containerize them with Docker, and run them on AWS.
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

      {/* Experience */}
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
              Experience
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Professional roles across software development, cloud automation, and technical instruction.
            </p>
          </motion.div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={`${job.role}-${job.company}-${job.period}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated p-8 rounded-2xl border border-border"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-6">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {job.role}
                    </h3>
                    <p className="text-accent font-medium">{job.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground uppercase tracking-wider">
                    {job.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {job.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="section-padding bg-muted">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-elevated p-8 rounded-2xl border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7 text-accent" />
              </div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                Education
              </h2>
              <div className="space-y-6">
                {education.map((item) => (
                  <div key={item.qualification}>
                    <h3 className="text-foreground font-medium">
                      {item.qualification}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.institution} • {item.period}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card-elevated p-8 rounded-2xl border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-accent" />
              </div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                Certifications
              </h2>
              <div className="flex flex-wrap gap-2">
                {certifications.map((certification) => (
                  <span key={certification} className="tech-badge">
                    {certification}
                  </span>
                ))}
              </div>
            </motion.div>
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
