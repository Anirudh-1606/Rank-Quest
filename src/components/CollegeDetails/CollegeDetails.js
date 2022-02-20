import React from "react";
import { useLocation } from "react-router-dom";
import "../CollegeDetails/CollegeDetails.css";

const CollegeDetails = (props) => {
  const { state } = useLocation();
  const college = state.state;
  console.log(college);
  return (
    <div className="college_det_background">
      <div className="college_container">
        <div className="college_basic_info">
          <img
            src="https://image.freepik.com/free-vector/people-studying-remotely-e-learning-home-education-distance-learning-online-college_335657-3297.jpg"
            alt=""
          />
          <div className="college_basic_details">
            <h1>{college.college["College Name"]}</h1>
            <p>College code : ( {college.college["CODE"]} )</p>
            <p>
              Place : {(college.college["Place"], college.college["District"])}
            </p>
            <p>Region : {college.college["Region"]}</p>
            <p>Branches offered : {college.college["Branch"]}</p>
            <p>Education : {college.college["COED"]}</p>
            <p>Established in : {college.college["ESTD"]}</p>
            <p>
              Tution Fee : ₹
              {college.college["Tuition Fee"].toLocaleString("en-IN")}
            </p>
            <p>email : {college.college["email"].replace("[at]", "@")}</p>
            <p>Website : {college.college["web"].replace("[at]", "@")}</p>
            <p>Phone : {college.college["Phone"]}</p>
            <p>Type : {college.college["TYPE__1"]}</p>
            <p>AverageRank : {college.college["Average"]}</p>
            <p>Last Rank : {college.college["Last Rank"]}</p>
          </div>
        </div>
      </div>
      <div className="college_container_2">
        <div className="box-1">
          <h2>Seats allocation</h2>
          <p>Total Seats: {college.college["SA"]}</p>
          <p>Seats Filled: {college.college["SF"]}</p>
          <p>Seats Left: {college.college["SL"]}</p>
        </div>
        <div className="box-2">
          <h2>Category wise students</h2>
          <p>OC : {college.college["OC"]}</p>
          <p>BC-A : {college.college["BC_A"]}</p>
          <p>BC-B : {college.college["BC_B"]}</p>
          <p>BC-C : {college.college["BC_C"]}</p>
          <p>BC-D : {college.college["BC_D"]}</p>
          <p>BC-E : {college.college["BC_E"]}</p>
          <p>SC : {college.college["SC"]}</p>
          <p>ST : {college.college["ST"]}</p>
        </div>
        <div className="box-3">
          <h2>Rank wise students</h2>
          <p>Below 10k: {college.college["<10K"]}</p>
          <p>10K-20K : {college.college["10Kto20K"]}</p>
          <p>20K-30K : {college.college["20Kto30K"]}</p>
          <p>30k-40K : {college.college["30Kto40K"]}</p>
          <p>40K-50K : {college.college["40Kto50K"]}</p>
          <p>50K-75K : {college.college["50Kto75K"]}</p>
          <p>Above 1L: {college.college[">1L"]}</p>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetails;
