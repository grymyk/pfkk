import React from "react";

import Header from "./Header";
import Navbar from "../Navbar/";
import Footer from "../Footer/";

export default function ContainerBlock({ children, ...customMeta }) {
  return (
    <div>
      <Header customMeta = { customMeta } />

      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{ children }</div>
        <Footer />
      </main>
    </div>
  );
}
