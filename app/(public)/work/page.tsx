"use client";

import { useState } from "react";
import Link from "next/link";
import { MOCK_PROJECTS } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const FILTERS = ["All", "Signage", "Printing", "Displays", "Events", "Corporate", "Retail", "Hospitality"];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = MOCK_PROJECTS.filter(project => {
    if (activeFilter === "All") return true;
    return project.category === activeFilter || project.industry === activeFilter;
  });

  return (
    <div className="bg-white min-h-screen pt-12 pb-24">
      {/* Hero */}
      <div className="container mx-auto px-6 max-w-7xl mb-16">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-agigraphix-black mb-6">
          OUR WORK
        </h1>
        <p className="text-lg md:text-xl text-agigraphix-charcoal max-w-2xl">
          A selection of signage, displays, printing, installations and branded environments.
        </p>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-6 max-w-7xl mb-12">
        <div className="flex flex-wrap gap-2 md:gap-4 border-b border-gray-200 pb-6">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-bold tracking-wide uppercase transition-all duration-300",
                activeFilter === filter 
                  ? "bg-agigraphix-black text-white" 
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-agigraphix-black"
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <Link 
              href={`/work/${project.slug}`} 
              key={project.id} 
              className={cn(
                "group cursor-pointer block overflow-hidden rounded bg-gray-100 relative",
                // Make every 3rd item larger to create an asymmetric masonry feel
                i % 5 === 0 ? "md:col-span-2 lg:col-span-2 aspect-video md:aspect-[21/9]" : "aspect-[4/3]"
              )}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${project.coverImage}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
                <div>
                  <p className="text-agigraphix-red text-xs font-bold uppercase tracking-widest mb-2">{project.category} · {project.industry}</p>
                  <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-24 text-gray-400 font-medium text-lg">
            No projects found for this category.
          </div>
        )}
      </div>
    </div>
  );
}
