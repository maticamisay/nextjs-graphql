import { getToken } from "@/app/actions";
import useUser from "@/store/useUser";
import React, { useEffect } from "react";

const useRevalidateUser = () => {
  const { user, setUser } = useUser();

  useEffect(() => {
    getToken().then((res) => console.log(res));
  }, []);
  return <div>useRevalidateUser</div>;
};

export default useRevalidateUser;
