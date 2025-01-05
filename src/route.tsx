import Login from "./core/login/Login";
import NotFound from "./core/work/notfound";
import Workbench from "./core/work/workbench";

export const BmbpRoutes = [
  {path:"/",component:Workbench},
  {path: "/login",component: Login },
  {path:"/home",component:Workbench},
  {path:"/*",component:NotFound}
];
