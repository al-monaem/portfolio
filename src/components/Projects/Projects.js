import Project from "./Project"
import style from "./style"

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

import dummy from "../../assets/dummy.png"
import { useEffect, useState } from "react"
import ReactModal from "react-modal"

const metroDescription = "The metro system was built so that the daily users could get the exact information of what they need. One of the main feature of the system is live tracking of the train. There is also a ticket system integrated with mobile banking. A new QR ticket verification process is also added to the system to prevent fraud. Users can purchase ticket and store that ticket for as long as they want. They can refund any valid ticket at any time. Also a exclusive wallet system is introduced, by which users can purchase tickets using in-app currencies."
const metroImages = [metro_login, metro_admin, metro_active, metro_dashboard, metro_recharge, metro_users]
const metroSkills = ["ReactJS", "NodeJS", "Laravel", "Asp .NET", "Tailwind"]

const artconDescription = "This simple profile page was designed for artists where the user can showcase their artwork. They can link their personal websites in this page. Also other relevent artists list is also shown in this page."
const artconImages = [artcon, artcon_arts, artcon_others]
const artconSkills = ["NextJS", "Tailwind"]

const hmsDescription = "This was my first web-app project. This is a simple hospital management system which manages users, patients, doctors and nurses. The motive behind this project was to completely digitalize the current management systems in the hospitals."
const hmsImages = [hms_login, hms_register, hms_edit, hms_tracks, hms_users]
const hmsSkills = ["Php", "JQuery", "HTML", "CSS3"]

const Projects = ({ refs }) => {

    const [openModal, setOpenModal] = useState(false)
    const [modalImage, setModalImage] = useState(null)

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
            <Project onClick={onClick} title={"Metro e-Service"} skills={metroSkills} image={metro} images={metroImages} align={"left"} description={metroDescription} />
            <Project onClick={onClick} title={"Profile Page"} skills={artconSkills} image={artcon} images={artconImages} align={"right"} description={artconDescription} />
            <Project onClick={onClick} title={"Hospital Management System"} skills={hmsSkills} image={hms} images={hmsImages} align={"left"} description={hmsDescription} />

            <ReactModal
                isOpen={openModal}
                onRequestClose={closeModal}
                className="absolute m-auto w-[70%] h-[70%] rounded-2xl border-4 border-[#6db2c7fd] bg-white shadow-lg"
                preventScroll={true}
            >
                <div className="flex items-center justify-center" >
                    <img className="rounded-2xl" src={modalImage} />
                </div>
            </ReactModal>
        </div>
    )
}

export default Projects