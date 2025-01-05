import { BrowserRouter, Route, Routes } from "react-router"
import { BmbpRoutes } from "./route"

const  renderRoutes = (routes:any[])=> {
  return routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      element={<route.component />}
    >
      {route.children && renderRoutes(route.children)}
    </Route>
  ));
}
function App() {

return (
  <>
    <BrowserRouter>
      <Routes>
        {
         renderRoutes(BmbpRoutes)
        }
      </Routes>
    </BrowserRouter>
  </>
)
}

export default App
