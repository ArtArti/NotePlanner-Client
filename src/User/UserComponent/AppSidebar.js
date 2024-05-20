import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from "@coreui/react";
import { AppSidebarNav } from "./AppSidebarNav";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

// sidebar nav config
import navigation from "../_nav";

const AppSidebar = () => {

  const dispatch = useDispatch();
   const unfoldable = useSelector((state) => state.changeState.unfoldable); // Update with the correct state path
  const sidebarShow = useSelector((state) => state.changeState.sidebarShow); // Update with the correct state path

  return (
    <CSidebar
      className="font-extrabold font-mono"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: "set", sidebarShow: visible });}}>
      <CSidebarBrand className="d-none d-md-flex bg-white" to="/">
        <img src="../assets/Logo.png" alt="logo" />
      </CSidebarBrand>
      <CSidebarNav className="font-extrabold">
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() =>
        dispatch({ type: "set", sidebarUnfoldable: !unfoldable })
        }
      />
    </CSidebar>
  );
};
export default React.memo(AppSidebar);
