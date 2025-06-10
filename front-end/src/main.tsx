import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import "./index.css";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { store } from "./lib/redux/store";

// Buat instance QueryClient
const queryClient = new QueryClient();

// Buat instance router baru
const router = createRouter({
  routeTree,
  // Teruskan QueryClient ke konteks router agar bisa diakses
  context: {
    queryClient,
  },
});

// Daftarkan instance router untuk keamanan tipe
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render aplikasi
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </Provider>
    </StrictMode>
  );
}
