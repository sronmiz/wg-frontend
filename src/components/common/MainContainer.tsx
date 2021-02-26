import React from "react";
import { Container } from "@chakra-ui/react";

interface IMainContainer {
  children: React.ReactNode;
}

export const MainContainer: React.FC<IMainContainer> = (props) => {
  return <Container maxWidth="150ch">{props.children}</Container>;
};
