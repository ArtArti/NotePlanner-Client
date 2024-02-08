import { CButton, CCardBody, CCollapse, CCard } from "@coreui/react";
import React from "react";
import { useState } from "react";


function SavedNotes() {
  const [visible, setVisible] = useState(false);
  return (
    <>
    <div>
    <CButton className="mb-3" onClick={() => setVisible(!visible)} aria-expanded={visible} aria-controls="collapseWidthExample">Button</CButton>
    <div style={{ minHeight: '120px'}}>
      <CCollapse  horizontal visible={visible}>
        <CCard style={{width: '300px'}}>
          <CCardBody>
            This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
          </CCardBody>
        </CCard>
      </CCollapse>
    </div>
    </div>
    </>
  );
}

export default SavedNotes;
