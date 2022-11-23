import React from 'react'
import ReatDOM from "react-dom";

function PortalDemo() {
    return ReatDOM.createPortal(
        <h1>
            Portal Demo
        </h1>, document.getElementById('portal-root')
    )
}

export default PortalDemo
