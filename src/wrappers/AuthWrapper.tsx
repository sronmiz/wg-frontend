import React from "react";
import { checkOrRefreshAuth } from "../api";
import { useMutation } from "react-query";
import { LoginScreen, LoadingScreen } from "../components/screens";

interface IAuthWrapper {
  children: React.ReactNode;
}

export const AuthWrapper: React.FC<IAuthWrapper> = (props) => {
  const auth = useMutation(checkOrRefreshAuth);

  React.useEffect(() => {
    auth.mutate();
  }, []);

  return (
    <>
      {auth.isIdle || auth.isError ? (
        <LoginScreen />
      ) : auth.isLoading ? (
        <LoadingScreen />
      ) : (
        props.children
      )}
    </>
  );
};
