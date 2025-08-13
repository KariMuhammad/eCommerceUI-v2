import useAuthCheck from "@/hooks/use-auth-check";

type AuthGuardProps = {
    children: React.ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
    // useAuthCheck()

    return <>{children}</>
}