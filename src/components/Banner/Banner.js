import React from "react";
import "../Banner/Banner.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Banner = () => {
  const history = useHistory();
  return (
    <div className="banner">
      <div className="banner__info">
        <h1>Know your eligeble colleges at an instant</h1>
        <h5>You can get your predicted colleges based past years cutoff.</h5>
        <Button varaint="outlined" onClick={() => history.push("/search")}>
          Check Now
        </Button>
      </div>
    </div>
  );
};

export default Banner;
