/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import "./Colleges.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";

const Colleges = () => {
  const history = useHistory();
  const [colleges, setColleges] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);

  const db = firebase.firestore();
  const docref = db
    .collection("APEAMCET")
    .doc("2019-2020")
    .collection("CollegeAnalysis");

  useEffect(() => {
    const abortCont = new AbortController();
    const list = [];
    console.log(docref);
    const fetchColleges = async () => {
      await docref
        .get()
        .then((querySelector) => {
          querySelector.forEach((item) => {
            const data = item.data();

            list.push(data);
          });
        })
        .catch((err) => {
          console.log(err);
        });

      setColleges(list);
      setIsLoad(false);
    };

    fetchColleges(); //CALLING FUNCTION
    return () => abortCont.abort();
  }, [docref]);

  const totalPosts = colleges.length;
  const pageNumbers = [];

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = colleges.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="colleges">
      <div className="colleges_container">
        <h1 style={{ color: "red", paddingBottom: "10px" }}>
          List of Colleges in Andhra Pradesh:
        </h1>
        <p
          style={{
            marginBottom: "20px",

            paddingBottom: "15px",
          }}
        >
          Total No of Colleges: {totalPosts}
        </p>
        {isLoad && <CircularProgress color="secondary" className="loading" />}
        {currentPosts.map((doc) => {
          return (
            <div className="college_list">
              <div className="li_left">
                <h3>
                  {doc["College Name"]} ({doc["CODE"]})
                </h3>
                <p>No of seats available: {doc["SA"]}</p>
                <p>
                  Place: {doc["Place"]}, {doc["District"]}
                </p>
                <p>Affiliated to : {doc["Affil."]}</p>
              </div>
              <Button
                variant="contained"
                color="secondary"
                onClick={() =>
                  history.push("/collegedetails", {
                    state: {
                      // below10k:doc["<10K"]
                      // between10kto20k: doc["10Kto20K"],
                      // between20kto30k: doc["20Kto30K"],
                      // between30kto40k: doc["30Kto40K"],
                      // between40kto50k: doc["40Kto50K"],
                      // between50kto75k: doc["50Kto75K"],
                      // between75kto1l: doc["75Kto1L"],
                      // above1l: doc[">1L"],
                      // affiliated: doc["Affil."],
                      // averageRank:doc["Average"],
                      college: doc,
                    },
                  })
                }
                style={{
                  width: "100px",
                  height: "40px",
                  marginTop: "40px",
                  boxShadow: "none",
                }}
              >
                Details
              </Button>
            </div>
          );
        })}
        <p>Page {currentPage}</p>
        <ul className="pagination">
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
                  padding: "5px",
                  borderRadius: "5px",
                }}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Colleges;
