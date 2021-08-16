import React from "react";
import { useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import "../stylesheets/RandoBox.css";
const categories = require("../categories.json");

const RandoBox = () => {
  let history = useHistory();

  return (
    <div className="rando-box">
      <h3 className="categories-header">categories</h3>
      <ul>
        {categories.map((category) => {
          return (
              <li key={category.id} onClick={() => history.push(`/p/${category.name}`)} className="list-item">
                <Avatar id="Avatar" src={`/static/${category.image}`} alt={category.name} />
                p/{category.name}
              </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RandoBox;
