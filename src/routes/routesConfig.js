import PeoplePage from "@containers/PeoplePage";
import HomePage from "@containers/HomePage";
import NotFoundPage from "@containers/NotFoundPage";

const routesConfig = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/people",
    component: PeoplePage,
  },
  {
    path: "*",
    component: NotFoundPage,
  },
  {
    path: "/not-found",
    component: NotFoundPage,
  },
];

export default routesConfig;
