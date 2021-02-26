import React from "react";
import { Button, Link } from "@chakra-ui/react";
import { ImGoogle } from "react-icons/im";
import { config } from "../../config";

export const GoogleButton: React.FC<{}> = () => (
  <Button
    as={Link}
    href={`${config.BACKEND_URL}/google/redirect`}
    leftIcon={<ImGoogle />}
  >
    Sign in with google
  </Button>
);
