import React, { useState, useEffect } from "react";
import { CCallout, CForm } from "@coreui/react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react";

import FunctionDropdown from "./FunctionDropdown";
import { Row } from "react-bootstrap";
import Greeting from "./Greeting";

const Dashboard = () => {
  const [text, setText] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [justify, setJustify] = useState("left");


  const [message, setMessage] = useState('');

  useEffect(() => {
    // Get the JWT token from localStorage (you should implement your own token storage)
    const token = localStorage.getItem('token');

    if (!token) {
      // Handle the case where the token is missing (user is not logged in)
      return;
    }

    // Send a GET request to the protected route with the token in the headers
    fetch('/dashboard', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
      },
    })
      .then(response => {
        if (response.status === 200) {
          return response.json();
        } else {
          // Handle the case where the request is not authorized (e.g., token expired)
          throw new Error('Unauthorized');
        }
      })
      .then(data => {
        setMessage(data.message);
      })
      .catch(error => {
        // Handle errors (e.g., token expired)
        setMessage('Error: ' + error.message);
      });
  }, []);

  const handleOnChange = (event) => {
    const newText = event.target.value;
    console.log("Text changed:", newText); // Debugging statement
    setText(newText);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleClearClick = () => {
    setText(""); // Clear the text
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const toggleBold = () => {
    setIsBold(!isBold);
  };

  const toggleItalic = () => {
    setIsItalic(!isItalic);
  };

  const increaseFontSize = () => {
    setFontSize(fontSize + 2);
  };

  const handleCapitalizeWordClick = () => {
    let lowercase = text.toLowerCase();
    let words = lowercase.split(" ");
    let newWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    let newText = newWords.join(" ");
    setText(newText);
  };

  const RemoveWhiteSpace = () => {
    let updated_text = text.split(/[ ]+/);
    setText(updated_text.join(" "));
  };

  function handleJustifyChange(alignment) {
    setJustify(alignment);
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;

    msg.onend = function () {
      console.log("Speech synthesis completed");
    };

    window.speechSynthesis.speak(msg);
  };

  return (
    <>
      <Row>
        <CCol xs={12} className="cib-nextdoor bg-transparent">
          <Greeting />
        </CCol>
      </Row>
      <CRow>
        <CCol lg={8} className="cib-nextdoor bg-transparent">
          <CCard className="mb-4" variant="primary">
            <CCardHeader
              variant="h3"
              component="h1"
              className="text-black mb-4"
              align="center"
            >
              <img
                src="../assets/abc.jpg"
                alt="card pic"
                className="w-[100vw] h-48 bg-cover bg-no-repeat m-0"
                title={message}
              />
            </CCardHeader>
            <CCardBody className=" bg-transparent">
              <CForm>
                <div className=" space-y-2">
                  <div className=" border-b border-gray-900/10 ">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="title"
                          className=" lock text-sm font-medium leading-6 text-gray-900"
                        >
                          Title
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="title"
                            id="title"
                            className=" p-2 block w-full rounded-md border border-r-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          htmlFor="tag"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Tag
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="tag"
                            id="tag"
                            className=" p-2 block w-full rounded-md border border-r-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-6">
                        <label
                          htmlFor="password"
                          className=" block text-sm font-medium leading-6 text-gray-900">
                          Description
                          <span className=" inline-flex mx-4 text-lg">
                            <FunctionDropdown
                              handleUpClick={handleUpClick}
                              handleClearClick={handleClearClick}
                              handleLoClick={handleLoClick}
                              handleOnChange={handleOnChange}
                              text={text}
                              toggleBold={toggleBold}
                              toggleItalic={toggleItalic}
                              increaseFontSize={increaseFontSize}
                              handleCapitalizeWordClick={
                                handleCapitalizeWordClick
                              }
                              RemoveWhiteSpace={RemoveWhiteSpace}
                              handleJustifyChange={handleJustifyChange}
                              justify={justify}
                            />
                          </span>
                        </label>
                        <div className="mt-2">
                          <textarea
                            value={text}
                            onChange={handleOnChange}
                            id="desc"
                            name="desc"
                            className=" h-20 border border-r-4 form-control-color px-1.5 block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            style={{
                              fontWeight: isBold ? "bold" : "normal",
                              fontStyle: isItalic ? "italic" : "normal",
                              fontSize: fontSize + "px",
                              textAlign: justify,
                            }}
                            onInput={(e) => setText(e.target.textContent)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-1 items-center justify-center gap-x-6">
                    <div className="flex justify-between">
                      <button
                        type="submit"
                        onClick={speak}
                        className="rounded-md bg-indigo-600 px-7 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Speak
                      </button>
                      <button
                        type="submit"
                        className="rounded-md  px-3 py-1 text-sm font-semibold text-white bg-zinc-700"
                      >
                        SAVE
                      </button>
                    </div>
                  </div>
                </div>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>

        <CCol lg={4}>
          <CCard className="mb-4">
            <CCardHeader>
              <strong className=" text-justify items-center">Preview</strong>
            </CCardHeader>
            <CCardBody>
              <div className="conatiner">
                <h2 className=" underline font-bold text-blue-900 text-center">Your Text Summary</h2>
                <CCallout variant="primary">
                  <p>
                    {text.split(" ").length} Words and {text.length} characters
                  </p>
                  <p>{0.008 * text.split("").length} minutes reads</p>
                </CCallout>
                <h1 className=" text-center underline font-bold">
                  Preview Text
                </h1>
                <CCallout>
                  <p>{text}</p>
                </CCallout>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Dashboard;
