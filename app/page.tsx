"use client";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import client from "./lib/client";
import { ApolloProvider } from "@apollo/client";
export default function Home() {

  return (
    <>
    <ApolloProvider client={client}>
      <Header />
      <Products />
      <Footer />
      </ApolloProvider>
    </>
  );
}
