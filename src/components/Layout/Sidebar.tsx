import {
  X,
  Home,
  FileText,
  Bell,
  CheckSquare,
  Folder,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: FileText, label: "Notes", path: "/notes" },
    { icon: Bell, label: "Reminders", path: "/reminders" },
    { icon: CheckSquare, label: "Tasks", path: "/tasks" },
    { icon: Folder, label: "Projects", path: "/projects" },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h1 className="text-xl font-bold text-gray-800">TaskEasy</h1>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 lg:hidden"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="p-4">
          {menuItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-gray-900"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </aside>
    </>
  );
}
