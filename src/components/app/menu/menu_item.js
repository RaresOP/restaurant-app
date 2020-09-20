import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const MenuItem = (props) => {
  return (
    <Card className={props.className}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.itemTitle}
          height="140"
          image={props.itemImage}
          title={props.itemTitle}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="h2"
            className="item-title"
          >
            {props.itemTitle}
          </Typography>
          <Typography variant="body2" component="p" className="item-desc">
            Price: {props.itemPrice}
          </Typography>
          <Typography variant="body2" component="p" className="item-info">
            Alergies:{props.itemAllergy.map((allergy) => `${allergy} `)}
          </Typography>
          <Typography variant="body2" component="p" className="item-desc">
            {props.itemDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MenuItem;
