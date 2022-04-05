import React from 'react';
import styles from "./banner.module.css";


interface Props{
  title: string;
  subtitle: string;
  imgUrl: string;
}

const Banner: React.FC<Props> = ({
  title,
  subtitle,
  imgUrl,
}: Props) => {

   const handlePlay = () => {
     console.log("handle On Play")
   }
  return (
    <div className={styles.container}>
      <div className={styles.leftWrapper}>
        <div className={styles.left}>
          {" "}
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.subTitle}>{subtitle}</p>
          <div className={styles.playBtnWrapper}>
            {" "}
            <button onClick={handlePlay} className={styles.btnWithIcon}>
              {" "}
              <p className={styles.playText}>Play</p>{" "}
            </button>{" "}
          </div>
        </div>
      </div>
      <div
      className={styles.bannerImg}
   style={{
          backgroundImage: `url(${imgUrl})`,
          width: "100vw",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
        }} ></div>
    </div>
  );
};

export default Banner;