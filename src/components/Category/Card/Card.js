import React from "react";
import "../Card/Card.css";
import { Button } from "@material-ui/core";

const Card = ({ src, title, description, destination }) => {
  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="info">
        <h3>{title}</h3>
        <p>{description}</p>
        <Button variant="outlined" color="secondary">
          Check now
        </Button>
      </div>
    </div>
  );
};

export default Card;
