import React from "react";
import "./Main.css";
import SectionApresentation from "./SectionApresentation";
import SectionVideos from "./SectionVideos";
import SectionMore from "./SectionMore";
import SectionPosts from "./SectionPosts";


export default props =>

<main>
    <SectionApresentation/>
    <SectionVideos/>
    <SectionMore/>
    <SectionPosts/>
    <div className="background"></div>
</main>