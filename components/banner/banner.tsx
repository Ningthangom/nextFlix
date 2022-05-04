import React from 'react';
import styles from "./banner.module.css";
import Image from 'next/image'
import { useRouter } from "next/router";

interface Props{
  title: string;
  subtitle: string;
  imgUrl: string;
  videoId: string;
}

const Banner: React.FC<Props> = ({
  title,
  subtitle,
  imgUrl,
  videoId
}: Props) => {

  const router = useRouter();
   const handlePlay = () => {
     console.log("handle On Play")
     router.push(`/video/${videoId}`);
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
              <Image
                src="/static/playarrow.svg"
                alt=""
                width="32px"
                height="32px"
              />
              <p className={styles.playText}>Play</p>{" "}
            </button>{" "}
          </div>
        </div>
      </div>
      <div
        className={styles.bannerImg}
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      ></div>
    </div>
  );
};

export default Banner;