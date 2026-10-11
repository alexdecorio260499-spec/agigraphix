import { Plus, Edit, Trash2 } from "lucide-react";
import { MOCK_PROJECTS } from "@/lib/data";

export default function AdminProjects() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-black uppercase tracking-tight">Projects</h1>
        <button className="bg-agigraphix-black text-white px-4 py-2 rounded font-bold uppercase tracking-wide text-sm flex items-center hover:bg-agigraphix-red hover:text-agigraphix-black transition-colors">
          <Plus className="w-4 h-4 mr-2" /> New Project
        </button>
      </div>

      <div className="bg-white rounded shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-gray-400">Project</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-gray-400">Category</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-gray-400">Client</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-gray-400">Status</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-gray-400 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {MOCK_PROJECTS.map(project => (
              <tr key={project.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div 
                      className="w-12 h-12 rounded bg-cover bg-center mr-4"
                      style={{ backgroundImage: `url('${project.coverImage}')` }}
                    />
                    <div>
                      <p className="font-bold text-agigraphix-black">{project.title}</p>
                      <p className="text-xs text-gray-500">{project.year}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{project.category}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{project.client}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold uppercase tracking-widest rounded">
                    Published
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-gray-400 hover:text-agigraphix-black transition-colors mr-3">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="text-gray-400 hover:text-red-600 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
