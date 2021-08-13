import React from "react";
import { useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import "../stylesheets/RandoBox.css";
const categories = require("../categories.json");

const RandoBox = () => {
  let history = useHistory();

  return (
    <div className="rando-box">
      <h2 className="categories-title">categories</h2>
      <ul>
        {categories.map((category) => {
          return (
              <div key={category.id} onClick={() => history.push(`/p/${category.name}`)} className="list-item">
                <Avatar id="Avatar" src={`/static/${category.image}`} />
                <li>p/{category.name}</li>
              </div>
          );
        })}
      </ul>
    </div>
  );
};

export default RandoBox;
