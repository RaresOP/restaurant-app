import React, { Component, useEffect, useState } from "react";
import MenuItem from "./menu_item";
import CategoryComponent from "./menu_category";
import Grid from "@material-ui/core/Grid";
import getItemIndex from "../../../utils/itemIndex";
import Typography from "@material-ui/core/Typography";
import { getAllCourseNames, getIndexOf } from "../../../utils/courseName";
import getCourseItems from "../../../utils/courseItem";
import FlatList from "flatlist-react";

const MenuComponent = props => {
  const [courseItems, setCourseItems] = useState([]);

  useEffect(() => {
    let componentIsMounted = true;

    const fetchData = async () => {
      const jsonData = await require("../../../assets/data/fe-tech-data.json");
      const courseItems = getCourseItems(jsonData, -1);
      if (componentIsMounted === true) setCourseItems(courseItems);
    };

    fetchData();

    return () => (componentIsMounted = false);
  });

  const renderCategory = (category, idx) => {
    return (
      <CategoryComponent
        category={category}
        courseItems={courseItems}
        key={idx}
      />
    );
  };

  return (
    <ul
      style={{
        alignItems: "center",
        margin: 0,
        padding: 0
      }}
    >
      <FlatList
        list={getAllCourseNames()}
        renderItem={renderCategory}
        renderWhenEmpty={() => <div>List is empty!</div>}
        displayRow
        rowGap="10px"
      />
    </ul>
  );
};
export default MenuComponent;
