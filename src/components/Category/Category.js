import React from "react";
import "../Category/Category.css";
import Card from "../Category/Card/Card";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <div className="category">
      <div className="head">
        <h1>Check from below Categories</h1>
      </div>
      <div className="section">
        <Card
          src={
            "https://image.freepik.com/free-vector/man-checking-giant-check-list_23-2148099799.jpg"
          }
          title={"Cutoff"}
          description={
            "You can predict your colllege based on previous years cutoff"
          }
        />
        <Link
          to="/checklist"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Card
            src={
              "https://image.freepik.com/free-vector/flat-university-concept-background_23-2148192915.jpg"
            }
            title={"CheckList"}
            description={
              "This contains the list of documents which are to be verified at councelling"
            }
          />
        </Link>
        <Card
          src={
            "https://image.freepik.com/free-vector/flat-university-background_23-2148169628.jpg"
          }
          title={"Colleges"}
          description={"You can check the colleges within the state"}
        />
      </div>
      <div className="section">
        <Card
          src={
            "https://image.freepik.com/free-vector/flat-university-concept-background_23-2148189185.jpg"
          }
          title={"Branches"}
          description={
            "Know about the branches offered by various colleges across the state based on your rank"
          }
        />
        <Card
          src={
            "https://image.freepik.com/free-vector/data-report-illustration-concept_114360-883.jpg"
          }
          title={"Reporting Centers"}
          description={
            "Provides information about venues to get the documents verified"
          }
        />
        <Card
          src={
            "https://image.freepik.com/free-vector/data-trends-concept-illustration_114360-1676.jpg"
          }
          title={"Statistics"}
          description={
            "Know about the probability of joining in a certain college based on previous data"
          }
        />
      </div>
    </div>
  );
};

export default Category;
