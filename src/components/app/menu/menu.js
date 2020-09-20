import React, { useEffect, useState } from "react";
import CategoryComponent from "./menu_category";
import { getAllCourseNames } from "../../../utils/courseName";
import getCourseItems from "../../../utils/courseItem";
import FlatList from "flatlist-react";

const MenuComponent = (props) => {
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
        padding: 0,
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
