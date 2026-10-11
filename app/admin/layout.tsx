"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FolderKanban, MessageSquare, LogOut, Settings } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Simple check to avoid showing sidebar on login page
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Projects", href: "/admin/projects", icon: FolderKanban },
    { name: "Enquiries", href: "/admin/enquiries", icon: MessageSquare },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans text-agigraphix-black">
      {/* Sidebar */}
      <aside className="w-64 bg-agigraphix-black text-white flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-white/10">
          <span className="text-xl font-bold tracking-wider">AGIGRAPHIX CMS</span>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-4">
          <nav className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/admin");
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded transition-colors ${
                    isActive 
                      ? "bg-agigraphix-red text-white font-bold" 
                      : "text-white/80 hover:bg-white/10"
                  }`}
                >
                  <Icon className={`mr-3 h-5 w-5 ${isActive ? "text-agigraphix-black" : "text-white/60"}`} />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-white/10">
          <button className="flex items-center w-full px-4 py-3 text-sm font-medium text-white/80 hover:bg-white/10 rounded transition-colors">
            <LogOut className="mr-3 h-5 w-5 text-white/60" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-gray-50 p-8">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
