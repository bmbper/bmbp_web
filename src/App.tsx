import { HashRouter, Route, Routes } from "react-router";
import { BmbpRoutes } from "./route";

const renderRoutes = (routes: any[]) => {
  return routes.map((route, index) => (
    <Route key={index} path={route.path} element={<route.component />}>
      {route.children && renderRoutes(route.children)}
    </Route>
  ));
};
function App() {
  return (
    <>
      <HashRouter>
        <Routes>{renderRoutes(BmbpRoutes)}</Routes>
      </HashRouter>
    </>
  );
}

export default App;
