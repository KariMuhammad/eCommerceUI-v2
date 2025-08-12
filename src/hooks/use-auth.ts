import { AuthState } from "@/redux/features/auth/authSlice";
import { RootState } from "@/redux/features/reducers";
import { useSelector } from "react-redux";

export default function useAuth() {
    const user = useSelector<RootState, AuthState>(state => state.auth);

    return user;
}