import firebase from "../firebase";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Result = (props) => {
  const { state } = useLocation();
  const { exam, category, councelling, branch, gender, rank } = state.state;
  const [results, setResults] = useState([]);

  const db = firebase.firestore();
  const que = category + "_" + gender + "_CR";

  const docref = db
    .collection(exam)
    .doc("2019-2020")
    .collection("RankAnalysis")
    .where("Branch", "==", branch)
    .where(que, ">", rank);

  useEffect(() => {
    const fetchData = async () => {
      docref
        .get()
        .then((querySelector) => {
          querySelector.forEach((doc) => {
            const data = doc.data();
            setResults(data);
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    };

    fetchData();
  }, [docref, rank]);

  console.log(results);
  return (
    <div>
      <h1>{exam}</h1>
      <h1>{branch}</h1>
      <h1>{category}</h1>
      <h1>{gender}</h1>
      <h1>{councelling}</h1>
      <h1>{rank}</h1>
      {results.que > rank && <h1>{results.College_Name}</h1>}
    </div>
  );
};

export default Result;

// const res = db
//         .collection(exam)
//         .doc("2019-2020")
//         .collection("RankAnalysis")
//         .doc(regex);
