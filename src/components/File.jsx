import React from "react";
import Information from "./Information";
import Nextelement from "./Nextelement";
import { Routes, Route } from "react-router-dom";
const File = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<Information />} />
        <Route path="/sigin" element={<Nextelement />} />
      </Routes>
    </div>
  );
};

export default File;
