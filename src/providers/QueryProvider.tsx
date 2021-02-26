import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

interface IQueryProvider {
  children: React.ReactNode;
}

const client = new QueryClient();

export const QueryProvider: React.FC<IQueryProvider> = (props) => {
  return (
    <QueryClientProvider client={client}>{props.children}</QueryClientProvider>
  );
};
