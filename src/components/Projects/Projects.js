import Project from "./Project"
import style from "./style"
import "./style.css"

import metro from "../../assets/metro/metro.png"
import metro_login from "../../assets/metro/login.png"
import metro_admin from "../../assets/metro/admin.png"
import metro_active from "../../assets/metro/active.png"
import metro_dashboard from "../../assets/metro/dashboard.png"
import metro_recharge from "../../assets/metro/recharge.png"
import metro_users from "../../assets/metro/users.png"

import artcon from "../../assets/artcon/bio.png"
import artcon_arts from "../../assets/artcon/arts.png"
import artcon_others from "../../assets/artcon/others.png"

import hms from "../../assets/hms/hms.png"
import hms_login from "../../assets/hms/login.png"
import hms_edit from "../../assets/hms/edit.png"
import hms_tracks from "../../assets/hms/tracks.png"
import hms_users from "../../assets/hms/users.png"
import hms_register from "../../assets/hms/register.png"

import exam from "../../assets/exam/exam.png"
import exam_create from "../../assets/exam/create.png"
import exam_schedule from "../../assets/exam/schedule.png"

import { useEffect, useState } from "react"
import ReactModal from "react-modal"

const metroDescription = "The metro system was built so that the daily users could get the exact information of what they need. One of the main feature of the system is live tracking of the train. There is also a ticket system integrated with mobile banking. A new QR ticket verification process is also added to the system to prevent fraud. Users can purchase ticket and store that ticket for as long as they want. They can refund any valid ticket at any time. Also a exclusive wallet system is introduced, by which users can purchase tickets using in-app currencies."
const metroImages = [metro_login, metro_admin, metro_active, metro_dashboard, metro_recharge, metro_users]
const metroSkills = ["ReactJS", "NodeJS", "Laravel", "Asp.NET", "Tailwind"]

const artconDescription = "This simple profile page was designed for artists where the user can showcase their artwork. They can link their personal websites in this page. Also other relevent artists list is also shown in this page."
const artconImages = [artcon, artcon_arts, artcon_others]
const artconSkills = ["NextJS", "Tailwind"]

const hmsDescription = "This was my first web-app project. This is a simple hospital management system which manages users, patients, doctors and nurses. The motive behind this project was to completely digitalize the current management systems in the hospitals."
const hmsImages = [hms_login, hms_register, hms_edit, hms_tracks, hms_users]
const hmsSkills = ["Php", "JQuery", "HTML", "CSS3"]

const examDescription = "This is my latest work. I'm still working on this project. The system will allow teachers to schedule an exam for their students. They can manage sections, and assign exams to sections. For registered students, their will be exclusive material as well as scheduled exam, but for an unregistered student, there will be practice materials."
const examImages = [exam_create, exam_schedule]
const examSkills = ["MERN", "SocketI/O", "Tailwind", "Redux", "JWT"]

const Projects = ({ refs }) => {

    const [openModal, setOpenModal] = useState(false)
    const [modalImage, setModalImage] = useState(null)

    const [isMobile, setIsMobile] = useState(false)

    //choose the screen size 
    const handleResize = () => {
        if (window.innerWidth < 720) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    // create an event listener
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    const onClick = (e) => {
        console.log(e.target.getAttribute('src'))
        const img = e.target.getAttribute('src')
        setOpenModal(true)
        setModalImage(img)
    }

    const closeModal = () => {
        setOpenModal(false)
        setModalImage(null)
    }

    // useEffect(() => {
    //     if (openModal)
    //         document.body.style.overflow = 'hidden'
    //     else
    //         document.body.style.overflow = 'unset';
    //     return () => document.body.style.overflow = 'unset';
    // }, [openModal])

    return (
        <div id="projects" ref={refs} className={style.main}>
            <h1 className={style.header}>My Projects</h1>
            <Project onClick={onClick} title={"Exam Platform"} skills={examSkills} image={exam} images={examImages} align={"left"} description={examDescription} />
            <Project isMobile={isMobile} onClick={onClick} title={"Metro e-Service"} skills={metroSkills} image={metro} images={metroImages} align={"right"} description={metroDescription} />
            <Project onClick={onClick} title={"Profile Page"} skills={artconSkills} image={artcon} images={artconImages} align={"left"} description={artconDescription} />
            <Project isMobile={isMobile} onClick={onClick} title={"Hospital Management System"} skills={hmsSkills} image={hms} images={hmsImages} align={"right"} description={hmsDescription} />

            <ReactModal
                isOpen={openModal}
                onRequestClose={closeModal}
                className="absolute m-auto w-[70%] h-[70%] rounded-2xl border-4 border-[#6db2c7fd] bg-white shadow-lg"
                preventScroll={true}
            >
                <div className="flex items-center justify-center" >
                    <img className="rounded-2xl" src={modalImage} alt="" />
                </div>
            </ReactModal>
        </div>
    )
}

export default Projects