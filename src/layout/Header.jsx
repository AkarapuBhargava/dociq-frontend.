// import { Bell, Moon, ChevronDown } from "lucide-react";

// export default function Header() {
//   return (
//     <header className="flex items-center justify-between mb-8">
//       <div>
//         <h1 className="text-3xl font-bold text-slate-900">Document AI</h1>

//         <p className="text-gray-500 mt-1">
//           Intelligent Document Processing System
//         </p>
//       </div>

//       <div className="flex items-center gap-5">
//         <Moon size={20} className="cursor-pointer text-gray-500" />

//         <Bell size={20} className="cursor-pointer text-gray-500" />

//         <div className="flex items-center gap-2 cursor-pointer">
//           <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
//             A
//           </div>

//           <ChevronDown size={18} />
//         </div>
//       </div>
//     </header>
//   );
// }

import { Bell, Search, Sun, User } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 h-20 px-6 flex items-center justify-between">
      {/* Left */}

      <div className="flex items-center gap-5 flex-1">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Document AI Dashboard
          </h1>

          <p className="text-sm text-gray-500">
            Intelligent Document Processing System
          </p>
        </div>
      </div>

      {/* Center */}

      <div className="hidden lg:flex items-center relative w-96">
        <Search className="absolute left-4 text-gray-400" size={18} />

        <input
          type="text"
          placeholder="Search documents..."
          className="w-full border border-gray-200 rounded-xl py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Right */}

      <div className="flex items-center gap-4">
        <button className="w-11 h-11 rounded-xl border border-gray-200 hover:bg-gray-100 flex items-center justify-center">
          <Sun size={18} />
        </button>

        <button className="relative w-11 h-11 rounded-xl border border-gray-200 hover:bg-gray-100 flex items-center justify-center">
          <Bell size={18} />

          <span className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center gap-3 border border-gray-200 rounded-xl px-3 py-2">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
            <User size={18} />
          </div>

          <div className="hidden md:block">
            <h4 className="text-sm font-semibold text-slate-800">Admin</h4>

            <p className="text-xs text-gray-500">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}
