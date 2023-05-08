import style from "./style"
import { AiOutlineMenuFold } from "react-icons/ai"
import { useState } from "react"
import { motion } from "framer-motion"

const Header = ({ onClick }) => {

    const [openMenu, setOpenMenu] = useState(false)

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
                <div className={style.link} onClick={(e) => onClick(e)}>
                    Contact
                </div>
            </div>
            <div className={style.links_mobile}>
                <motion.div className="relative"
                    animate={openMenu ? { x: -40 } : { x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div
                        onClick={() => setOpenMenu(!openMenu)}
                        initial={{ rotateY: 0 }}
                        animate={openMenu ? { rotateY: 180 } : { rotateY: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <AiOutlineMenuFold className={style.icon} />
                    </motion.div>
                    {openMenu &&
                        <div className="absolute">
                            <motion.div
                                className={style.link}
                                initial={{ x: 100 }}
                                animate={{ x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                Home
                            </motion.div>
                            <motion.div
                                className={style.link}
                                initial={{ x: 100 }}
                                animate={{ x: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                Projects
                            </motion.div>
                            <motion.div
                                className={style.link}
                                initial={{ x: 100 }}
                                animate={{ x: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                Contact
                            </motion.div>
                        </div>}
                </motion.div>
            </div>
        </div>
    )
}

export default Header