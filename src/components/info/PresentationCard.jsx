import "../../styles/card.css";
import {
  Box,
  List,
  ListItem,
  useMediaQuery,
  Typography,
  Grid,
} from "@mui/material";

import { MailRounded, Language, Phone, LocationOn } from "@mui/icons-material/";

const info = [
  { info: "email@mailprovider.com", icon: <MailRounded /> },
  { info: "yourpersonalwebsite.co", icon: <Language /> },
  { info: "+1 1111 11 1111", icon: <Phone /> },
  { info: "LampStreet 34/3, London, UK", icon: <LocationOn /> },
];

const PresentationCard = () => {
  const media = useMediaQuery("(max-width: 899px)");

  return (
    <Grid
      id="home"
      container
      justifyContent="center"
      style={{ position: "absolute", top: "-5cm" }}
    >
      <Grid item xs={11} sm={10} md={4}>


        {media ? (
          <Box display="flex" justifyContent='center' mb={4}>
            <Box bgcolor="blue" height="100%" radius={100} id="userPicture"></Box>
          </Box>
        ) : null}


        <Box bgcolor="#0ba85a" pl={5} color="white" pt={8} pb={!media? 8 : 3} position="relative">
          <Typography
            align="left"
            variant="h4"
            sx={{
              textShadow: "5px 5px 10px rgba(0,0,0,0.3)",
            }}
          >
            Lorem Ipsun
          </Typography>
          <Typography
            align="left"
            variant="h6"
            sx={{
              textShadow: "5px 5px 10px rgba(0,0,0,0.3)",
            }}
            gutterBottom
          >
            Software Engineer & UI/UX Expert
          </Typography>

          <List style={{ marginTop: "2rem" }}>
            {info.map((item, key) => (
              <ListItem key={key} style={{ padding: 0 }}>
                <Box display="flex" alignItems="center" my={0.4}>
                  {item.icon}
                  <span style={{ paddingLeft: ".5rem" }}>{item.info}</span>
                </Box>
              </ListItem>
            ))}
          </List>

          <Box className="slant">{""}</Box>
        </Box>
      </Grid>
      {!media ? (
        <Grid item sm={5} md={4}>
          <Box bgcolor="primary" height="100%" id="userPicture"></Box>
        </Grid>
      ) : null}
    </Grid>
  );
};

export default PresentationCard;
