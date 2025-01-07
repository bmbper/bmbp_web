import Login from "./core/login/login";
import NotFound from "./core/work/notfound";
import Workbench from "./core/work/workbench";

export const BmbpRoutes = [
  {
    path:"/", component: Workbench,
    children:[
      {
        path:"demo",component:Login
      },
      {
        path:"*",component:NotFound
      }
    ]
  },
  {path: "/login",component: Login },
  {path:"/*",component:NotFound}
];
