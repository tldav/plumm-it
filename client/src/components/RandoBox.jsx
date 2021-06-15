import React from "react";
import { useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import "../stylesheets/RandoBox.css";
const categories = require("../categories.json");

const RandoBox = () => {
  let history = useHistory();

  return (
    <div className="rando-box">
      <h1>Categories</h1>
      <ul>
        <hr />
        {categories.map((category) => {
          return (
            <>
              <div onClick={() => history.push(`/p/${category.name}`)} className="list-item">
                <Avatar id="Avatar" src={`/static/${category.image}`} />
                <li key={category.id}>p/{category.name}</li>
              </div>
              <hr />
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default RandoBox;
