import style from "./style"
import graph from "../../assets/graph.png"

const About = () => {
    return (
        <div className={style.main}>
            <h1 className={style.header}>More About Me</h1>
            <div className={style.body}>
                <div className="md:w-[60%] p-14 font-semibold">
                    <p className="text-xl">Hi, I'm Al-Monaem Khan,</p><br />
                    I'm currently a student in American International University - Bangladesh.
                    I'm looking for any freelance work as well as a full-time job to further enhance my skills in web-development.
                    I've a decent knowledge about modern and trending technologies. I've worked with ReactJS, NodeJS, Redux, MongoDB, Laravel, Asp .NET.
                    You can check out my recent projects. I hope you'll like my work.
                </div>
                <div className="md:w-[40%] flex items-center justify-center relative">
                    <div className="h-52 w-52 absolute">
                        <img className="" src={graph} />
                    </div>
                    <div className="flex flex-col items-center font-bold">
                        <p className="z-0 text-7xl text-white">01</p>
                        <p className="z-0 text-3xl text-neutral-500">Years of Experience</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About