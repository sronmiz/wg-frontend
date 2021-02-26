import React from "react";
import { IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface IMenuButton {
  icon: any;
  to: string;
  label: string;
}

export const MenuButton: React.FC<IMenuButton> = (props) => {
  return <IconButton variant="link" aria-label={props.label} icon={props.icon} as={Link} to={props.to} />;
};
