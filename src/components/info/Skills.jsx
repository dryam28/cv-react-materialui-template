import React from "react";
import { Grid, Box } from "@mui/material/";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const skills = [
  {
    title: "Professional",
    data: [
      { name: "Html5", percent: "70%" },
      { name: "Css3", percent: "80%" },
      { name: "Js", percent: "80%" },
    ],
  },
  {
    title: "Personal",
    data: [
      { name: "Communication", percent: "20%" },
      { name: "Teamwork", percent: "5%" },
    ],
  },
  {
    title: "Software",
    data: [
      { name: "Adobe Illustrator", percent: "70%" },
      { name: "Adobe Design", percent: "80%" },
      { name: "Photoshop", percent: "50%" },
      { name: "Web Storm", percent: "70%" },
    ],
  },
];

const theme = createTheme({
  palette: {
    mode: "dark",
    secondary: {
      main: "#283593",
    },
  },
});

const Skills = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box mt={4}>
        <Box mb={3}>
          <Typography
            fontWeight="bold"
            variant="h4"
            sx={{ color: "rgba(0,0,0,0.7)" }}
          >
            SKILLS
          </Typography>
        </Box>
        <Grid container justifyContent="center">
          <Grid
            item
            xs={11}
            sm={10}
            md={10}
            lg={8}
            sx={{ backgroundColor: "secondary.main", color: "white" }}
          >
            <Box py={5} px={3} boxShadow={"0px 8px 10px rgba(0,0,0,0.4)"}>
              <Grid container spacing={5}>
                {/* Esto es para generar las columnas con la info */}
                {skills.map((item, key) => (
                  <Grid item xs={12}  sm={12} md={4} key={key}>
                    <Box>
                      <Typography
                        variant="h6"
                        color="text.primary"
                        sx={{
                          textShadow: "5px 5px 10px rgba(0,0,0,0.3)",
                        }}
                      >
                        {item.title}
                      </Typography>

                      {/* Esto para generar cada tec con su porcentage */}
                      {item.data.map((item, key) => (
                        <Box mt={2} key={key} >
                          <Box
                            display="flex"
                            justifyContent="space-between"
                            mb={0.5}
                          >
                            <Typography variant="body1" color="text.primary">
                              {item.name}
                            </Typography>
                            <Typography variant="caption" color="text.primary">
                              {item.percent}
                            </Typography>
                          </Box>
                          <div
                            style={{
                              background: `linear-gradient( 90deg,#f0ecec 0%,#f0ecec ${item.percent}, #182480 ${item.percent}, #182480 100%)`,
                              borderRadius: "4px",
                              height: "5px",
                            }}
                          ></div>
                        </Box>
                      ))}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Skills;
