import style from "./style"
import picture from "../../assets/me.jpg"
import { BiDownArrowCircle } from "react-icons/bi"
import { BsGithub } from "react-icons/bs"
import { motion } from "framer-motion"

const Bio = ({ refs, onClick }) => {
    return (
        <div ref={refs} className={style.main}>
            <section className={style.desc}>
                <div className={style.content}>
                    <p className={style.name}>Hi, I'm <br />Al-Monaem Khan</p>
                    <br />
                    <p className="gruppo text-2xl md:text-5xl italic font-semibold flex">
                        <motion.div
                            className="rounded-full mr-3 md:mr-5"
                            animate={{ y: [0, 3, 6, 3, 0, -3, -6, -3, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        ><a href="https://github.com/al-monaem" target="_blank" className="shadow-md shadow-[#97a1db] hover:text-white transition rounded-full hover:cursor-pointer"><BsGithub /></a>
                        </motion.div>
                        Full-Stack Developer</p>

                    <div className="flex flex-col md:flex-row w-[80%] md:w-auto space-y-3 md:space-y-0 mt-10 space-x-3">
                        <button id="projects" onClick={(e) => onClick(e)} className="z-50 hover:shadow-lg transition transition-500 bg-[#97a1db] py-2 px-3 font-semibold gruppo text-white rounded-md">
                            View My Works
                        </button>
                        <div id="contact" onClick={(e) => onClick(e)} className="z-50 py-2 gruppo font-bold hover:bg-black hover:text-white px-3 transition rounded-md duration-300 flex items-center hover:cursor-pointer cursor-none">
                            Contact Me
                            <motion.div
                                animate={{ y: [0, 1, 2, 1, 0, -1, -2, -1, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <BiDownArrowCircle className="h-5 w-5 ml-1" />
                            </motion.div>
                        </div>
                    </div>

                </div>
            </section>
            <section className={style.image}>
                <div className={style.img_container}>
                    <img className={style.img} src={picture} alt="" />
                </div>
            </section>
            <div className="waves">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
    )
}

export default Bio