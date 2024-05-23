import { AuthIcon, PagesIcon, UserIcon } from "../view/components/Icons";
import AccountPage from "../view/pages/AccountPage";
import AdminPage from "../view/pages/AdminPage";
import AuthPage from "../view/pages/AuthPage";
import HomePage from "../view/pages/HomePage";
import ProductsPage from "../view/pages/ProductsPage";

export const SIDEBAR_DATA = [
  {
    id: 3,
    name: "authentication",
    path: "/authentication",
    icon: <AuthIcon />,
    component: <AuthPage />,
  },
  {
    id: 2,
    name: "home page",
    path: "/",
    icon: <PagesIcon />,
    component: <HomePage />,
  },
  {
    id: 1,
    name: "account",
    path: "/account",
    icon: <UserIcon />,
    component: <AccountPage />,
  },
  {
    id: 1,
    name: "Products",
    path: "/products",
    icon: <UserIcon />,
    component: <ProductsPage />,
  },
  {
    id: 3,
    name: "Admin Page",
    path: "/admin",
    icon: <UserIcon />,
    component: <AdminPage />,
  },
];

export default SIDEBAR_DATA