import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import PastLaunches from "./pages/PastLaunches";
import NoPage from "./pages/NoPage";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import './index.css';

const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache()
}); 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="PastLaunches" element={<PastLaunches />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ApolloProvider client={client}>
  <App />
</ApolloProvider>,);
