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
import CheckAuth from "./components/common/check-auth";
import UnAuth from "./pages/un-auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/auth-slice";
import { Skeleton } from "./components/ui/skeleton";

function App() {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  if (isLoading) return <Skeleton className="w-[800] bg-black h-[600px]" />;

  const router = createBrowserRouter([
    {
      path: "/auth",
      element: (
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <Authlayout />
        </CheckAuth>
      ),
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
      element: (
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <AdminLayout />
        </CheckAuth>
      ),
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
      path: "/shop",
      element: (
        <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          <ShoppingLayout />
        </CheckAuth>
      ),
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
      path: "/unauth-page",
      element: <UnAuth />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <RouterProvider router={router}>
      <h1>Main Header</h1>
      <Button>Login</Button>
    </RouterProvider>
  );
}
export default App;
