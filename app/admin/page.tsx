import { FolderKanban, MessageSquare, Eye } from "lucide-react";
import Link from "next/link";
import { MOCK_PROJECTS } from "@/lib/data";

export default function AdminDashboard() {
  const publishedProjects = MOCK_PROJECTS.filter(p => p.featured).length;

  return (
    <div>
      <h1 className="text-3xl font-black uppercase tracking-tight mb-8">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 flex items-center">
          <div className="w-12 h-12 rounded bg-agigraphix-soft-white flex items-center justify-center mr-4">
            <FolderKanban className="text-agigraphix-black w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Total Projects</p>
            <p className="text-3xl font-black">{MOCK_PROJECTS.length}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 flex items-center">
          <div className="w-12 h-12 rounded bg-agigraphix-soft-white flex items-center justify-center mr-4">
            <Eye className="text-agigraphix-red w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Published</p>
            <p className="text-3xl font-black">{publishedProjects}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 flex items-center">
          <div className="w-12 h-12 rounded bg-agigraphix-soft-white flex items-center justify-center mr-4">
            <MessageSquare className="text-agigraphix-black w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Enquiries</p>
            <p className="text-3xl font-black">4</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Projects */}
        <div className="bg-white rounded shadow-sm border border-gray-100">
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-lg font-bold uppercase tracking-wide">Recent Projects</h2>
            <Link href="/admin/projects" className="text-sm font-bold text-agigraphix-red hover:text-red-700 transition-colors">View All</Link>
          </div>
          <div className="divide-y divide-gray-100">
            {MOCK_PROJECTS.slice(0, 4).map(project => (
              <div key={project.id} className="px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="font-bold text-agigraphix-black">{project.title}</p>
                  <p className="text-sm text-gray-500">{project.client} · {project.category}</p>
                </div>
                <div className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest rounded">
                  Published
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Enquiries */}
        <div className="bg-white rounded shadow-sm border border-gray-100">
          <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-lg font-bold uppercase tracking-wide">Recent Enquiries</h2>
            <Link href="/admin/enquiries" className="text-sm font-bold text-agigraphix-red hover:text-red-700 transition-colors">View All</Link>
          </div>
          <div className="divide-y divide-gray-100">
            {[
              { name: "John Smith", company: "Retail Group", service: "Signage", date: "Today" },
              { name: "Sarah Connor", company: "Tech Africa", service: "Events", date: "Yesterday" },
              { name: "Michel Durand", company: "Local Hotel", service: "Printing", date: "2 days ago" },
            ].map((enq, i) => (
              <div key={i} className="px-6 py-4">
                <div className="flex justify-between mb-1">
                  <p className="font-bold text-agigraphix-black">{enq.name}</p>
                  <span className="text-xs text-gray-400">{enq.date}</span>
                </div>
                <p className="text-sm text-gray-500">{enq.company} · Interested in {enq.service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
