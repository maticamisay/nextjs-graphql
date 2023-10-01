import { DecisionType, Role } from "@/lib/constants";
import useUser from "@/store/useUser";

const useAccessControl = (requiredRole) => {
  const { user } = useUser();
  const currentUserRole = user.role;

  if (currentUserRole === Role.ADMIN) {
    return DecisionType.ALLOW;
  } else if (requiredRole === currentUserRole) {
    return DecisionType.ALLOW;
  }
  return DecisionType.DENY;
};

export default useAccessControl;
