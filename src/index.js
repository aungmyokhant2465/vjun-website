import ReactDOM from "react-dom";
import "./index.css";
import "aos/dist/aos.css";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  };
});

const errorLink = onError(({ _, networkError }) => {
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
    alert("network connection problem");
  }
});

const httpLink = new HttpLink({ uri: "http://157.230.33.232:8000/v1/graphql" });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: errorLink.concat(authLink).concat(httpLink),
});

ReactDOM.render(
  <div>
    <BrowserRouter>
      <Header />
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
      <Footer />
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);
