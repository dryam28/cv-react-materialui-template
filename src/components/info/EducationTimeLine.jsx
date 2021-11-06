import "../../styles/educationtimeline.css";
import { Box } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

export default function EducationTimeLine() {
  return (
    <div id="education">
      <div class="container">
        <Box display="flex" justifyContent="center" alignItems="center" mb={5}>
          <Box
            borderRadius="10px"
            mr={1}
            p={0.5}
            px={1.2}
            sx={{
              background:
                "linear-gradient( 125deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)",
            }}
          >
            <SchoolIcon style={{ fontSize: "2.6rem", color: "white" }} />
          </Box>
          <h1>Education</h1>
        </Box>
        <div className="timeline">
          {info.map((item, key) => (
            <div class="timeline-container primary" key={key}>
              <div className="timeline-icon">
                <i className="far fa-grin-wink">{item.gradeType[0]}</i>
              </div>
              <div className="timeline-body">
                <Box>
                  <h4 class="timeline-title">
                    {item.gradeType}
                    <span className="schoolName">
                      {" - " + item.schoolName}
                    </span>
                  </h4>
                </Box>
                <div
                  className="timeline-subtitle"
                  style={{ marginBottom: "1.4rem", marginTop: "10px" }}
                >
                  {item.date}
                </div>
                <p>{item.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const info = [
  {
    gradeType: "Preparatory Education",
    schoolName: "Fedrick School",
    date: "Jan 1997 - Mar 2000",
    info: `I completed my preparatory education from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall`,
  },
  {
    gradeType: "High School",
    schoolName: "RedStreet College",
    date: "Jan 2000 - Mar 2005",
    info: `I completed my high school degree from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.`,
  },
  {
    gradeType: "Computer Science",
    schoolName: "Down Street College",
    date: "Jan 2006 - Mar 2008",
    info: `I completed my computer science degree from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall`,
  },
];
