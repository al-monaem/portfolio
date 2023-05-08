import style from "./style"
import { AiOutlineMenuFold } from "react-icons/ai"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const Header = ({ onClick }) => {

    const [openMenu, setOpenMenu] = useState(false)

    const onTap = (e) => {
        setOpenMenu(!openMenu)
        e.target.blur()
    }

    return (
        <div className={style.navbar}>
            <div className={style.logo}>
                Portfolio
            </div>
            <div className={style.links}>
                <div id="home" className={style.link} onClick={(e) => onClick(e)}>
                    Home
                </div>
                <div id="projects" className={style.link} onClick={(e) => onClick(e)}>
                    Projects
                </div>
                <div id="contact" className={style.link} onClick={(e) => onClick(e)}>
                    Contact
                </div>
            </div>
            <div className={style.links_mobile}>
                <motion.div className="relative"
                    animate={openMenu ? { x: -40 } : { x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        className={`${openMenu ? "bg-white text-black" : "bg-[#6db2c7fd]"} border`}
                        onClick={(e) => onTap(e)}
                        initial={{ rotateY: 0, borderRadius: "50px 50px 50px 50px" }}
                        animate={openMenu ? { rotateY: 180, borderRadius: "50px 50px 0px 0px" } : { rotateY: 0, borderRadius: "50px 50px 50px 50px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <AiOutlineMenuFold className={`${style.icon}`} />
                    </motion.div>
                    <AnimatePresence>
                        {openMenu &&
                            <motion.div
                                className="absolute bg-white text-black rounded-b-lg rounded-tr-lg w-[100px]"
                                initial={{ x: 100 }}
                                animate={{ x: 0 }}
                                transition={{ duration: 1 }}
                                exit={{ x: 100 }}
                            >
                                <motion.div
                                    id="home"
                                    className={`${style.link} border-b-2 border-[#6db2c7fd] hover:text-white`}
                                    initial={{ x: 100 }}
                                    animate={{ x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    onClick={(e) => {
                                        onClick(e)
                                        setOpenMenu(false)
                                    }}
                                >
                                    Home
                                </motion.div>
                                <motion.div
                                    id="projects"
                                    className={`${style.link} border-b-2 border-[#6db2c7fd] hover:text-white`}
                                    initial={{ x: 100 }}
                                    animate={{ x: 0 }}
                                    transition={{ delay: 0.4 }}
                                    onClick={(e) => {
                                        onClick(e)
                                        setOpenMenu(false)
                                    }}
                                >
                                    Projects
                                </motion.div>
                                <motion.div
                                    id="contact"
                                    className={`${style.link} border-b-2 border-[#6db2c7fd] hover:text-white`}
                                    initial={{ x: 100 }}
                                    animate={{ x: 0 }}
                                    transition={{ delay: 0.6 }}
                                    onClick={(e) => {
                                        onClick(e)
                                        setOpenMenu(false)
                                    }}
                                >
                                    Contact
                                </motion.div>
                            </motion.div>}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    )
}

export default Header