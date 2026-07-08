import { createBrowserRouter, Navigate } from "react-router-dom";

import DashboardLayout from "../../layout/Dashboardlayout";
import Dashboard from "../../pages/Dashboard";
import ApprovedFiles from "../../pages/ApprovedFiles";
import PendingFiles from "../../pages/PendingFiles";
import RejectedFiles from "../../pages/RejectedFiles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />,
  },

  {
    element: <DashboardLayout />,

    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },

      {
        path: "/approved-files",
        element: <ApprovedFiles />,
      },

      {
        path: "/pending-files",
        element: <PendingFiles />,
      },

      {
        path: "/rejected-files",
        element: <RejectedFiles />,
      },
    ],
  },

  {
    path: "*",
    element: <Navigate to="/dashboard" replace />,
  },
]);

export default router;
