import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Box,
  Fab,
} from "@mui/material/";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import InboxRoundedIcon from "@mui/icons-material/InboxRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import LocalAtmRoundedIcon from "@mui/icons-material/LocalAtmRounded";
import BookRoundedIcon from "@mui/icons-material/BookRounded";
import ContactMailRoundedIcon from "@mui/icons-material/ContactMailRounded";

const NavButton = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const sections = [
    { title: "Home", icon: <HomeRoundedIcon fontSize="small" /> },
    { title: "About", icon: <InfoRoundedIcon fontSize="small" /> },
    { title: "Education", icon: <SchoolRoundedIcon fontSize="small" /> },
    { title: "Experience", icon: <WorkRoundedIcon fontSize="small" /> },
    { title: "Portfolios", icon: <InboxRoundedIcon fontSize="small" /> },
    { title: "Interest", icon: <FavoriteRoundedIcon fontSize="small" /> },
    { title: "Testimonials", icon: <PeopleRoundedIcon fontSize="small" /> },
    { title: "Pricing", icon: <LocalAtmRoundedIcon fontSize="small" /> },
    { title: "Blog", icon: <BookRoundedIcon fontSize="small" /> },
    { title: "Contact", icon: <ContactMailRoundedIcon fontSize="small" /> },
  ];

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const list = () => (
    <List style={{ marginTop: "20px" }}>
      {sections.map((item, key) => (
        <ListItem disablePadding key={key}>
          <ListItemButton style={{ padding: "2px 0" }} href="google.com">
            <a
              href={`#${item.title.toLowerCase()}`}
              style={{ textDecoration: "none", color: "#757373" }}
              onClick={toggleDrawer(false)}
            >
              <Box
                mx={3}
                mr={10}
                py={0.8}
                display="flex"
                alignItems="center"
                style={{ fontSize: "0.8rem" }}
              >
                <Box display="flex" flexGrow="1" pr={1}>
                  {item.icon}
                </Box>
                <Box flexGrow="10">
                  {item.title.toUpperCase()}
                </Box>
              </Box>
            </a>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <div>
      <Fab
        color="primary"
        onClick={toggleDrawer(true)}
        aria-label="add"
        size="small"
        style={{
          position: "fixed",
          left: "10px",
          top: "10px",
          background: "none",
          borderRadius: "10px",
          color: "#4195e4",
          zIndex: 1000,
        }}
      >
        <MenuRoundedIcon />
      </Fab>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          bgcolor="#4195e4"
          color="#fff"
          py={1}
          display="flex"
          justifyContent="center"
          style={{ fontSize: "4rem" }}
        >
          <Box style={{ border: "5px solid white" }} px={7} py={2}>
            A
          </Box>
        </Box>
        {list()}
      </Drawer>
    </div>
  );
};

export default NavButton;
