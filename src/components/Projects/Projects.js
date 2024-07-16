import Project from "./Project";
import style from "./style";
import "./style.css";

import metro from "../../assets/metro/metro.png";
import metro_login from "../../assets/metro/login.png";
import metro_admin from "../../assets/metro/admin.png";
import metro_active from "../../assets/metro/active.png";
import metro_dashboard from "../../assets/metro/dashboard.png";
import metro_recharge from "../../assets/metro/recharge.png";
import metro_users from "../../assets/metro/users.png";

import hms from "../../assets/hms/hms.png";
import hms_login from "../../assets/hms/login.png";
import hms_edit from "../../assets/hms/edit.png";
import hms_tracks from "../../assets/hms/tracks.png";
import hms_users from "../../assets/hms/users.png";
import hms_register from "../../assets/hms/register.png";

import exam from "../../assets/exam/exam.png";
import exam_create from "../../assets/exam/create.png";
import exam_schedule from "../../assets/exam/schedule.png";

import mfr from "../../assets/mfr/mfr.png";
import mfr_login from "../../assets/mfr/login.png";
import mfr_alert_light from "../../assets/mfr/alert-white.png";
import mfr_alert_dark from "../../assets/mfr/alert-dark.png";
import mfr_attendance_dark from "../../assets/mfr/attendance-dark.png";
import mfr_attendance_light from "../../assets/mfr/attendance-light.png";
import mfr_clients_dark from "../../assets/mfr/clients-dark.png";
import mfr_clients_light from "../../assets/mfr/clients-light.png";
import mfr_reconciliations_dark from "../../assets/mfr/reconciliations-dark.png";
import mfr_reconciliations_light from "../../assets/mfr/reconciliations-light.png";
import mfr_settings_dark from "../../assets/mfr/settings-dark.png";
import mfr_settings_light from "../../assets/mfr/settings-light.png";

import othership from "../../assets/othership/othership.png";
import othership_planner from "../../assets/othership/planner.png";
import othership_floor_plan from "../../assets/othership/floor-plan.png";
import othership_groups from "../../assets/othership/groups.png";
import othership_events from "../../assets/othership/events.png";
import othership_settings from "../../assets/othership/settings.png";
import othership_analytics from "../../assets/othership/analytics.png";

import idtp from "../../assets/idtp/idtp.jpeg";
import idtp_dashboard_dark from "../../assets/idtp/dashboard_dark.jpg";
import idtp_dashboard_white from "../../assets/idtp/dashboard_white.jpg";
import idtp_login_dark from "../../assets/idtp/login_dark.png";
import idtp_login_white from "../../assets/idtp/login_white.png";
import idtp_transactions_dark from "../../assets/idtp/transactions_dark.png";
import idtp_transactions_white from "../../assets/idtp/transactions_white.png";
import idtp_trx_details_dark from "../../assets/idtp/trx_details_dark.png";
import idtp_trx_details_white from "../../assets/idtp/trx_details_white.png";
import idtp_roles_dark from "../../assets/idtp/roles_dark.jpg";
import idtp_roles_white from "../../assets/idtp/roles_white.jpg";

import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { Divider } from "antd";
import { FaConnectdevelop } from "react-icons/fa";

const metroDescription =
  "The metro system was built so that the daily users could get the exact information of what they need. One of the main feature of the system is live tracking of the train. There is also a ticket system integrated with mobile banking. A new QR ticket verification process is also added to the system to prevent fraud. Users can purchase ticket and store that ticket for as long as they want. They can refund any valid ticket at any time. Also a exclusive wallet system is introduced, by which users can purchase tickets using in-app currencies.";
const metroImages = [
  metro_login,
  metro_admin,
  metro_active,
  metro_dashboard,
  metro_recharge,
  metro_users,
];
const metroSkills = [
  "ReactJS",
  "NodeJS",
  "Laravel",
  "Asp.NET",
  "Tailwind",
  "Socket.Io",
];

const hmsDescription =
  "This was my first web-app project. This is a simple hospital management system which manages users, patients, doctors and nurses. The motive behind this project was to completely digitalize the current management systems in the hospitals.";
const hmsImages = [hms_login, hms_register, hms_edit, hms_tracks, hms_users];
const hmsSkills = ["Php", "JQuery", "HTML", "CSS3"];

const examDescription =
  "I'm still working on this project. The system will allow teachers to schedule an exam for their students. They can manage sections, and assign exams to sections. For registered students, their will be exclusive material as well as scheduled exam, but for an unregistered student, there will be practice materials.";
const examImages = [exam_create, exam_schedule];
const examSkills = ["MERN", "SocketI/O", "Tailwind", "Redux", "JWT"];

const mfrDescription =
  "This is an admin panel made by me for my current company for a face recognition system. The system is customizable for when to generate alert, count attendance through face recognition. To be detected as a recognized category, user must onboard through a link given by a organization registered into our MFR system. Upon registering, the admin can then set specific rules for that onboarded person or create global customization for any onboarded person under that organization.";
const mfrImagesLight = [
  mfr_login,
  mfr_alert_light,
  mfr_attendance_light,
  mfr_clients_light,
  mfr_reconciliations_light,
  mfr_settings_light,
];
const mfrImagesDark = [
  mfr_login,
  mfr_alert_dark,
  mfr_attendance_dark,
  mfr_clients_dark,
  mfr_reconciliations_dark,
  mfr_settings_dark,
];
const mfrSkills = ["ReactJS", "Ant Design", "Tailwind", "Redux"];

const othershipDescription = `Otherhship Workplace Scheduler is a hybrid workspace management system that provides a platform for employees to book their workspace in the office. 
The system also provides a dashboard for the admin to manage the workspace and the employees. 
It also provides social interaction features like events and groups. It has a schedule sharing feature that allows employees to share their schedule with their colleagues. They can 
set their schedule as public so that their colleagues can see their schedule and book a workspace accordingly. The system offers a mobile app for the employees to book their workspace on the go. 
It provides much more features like booking a meeting room, booking a workspace for a team, etc. This is by far the most interesting project I've worked on.`;

const moreDescription = `Integrations added to this project until now are: Google Calendar, Outlook Calendar, Microsoft Teams, Single Sign On, SAML, Okta, Azure AD, Mailchimp, Firebase`;
const othershipImages = [
  othership_planner,
  othership_floor_plan,
  othership_groups,
  othership_events,
  othership_settings,
  othership_analytics,
];
const othershipSkills = ["NodeJS", "NestJS", "Queue", "Scheduler", "Webhooks"];

const idtpDescription = `IDTP Admin Panel is a software made for tracking and monitoring all binimoy transactions of a bank. The solution is provides a detailed insight on various transactional aspects of the bank.`;
const idtpImagesDark = [
  idtp_login_dark,
  idtp_roles_dark,
  idtp_transactions_dark,
  idtp_trx_details_dark,
  idtp_dashboard_dark,
];
const idtpImagesWhite = [
  idtp_login_white,
  idtp_roles_white,
  idtp_transactions_white,
  idtp_trx_details_white,
  idtp_dashboard_white,
];
const idtpSkills = ["Asp .Net Core", "ReactJS", "ChartJS", "Tailwind"];

const Projects = ({ refs }) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const [isMobile, setIsMobile] = useState(false);
  const [lightTheme, setLightTheme] = useState(true);
  const [whiteThemeIdtp, setWhiteThemeIdtp] = useState(true);

  const [mfrImages, setMFRImgaes] = useState(mfrImagesLight);
  const [idtpImages, setIdtpImages] = useState(idtpImagesWhite);

  const switchTheme = () => {
    setLightTheme(!lightTheme);
  };
  const switchThemeIdtp = () => {
    setWhiteThemeIdtp(!whiteThemeIdtp);
  };

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    if (lightTheme) {
      setMFRImgaes(mfrImagesLight);
    } else {
      setMFRImgaes(mfrImagesDark);
    }
  }, [lightTheme]);

  useEffect(() => {
    if (whiteThemeIdtp) {
      setIdtpImages(idtpImagesWhite);
    } else {
      setIdtpImages(idtpImagesDark);
    }
  }, [whiteThemeIdtp]);

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onClick = (e) => {
    const img = e.target.getAttribute("src");
    setOpenModal(true);
    setModalImage(img);
  };

  const closeModal = () => {
    setOpenModal(false);
    setModalImage(null);
  };

  return (
    <div id="projects" ref={refs} className={style.main}>
      <h1 className={style.header}>My Projects</h1>
      <Project
        onClick={onClick}
        title={
          <div>
            Othership Workplace Scheduler
            <span className="text-gray-500 text-base ml-2">(Backend)</span>
          </div>
        }
        skills={othershipSkills}
        image={othership}
        images={othershipImages}
        align={"left"}
        description={othershipDescription}
        moreDescription={moreDescription}
        hasLiveURL={true}
      />
      <Divider>
        <FaConnectdevelop className="h-5 w-5 text-gray-400" />
      </Divider>
      <Project
        onClick={onClick}
        title={
          <div>
            Binimoy Admin Panel
            <span className="text-gray-500 text-base ml-2">(Full Stack)</span>
          </div>
        }
        skills={idtpSkills}
        image={idtp}
        images={idtpImages}
        align={"right"}
        description={idtpDescription}
        hasDarkMode={true}
        switchTheme={switchThemeIdtp}
      />
      <Divider>
        <FaConnectdevelop className="h-5 w-5 text-gray-400" />
      </Divider>
      <Project
        onClick={onClick}
        title={"MFR"}
        skills={mfrSkills}
        image={mfr}
        images={mfrImages}
        align={"left"}
        description={mfrDescription}
        hasDarkMode={true}
        switchTheme={switchTheme}
      />
      <Divider>
        <FaConnectdevelop className="h-5 w-5 text-gray-400" />
      </Divider>
      <Project
        onClick={onClick}
        title={"Exam Platform"}
        skills={examSkills}
        image={exam}
        images={examImages}
        align={"right"}
        description={examDescription}
      />
      <Divider>
        <FaConnectdevelop className="h-5 w-5 text-gray-400" />
      </Divider>
      <Project
        isMobile={isMobile}
        onClick={onClick}
        title={"Metro e-Service"}
        skills={metroSkills}
        image={metro}
        images={metroImages}
        align={"left"}
        description={metroDescription}
      />
      {/* <Divider>
        <FaConnectdevelop className="h-5 w-5 text-gray-400" />
      </Divider> */}
      {/* <Project
        onClick={onClick}
        title={'Profile Page'}
        skills={artconSkills}
        image={artcon}
        images={artconImages}
        align={'left'}
        description={artconDescription}
      /> */}
      <Divider>
        <FaConnectdevelop className="h-5 w-5 text-gray-400" />
      </Divider>
      <Project
        isMobile={isMobile}
        onClick={onClick}
        title={"Hospital Management System"}
        skills={hmsSkills}
        image={hms}
        images={hmsImages}
        align={"right"}
        description={hmsDescription}
      />

      <ReactModal
        isOpen={openModal}
        onRequestClose={closeModal}
        className="absolute m-auto w-[70%] h-[70%] rounded-2xl border-4 border-[#6db2c7fd] bg-white shadow-lg"
        preventScroll={true}
      >
        <div className="flex items-center justify-center">
          <img className="rounded-2xl" src={modalImage} alt="" />
        </div>
      </ReactModal>
    </div>
  );
};

export default Projects;
