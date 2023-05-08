import Project from "./Project"
import style from "./style"
import metro from "../../assets/metro.png"
import dummy from "../../assets/dummy.png"

const metroDescription = "The metro system was built so that the daily users could get the exact information of what they need. One of the main feature of the system is live tracking of the train. There is also a ticket system integrated with mobile banking. A new QR ticket verification process is also added to the system to prevent fraud. Users can purchase ticket and store that ticket for as long as they want. They can refund any valid ticket at any time. Also a exclusive wallet system is introduced, by which users can purchase tickets using in-app currencies."
const metroImages = [dummy, dummy, dummy, dummy, dummy]
const metroSkills = ["ReactJS", "NodeJS", "Laravel", "Asp .NET", "Tailwind"]

const Projects = ({ refs }) => {
    return (
        <div id="projects" ref={refs} className={style.main}>
            <h1 className={style.header}>My Projects</h1>
            <Project title={"Metro e-Service"} skills={metroSkills} image={metro} images={metroImages} align={"left"} description={metroDescription} />
            <Project title={"Profile Page"} />
            {/* <Project title={"Hospital Management System"} /> */}
        </div>
    )
}

export default Projects