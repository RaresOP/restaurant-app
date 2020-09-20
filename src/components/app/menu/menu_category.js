import React from "react";
import MenuItem from "./menu_item";
import Typography from "@material-ui/core/Typography";
import { getIndexOf } from "../../../utils/courseName";
import getCourseItems from "../../../utils/courseItem";
import FlatList from "flatlist-react";

const CategoryComponent = (props) => {
  const renderItem = (item, idx) => {
    return (
      <MenuItem
        key={idx}
        id={item.id}
        itemTitle={item.title}
        itemSpiceLevel={item.spiceLevel}
        itemAllergy={item.allery}
        itemPrice={item.price}
        itemDescription={item.description}
        itemImage={item.image}
        className="order-item"
      />
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5" className="item-desc">
        {props.category}
      </Typography>
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          margin: 0,
          padding: 0,
        }}
      >
        <FlatList
          list={getCourseItems(props.courseItems, getIndexOf(props.category))}
          renderItem={renderItem}
          renderWhenEmpty={() => <div>List is empty!</div>}
          displayRow
          rowGap="100px"
        />
      </ul>
    </div>
  );
};

export default CategoryComponent;
