import style from "./style";
import graph from "../../assets/graph.png";

const About = () => {
  return (
    <div className={style.main}>
      <h1 className={style.header}>More About Me</h1>
      <div className={style.body}>
        <div className="md:w-[60%] p-14 font-semibold">
          <p className="text-xl">Hi, I'm Al-Monaem Khan,</p>
          <br />
          I'm currently a student in American International University -
          Bangladesh. I'm current working as a full time employee as a
          full-stack web developer in SSL Wireless. I've a decent knowledge
          about modern and trending technologies. I've worked with ReactJS,
          NodeJS, NestJS, Redux, Asp .NET Core. You can check out my recent
          projects.
        </div>
        <div className="md:w-[40%] flex items-center justify-center relative">
          <div className="h-52 w-52 absolute">
            <img className="" src={graph} alt="" />
          </div>
          <div className="flex flex-col items-center font-bold">
            <p className="z-0 text-7xl text-white">01</p>
            <p className="z-0 text-3xl text-neutral-500">Years of Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
