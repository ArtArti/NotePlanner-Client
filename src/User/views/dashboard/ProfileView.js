import { CForm } from '@coreui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Profile() {

  // const { t }= useTranslation();
  return (
    <>
      {/* <CButton onClick={() => setVisible(!visible)}>Launch demo modal</CButton> */}
    <CModal
      scrollable
    //   visible={visible}
    //   onClose={() => setVisible(false)}
      aria-labelledby="ScrollingLongContentExampleLabel2"
    >
      <CModalHeader>
        <CModalTitle id="ScrollingLongContentExampleLabel2">Modal title</CModalTitle>
      </CModalHeader>
      <CModalBody>
      <CForm className="space-y-6" onSubmit={(e) => handleSignUp(e)}>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">
          Your Profile:
        </h5>
         
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Id
          </label>
          <input
            type="text"
            id="id"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
            value={userData.id}
          />
        </div>

        {/* name  */}
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Name
          </label>
          <input
            disabled
            type="text"
            id="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
            value={userData.name}
          />
        </div>
        {/* name end */}

        {/* email  */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
          disabled
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
            value={userData.email}
          />
        </div>
        {/* email end */}

        {/* password */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            last updated
          </label>
          <input
            type="date"
            id="date"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            minLength="8"
            required
            value={userData.updated}
          />
        </div>
      </CForm>

      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => setVisible(false)}>
          Close
        </CButton>
        <CButton color="primary">Save changes</CButton>
      </CModalFooter>
    </CModal>
    </>
  )
}
