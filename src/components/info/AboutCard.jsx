import { Paper, Grid, Typography, Box, Button } from "@mui/material";

const AboutCard = () => {
  return (
    <div id="about">
      <Grid container justifyContent="center">
        <Grid item xs={11} sm={10} md={8}>
          <Paper square elevation={4} style={{padding:'0.8cm'}}>
            <Box px={3.8} mb={4}>
              <Typography variant="body1" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit cupiditate praesentium incidunt fuga, ducimus
                sapiente omnis animi autem, nulla minus esse. Maxime, ipsam.
                Perferendis a aliquam hic quod! Voluptates, a.
              </Typography>
            </Box>
            <Grid spacing="1cm" container justifyContent="center">
              <Grid item>
                <Button variant="contained" color="secondary">
                  Download cv
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="secondary">
                  Contact me
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutCard;
