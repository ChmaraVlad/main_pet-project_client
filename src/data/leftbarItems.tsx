import { AuthIcon, PagesIcon, UserIcon } from "../view/components/Icons";
import AuthPage from "../view/pages/AuthPage";
import HomePage from "../view/pages/HomePage";

export const SIDEBAR_DATA = [
  {
    id: 2,
    name: "home page",
    path: "/",
    icon: <PagesIcon />,
    component: <HomePage />,
    isProtected: false,
  },
    {
    id: 3,
    name: "authentication",
    path: "authentication",
    icon: <AuthIcon />,
    component: <AuthPage />,
    isProtected: false,
  },
  {
    id: 1,
    name: "users",
    path: "users",
    icon: <UserIcon />,
    component: <HomePage />,
    isProtected: true,
  },
];

export default SIDEBAR_DATA