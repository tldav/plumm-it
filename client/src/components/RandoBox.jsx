import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import { ThreadContext } from "../context/ThreadContext";
import "../stylesheets/RandoBox.css";
const categories = require("../categories.json");

const RandoBox = () => {
  const { handleCategorySelect } = useContext(ThreadContext)
  let history = useHistory();

  const onCategorySelect = (category) => {
    handleCategorySelect(category.id)
    history.push(`/p/${category.name}/${category.id}`)
  }

  return (
    <div className="rando-box">
      <h3 className="categories-header">categories</h3>
      <ul>
        {categories.map((category) => {
          return (
              <li key={category.id} onClick={() => onCategorySelect(category)} className="list-item">
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