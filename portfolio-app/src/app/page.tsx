import Image from "next/image";

export default function Home() {
  const skills = [
    "Snowflake Cortex AI",
    "Large Language Models (LLMs)",
    "Agentic Workflows (SpecKit)",
    "NLP (Text-to-SQL)",
    "Semantic Modeling",
    "Knowledge Graphs",
    "Snowflake",
    "Databricks Unity Catalog",
    "Apache Iceberg",
    "Delta Lake",
    "AWS (EMR, S3, Lambda, Athena)",
    "Streamlit",
    "Python",
    "Scala",
    "Docker",
    "CI/CD (GitHub Actions, Jenkins)",
  ];

  const featuredProjects = [
    {
      title: "AI-Enabled QCS Assistant",
      tagline: "Natural Language to SQL on Snowflake Cortex AI",
      summary:
        "Led the end-to-end design and delivery of an AI-enabled assistant on Snowflake Cortex AI, enabling natural-language querying and automated SQL generation. Delivered via a Streamlit-based UI and Microsoft Teams integration to reduce Data Office support overhead and drastically accelerate time-to-insight.",
      badges: ["Snowflake Cortex AI", "Streamlit", "MS Teams", "REST API"],
    },
    {
      title: "DAE Agentic SDLC — SpecKit Framework",
      tagline: "Governed Engineering Workflow for Coding Agents",
      summary:
        "Spearheaded the SpecKit framework for governed, spec-driven Agentic SDLC across Data Analytics Engineering. Authored the core DAE Constitution, established standardized scaffolding, and delivered a reusable DAE Coding Agent repository adopted across squads.",
      badges: ["Agentic SDLC", "SpecKit", "Governance", "CI/CD Compliance"],
    },
    {
      title: "Ontology-Driven Semantic Context Plane",
      tagline: "Reusable Knowledge Graph & Semantic Framework",
      summary:
        "Designed a Snowflake-native semantic context framework decoupling business meaning from physical schemas. Built graph storage structures (nodes/edges), business class hierarchies, and ontology metadata tables to power scalable AI-driven insights.",
      badges: ["Knowledge Graphs", "Ontology", "Semantic Modeling", "Snowflake"],
    },
    {
      title: "Confluence AI Chat & Document Extraction",
      tagline: "Interactive Knowledge Discovery via Docker & CI/CD",
      summary:
        "Engineered an AI-powered conversational interface for Data Product Documentation in Confluence. Features automated attachment extraction (PDF, Excel, PPTX), responsive query handling, and automated GitHub Actions Docker deployment pipelines.",
      badges: ["GenAI Chat", "Document Parsing", "Docker", "GitHub Actions"],
    },
    {
      title: "Metadata Business Glossary Agent",
      tagline: "Automated Object Discovery & Data Security Classification",
      summary:
        "Created an LLM-powered Streamlit tool systematically cataloging Snowflake tables and views, producing standard definitions, and classifying terms by enterprise security tiers (confidential, restricted, internal, external).",
      badges: ["LLM Agents", "Metadata Extraction", "Data Governance", "Streamlit"],
    },
    {
      title: "Unity Catalog ↔ Snowflake Open Catalog Interoperability",
      tagline: "Bi-directional Apache Iceberg Data Sharing",
      summary:
        "Engineered synchronized Iceberg table access between Databricks Unity Catalog and Snowflake Open Catalog. Transitioned feature storage from Delta Lake to Iceberg, enabling zero-copy compute and seamless ML feature engineering.",
      badges: ["Apache Iceberg", "Databricks Unity Catalog", "Snowflake", "Feature Store"],
    },
  ];

  const experienceHistory = [
    {
      role: "Data Solutions Engineer",
      company: "Liberty Mutual Insurance",
      period: "Jan 2023 — Present",
      description:
        "Leading architecture and design patterns for Data Analytics Engineering (DAE). Driving enterprise data strategy, modern ingestion frameworks, Agentic SDLC, and Snowflake Cortex AI enablement across core insurance platforms.",
    },
    {
      role: "Data Engineer",
      company: "State Auto Insurance Companies",
      period: "Oct 2018 — Dec 2022",
      description:
        "Built enterprise data ingestion tools from SQL Server and Mainframe sources into cloud storage and EMR clusters. Engineered Spark and Oozie data workflows, data staging, and transformed metrics layers.",
    },
    {
      role: "Hadoop Developer",
      company: "VISA",
      period: "Jul 2015 — Oct 2018",
      description:
        "Migrated legacy Ab Initio pipelines to distributed Hadoop and Spark architecture. Built automated Sqoop ingestion, dynamic Hive partition scripts, and Scala Spark SQL data enrichment frameworks.",
    },
    {
      role: "Team Lead",
      company: "IBM",
      period: "Aug 2011 — Mar 2015",
      description:
        "Led distributed engineering teams delivering enterprise data processing and mainframe modernization systems. Conducted Big Data proof-of-concepts, Sqoop/Hive workflows, and technical designs.",
    },
    {
      role: "Module Lead & Developer",
      company: "HSBC",
      period: "Jul 2005 — Jul 2011",
      description:
        "Coordinated cross-border implementations for core banking, cash management, and payment validation systems (BIC/IBAN). Designed message interfaces and end-to-end integration workflows.",
    },
  ];

  return (
    <div className="min-h-[100dvh] bg-[#090d16] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-black">
      {/* Background radial ambiance */}
      <div className="fixed top-0 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/10 via-sky-600/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-600/10 via-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#090d16]/80 border-b border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold text-lg tracking-tight hover:text-cyan-400 transition-colors">
            Venkata Praveen Naram
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Featured AI Work</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </nav>
          <a
            href="mailto:naramvenkata@gmail.com"
            className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-sm hover:shadow-cyan-500/25"
          >
            Get in Touch
          </a>
        </div>
      </header>

      <main className="flex-1 max-w-6xl mx-auto px-6 w-full">
        {/* 1. Intro Section */}
        <section className="pt-20 pb-16 md:pt-24 md:pb-24 flex flex-col-reverse md:flex-row items-center justify-between gap-12 border-b border-white/[0.08]">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              18+ Years Enterprise Data Experience
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Venkata Praveen Naram
            </h1>
            <p className="text-lg md:text-xl text-cyan-300 font-medium">
              Senior AI & Data Solutions Engineer
            </p>
            <p className="text-slate-400 max-w-xl text-base leading-relaxed">
              Pioneering enterprise AI workflows with Snowflake Cortex AI, governed Agentic SDLC, and modern lakehouse architectures across Fortune 100 systems.
            </p>
            
            {/* Quick Contact & Links */}
            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a
                href="mailto:naramvenkata@gmail.com"
                className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/venkata-praveen-naram/"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-full border border-white/10 hover:border-cyan-500/40 bg-white/[0.03] hover:bg-white/[0.08] text-slate-200 text-sm font-medium transition-all"
              >
                LinkedIn Profile
              </a>
              <a
                href="https://github.com/Praveen1308"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-full border border-white/10 hover:border-cyan-500/40 bg-white/[0.03] hover:bg-white/[0.08] text-slate-200 text-sm font-medium transition-all"
              >
                GitHub Profile
              </a>
            </div>
          </div>

          <div className="relative group shrink-0">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-60 blur-md group-hover:opacity-100 transition duration-500" />
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-2 border-slate-700 bg-slate-900 shadow-2xl">
              <Image
                src="/profile.jpeg"
                alt="Venkata Praveen Naram"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* 2. About Me */}
        <section id="about" className="py-16 md:py-20 border-b border-white/[0.08]">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-6">
            About Me
          </h2>
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm space-y-4 text-slate-300 leading-relaxed text-base">
            <p>
              Over 18 years of professional IT experience evolving from traditional enterprise Big Data engineering into cutting-edge, AI-enabled data ecosystems. Currently serving as a Data Solutions Engineer at <strong className="text-white">Liberty Mutual Insurance</strong>, architecting solutions for Data Analytics Engineering (DAE).
            </p>
            <p>
              My recent focus centers on designing intelligent data agents, integrating Large Language Models (LLMs) with enterprise data repositories, and engineering seamless interoperability between Snowflake Cortex AI and Databricks Unity Catalog. Known for pioneering spec-driven Agentic SDLC frameworks that turn ad-hoc AI usage into disciplined, repeatable engineering standards.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-slate-400">
              <div>
                <span className="text-slate-500">Education:</span> Master of Computer Applications (MCA) — Madurai Kamaraj University
              </div>
              <div>
                <span className="text-slate-500">Location:</span> United States
              </div>
            </div>
          </div>
        </section>

        {/* 3. Skills */}
        <section id="skills" className="py-16 md:py-20 border-b border-white/[0.08]">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-6">
            Technical Competencies
          </h2>
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm">
            <div className="flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-xl text-sm font-medium bg-white/[0.04] text-slate-200 border border-white/[0.08] hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Projects / Featured Work */}
        <section id="projects" className="py-16 md:py-20 border-b border-white/[0.08]">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              Featured AI & Engineering Initiatives
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Production solutions, proof-of-concept architectures, and agentic frameworks delivered in enterprise environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <div
                key={project.title}
                className="p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-cyan-500/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mt-1 mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {project.summary}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.05]">
                  {project.badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-cyan-950/40 border border-cyan-800/40 text-cyan-300"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Work Experience */}
        <section id="experience" className="py-16 md:py-20 border-b border-white/[0.08]">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-8">
            Career Experience
          </h2>
          <div className="space-y-6">
            {experienceHistory.map((item) => (
              <div
                key={item.company}
                className="p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/10 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <h3 className="text-lg font-bold text-white">
                    {item.role} <span className="text-cyan-400 font-normal">at {item.company}</span>
                  </h3>
                  <span className="text-xs font-mono text-slate-400">{item.period}</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Contact Section */}
        <section id="contact" className="py-16 md:py-24 text-center">
          <div className="max-w-2xl mx-auto p-10 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.08] backdrop-blur-md">
            <h2 className="text-3xl font-bold text-white tracking-tight mb-3">
              Let&apos;s Connect
            </h2>
            <p className="text-slate-300 text-sm max-w-md mx-auto mb-8">
              Available for technical consultations, enterprise AI architecture discussions, and data engineering collaborations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-sm">
              <a
                href="mailto:naramvenkata@gmail.com"
                className="flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors"
              >
                <span className="text-slate-400">Email:</span> naramvenkata@gmail.com
              </a>
              <span className="hidden sm:inline text-slate-600">•</span>
              <a
                href="tel:2064576768"
                className="flex items-center gap-2 text-cyan-300 hover:text-cyan-200 transition-colors"
              >
                <span className="text-slate-400">Phone:</span> (206) 457-6768
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:naramvenkata@gmail.com"
                className="px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-cyan-500/20"
              >
                Send Email
              </a>
              <a
                href="https://www.linkedin.com/in/venkata-praveen-naram/"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full border border-white/10 hover:border-cyan-500/40 bg-white/[0.04] text-slate-200 text-sm font-medium transition-all"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Praveen1308"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full border border-white/10 hover:border-cyan-500/40 bg-white/[0.04] text-slate-200 text-sm font-medium transition-all"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-8 text-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Venkata Praveen Naram. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
