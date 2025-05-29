import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

type DecodedToken = {
    userId: string;
    iat: number;
    exp: number;
    role: string;
};

export const verifyToken = (): DecodedToken | false => {
    const token = Cookies.get("accessToken");
    console.log("Token from Cookies:", token);

    if (!token) {
        return false;
    }

    try {
        const decoded: DecodedToken = jwtDecode(token);
        console.log("Decoded Token:", decoded);
        return decoded;
    } catch (err) {
        console.error("Invalid token:", err);
        return false;
    }
};
