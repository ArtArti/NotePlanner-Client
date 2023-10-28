import React from "react";
import {
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import { cilLockLocked, cilSettings, cilUser } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
// import { Dropdown } from "@coreui/coreui";
// import { DropdownButton } from "react-bootstrap";

const FunctionDropdown = ({
  handleUpClick,
  handleLoClick,
  handleClearClick,
  text,
  toggleBold,
  toggleItalic,
  increaseFontSize,
  handleCapitalizeWordClick,
  RemoveWhiteSpace,
  // handleJustifyChange,
  // justify,
}) => {
  return (
    <CDropdown
      variant="nav-item"
      drop="right"
      style={{ listStyleType: "none" }}
    >
      <CDropdownToggle placement="right-end" className="py-0" caret={false}>
        <FontAwesomeIcon icon={faEllipsisV} />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0 decoration-pink-300" placement="right-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">
          Operations
        </CDropdownHeader>
        <CDropdownItem onClick={handleLoClick}>
          <CIcon icon={cilUser} className="me-2" />
          lower Case{text.handleLoClick}
        </CDropdownItem>
        <CDropdownItem onClick={handleUpClick}>
          <CIcon icon={cilSettings} className="me-2" />
           Upper case {text.handleUpClick}
        </CDropdownItem>
        <CDropdownItem onClick={toggleBold}>
          <CIcon icon={cilSettings} className="me-2" />
          Bold{text.toggleBold}
        </CDropdownItem>
        <CDropdownItem onClick={toggleItalic}>
          <CIcon icon={cilSettings} className="me-2" />
          Italic{text.toggleItalic}
        </CDropdownItem>
        <CDropdownItem onClick={RemoveWhiteSpace}>
          <CIcon icon={cilSettings} className="me-2" />
          Remove Space {text.RemoveWhiteSpace}
        </CDropdownItem>
        <CDropdownItem onClick={handleCapitalizeWordClick}>
          <CIcon icon={cilSettings} className="me-2" />
          Capitalize_1st_Word
        </CDropdownItem>
        <CDropdownItem onClick={increaseFontSize}>
          <CIcon icon={cilSettings} className="me-2" />
          increase font{text.increaseFontSize}
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem onClick={handleClearClick}>
          <CIcon icon={cilLockLocked} className="me-2" />
          Clear
        </CDropdownItem>
        {/* <CDropdownItem>
          <CDropdown variant="">
            <CDropdownToggle color="secondary" id="justifyDropdown">
              Justify {justify.charAt(0).toUpperCase() + justify.slice(1)}
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem onClick={() => handleJustifyChange("left")}>
                Justify Left
              </CDropdownItem>
              <CDropdownItem onClick={() => handleJustifyChange("center")}>
                Justify Center
              </CDropdownItem>
              <CDropdownItem onClick={() => handleJustifyChange("right")}>
                Justify Right
              </CDropdownItem>
              <CDropdownItem onClick={() => handleJustifyChange("justify")}>
                Justify Full
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
        </CDropdownItem> */}
      </CDropdownMenu>
    </CDropdown>
  );
};

export default FunctionDropdown;
