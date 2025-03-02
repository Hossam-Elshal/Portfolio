import styles from "/src/components/Home/Home.module.css"
import Button from "../Button/Button.jsx";

const Home = () => {
return (
    <>
    <div className={`h-full relative ${styles.container}`}>

        <div className={`text-white text-4xl font-bold absolute top-1/2 transform -translate-y-1/2 left-20 `}>
            <h1 className="">Hi! Im Jackson Ford</h1>
            <p className={`text-2xl pb-4 border-b-5 w-fit inline-block mb-7`}>Frontend Developer</p>

            <br />
            <Button className={``} text="View Profile" variant="primary" shape="rounded" />
        </div >





    </div>    
    </>
)
}

export default Home