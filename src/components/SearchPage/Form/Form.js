import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import "../Form/Form.css";

const exams = [
  {
    value: "APEAMCET",
    label: "EAMCET",
  },
  {
    value: "POLYCET",
    label: "POLYCET",
  },
  {
    value: "ECET",
    label: "ECET",
  },
  {
    value: "PGCET",
    label: "PGCET",
  },
];
const caste = [
  {
    value: "OC",
    label: "OC",
  },
  {
    value: "BC_A",
    label: "BC-A",
  },
  {
    value: "BC_B",
    label: "BC-B",
  },
  {
    value: "BC_C",
    label: "BC-C",
  },
  {
    value: "BC_D",
    label: "BC-D",
  },
  {
    value: "SC",
    label: "SC",
  },
  {
    value: "ST",
    label: "ST",
  },
];
const councelling = [
  {
    value: "counselling-1",
    label: "counselling-1",
  },
  {
    value: "counselling-2",
    label: "counselling-2",
  },
];
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "20ch",
    },
  },
}));

const branches = [
  {
    value: "CSE",
    label: "Computer Science and Engineering",
  },
  {
    value: "ECE",
    label: "Electronics Communication Engineering,",
  },
  {
    value: "IT",
    label: "Information Technology",
  },
  {
    value: "MEC",
    label: "Mechanical Engineering",
  },
  {
    value: "CIV",
    label: "Civil Engineering",
  },
  {
    value: "CHE",
    label: "Chemical Engineering",
  },
];
const genders = [
  {
    label: "Male",
    value: "M",
  },
  {
    label: "Female",
    value: "F",
  },
];

const Form = ({ navigation }) => {
  const history = useHistory();
  const classes = useStyles();
  const [selectExam, setSelectExam] = useState("");
  const [selectCategory, setCategory] = useState("");
  const [selectCouncelling, setCounselling] = useState("");
  const [selectGender, setGender] = useState("");
  const [selectBranch, setBranch] = useState("");
  const [selectRank, setRank] = useState();

  const handleChange = (event) => {
    setSelectExam(event.target.value);
  };

  const handleRank = (event) => {
    setRank(event.target.value);
  };

  const handleBranch = (event) => {
    setBranch(event.target.value);
  };

  const handleGender = (event) => {
    setGender(event.target.value);
  };
  return (
    <div className="form__feild">
      <form action="" className={classes.root} noValidate autoComplete="off">
        <label htmlFor="">Select your exam:</label>
        <TextField
          id="outlined-select-currency"
          select
          label="Exam"
          value={selectExam}
          onChange={handleChange}
          helperText="Please select your exam"
          variant="outlined"
          required
        >
          {exams.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        {/* <div className="radio__input">
          <label htmlFor="">Male</label>
          <input
            type="radio"
            value={selectGender}
            name="gender"
            onChange={handleGender}
          />
          <label htmlFor="">Female</label>
          <input
            type="radio"
            value={selectGender}
            name="gender"
            onChange={handleGender}
          />
        </div> */}

        <label htmlFor="">Gender:</label>
        <TextField
          id="outlined-select-currency"
          select
          label="Gender"
          value={selectGender}
          onChange={handleGender}
          variant="outlined"
          required
        >
          {genders.map((sex) => (
            <MenuItem key={sex.value} value={sex.value}>
              {sex.label}
            </MenuItem>
          ))}
        </TextField>

        <label htmlFor="">Enter your {selectExam} rank:</label>
        <TextField
          id="outlined-secondary"
          label="Rank"
          variant="outlined"
          color="secondary"
          value={selectRank}
          onChange={handleRank}
          required
        />
        <label htmlFor="">Select your category:</label>
        <TextField
          id="outlined-select-currency"
          select
          label="Category"
          value={selectCategory}
          onChange={(event) => setCategory(event.target.value)}
          variant="outlined"
          required
        >
          {caste.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </TextField>
        <label htmlFor="">Select your councelling:</label>
        <TextField
          id="outlined-select-currency"
          select
          label="Councelling"
          value={selectCouncelling}
          onChange={(event) => setCounselling(event.target.value)}
          variant="outlined"
          required
        >
          {councelling.map((councel) => (
            <MenuItem key={councel.value} value={councel.value}>
              {councel.label}
            </MenuItem>
          ))}
        </TextField>

        <label htmlFor="">Select Branches:</label>
        <TextField
          id="outlined-select-currency"
          select
          label="Branches"
          value={selectBranch}
          onChange={handleBranch}
          variant="outlined"
          required
        >
          {branches.map((branch) => (
            <MenuItem key={branch.value} value={branch.value}>
              {branch.label}
            </MenuItem>
          ))}
        </TextField>

        <Button
          className="form-btn"
          variant="contained"
          color="secondary"
          onClick={() =>
            history.push("/result", {
              state: {
                exam: selectExam,
                category: selectCategory,
                councelling: selectCouncelling,
                gender: selectGender,
                rank: selectRank,
                branch: selectBranch,
              },
            })
          }
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
