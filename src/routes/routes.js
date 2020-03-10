import { Dashboard, Profile } from "pages";

const route = [
  {
    name: "Dashboard",
    component: Dashboard,
    path: "/",
    exact: true
  },
  {
    name: "Profile",
    path: "/profile",
    exact: true,
    component: Profile
  }
];

export default route;
