import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { verifyToken } from "@/utils/verifyToken";

export const useRedirectIfAuthenticated = (redirectTo = "/dashboard") => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get("accessToken");
        const decoded = verifyToken();

        if (token && decoded && typeof decoded !== "boolean") {
            navigate(redirectTo);
        }
    }, []);
};
