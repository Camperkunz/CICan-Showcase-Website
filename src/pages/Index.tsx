import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FilterBar from "@/components/FilterBar";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import projectsData from "@/data/projects.json";
import type { Project } from "@/data/types";

const projects = projectsData as Project[];

const Index = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language as "en" | "fr";

  const [theme, setTheme] = useState("all");
  const [province, setProvince] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (theme !== "all" && p.theme !== theme) return false;
      if (province !== "all" && p.province !== province) return false;
      if (search.trim()) {
        const name = (p[lang] ?? p.en).collegeName.toLowerCase();
        if (!name.includes(search.toLowerCase())) return false;
      }
      return true;
    });
  }, [theme, province, search, lang]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <FilterBar
        theme={theme}
        province={province}
        search={search}
        onThemeChange={setTheme}
        onProvinceChange={setProvince}
        onSearchChange={setSearch}
        resultCount={filtered.length}
      />

      <main className="flex-1 py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <p className="py-20 text-center text-muted-foreground" role="status">
              {/* noResults handled in FilterBar aria-live */}
              No projects match your current filters.
            </p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
