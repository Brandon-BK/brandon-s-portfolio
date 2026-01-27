import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";

interface SkillCategory {
  title: string;
  skills: Array<{
    name: string;
    level: number; // 0-100
    status: "proficient" | "learning" | "exploring";
  }>;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 90, status: "proficient" },
      { name: "Python", level: 80, status: "proficient" },
      { name: "SQL", level: 85, status: "proficient" },
      { name: "Go", level: 35, status: "exploring" },
    ],
  },
  {
    title: "Frontend & Cross-Platform",
    skills: [
      { name: "React.js", level: 90, status: "proficient" },
      { name: "Next.js", level: 85, status: "proficient" },
      { name: "HTML5 & CSS", level: 90, status: "proficient" },
      { name: "Responsive Web Design", level: 85, status: "proficient" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", level: 80, status: "proficient" },
      { name: "REST APIs", level: 85, status: "proficient" },
      { name: "Python", level: 80, status: "proficient" },
    ],
  },
  {
    title: "Databases & Data Stores",
    skills: [
      { name: "SQL / Relational DBs", level: 85, status: "proficient" },
      { name: "MongoDB", level: 75, status: "proficient" },
      { name: "Firebase", level: 100, status: "proficient" },
      { name: "AWS DynamoDB", level: 100, status: "proficient" },
    ],
  },
  {
    title: "Cloud & Containers (AWS)",
    skills: [
      { name: "EC2, Lambda, S3", level: 100, status: "proficient" },
      { name: "IAM", level: 100, status: "proficient" },
      { name: "CloudWatch, Step Functions", level: 100, status: "proficient" },
      { name: "ECS, Docker, Batch Jobs", level: 100, status: "proficient" },
      { name: "Athena, SWF", level: 100, status: "proficient" },
      { name: "Amazon Bedrock", level: 50, status: "exploring" },
      { name: "CodeCommit", level: 100, status: "proficient" },
    ],
  },
  {
    title: "Data & AI",
    skills: [
      { name: "Data Modeling", level: 65, status: "learning" },
      { name: "ETL / ELT Pipelines", level: 70, status: "learning" },
      { name: "Automated Reporting", level: 80, status: "proficient" },
      { name: "Analytics & Visualization", level: 65, status: "learning" },
      { name: "Feature Engineering", level: 50, status: "exploring" },
      { name: "ML Fundamentals", level: 45, status: "exploring" },
    ],
  },
  {
    title: "Design & Collaboration",
    skills: [
      { name: "Figma", level: 75, status: "proficient" },
      { name: "UI/UX Design Principles", level: 70, status: "proficient" },
      { name: "Problem-Solving", level: 90, status: "proficient" },
      { name: "Teamwork", level: 90, status: "proficient" },
    ],
  },
];

const statusColors = {
  proficient: "bg-accent",
  learning: "bg-accent/60",
  exploring: "bg-accent/30",
};

const statusLabels = {
  proficient: "Proficient",
  learning: "Learning",
  exploring: "Exploring",
};

const Skills = () => {
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
              Skills & Technologies
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A transparent view of my technical capabilities — from strong foundations to areas I'm actively developing. I believe in honest self-assessment and continuous growth.
            </p>
          </motion.div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-6 mb-12"
          >
            {Object.entries(statusLabels).map(([key, label]) => (
              <div key={key} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${statusColors[key as keyof typeof statusColors]}`} />
                <span className="text-sm text-muted-foreground">{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="card-elevated p-8 rounded-2xl border border-border"
              >
                <h2 className="font-display text-2xl font-semibold text-foreground mb-8">
                  {category.title}
                </h2>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${statusColors[skill.status]} text-accent-foreground`}>
                          {statusLabels[skill.status]}
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${statusColors[skill.status]}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + skillIndex * 0.05, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;
