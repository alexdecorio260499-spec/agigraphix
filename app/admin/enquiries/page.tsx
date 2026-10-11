import { Eye, Trash2 } from "lucide-react";

export default function AdminEnquiries() {
  const mockEnquiries = [
    { id: 1, name: "John Smith", company: "Retail Group", email: "john@example.com", service: "Signage", date: "2026-10-07", status: "New" },
    { id: 2, name: "Sarah Connor", company: "Tech Africa", email: "sarah@example.com", service: "Events & Exhibitions", date: "2026-10-06", status: "Read" },
    { id: 3, name: "Michel Durand", company: "Local Hotel", email: "michel@example.com", service: "Large Format Printing", date: "2026-10-05", status: "Read" },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-black uppercase tracking-tight">Enquiries</h1>
      </div>

      <div className="bg-white rounded shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-gray-400">Date</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-gray-400">Contact</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-gray-400">Service</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-gray-400">Status</th>
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-gray-400 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockEnquiries.map(enq => (
              <tr key={enq.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-sm text-gray-500">{enq.date}</td>
                <td className="px-6 py-4">
                  <p className="font-bold text-agigraphix-black">{enq.name}</p>
                  <p className="text-xs text-gray-500">{enq.company} · {enq.email}</p>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{enq.service}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 text-xs font-bold uppercase tracking-widest rounded ${
                    enq.status === 'New' ? 'bg-agigraphix-red/20 text-red-800' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {enq.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-gray-400 hover:text-agigraphix-black transition-colors mr-3">
                    <Eye className="w-4 h-4" />
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
