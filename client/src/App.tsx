// import store from "./features/store";
// import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//NOTE: IMPORTING EVERY PAGE ROUTES HERE
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import SignupPage from "./pages/SignupPage";
import SigninPage from "./pages/SigninPage";
import MainLayoutPage from "./pages/MainLayoutPage";
import AuthLayoutPage from "./pages/AuthLayoutPage";
import AdminLayout from "./components/layouts/AdminLayout";
import Dashboard from "./components/admin/Dashboard";
import AdminCategory from "./components/admin/AdminCategory";
import AdminProducts from "./components/admin/AdminProducts";
import Notifications from "./components/admin/Notifications";
import Search from "./components/admin/Search";
import AdminDashboardLayout from "./components/layouts/AdminDahboardLayout";
import AdminNotificationLayout from "./components/layouts/AdminNotificationLayout";
import AdminRequest from "./components/admin/AdminRequest";
import NewTestimonials from "./components/admin/NewTestimonials";
import NewReviews from "./components/admin/NewReviews";
import { Toaster } from "sonner";

// NOTE: SETUP TANSTACK - REACT QUERY
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

// NOTE: SETUP THE BROWSER ROUTE
const browserRouter = createBrowserRouter([
  {
    element: <MainLayoutPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayoutPage />,
    children: [
      {
        path: "signup",
        element: <SignupPage />,
      },
      {
        path: "signin",
        element: <SigninPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <AdminDashboardLayout />,
        children: [
          {
            path: "",
            element: <Dashboard />,
          },
          {
            path: "categories",
            element: <AdminCategory />,
          },
          {
            path: "products",
            element: <AdminProducts />,
          },
          {
            path: "",
          },
        ],
      },
      {
        path: "notifications",
        element: <AdminNotificationLayout />,
        children: [
          {
            path: "",
            element: <Notifications />,
          },
          {
            path: "admin-requests",
            element: <AdminRequest />,
          },
          {
            path: "new-testimonials",
            element: <NewTestimonials />,
          },
          {
            path: "new-reviews",
            element: <NewReviews />,
          },
        ],
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster />
      <RouterProvider router={browserRouter}></RouterProvider>
    </QueryClientProvider>
  );
}
