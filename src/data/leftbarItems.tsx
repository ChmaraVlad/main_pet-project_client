import {  PagesIcon, UserIcon, WizardIcon } from "../view/components/Icons";
import AccountPage from "../view/pages/AccountPage";
import AdminPage from "../view/pages/AdminPage";
import HomePage from "../view/pages/HomePage";
import ProductsPage from "../view/pages/ProductsPage";
import SubscriptionPlans from "../view/pages/SubscriptionPlans";

export const SIDEBAR_DATA = [
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
  {
    id: 3,
    name: "Subscription Plans",
    path: "/subscription",
    icon: <WizardIcon />,
    component: <SubscriptionPlans />,
  },
];

export default SIDEBAR_DATA
