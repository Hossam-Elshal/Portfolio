import { Link } from "react-router-dom";
import profileImg from "../../assets/55555.jpg"; 

import styles from "./SideBar.module.css";

const SideBar = () => {
return (
    <>
    <div className={`flex flex-col items-center ${styles.sidebar}`}>
        <img src={profileImg} alt="" className={styles.circleImg} />
        <p className={`text-3xl font-bold`}>Jackson Ford</p>
        <p className={`styles.title text-blue-500 mb-7`}>Frontend Developer</p>


        <Link to="/" className="relative block text-lg font-medium py-2 px-4 transition-all duration-300 hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">Home </Link>
        <Link to="/about" className="relative block text-lg font-medium py-2 px-4 transition-all duration-300 hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">About</Link>
        <Link to="/skills" className="relative block text-lg font-medium py-2 px-4 transition-all duration-300  hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">Skills</Link>
        <Link to="/experience" className="relative block text-lg font-medium py-2 px-4 transition-all duration-300 hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">Experience</Link>
        <Link to="/work" className="relative block text-lg font-medium py-2 px-4 transition-all duration-300 hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">Work</Link>

    </div>     
</>
);
};

export default SideBar;
