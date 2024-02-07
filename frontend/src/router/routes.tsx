import UserRoot from "../pages/user/userRoot";
import Home from "../pages/user/home/index";
import NoPage from "../pages/noPage";
import AdminRoot from "../pages/admin/adminRoot";
import Dashboard from "../pages/admin/dashboard/index";
import UserSettingsRoot from "../pages/userSettings/userSettingsRoot";
import Settings from "../pages/userSettings/settings";
import BookingHistory from "../pages/userSettings/bookingHistory";
import Inbox from "../pages/userSettings/inbox";
import Wishlist from "../pages/userSettings/wishlist";
import About from "../pages/user/about";
import Contact from "../pages/user/contact";
import FAQ from "../pages/user/faq";
import BecomeLocalExpert from "../pages/user/localExpert";

export const routes = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About/>,
      }, 
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/faq",
        element: <FAQ/>,
      },
      {
        path: "/become-local-expert",
        element: <BecomeLocalExpert/>,
      },
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
    path: "/account",
    element: <UserSettingsRoot/>,
    children: [
      {
        path: "/account",
        element: <Settings/>
      },
      {
        path: "/account/booking-history",
        element: <BookingHistory/>,
      }, {
        path: "/account/wishlist",
        element: <Wishlist/>
      },
      {
        path: "/account/inbox",
        element: <Inbox/>,
      }
    ],
  },
  {
    path: "*",
    element: <NoPage />,
  },
];