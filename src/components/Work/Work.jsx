import styles from "./Work.module.css"; // Import the CSS module
import work1 from "../../assets/11.jpg";
import work2 from "../../assets/55.jpg";
import work3 from "../../assets/33.jpg";
import work4 from "../../assets/44.jpg";
import work5 from "../../assets/55.jpg";
import work6 from "../../assets/66.jpg";

const workData = [
  { id: 1, img: work1 },
  { id: 2, img: work2 },
  { id: 3, img: work3 },
  { id: 4, img: work4 },
  { id: 5, img: work5 },
  { id: 6, img: work6 },
];

const Work = () => {

  return (
    <section className={styles.workSection}>
      <h2 className={`text-4xl font-bold mb-6`}>Recent Work</h2>


      <div className={styles.workCategories}>
        <a className={`text-blue-600`} href="#">Graphic Design</a>
        <a href="#">Apps</a>
        <a href="#">Software</a>
      </div>

      
      <div className={styles.workGrid}>
        {workData.map((work) => (
          <div key={work.id} className={styles.workItem}>
            <img src={work.img} alt={`Work ${work.id}`} className={styles.workImage} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
