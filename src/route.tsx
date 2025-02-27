import Login from "./core/login/login";
import DictTreePage from "./core/setting/dict";
import IFrame from "./core/work/iframe";
import NotFound from "./core/work/notfound";
import Workbench from "./core/work/workbench";
import VarsTreePage from "./core/setting/vars";

export const BmbpRoutes = [
  {
    path:"/", component: Workbench,
    children:[
      {
        path:"config/dict",component: DictTreePage
      },
      {
        path:"config/vars",component: VarsTreePage
      },
      {
        path:"demo",component:Login
      },
      {
        path:"iframe",component:IFrame
      },
      {
        path:"*",component:NotFound
      }
    ]
  },
  {path: "/login",component: Login },
  {path:"/*",component:NotFound}
];
