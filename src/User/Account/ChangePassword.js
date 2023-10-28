import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { toast } from "react-hot-toast";
import axios from 'axios';


const ChangePassword = () => {

const navigate = useNavigate();

  const [userPassword, setUserPassword] = useState({
    oldPassword: "",
    newPassword: "",
  });

  // Function to handle input box change
  const handlePasswordChange = (event) => {
    const { name, value } = event.target;
    setUserPassword({
      ...userPassword,
      [name]: value,
    });
  };

  // Function to handle form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Check if the fields are empty or not
    if (!userPassword.oldPassword || !userPassword.newPassword) {
      toast.error("All fields are mandatory");
      return;
    }

    // Validate the new password using regex
    if (
      !userPassword.newPassword.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)
    ) {
      toast.error(
        "Minimum password length should be 6 with Uppercase, Lowercase, Number, and Symbol"
      );
      return;
    }

    // Calling the API to change the password using Axios
    try {
      const response = await axios
      .post('http://localhost:8081/api/auth/changepassword', userPassword);

      if (response.data.success) {
        // Clearing the input fields
        setUserPassword({
          oldPassword: "",
          newPassword: "",
        });
        alert(" chnaged password successful");
        navigate("/user/profile");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("An error occurred while changing the password");
    }
  };

  return (
    <>
      {/* forget password container */}
      <div className="flex items-center justify-center h-[100vh] ">
        {/* forget password card */}
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col justify-center gap-6 rounded-lg p-4 text-black w-80 h-[26rem] shadow-[0_0_10px_black] bg-white"
        >
          <h1 className="text-center text-2xl font-bold">Change Password</h1>

          <div className="flex flex-col gap-1">
            <label className="text-lg font-semibold" htmlFor="oldPassword">
              Old Password
            </label>
            <input
              required
              type="password"
              name="oldPassword"
              id="oldPassword"
              placeholder="Enter your old password"
              className="bg-transparent px-2 py-1 border"
              value={userPassword.oldPassword}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-lg font-semibold" htmlFor="newPassword">
              New Password
            </label>
            <input
              required
              type="password"
              name="newPassword"
              id="newPassword"
              placeholder="Enter your new password"
              className="bg-transparent px-2 py-1 border"
              value={userPassword.newPassword}
              onChange={handlePasswordChange}
            />
          </div>

          <Link to={"/user/profile"}>
            <p className="link text-accent cursor-pointer flex items-center justify-center w-full gap-2">
              <AiOutlineArrowLeft /> Back to Profile
            </p>
          </Link>

          <button
            className="w-full bg-yellow-600 hover:bg-yellow-700 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
            type="submit"
          >
            Change Password
          </button>
        </form>
      </div>
    </>
  );
};

export default ChangePassword;
