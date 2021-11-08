import PresentationCard from './info/PresentationCard';
import AboutCard from './info/AboutCard';
import EducationTimeLine from './info/EducationTimeLine.jsx';
import Skills from './info/Skills';


const Info = () => {
    return (
        <div style={{ background:'rgb(243, 242, 242)'}}>
            <PresentationCard/>
            <AboutCard/>
            <EducationTimeLine/>
            <Skills/>
            <h1>dsa</h1>
        </div>
    );
}

export default Info;