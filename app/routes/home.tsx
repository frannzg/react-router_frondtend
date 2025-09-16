import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { Link } from "react-router";
import Footer from "~/components/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (

    <div style={{ textAlign: "center", marginTop: "50px", padding: "20px" }}>
      <h1 style={{ fontSize: "2.5rem", color: "darkblue", marginBottom: "20px" }}>
        👋 Bienvenido a la APP de frannzg
      </h1>

      <p
        style={{
          fontSize: "1.3rem",
          lineHeight: "1.8",
          maxWidth: "800px",
          margin: "0 auto",
          color: "#333",
        }}
      >
        Esta aplicación está construida con <b>Node.js</b> y <b>TypeScript</b> en
        el backend, proporcionando una API robusta y escalable.  
        El frontend está desarrollado con <b>React</b> y <b>TypeScript</b>, utilizando{" "}
        <b>React Router</b> para la navegación de rutas y consumiendo los{" "}
        <b>endpoints</b> creados en la API de backend.
      </p>
    </div>


  );
}
