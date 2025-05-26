import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AdminRoute from "./AdminRoutes";
import AdminDashboard from "@/pages/Admin/AdminDashboard";
import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import Pricing from "@/pages/Pricing";
import Security from "@/pages/Security";
import HowItWorks from "@/pages/HowItWorks";
import OTP from "@/pages/auth/OTP";
import ResetPassword from "@/pages/auth/ResetPassword";
import BackToLogin from "@/pages/auth/BackToLogin";
import DashboardHome from "@/pages/Dashboard/DashboardHome";
import Swaps from "@/pages/Dashboard/Swaps";
import Chat from "@/pages/Dashboard/Chat";
import Profile from "@/pages/Dashboard/Profile";
import InitiateProposal from "@/pages/Dashboard/InitiateProposal";
import ConfirmSendingProposal from "@/pages/Dashboard/ConfirmSendingProposal";
import ReviewProposal from "@/pages/Dashboard/ReviewProposal";
import ConfirmAcceptingProposal from "@/pages/Dashboard/ConfirmAcceptingProposal";
import SwapActiveDetail from "@/pages/Dashboard/SwapActiveDetail";
import DisputeOverlay from "@/pages/Dashboard/DisputeOverlay";
import DashboardLayout from "@/pages/Dashboard/DashboardLayout";
import Browse from "@/pages/Dashboard/Browse";
import OnBoard from "@/pages/auth/OnBoard";
import OnBoardSuccess from "@/pages/auth/OnBoardSuccess";
import PublicMyProfile from "@/pages/Dashboard/PublicMyProfile";
import PrivateMyProfile from "@/pages/Dashboard/PrivateMyProfile";
import Setting from "@/pages/Dashboard/Setting";
import DisputeCreate from "@/pages/dispute/DisputeCreate";
import DisputeCreateSuccess from "@/pages/dispute/DisputeCreateSuccess";
import DisputeResponse from "@/pages/dispute/DisputeResponse";
import DisputeResponseSuccess from "@/pages/dispute/DisputeResponseSuccess";
import IdentityVerification from "@/pages/Dashboard/IdentityVerification";
import IdentityVerificationSuccess from "@/pages/Dashboard/IdentityVerificationSuccess";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/security",
        element: <Security />,
      },
      {
        path: "/how-it-works",
        element: <HowItWorks />,
      },
    ],
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/otp",
    element: <OTP />,
  },
  {
    path: "/forgot-password",
    element: <OTP />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/back-to-login",
    element: <BackToLogin />,
  },
  {
    path: "/on-board",
    element: <OnBoard />,
  },
  {
    path: "/on-board-success",
    element: <OnBoardSuccess />,
  },
  {
    path: "/dispute-create",
    element: <DisputeCreate />,
  },
  {
    path: "/dispute-create/success",
    element: <DisputeCreateSuccess />,
  },
  {
    path: "/dispute-response",
    element: <DisputeResponse />,
  },
  {
    path: "/dispute-response/success",
    element: <DisputeResponseSuccess />,
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "", // This becomes "/dashboard"
        element: <DashboardHome />,
      },
      {
        path: "info", // This becomes "/dashboard/info"
        element: <DashboardHome />,
      },
      {
        path: "swaps", // This becomes "/dashboard/swaps"
        element: <Swaps />,
      },
      {
        path: "browse",
        element: <Browse />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "initiate-proposal",
        element: <InitiateProposal />,
      },
      {
        path: "confirm-sending-proposal",
        element: <ConfirmSendingProposal />,
      },
      {
        path: "review-proposal",
        element: <ReviewProposal />,
      },
      {
        path: "confirm-accepting-proposal",
        element: <ConfirmAcceptingProposal />,
      },
      {
        path: "swap-active-detail",
        element: <SwapActiveDetail />,
      },
      {
        path: "dispute-overlay",
        element: <DisputeOverlay />,
      },
      {
        path: "profile/:id/public",
        element: <PublicMyProfile />,
      },
      {
        path: "profile/:id/private",
        element: <PrivateMyProfile />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
      {
        path: "identity-verification",
        element: <IdentityVerification />,
      },
      {
        path: "identity-verification/success",
        element: <IdentityVerificationSuccess />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoute />, // This will check if the user is an admin
    children: [
      { path: "", element: <AdminDashboard /> }, // Admin Dashboard
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
