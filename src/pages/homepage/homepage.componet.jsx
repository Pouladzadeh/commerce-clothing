import React from "react";

import Directory from "../../components/directory/directory.component";

import "./homepage.styles.scss";
// functional component because we don't need to use a ny state here
// we have one container for menu and one actual menu-item
// and then a contents to hold the texts
const HomePage = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;
