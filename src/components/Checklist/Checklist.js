import React from "react";
import "../Checklist/Checklist.css";
import Svgl from "./Svg-left/Svgl";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
const points = [
  "AP EAMCET Rank Card",
  "AP EAMCET Hall Ticket",
  "Intermediate Memo of Mark-cum-Pass Certificate",
  "SSC or its equivalent Marks memo",
  "VI to Inter study Certificate",
  "Resident Certificate (in case where the candidate has no institutionalized education)",
  "Resident Certificate of either of the parents in A.P for 10 years in case of non_local candidates",
  "Income Certificate Issued after 01.01.2018",
  "Caste Certificate Issued by the competent authority",
];
const Checklist = () => {
  return (
    <div className="background__">
      <div className="container__">
        <Svgl />
        <div className="check__info">
          <h1>Eamcet Checklist</h1>
          <p>All original certificates and 2 sets of Xerox copies</p>
          <ul>
            {points.map((point) => (
              <li>
                <CheckCircleIcon
                  style={{ color: "29bb89", verticalAlign: "middle" }}
                />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Checklist;
