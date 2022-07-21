import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link } from "react-scroll";

const ButtonUpHome = () => {
  return (
    <Link
      activeClass="active"
      to="home"
      spy={true}
      smooth={true}
      offset={-70}
      duration={400}
    >
      <Fab
        color="primary"
        aria-label="add"
        size="small"
        style={{
          position: "fixed",
          right: "10px",
          bottom: "20px",
          borderRadius: "0px",
          zIndex: 1000,
        }}
      >
        <KeyboardArrowUpIcon fontSize="large" />
      </Fab>
    </Link>
  );
};

export default ButtonUpHome;
