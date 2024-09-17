import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <p>
        Learn more about our company on this
        <Link to="/about"> page</Link>
      </p>
    </div>
  );
}
