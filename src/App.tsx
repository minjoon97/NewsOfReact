import MainPage from "./pages/main-page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainPage></MainPage>
    </QueryClientProvider>
  );
}

export default App;
