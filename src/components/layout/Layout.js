import React from 'react';
import SideMenu from "../layout/SideMenu";
import TopMenu from "../layout/TopMenu";

export default props => (
    <div className="grid">
        <div className="menu">
            <TopMenu/>
        </div>
        <div className="main-content">
            <SideMenu>
                {props.children}
            </SideMenu>
        </div>
    </div>
);
