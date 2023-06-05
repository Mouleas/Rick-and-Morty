import "./App.css";
import RickAndMortyComponent from "./components/RickAndMortyComponent/RickAndMortyComponent";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
    return (
        <div className="container">
            <QueryClientProvider client={queryClient}>
                <RickAndMortyComponent></RickAndMortyComponent>
            </QueryClientProvider>
        </div>
    );
}

export default App;
