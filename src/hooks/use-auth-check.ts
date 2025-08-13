import { AuthState, checkTokenExpiration } from "@/redux/features/auth/authSlice";
import { RootState } from "@/redux/features/reducers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useAuthCheck() {
    const dispatch = useDispatch();
    const user = useSelector<RootState, AuthState>(state => state.auth);

    useEffect(() => {
        if (user.token && user.isAuthenticated) {
            dispatch(checkTokenExpiration());
        }

        // const interval = setInterval(() => {
        //     if (user.token && user.isAuthenticated) {
        //         dispatch(checkTokenExpiration());
        //     }
        // }, 60000)


        // return () => clearInterval(interval);
    }, [dispatch, user.token, user.isAuthenticated])
}