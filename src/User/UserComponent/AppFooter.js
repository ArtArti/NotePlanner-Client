import React from 'react'
import { CFooter } from '@coreui/react'
import { Link } from 'react-router-dom'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <Link to="home" target="_blank" rel="noopener noreferrer">
         @Notes_Planner
        </Link>
      </div>
      <div className="ms-auto">
        <Link
          to=""
          target="_blank"
          rel="noopener noreferrer"
        >
         get your notes in one go!!!
        </Link>
      </div>
    </CFooter>
  );
}

export default React.memo(AppFooter)
