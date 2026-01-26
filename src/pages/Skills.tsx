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
    title: "Programming",
    skills: [
      { name: "JavaScript / TypeScript", level: 90, status: "proficient" },
      { name: "Python", level: 75, status: "proficient" },
      { name: "SQL", level: 80, status: "proficient" },
      { name: "Go", level: 45, status: "learning" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS (S3, Lambda, EC2, IAM)", level: 85, status: "proficient" },
      { name: "Docker", level: 80, status: "proficient" },
      { name: "CI/CD (GitHub Actions)", level: 75, status: "proficient" },
      { name: "Terraform", level: 60, status: "learning" },
      { name: "CloudWatch", level: 70, status: "proficient" },
    ],
  },
  {
    title: "Data Engineering",
    skills: [
      { name: "ETL / ELT Concepts", level: 70, status: "proficient" },
      { name: "Data Modeling", level: 65, status: "learning" },
      { name: "Data Lakes & Warehouses", level: 55, status: "learning" },
      { name: "Apache Spark", level: 40, status: "exploring" },
      { name: "Streaming (Kafka basics)", level: 35, status: "exploring" },
    ],
  },
  {
    title: "AI / ML",
    skills: [
      { name: "Pandas & NumPy", level: 70, status: "proficient" },
      { name: "scikit-learn", level: 55, status: "learning" },
      { name: "Feature Engineering", level: 50, status: "learning" },
      { name: "Model Evaluation", level: 45, status: "learning" },
      { name: "MLOps Basics", level: 30, status: "exploring" },
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
              Skills & Tech Stack
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A transparent view of my technical capabilities — from strong foundations to areas I'm actively developing.
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
