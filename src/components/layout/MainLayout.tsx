import React from "react";
import { MainContainer } from "../common";
import { TopLine, Header } from ".";

interface IMainLayout {
  children: React.ReactNode;
}

export const MainLayout: React.FC<IMainLayout> = (props) => {
  return (
    <>
      <TopLine />
      <MainContainer>
        <Header />
        {props.children}
      </MainContainer>
    </>
  );
};
