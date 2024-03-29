import React from "react";
import "./SiderbarOption.css";

function SiderbarOption({ title, Icon }) {
  return (
    <div className="sidebarOption">
    {Icon && <Icon className="sidebarOption_icon"/>}
      {Icon ? <h4>{title}</h4>: <p>{title}</p>}
    </div>
  );
}

export default SiderbarOption;
