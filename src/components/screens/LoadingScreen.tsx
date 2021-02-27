import React from "react";
import { MainContainer, LoadingSpinner } from "../common";

export const LoadingScreen: React.FC<{}> = () => {
  return (
    <MainContainer>
      <LoadingSpinner />
    </MainContainer>
  );
};
