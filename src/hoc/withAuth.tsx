import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAppSelector } from "@/redux/store";

/**
 * Higher-Order Component to protect routes.
 * Redirects unauthenticated users to the login page.
 *
 * @param {React.ComponentType} WrappedComponent - The component to wrap.
 * @returns {React.ComponentType} - The wrapped component with authentication logic.
 */
const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const RequiresAuth: React.FC<P> = (props) => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    const router = useRouter();

    useEffect(() => {
      if (!isAuthenticated) {
        router.push("/login");
      }
    }, [isAuthenticated, router]);

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };

  return RequiresAuth;
};

export default withAuth;
