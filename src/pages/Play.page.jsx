import React from "react";
import DefaultLayoutHoc from "../layout/Default.layout";

const PlayPage = () => {
    return (
        <div>PlayPage</div>
    );
}

//syntax to pass Hoc asit in passed as a prop in the layout file.
export default DefaultLayoutHoc(PlayPage);