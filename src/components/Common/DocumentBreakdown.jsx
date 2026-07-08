// import {
//   FileText,
//   FileSpreadsheet,
//   CreditCard,
//   FileQuestion,
// } from "lucide-react";

// export default function DocumentBreakdown({ breakdown, stats }) {
//   const total = stats?.total || 0;

//   const cards = [
//     {
//       title: "Invoices",
//       count: breakdown?.invoices || 0,
//       color: "blue",
//       icon: FileSpreadsheet,
//     },
//     {
//       title: "Resumes",
//       count: breakdown?.resumes || 0,
//       color: "purple",
//       icon: FileText,
//     },
//     {
//       title: "PAN Cards",
//       count: breakdown?.panCards || 0,
//       color: "amber",
//       icon: CreditCard,
//     },
//     {
//       title: "Unknown",
//       count: breakdown?.unknown || 0,
//       color: "gray",
//       icon: FileQuestion,
//     },
//   ];

//   const colors = {
//     blue: {
//       bg: "bg-blue-50",
//       icon: "bg-blue-100",
//       text: "text-blue-600",
//       border: "border-blue-100",
//     },
//     purple: {
//       bg: "bg-purple-50",
//       icon: "bg-purple-100",
//       text: "text-purple-600",
//       border: "border-purple-100",
//     },
//     amber: {
//       bg: "bg-amber-50",
//       icon: "bg-amber-100",
//       text: "text-amber-600",
//       border: "border-amber-100",
//     },
//     gray: {
//       bg: "bg-slate-50",
//       icon: "bg-slate-100",
//       text: "text-slate-600",
//       border: "border-slate-100",
//     },
//   };

//   return (
//     <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-lg font-semibold text-slate-800">
//           Document Type Breakdown
//         </h2>

//         <span className="text-sm text-gray-500">Total {total}</span>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
//         {cards.map((item) => {
//           const Icon = item.icon;

//           const style = colors[item.color];

//           const percentage =
//             total > 0 ? ((item.count / total) * 100).toFixed(1) : 0;

//           return (
//             <div
//               key={item.title}
//               className={`${style.bg} ${style.border}
//               border rounded-2xl p-3 hover:shadow-md transition`}
//             >
//               <div className="flex justify-between items-center">
//                 <div>
//                   <div
//                     className={`${style.icon} w-10 h-10 rounded-xl flex items-center justify-center`}
//                   >
//                     <Icon className={`${style.text} w-6 h-6`} />
//                   </div>

//                   <h3 className={`mt-4 font-semibold ${style.text}`}>
//                     {item.title}
//                   </h3>
//                 </div>

//                 <div className="text-right">
//                   <h2 className="text-xl font-bold text-slate-800">
//                     {item.count}
//                   </h2>

//                   <p className="text-xs text-gray-500">{percentage}%</p>
//                 </div>
//               </div>

//               <div className="mt-5">
//                 <div className="w-full bg-white rounded-full h-2">
//                   <div
//                     style={{
//                       width: `${percentage}%`,
//                     }}
//                     className={`h-2 rounded-full ${
//                       item.color === "blue"
//                         ? "bg-blue-500"
//                         : item.color === "purple"
//                           ? "bg-purple-500"
//                           : item.color === "amber"
//                             ? "bg-amber-500"
//                             : "bg-slate-500"
//                     }`}
//                   />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

import {
  FileText,
  FileSpreadsheet,
  CreditCard,
  FileQuestion,
} from "lucide-react";

export default function DocumentBreakdown({ breakdown, stats }) {
  const total = stats?.total || 0;

  const cards = [
    {
      title: "Invoices",
      count: breakdown?.invoices || 0,
      color: "blue",
      icon: FileSpreadsheet,
    },
    {
      title: "Resumes",
      count: breakdown?.resumes || 0,
      color: "purple",
      icon: FileText,
    },
    {
      title: "PAN Cards",
      count: breakdown?.panCards || 0,
      color: "amber",
      icon: CreditCard,
    },
    {
      title: "Unknown",
      count: breakdown?.unknown || 0,
      color: "gray",
      icon: FileQuestion,
    },
  ];

  const colors = {
    blue: {
      bg: "bg-blue-50/50",
      text: "text-blue-600",
      border: "border-blue-100",
      bar: "bg-blue-500",
    },
    purple: {
      bg: "bg-purple-50/50",
      text: "text-purple-600",
      border: "border-purple-100",
      bar: "bg-purple-500",
    },
    amber: {
      bg: "bg-amber-50/50",
      text: "text-amber-600",
      border: "border-amber-100",
      bar: "bg-amber-500",
    },
    gray: {
      bg: "bg-slate-50",
      text: "text-slate-600",
      border: "border-slate-200/60",
      bar: "bg-slate-400",
    },
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
          Document Type Breakdown
        </h2>
        <span className="text-[10px] font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">
          Total {total}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {cards.map((item) => {
          const style = colors[item.color];
          const percentage =
            total > 0 ? ((item.count / total) * 100).toFixed(1) : "0.0";

          return (
            <div
              key={item.title}
              className={`${style.bg} ${style.border} border rounded-xl p-2.5 flex flex-col justify-between transition-colors`}
            >
              <div className="flex justify-between items-start gap-1.5">
                <span
                  className={`text-[11px] font-bold tracking-tight ${style.text} truncate`}
                >
                  {item.title}
                </span>
                <div className="text-right shrink-0">
                  <span className="text-sm font-black text-slate-900 block leading-none">
                    {item.count}
                  </span>
                  <span className="text-[9px] font-medium text-slate-400 block mt-0.5">
                    {percentage}%
                  </span>
                </div>
              </div>

              <div className="w-full bg-slate-100 rounded-full h-1.5 mt-2 overflow-hidden">
                <div
                  style={{ width: `${percentage}%` }}
                  className={`h-full rounded-full transition-all duration-300 ${style.bar}`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
