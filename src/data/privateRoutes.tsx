import {
  AuthIcon,
} from "../view/Components/Icons";
import AuthPage from "../view/pages/AuthPage";

export const SIDEBAR_DATA = [
    {
    id: 3,
    name: "authentication",
    path: "authentication",
    icon: <AuthIcon />,
    component: <AuthPage />
  },
];

export default SIDEBAR_DATA