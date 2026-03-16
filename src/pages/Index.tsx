import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Storytelling from "@/components/Storytelling";
import FilterBar from "@/components/FilterBar";
import type { SortOrder } from "@/components/FilterBar";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import projectsData from "@/data/projects.json";
import type { Project } from "@/data/types";
import { getThemes } from "@/data/types";

const projects = projectsData as Project[];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const Index = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "en" | "fr";

  const [theme, setTheme] = useState("all");
  const [province, setProvince] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOrder>("az");

  const filtered = useMemo(() => {
    let result = projects.filter((p) => {
      if (theme !== "all" && p.theme !== theme) return false;
      if (province !== "all" && p.province !== province) return false;
      if (search.trim()) {
        const name = (p[lang] ?? p.en).collegeName.toLowerCase();
        if (!name.includes(search.toLowerCase())) return false;
      }
      return true;
    });

    result.sort((a, b) => {
      const nameA = (a[lang] ?? a.en).collegeName.toLowerCase();
      const nameB = (b[lang] ?? b.en).collegeName.toLowerCase();
      return sort === "az" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });

    return result;
  }, [theme, province, search, sort, lang]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <Storytelling />
      <FilterBar
        theme={theme}
        province={province}
        search={search}
        sort={sort}
        onThemeChange={setTheme}
        onProvinceChange={setProvince}
        onSearchChange={setSearch}
        onSortChange={setSort}
        resultCount={filtered.length}
      />

      <main id="project-grid" className="flex-1 py-8 sm:py-12 mb-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="mb-8 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl"
          >
            {t("projects.heading")}
          </motion.h2>
          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.4, delay: i * 0.08, ease: "easeOut" as const } },
                  }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="py-20 text-center text-muted-foreground" role="status">
              {t("filters.noResults")}
            </p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
