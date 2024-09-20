import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h4>Oups! La page que vous demandez n'existe pas.</h4>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default NotFound;
