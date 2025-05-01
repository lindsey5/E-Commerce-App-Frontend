import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  Navigate
} from "react-router-dom";
import Dashboard from "./pages/dashboard";
import AdminLayout from "./layouts/AdminLayout";
import Products from "./pages/products";
import Tags from "./pages/tags";
import { ToastContainer } from "react-toastify";
import ProductItems from "./pages/productItems";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AdminLayout />}>
        <Route path='/' element={<Dashboard />}/>
        <Route path="/products" element={<Products />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/product/:id" element={<ProductItems />}/>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </>
  )
);


const App = () => {

  return <div>
    <ToastContainer position="top-right" autoClose={3000} />
    <RouterProvider router={router} />
  </div>
}

export default App