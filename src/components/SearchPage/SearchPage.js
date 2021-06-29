import React from "react";

import "../SearchPage/SearchPage.css";
import Form from "./Form/Form";

const SearchPage = () => {
  return (
    <div className="background">
      <div className="container">
        <h2>Fill the form to know about your eligible colleges</h2>
        <div className="form__info">
          <img
            src="https://image.freepik.com/free-vector/grades-concept-illustration_114360-5958.jpg"
            alt=""
          />
          <Form />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
