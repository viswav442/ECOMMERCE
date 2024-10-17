import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import Authlayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/Login";
import AuthRegister from "./pages/auth/Register";
import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminOrders from "./pages/admin-view/orders";
import AdminProducts from "./pages/admin-view/products";
import AdminFeatures from "./pages/admin-view/features";
import ShoppingLayout from "./components/shopping-view/layout";
import NotFound from "./pages/not-found/index";
import ShoppingHome from "./pages/shopping-view/home";
import ShoppingListing from "./pages/shopping-view/listing";
import ShoppingCheckout from "./pages/shopping-view/checkout";
import ShoppingAccount from "./pages/shopping-view/account";

function App() {
  const router = createBrowserRouter([
    {
      path: "/auth",
      element: <Authlayout />,
      children: [
        {
          path: "login",
          element: <AuthLogin />,
        },
        {
          path: "register",
          element: <AuthRegister />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "dashboard",
          element: <AdminDashboard />,
        },
        {
          path: "orders",
          element: <AdminOrders />,
        },
        {
          path: "products",
          element: <AdminProducts />,
        },
        {
          path: "features",
          element: <AdminFeatures />,
        },
      ],
    },
    {
      path: "shop",
      element: <ShoppingLayout />,
      children: [
        {
          path: "home",
          element: <ShoppingHome />,
        },
        {
          path: "listing",
          element: <ShoppingListing />,
        },
        {
          path: "checkout",
          element: <ShoppingCheckout />,
        },
        {
          path: "account",
          element: <ShoppingAccount />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <RouterProvider router={router}>
      <Button>Login</Button>
    </RouterProvider>
  );
}
export default App;
