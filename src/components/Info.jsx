import SchoolIcon from "@mui/icons-material/School";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import PresentationCard from './info/PresentationCard';
import AboutCard from './info/AboutCard';
import TimeLine from './info/TimeLine.jsx';
import Skills from './info/Skills';


const Info = () => {
    return (
        <div style={{ background:'rgb(243, 242, 242)'}}>
            <PresentationCard/>
            <AboutCard/>
            <TimeLine id={'education'} data={infoEducation} sectionName='Education' icon={<SchoolIcon style={{ fontSize: "2.6rem", color: "white" }}/>} />
            <Skills/>
            <TimeLine id={'experience'} data={workExperience} sectionName='Experience' icon={<WorkRoundedIcon style={{ fontSize: "2.6rem", color: "white" }}/>} />
        </div>
    );
}

const infoEducation = [
    {
      title: "lorem4",
      entity: "Fedrick School",
      date: "Jan 1997 - Mar 2000",
      info: `I completed my preparatory education from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall`,
    },
    {
      title: "High School",
      entity: "RedStreet College",
      date: "Jan 2000 - Mar 2005",
      info: `I completed my high school degree from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.`,
    },
    {
      title: "Computer Science",
      entity: "Down Street College",
      date: "Jan 2006 - Mar 2008",
      info: `I completed my computer science degree from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall`,
    },
  ];

  const workExperience = [
    {
      title: "Preparatory Education",
      entity: "Fedrick School",
      date: "Jan 1997 - Mar 2000",
      info: `I completed my preparatory education from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall`,
    },
    {
      title: "High School",
      entity: "RedStreet College",
      date: "Jan 2000 - Mar 2005",
      info: `I completed my high school degree from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall.`,
    },
    {
      title: "Computer Science",
      entity: "Down Street College",
      date: "Jan 2006 - Mar 2008",
      info: `I completed my computer science degree from this prestigious institution. I successful completed all the credits without any fallout and got A grade overall`,
    },
  ];

export default Info;