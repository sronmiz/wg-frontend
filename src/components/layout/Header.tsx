import React from "react";
import { Box } from "@chakra-ui/react";
import { MenuButton } from "../common";
import { TiPencil } from "react-icons/ti";

export const Header: React.FC<{}> = () => {
  return (
    <>
      <Box centerContent>lala</Box>
      <Box centerContent marginTop="10px">
        <MenuButton to="/" icon={<TiPencil/>} label="lala" />
        <MenuButton to="/log" icon={<TiPencil/>} label="lala" />
        <MenuButton to="/" icon={<TiPencil/>} label="lala" />
      </Box>
    </>
  );
};
