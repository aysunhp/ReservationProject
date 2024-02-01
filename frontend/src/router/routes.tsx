import UserRoot from "../pages/user/userRoot";
import Home from "../pages/user/home/index";
import NoPage from "../pages/noPage";
import AdminRoot from "../pages/admin/adminRoot";
import Dashboard from "../pages/admin/dashboard/index";

export const routes = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      }
    ],
  },
  {
    path: "*",
    element: <NoPage />,
  },
];