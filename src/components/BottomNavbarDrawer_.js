/** @format */

import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import DevicesOtherIcon from "@material-ui/icons/DevicesOther";
import FireplaceIcon from "@material-ui/icons/Fireplace";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import SentimentVerySatisfiedOutlinedIcon from "@material-ui/icons/SentimentVerySatisfiedOutlined";
import SentimentVeryDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentVeryDissatisfiedOutlined";
import HdOutlinedIcon from "@material-ui/icons/HdOutlined";

import { categories, links } from "./Constants_";
import requests from "../api/Requests_";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function BottomNavbarDrawer_() {
  const names_ = Object.keys(requests);
  const iconsList = [
    <WhatshotIcon />,
    <ThumbUpIcon />,
    <DevicesOtherIcon />,
    <FireplaceIcon />,
    <FavoriteBorderOutlinedIcon />,
    <SentimentVerySatisfiedOutlinedIcon />,
    <SentimentVeryDissatisfiedOutlinedIcon />,
    <HdOutlinedIcon />,
  ];
  const classes = useStyles();
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {categories.slice(0, 3).map((text, index) => (
          <Link
            key={index}
            style={{ color: "inherit", textDecoration: "inherit" }}
            to={"/category/" + names_[index]}>
            <ListItem button key={text}>
              <ListItemIcon>{iconsList[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {categories.slice(3).map((text, index) => (
          <Link
            key={index + 3}
            style={{ color: "inherit", textDecoration: "inherit" }}
            to={"/category/" + names_[index + 3]}>
            <ListItem button key={text}>
              <ListItemIcon>{iconsList[index + 3]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer("bottom", true)}>Bottom</Button>
        <Drawer
          anchor='bottom'
          open={state["bottom"]}
          onClose={toggleDrawer("bottom", false)}>
          {list("bottom")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
