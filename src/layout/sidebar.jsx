// import {
//   Menu,
//   FileText,
//   ClipboardList,
//   BarChart3,
//   Settings,
//   HelpCircle,
// } from "lucide-react";
// import { NavLink } from "react-router-dom";

// export default function Sidebar() {
//   return (
//     <aside className="w-20 bg-white border-r border-gray-200 min-h-screen flex flex-col justify-between py-6">
//       <div className="space-y-6">
//         <div className="flex justify-center">
//           <Menu className="w-6 h-6 text-gray-600" />
//         </div>

//         <nav className="space-y-3">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `flex justify-center py-3 ${
//                 isActive
//                   ? "bg-blue-600 text-white"
//                   : "text-gray-500 hover:bg-gray-100"
//               } rounded-xl mx-3`
//             }
//           >
//             <FileText size={22} />
//           </NavLink>

//           <NavLink
//             to="/approved-files"
//             className="flex justify-center py-3 text-gray-500 hover:bg-gray-100 rounded-xl mx-3"
//           >
//             <ClipboardList size={22} />
//           </NavLink>

//           <NavLink
//             to="/pending-files"
//             className="flex justify-center py-3 text-gray-500 hover:bg-gray-100 rounded-xl mx-3"
//           >
//             <BarChart3 size={22} />
//           </NavLink>

//           <NavLink
//             to="/rejected-files"
//             className="flex justify-center py-3 text-gray-500 hover:bg-gray-100 rounded-xl mx-3"
//           >
//             <Settings size={22} />
//           </NavLink>
//         </nav>
//       </div>

//       <div className="flex justify-center">
//         <HelpCircle className="text-gray-400" size={22} />
//       </div>
//     </aside>
//   );
// }

import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  CheckCircle2,
  Clock3,
  XCircle,
  Settings,
  LogOut,
  Menu,
  X,
  FileText,
} from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const menus = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Approved Files",
      path: "/approved-files",
      icon: CheckCircle2,
    },
    {
      name: "Pending Files",
      path: "/pending-files",
      icon: Clock3,
    },
    {
      name: "Rejected Files",
      path: "/rejected-files",
      icon: XCircle,
    },
  ];

  return (
    <>
      {/* Mobile Toggle */}

      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-5 left-5 z-50 bg-blue-600 text-white p-2 rounded-lg shadow-lg"
      >
        <Menu size={22} />
      </button>

      {/* Overlay */}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}

      <aside
        className={`
        fixed lg:static
        top-0 left-0
        z-50
        h-screen
        w-72
        bg-white
        border-r
        border-gray-200
        shadow-lg
        transition-transform
        duration-300
        ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        {/* Logo */}

        <div className="flex items-center justify-between px-6 py-6 border-b">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center">
              <FileText className="text-white" size={24} />
            </div>

            <div>
              <h2 className="font-bold text-xl">DocAI</h2>

              <p className="text-xs text-gray-500">Document Intelligence</p>
            </div>
          </div>

          <button className="lg:hidden" onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>

        {/* Menu */}

        <div className="p-5 space-y-2">
          {menus.map((menu) => {
            const Icon = menu.icon;

            return (
              <NavLink
                key={menu.path}
                to={menu.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-600 hover:bg-gray-100"
                  }`
                }
              >
                <Icon size={20} />

                <span className="font-medium">{menu.name}</span>
              </NavLink>
            );
          })}
        </div>

        {/* Bottom Section */}

        <div className="absolute bottom-0 left-0 right-0 p-5 border-t bg-white">
          <NavLink
            to="/settings"
            className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 transition"
          >
            <Settings size={20} />
            <span className="font-medium">Settings</span>
          </NavLink>

          <button className="mt-2 w-full flex items-center gap-4 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition">
            <LogOut size={20} />

            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
