import { AuthIcon, PagesIcon, UserIcon } from "../view/components/Icons";
import AccountPage from "../view/pages/AccountPage";
import AuthPage from "../view/pages/AuthPage";
import HomePage from "../view/pages/HomePage";

export const SIDEBAR_DATA = [
  {
    id: 1,
    name: "account",
    path: "/account",
    icon: <UserIcon />,
    component: <AccountPage />,
    isProtected: true,
  },
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
    path: "/authentication",
    icon: <AuthIcon />,
    component: <AuthPage />,
    isProtected: false,
  },
];

export default SIDEBAR_DATA