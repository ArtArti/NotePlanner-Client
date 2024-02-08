import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CCardText,
  CDropdownDivider,
  // CImage,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {cilBook, cilMenu } from '@coreui/icons'

import { AppHeaderDropdown } from './index'
import LanguageSelector from '../header/LanguageSelector'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.changeState.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4 bg-white text-3xl box-decoration-slice">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}>
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
        <CCardText className=' font-bold'>
        {/* <CImage src='./Images/logo1.png' className="img-fluid" alt='logo'></CImage> */}
        @Notes_Planner
        </CCardText>
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="dashboard" component={NavLink}>
              @Notes_Planner
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CNavLink to="">
              <CIcon icon={cilBook} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <LanguageSelector/>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CDropdownDivider/>
    </CHeader>
  )
}

export default AppHeader
