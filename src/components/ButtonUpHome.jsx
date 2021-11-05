import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const ButtonUpHome = () => {
  return (
    <div style={{ background: "red" }}>
      <Fab
        href="#home"
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
    </div>
  );
};

export default ButtonUpHome;
