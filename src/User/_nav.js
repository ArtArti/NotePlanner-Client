import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilNotes, cilPuzzle, cilSpeedometer} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'


const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: 'dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'Services',
    to: 'base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'TODO',
        to: 'base/TodoIndex',
      }]
  },
  {
    component: CNavGroup,
    name: 'Application',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'new-Application',
        to: 'base/NewApplication',
      },]
  }
]

export default _nav
