import {
  UserIcon,
  PagesIcon,
} from "../view/Components/Icons";
import HomePage from "../view/pages/HomePage";

export const SIDEBAR_DATA = [
    {
    id: 1,
    name: "users",
    path: "users",
    icon: <UserIcon />,
    component: <HomePage />
  },
  {
    id: 2,
    name: "pages",
    path: "pages",
    icon: <PagesIcon />,
    component: <HomePage />
  },
];

export default SIDEBAR_DATA