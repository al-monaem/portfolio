import { Button, Tag } from 'antd';

const Project = ({
  title,
  description,
  image,
  images,
  align,
  skills,
  onClick,
  isMobile,
  hasDarkMode = false,
  switchTheme,
  moreDescription,
  hasLiveURL,
}) => {
  const result = images?.reduce((acc, image, index) => {
    if (index % 3 === 0) {
      const chunk = images.slice(index, index + 3);
      acc.push(
        <div
          key={index}
          className="flex items-center justify-center space-x-2 mb-2"
        >
          {chunk.map((item, itemIndex) => (
            <span
              onClick={(e) => onClick(e)}
              className="border-2 border-[#6db2c7fd] rounded-md hover:cursor-pointer hover:scale-[180%] transition duration-500 shadow-md hover:shadow-md"
              key={itemIndex}
            >
              <img className="rounded-md" src={item} alt="" />
            </span>
          ))}
        </div>
      );
    }
    return acc;
  }, []);

  const colors = [
    'blue',
    'red',
    'cyan',
    'orange',
    'lime',
    'purple',
    'pink',
    'green',
    'yellow',
  ];

  return (
    <div className="w-full mb-10">
      {(align === 'left' || isMobile) && (
        <>
          <div className="flex flex-col md:flex-row">
            <div className="h-auto md:w-[50%] w-full px-10 pt-10">
              <h1 className="text-center text-3xl">{title}</h1>
              <br />
              <div>
                <img
                  className="w-52 h-52 mr-10"
                  src={image}
                  align={align}
                  alt=""
                />
                <p className="text-lg">{description}</p>
                {moreDescription && (
                  <>
                    <br />
                    <p className="text-lg">{moreDescription}</p>
                  </>
                )}
              </div>
              <div className="w-full flex-wrap overflow-auto text-sm flex font-semibold pt-10">
                {skills &&
                  skills.map((skill, index) => {
                    return (
                      <Tag
                        key={index}
                        color={colors[(Math.random() * colors.length) | 0]}
                        className="mb-2"
                      >
                        <div className={`p-1 text-md`}>{skill}</div>
                      </Tag>
                    );
                  })}
              </div>
              {hasLiveURL && (
                <div className="flex items-center mt-5 justify-center">
                  <Button>
                    <a
                      className="gruppo font-bold"
                      href="https://hwms.othership.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit Now
                    </a>
                  </Button>
                </div>
              )}
            </div>
            <div className="md:w-[50%] w-full px-10 pt-10">
              <h1 className="text-center text-2xl">
                Gallery{hasDarkMode ? ' - Switch to dark' : ''}
              </h1>
              <div className="p-8">{result}</div>
              {hasDarkMode && (
                <div className="flex text-white items-center justify-center">
                  <button
                    onClick={() => switchTheme()}
                    className="border hover:brightness-[110%] transition bg-[#6db2c7fd] px-2 py-1 rounded-md"
                  >
                    Switch Theme
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
      {align === 'right' && !isMobile && (
        <>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-[50%] w-full px-10 pt-10">
              <h1 className="text-center text-2xl">
                Gallery{hasDarkMode ? ' - Switch to dark' : ''}
              </h1>
              <div className="p-8">{result}</div>
              {hasDarkMode && (
                <div className="flex text-white items-center justify-center">
                  <button
                    onClick={() => switchTheme()}
                    className="border hover:brightness-[110%] transition bg-[#6db2c7fd] px-2 py-1 rounded-md"
                  >
                    Switch Theme
                  </button>
                </div>
              )}
            </div>
            <div className="md:w-[50%] w-full px-10 pt-10">
              <h1 className="text-center text-3xl">{title}</h1>
              <br />
              <div>
                <img
                  className="w-52 h-52 mr-10"
                  src={image}
                  align={align}
                  alt=""
                />
                <p className="text-lg">{description}</p>
                {moreDescription && (
                  <>
                    <br />
                    <p className="text-lg">{moreDescription}</p>
                  </>
                )}
              </div>
              <div className="w-full flex flex-wrap text-sm font-semibold mt-2 pb-10">
                {skills &&
                  skills.map((skill, index) => {
                    return (
                      <Tag
                        key={index}
                        color={colors[(Math.random() * colors.length) | 0]}
                        className="mb-2"
                      >
                        <div className={`p-1 text-md`}>{skill}</div>
                      </Tag>
                    );
                  })}
              </div>
              {hasLiveURL && (
                <div className="flex mt-5 items-center justify-center">
                  <Button>
                    <a
                      className="gruppo font-bold block w-full h-full"
                      href="https://hwms.othership.com/"
                      target="_blank"
                      rel={'noreferrer'}
                    >
                      Visit Now
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Project;
