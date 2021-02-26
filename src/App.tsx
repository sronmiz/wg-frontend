import React from "react";
import { SwitchWrapper } from "./wrappers";
import { ThemeProvider, QueryProvider, RouterProvider } from "./providers";
import { MainLayout } from "./components/layout";

function App() {
  return (
    <div className="App">
      <QueryProvider>
        <ThemeProvider>
          <RouterProvider>
            <MainLayout>
              <SwitchWrapper />
            </MainLayout>
          </RouterProvider>
        </ThemeProvider>
      </QueryProvider>
    </div>
  );
}

export default App;
