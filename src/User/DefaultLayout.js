import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from './UserComponent'

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light m-0">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        {/* <AddNote/> */}
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout;
