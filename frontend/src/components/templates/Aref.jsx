import React from "react";

export default props=>
    <a href={`${props.link}`}>
        <i className={`fa fa-${props.icon}`}></i> {props.name}
    </a>