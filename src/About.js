

import React from "react";
import web from '../src/images/img3.png';
import Common from "./Common";
const About=()=>{
    return(
    <Common name="Welcome to About Page" imgsrc={web} btnname="Contact Now" visit="/contact"/>
    )
}
export default About;