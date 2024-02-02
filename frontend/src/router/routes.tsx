import UserRoot from "../pages/user/userRoot";
import Home from "../pages/user/home/index";
import NoPage from "../pages/noPage";
import AdminRoot from "../pages/admin/adminRoot";
import Dashboard from "../pages/admin/dashboard/index";
import UserSettingsRoot from "../pages/userSettings/userSettingsRoot";
import UserSettingsDashboard from "../pages/userSettings/dashboard";

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
    path: "/settings",
    element: <UserSettingsRoot/>,
    children: [
      {
        path: "/settings",
        element: <UserSettingsDashboard/>,
      }
    ],
  },
  {
    path: "*",
    element: <NoPage />,
  },
];