const Project = ({ title, description, image, images, align, skills }) => {

    const result = images?.reduce((acc, image, index) => {
        if (index % 3 === 0) {
            const chunk = images.slice(index, index + 3);
            acc.push(
                <div key={index} className="flex items-center justify-center space-x-2 mb-2">
                    {chunk.map((item, itemIndex) => (
                        <span className="hover:scale-[150%] transition duration-500 shadow-md hover:shadow-md" key={itemIndex}><img className="rounded-md" src={item} /></span>
                    ))}
                </div>
            );
        }
        return acc;
    }, []);

    const colors = ["bg-[#4fbbd6]", "bg-[#3ac785]", "bg-[#d9871c]", "bg-[#ab5bd4]", "bg-[#c43b62]"]

    return (
        <div className="w-full">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-[50%] w-full px-10 pt-10">
                    <h1 className="text-center text-3xl">{title}</h1>
                    <br />
                    <div>
                        <img className="w-52 h-52 mr-10" src={image} align={align} />
                        <p className="text-lg">{description}</p>
                    </div>
                </div>
                <div className="md:w-[50%] w-full px-10 pt-10">
                    <h1 className="text-center text-2xl">Gallery</h1>
                    <div className="p-8">
                        {result}
                    </div>
                </div>
            </div>
            <div className="md:w-full text-sm flex space-x-2 font-semibold pl-10 pb-10">
                {skills && skills.map((skill, index) => {
                    return <div key={index} className={`px-3 py-2 text-white rounded-md ${colors[(Math.random() * colors.length) | 0]}`}>{skill}</div>
                })}
            </div>
        </div>
    )
}

export default Project