import { FaPen } from "react-icons/fa6";

const experiences = [
{
    role: "Full Stack Developer",
    company: "",
    year: "2017-2018",
    description:
    "Tolerably earnestly Middleton extremely distrusts she boy now not. Add and offered prepare how cordial two promise.",
    color: "bg-blue-500",
},
{
    role: "Front End Developer",
    company: "Google",
    year: "2017-2018",
    description:
    "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.",
    color: "bg-red-500",
},
{
    role: "System Analyst",
    company: "",
    year: "2017-2018",
    description:
    "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.",
    color: "bg-yellow-500",
},
];

const Experience = () => {
return (
<div className="p-10">
    <h2 className="text-2xl font-bold mb-6 ">Work Experience</h2>
    <div className="relative border-l-4 border-gray-300 pl-6">
    {experiences.map((exp, index) => (
        <div key={index} className="mb-6 relative">
        {/* Icon */}
        <div
            className={`absolute -left-9 top-2 w-8 h-8 flex items-center justify-center rounded-full ${exp.color}`}
        >
            <FaPen className="text-white" />
        </div>
        {/* Content */}
        <div className="bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg">{exp.role}</h3>
            <p className="text-sm text-gray-500">{exp.year}</p>
            <p className="text-gray-600">{exp.description}</p>
        </div>
        </div>
    ))}
    </div>
</div>
);
};

export default Experience;
