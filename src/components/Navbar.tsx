import React, { FunctionComponent } from "react";
import { NavbarProps } from "../types";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Routes from "../routes";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      "&:hover": {
        cursor: "pointer",
      },
    },
    link: {
      color: "#fff",
    },
  })
);

const Navbar: FunctionComponent<NavbarProps> = ({ handleClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            onClick={() => {
              handleClick("/");
            }}
            variant="h6"
            className={classes.title}
          >
            My React Application
          </Typography>
          {Routes.map((route, index) => (
            <Button
              className={classes.link}
              key={index}
              onClick={() => {
                handleClick(route.path);
              }}
            >
              {route.name}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
