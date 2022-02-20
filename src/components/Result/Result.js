/* eslint-disable jsx-a11y/anchor-is-valid */
import firebase from "../firebase";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import "../Result/Result.css";

const Result = (props) => {
  const { state } = useLocation();
  const { exam, category, councelling, branch, gender, rank } = state.state;
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [isLoad, setIsLoad] = useState(true);

  const que = category + "_" + gender + "_CR";
  const or = category + "_" + gender + "_OR";

  const db = firebase.firestore();
  const docref = db
    .collection(exam)
    .doc("2019-2020")
    .collection("RankAnalysis")
    .where("Branch", "==", branch);

  useEffect(() => {
    const abortCont = new AbortController();
    const info = [];

    const fetchData = async () => {
      await docref
        .get()
        .then((querySelector) => {
          querySelector.forEach((doc) => {
            const data = doc.data();
            if (data[que] > rank) {
              info.push(data);
            }
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });

      info.sort((a, b) => a[or] - b[or]);
      setResults(info);
      setIsLoad(false);
    };

    fetchData();

    return () => abortCont.abort();
  }, []);

  const totalPosts = results.length;
  const pageNumbers = [];

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = results.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="results_background">
      <div className="result_container">
        <div className="input_details">
          <div className="det_1">
            <h2>Your Rank : {rank}</h2>
            <h2>Your Category : {category}</h2>
            <p style={{ fontWeight: "bold" }}>
              No of eligible colleges: {totalPosts}
            </p>
          </div>
          <div className="det_2">
            <h2>CET: APEAMCET</h2>
            <h2>Branch: {branch}</h2>
          </div>
        </div>

        <h2 style={{ color: "red", margin: "10px 0 25px 0" }}>
          Your eligible colleges are:
        </h2>
        {isLoad && <CircularProgress color="secondary" className="loading" />}
        {currentPosts.map((doc) => {
          return (
            <div
              className="collge_info"
              key={doc}
              style={{ marginBottom: "20px", borderBottom: "1px solid" }}
            >
              <h3>
                {doc["College Name"]} ({doc["CODE"]})
              </h3>
              <p>Place: {doc["District"]} district</p>
              <p>Affiliated to : {doc["Affil"]}</p>
              <p>
                The previous years closing rank is :{" "}
                {doc[que].toLocaleString("en-IN")}
              </p>
              <p>Region : {doc["Region"]}</p>
              <p>email: {doc["email"].replace("[at]", "@")}</p>
            </div>
          );
        })}
        <ul className="pagination_nav">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a
                onClick={() => paginate(number)}
                href="javascript:void(0)"
                className="page-link"
                style={{
                  textDecoration: "none",
                  color: "white",
                  backgroundColor: "red",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
        <p>Page {currentPage}</p>
      </div>
    </div>
  );
};

export default Result;
