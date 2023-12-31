import {
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
} from "@coreui/react";
import React from "react";

function AddNote() {
  return (
    <>
      <div
        className=" h-auto flex flex-wrap bg-cover text-[#043A53] w-full justify-center items-center"
        style={{ backgroundImage: "url(./Images/cloud.jpg)" }}
      >
        <CCard className=" bg-neutral-300 rounded-lg font-mono text-lg w-[80%] h-auto p-5 m-5 ">
          <CCardHeader>
            <img
              src="./Images/abc.jpg"
              alt="card pic"
              className="w-[100vw] h-48 bg-cover bg-no-repeat -m-0"
            />
          </CCardHeader>
          <CCardBody>
            <CForm>
              <div className="space-y-7">
                <div className="border-b border-gray-900/10 pb-2">
                  {/* <h2 className="text-xl font-semibold leading-7 text-gray-900">
                  Login
                </h2>
                <p className="mt-2 text-lg leading-5 text-gray-600">
                  Login into your Aaccount!!!
                </p> */}
                  <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Title
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className=" p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Date
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className=" p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        {/* <CDatePicker locale="en-US" size="lg" /> */}
                      </div>
                    </div>

                    <div className="sm:col-span-6">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Description
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="text"
                          name="description"
                          type="text"
                          className=" px-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-1 items-center justify-center gap-x-6">
                  <div className="flex justify-between">
                    <button
                      type="submit"
                      className="rounded-md bg-indigo-600 px-7 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Login
                    </button>

                    <button
                      type="submit"
                      className="rounded-md  px-3 py-1 text-sm font-semibold text-white bg-zinc-700"
                    >
                      SignUp
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="rounded-md  px-1 py-1 text-sm font-semibold text-black "
                  >
                    forgot password!
                  </button>
                </div>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </div>
    </>
  );
}

export default AddNote;
