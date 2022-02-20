import React from "react";
import "../Navbar/Navbar.css";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  return (
    <div className="header">
      <Link to="/">
        <svg
          width="175"
          height="33"
          viewBox="0 0 175 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="header__icon"
        >
          <path
            d="M141.907 18.7811C142.04 20.113 142.261 21.1045 142.57 21.7553C142.88 22.4065 143.434 22.7329 144.229 22.7329C144.378 22.7329 144.513 22.7086 144.646 22.6844C144.779 22.7086 144.914 22.7329 145.061 22.7329C145.858 22.7329 146.411 22.4065 146.722 21.7553C147.03 21.1045 147.252 20.113 147.385 18.7811L148.093 8.50008C148.226 6.49637 148.292 5.05777 148.292 4.18482C148.292 2.99682 147.97 2.07024 147.33 1.40508C146.686 0.740442 145.843 0.407349 144.795 0.407349C144.741 0.407349 144.699 0.419208 144.645 0.42127C144.591 0.419208 144.55 0.407349 144.494 0.407349C143.448 0.407349 142.603 0.740442 141.961 1.4056C141.319 2.07076 141 2.99682 141 4.18482C141 5.05726 141.066 6.49585 141.199 8.50008L141.907 18.7811Z"
            fill="#F91414"
          />
          <path
            d="M144.668 26.4877C143.655 26.4877 142.789 26.7991 142.073 27.4204C141.357 28.0443 141 28.7987 141 29.6851C141 30.6874 141.361 31.4743 142.086 32.0466C142.811 32.6185 143.655 32.9057 144.621 32.9057C145.603 32.9057 146.46 32.6226 147.193 32.0575C147.926 31.4918 148.291 30.7024 148.291 29.6845C148.291 28.7977 147.94 28.0433 147.24 27.4194C146.541 26.7991 145.684 26.4877 144.669 26.4877"
            fill="#F91414"
          />
          <path
            d="M162.909 26.4877C161.896 26.4877 161.03 26.7991 160.314 27.4215C159.597 28.0443 159.24 28.7987 159.24 29.6866C159.24 30.688 159.603 31.4748 160.326 32.0471C161.052 32.619 161.897 32.9062 162.862 32.9062C163.844 32.9062 164.7 32.6231 165.433 32.058C166.166 31.4923 166.531 30.7019 166.531 29.6861C166.531 28.7982 166.181 28.0438 165.481 27.421C164.78 26.7991 163.925 26.4877 162.91 26.4877"
            fill="#F91414"
          />
          <path
            d="M173.255 4.455C172.324 3.08189 170.992 1.98361 169.293 1.188C167.606 0.400125 165.64 0 163.45 0C161.091 0 158.99 0.4785 157.211 1.42364C155.43 2.36981 154.054 3.58359 153.12 5.03147C152.182 6.48656 151.705 7.94939 151.705 9.38077C151.705 10.1454 152.034 10.8585 152.677 11.4995C153.323 12.1435 154.128 12.4699 155.067 12.4699C156.672 12.4699 157.763 11.5567 158.32 9.76594C158.827 8.28455 159.451 7.15481 160.174 6.40716C160.853 5.70178 161.956 5.34394 163.45 5.34394C164.738 5.34394 165.754 5.69456 166.56 6.41695C167.354 7.12903 167.742 7.9793 167.742 9.0157C167.746 9.51739 167.616 10.0116 167.364 10.4497C167.095 10.9162 166.761 11.3446 166.371 11.7227C165.959 12.1239 165.278 12.7272 164.346 13.5181C163.261 14.4411 162.387 15.2491 161.749 15.9199C161.072 16.635 160.529 17.4595 160.145 18.3562C159.742 19.2808 159.537 20.3863 159.537 21.6382C159.537 22.7081 159.844 23.5367 160.452 24.1003C161.053 24.6582 161.801 24.9428 162.677 24.9428C164.352 24.9428 165.405 24.0549 165.719 22.392C165.877 21.7016 165.997 21.2185 166.078 20.9431C166.15 20.6931 166.255 20.4373 166.39 20.181C166.521 19.9325 166.729 19.6494 167.008 19.3406C167.3 19.0152 167.693 18.6326 168.176 18.2057C169.98 16.6387 171.254 15.5043 171.961 14.8335C172.69 14.1426 173.324 13.3114 173.849 12.3642C174.39 11.3943 174.663 10.2527 174.663 8.97187C174.663 7.35384 174.19 5.83378 173.257 4.45552"
            fill="#F91414"
          />
          <path
            d="M10.08 29L6.576 22.64H5.592V29H1.488V12.152H8.376C9.704 12.152 10.832 12.384 11.76 12.848C12.704 13.312 13.408 13.952 13.872 14.768C14.336 15.568 14.568 16.464 14.568 17.456C14.568 18.576 14.248 19.576 13.608 20.456C12.984 21.336 12.056 21.96 10.824 22.328L14.712 29H10.08ZM5.592 19.736H8.136C8.888 19.736 9.448 19.552 9.816 19.184C10.2 18.816 10.392 18.296 10.392 17.624C10.392 16.984 10.2 16.48 9.816 16.112C9.448 15.744 8.888 15.56 8.136 15.56H5.592V19.736ZM16.3283 22.28C16.3283 20.904 16.5843 19.696 17.0963 18.656C17.6243 17.616 18.3363 16.816 19.2323 16.256C20.1283 15.696 21.1283 15.416 22.2323 15.416C23.1763 15.416 24.0003 15.608 24.7043 15.992C25.4243 16.376 25.9763 16.88 26.3603 17.504V15.608H30.4643V29H26.3603V27.104C25.9603 27.728 25.4003 28.232 24.6803 28.616C23.9763 29 23.1523 29.192 22.2083 29.192C21.1203 29.192 20.1283 28.912 19.2323 28.352C18.3363 27.776 17.6243 26.968 17.0963 25.928C16.5843 24.872 16.3283 23.656 16.3283 22.28ZM26.3603 22.304C26.3603 21.28 26.0723 20.472 25.4963 19.88C24.9363 19.288 24.2483 18.992 23.4323 18.992C22.6163 18.992 21.9203 19.288 21.3443 19.88C20.7843 20.456 20.5043 21.256 20.5043 22.28C20.5043 23.304 20.7843 24.12 21.3443 24.728C21.9203 25.32 22.6163 25.616 23.4323 25.616C24.2483 25.616 24.9363 25.32 25.4963 24.728C26.0723 24.136 26.3603 23.328 26.3603 22.304ZM41.5933 15.464C43.1613 15.464 44.4093 15.976 45.3373 17C46.2813 18.008 46.7533 19.4 46.7533 21.176V29H42.6733V21.728C42.6733 20.832 42.4413 20.136 41.9773 19.64C41.5133 19.144 40.8893 18.896 40.1053 18.896C39.3213 18.896 38.6973 19.144 38.2333 19.64C37.7693 20.136 37.5373 20.832 37.5373 21.728V29H33.4333V15.608H37.5373V17.384C37.9533 16.792 38.5133 16.328 39.2173 15.992C39.9213 15.64 40.7133 15.464 41.5933 15.464ZM57.7892 29L53.7092 23.384V29H49.6052V11.24H53.7092V21.056L57.7652 15.608H62.8292L57.2612 22.328L62.8772 29H57.7892Z"
            fill="black"
          />
          <path
            d="M76.4411 31.88L74.2811 28.976C73.6411 29.104 73.0171 29.168 72.4091 29.168C70.8251 29.168 69.3691 28.8 68.0411 28.064C66.7291 27.328 65.6811 26.304 64.8971 24.992C64.1291 23.664 63.7451 22.176 63.7451 20.528C63.7451 18.88 64.1291 17.4 64.8971 16.088C65.6811 14.776 66.7291 13.752 68.0411 13.016C69.3691 12.28 70.8251 11.912 72.4091 11.912C73.9931 11.912 75.4411 12.28 76.7531 13.016C78.0811 13.752 79.1211 14.776 79.8731 16.088C80.6411 17.4 81.0251 18.88 81.0251 20.528C81.0251 21.968 80.7291 23.288 80.1371 24.488C79.5611 25.672 78.7531 26.656 77.7131 27.44L81.4091 31.88H76.4411ZM67.9451 20.528C67.9451 22.016 68.3451 23.208 69.1451 24.104C69.9611 24.984 71.0491 25.424 72.4091 25.424C73.7531 25.424 74.8251 24.976 75.6251 24.08C76.4411 23.184 76.8491 22 76.8491 20.528C76.8491 19.04 76.4411 17.856 75.6251 16.976C74.8251 16.08 73.7531 15.632 72.4091 15.632C71.0491 15.632 69.9611 16.072 69.1451 16.952C68.3451 17.832 67.9451 19.024 67.9451 20.528ZM96.5792 15.608V29H92.4752V27.176C92.0592 27.768 91.4912 28.248 90.7712 28.616C90.0672 28.968 89.2832 29.144 88.4192 29.144C87.3952 29.144 86.4912 28.92 85.7072 28.472C84.9232 28.008 84.3152 27.344 83.8832 26.48C83.4512 25.616 83.2352 24.6 83.2352 23.432V15.608H87.3152V22.88C87.3152 23.776 87.5472 24.472 88.0112 24.968C88.4752 25.464 89.0992 25.712 89.8832 25.712C90.6832 25.712 91.3152 25.464 91.7792 24.968C92.2432 24.472 92.4752 23.776 92.4752 22.88V15.608H96.5792ZM112.151 22.088C112.151 22.472 112.127 22.872 112.079 23.288H102.791C102.855 24.12 103.119 24.76 103.583 25.208C104.063 25.64 104.647 25.856 105.335 25.856C106.359 25.856 107.071 25.424 107.471 24.56H111.839C111.615 25.44 111.207 26.232 110.615 26.936C110.039 27.64 109.311 28.192 108.431 28.592C107.551 28.992 106.567 29.192 105.479 29.192C104.167 29.192 102.999 28.912 101.975 28.352C100.951 27.792 100.151 26.992 99.5751 25.952C98.9991 24.912 98.7111 23.696 98.7111 22.304C98.7111 20.912 98.9911 19.696 99.5511 18.656C100.127 17.616 100.927 16.816 101.951 16.256C102.975 15.696 104.151 15.416 105.479 15.416C106.775 15.416 107.927 15.688 108.935 16.232C109.943 16.776 110.727 17.552 111.287 18.56C111.863 19.568 112.151 20.744 112.151 22.088ZM107.951 21.008C107.951 20.304 107.711 19.744 107.231 19.328C106.751 18.912 106.151 18.704 105.431 18.704C104.743 18.704 104.159 18.904 103.679 19.304C103.215 19.704 102.927 20.272 102.815 21.008H107.951ZM119.764 29.192C118.596 29.192 117.556 28.992 116.644 28.592C115.732 28.192 115.012 27.648 114.484 26.96C113.956 26.256 113.66 25.472 113.596 24.608H117.652C117.7 25.072 117.916 25.448 118.3 25.736C118.684 26.024 119.156 26.168 119.716 26.168C120.228 26.168 120.62 26.072 120.892 25.88C121.18 25.672 121.324 25.408 121.324 25.088C121.324 24.704 121.124 24.424 120.724 24.248C120.324 24.056 119.676 23.848 118.78 23.624C117.82 23.4 117.02 23.168 116.38 22.928C115.74 22.672 115.188 22.28 114.724 21.752C114.26 21.208 114.028 20.48 114.028 19.568C114.028 18.8 114.236 18.104 114.652 17.48C115.084 16.84 115.708 16.336 116.524 15.968C117.356 15.6 118.34 15.416 119.476 15.416C121.156 15.416 122.476 15.832 123.436 16.664C124.412 17.496 124.972 18.6 125.116 19.976H121.324C121.26 19.512 121.052 19.144 120.7 18.872C120.364 18.6 119.916 18.464 119.356 18.464C118.876 18.464 118.508 18.56 118.252 18.752C117.996 18.928 117.868 19.176 117.868 19.496C117.868 19.88 118.068 20.168 118.468 20.36C118.884 20.552 119.524 20.744 120.388 20.936C121.38 21.192 122.188 21.448 122.812 21.704C123.436 21.944 123.98 22.344 124.444 22.904C124.924 23.448 125.172 24.184 125.188 25.112C125.188 25.896 124.964 26.6 124.516 27.224C124.084 27.832 123.452 28.312 122.62 28.664C121.804 29.016 120.852 29.192 119.764 29.192ZM135.163 25.52V29H133.075C131.587 29 130.427 28.64 129.595 27.92C128.763 27.184 128.347 25.992 128.347 24.344V19.016H126.715V15.608H128.347V12.344H132.451V15.608H135.139V19.016H132.451V24.392C132.451 24.792 132.547 25.08 132.739 25.256C132.931 25.432 133.251 25.52 133.699 25.52H135.163Z"
            fill="#F91414"
          />
        </svg>
      </Link>
      <Link to="/colleges" style={{ textDecoration: "none", color: "black" }}>
        <div className="header__center">
          <input type="text" placeholder="Search colleges.." />
          <SearchIcon />
        </div>
      </Link>
      <div className="header__right">
        <ul>
          <li onClick={() => history.push("/checklist")}>CheckList</li>
          <li onClick={() => history.push("/search")}>Check now</li>
        </ul>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => history.push("/login")}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
