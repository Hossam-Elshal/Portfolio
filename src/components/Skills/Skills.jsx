import { useEffect, useState } from "react";

const skillsData = [
  { name: "Photoshop", percentage: 75, color: "bg-blue-500" },
  { name: "HTML", percentage: 85, color: "bg-yellow-500" },
  { name: "CSS", percentage: 70, color: "bg-green-500" },
  { name: "jQuery", percentage: 75, color: "bg-red-500" },
  { name: "CSS3", percentage: 90, color: "bg-purple-500" },
  { name: "SEO", percentage: 80, color: "bg-blue-900" },
];

const Skills = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimated(true);
    }, 500);
  }, []);


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="max-w-4xl bg-white p-6 rounded-lg shadow-lg m-5">

        <h1 className="text-4xl font-bold text-center mb-7">MY SKILLS</h1>
        <p className="text-gray-500 text-sm my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sequi perferendis beatae! Deleniti ducimus quasi fugiat quisquam reprehenderit placeat aliquid delectus quia animi, aliquam eius, corporis temporibus alias debitis est!
        </p>

        {skillsData.map((skill, index) => (
          <div key={index} className="mb-4">
            <span className="block font-medium text-gray-700">{skill.name}</span>
            <div className="w-full bg-gray-200 h-3 rounded-full mt-1">
              <div
                className={`${skill.color} h-full text-xs text-white flex items-center justify-end rounded-full transition-all duration-1000`}
                style={{
                  width: animated ? `${skill.percentage}%` : "0%",
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <span className="pr-2 text-white">{skill.percentage}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Skills;
