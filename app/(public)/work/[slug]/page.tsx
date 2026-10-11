import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MOCK_PROJECTS } from "@/lib/data";

export default async function ProjectDetail({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const project = MOCK_PROJECTS.find(p => p.slug === slug);
  
  if (!project) {
    notFound();
  }

  const relatedProjects = MOCK_PROJECTS.filter(p => p.id !== project.id).slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Image */}
      <div className="w-full h-[60vh] md:h-[80vh] relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${project.coverImage}')` }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl -mt-32 relative z-10">
        <div className="bg-white p-8 md:p-16 shadow-2xl rounded-sm">
          {/* Breadcrumb */}
          <div className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-6 flex items-center space-x-2">
            <Link href="/work" className="hover:text-agigraphix-black transition-colors">Work</Link>
            <span>/</span>
            <span>{project.industry}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-agigraphix-black mb-12 leading-none">
            {project.title}
          </h1>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-b border-gray-100 py-8 mb-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Client</p>
              <p className="font-medium text-agigraphix-black">{project.client}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Location</p>
              <p className="font-medium text-agigraphix-black">{project.location}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Category</p>
              <p className="font-medium text-agigraphix-black">{project.category}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Year</p>
              <p className="font-medium text-agigraphix-black">{project.year}</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600">
            <h2 className="text-2xl font-bold uppercase tracking-wide text-agigraphix-black mb-4">The Project</h2>
            <p className="leading-relaxed mb-12">{project.description}</p>
            
            <h2 className="text-2xl font-bold uppercase tracking-wide text-agigraphix-black mb-4">What we delivered</h2>
            <ul className="list-disc pl-6 space-y-2 mb-12 marker:text-agigraphix-red">
              {project.services.map((service, i) => (
                <li key={i} className="pl-2">{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="container mx-auto px-6 max-w-7xl py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.galleryImages.map((img, i) => (
            <div 
              key={i} 
              className={`aspect-[4/3] rounded overflow-hidden ${i % 3 === 0 ? 'md:col-span-2 aspect-[21/9]' : ''}`}
            >
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${img}')` }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-agigraphix-soft-white py-24 text-center border-t border-gray-100">
        <h3 className="text-3xl font-bold uppercase tracking-tight text-agigraphix-black mb-8">
          Interested in a similar project?
        </h3>
        <Link 
          href="/contact" 
          className="px-8 py-4 bg-agigraphix-red text-white font-bold rounded hover:bg-red-700 transition-colors inline-flex items-center"
        >
          Start a Project <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>

      {/* Related Projects */}
      <div className="container mx-auto px-6 max-w-7xl py-24">
        <h3 className="text-2xl font-black uppercase tracking-tight text-agigraphix-black mb-12">More Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedProjects.map(p => (
             <Link 
             href={`/work/${p.slug}`} 
             key={p.id} 
             className="group cursor-pointer block overflow-hidden rounded bg-gray-100 relative aspect-[4/3]"
           >
             <div 
               className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
               style={{ backgroundImage: `url('${p.coverImage}')` }}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
             <div className="absolute bottom-0 left-0 p-8 w-full">
               <p className="text-agigraphix-red text-xs font-bold uppercase tracking-widest mb-2">{p.category}</p>
               <h3 className="text-white text-xl font-bold">{p.title}</h3>
             </div>
           </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
