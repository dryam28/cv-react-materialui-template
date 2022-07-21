import "../../styles/timeline.css";
import { Box } from "@mui/material";

export default function EducationTimeLine({id,icon , sectionName, data}) {
  return (
    <div id={id} className='education'>
      <div className="container">
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
            {icon}
          </Box>
          <h1>{sectionName}</h1>
        </Box>
        <div className="timeline">
          {data.map((item, key) => (
            <div className="timeline-container primary" key={key}>
              <div className="timeline-icon">
                <i className="far fa-grin-wink">{item.title[0]}</i>
              </div>
              <div className="timeline-body">
                <Box>
                  <h4 className="timeline-title">
                    {item.title}
                    <span className="schoolName">
                      {" - " + item.entity}
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


