import * as Pages from "pages";

const routes = [
  {
    path: "/",
    component: Pages.Home,
    title: "Welcome to My Portfolio",
    exact: true,
  },
  //   {
  //     path: "*",
  //     component: Pages.NotFound,
  //     title: "404 - Page Not Found",
  //     exact: false,
  //   },
];

export default routes;
