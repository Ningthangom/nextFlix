
import styles from './sectionCard.module.css'
import Link from "next/link";
import Card from "./card";
import clsx from "classnames";

interface Props {
  title: string;
  videos: { id: string, imgUrl: string }[],
  size: string;
  shouldWrap?: boolean;
  shouldScale?: boolean;
  id?: string | number;
}

const SectionCards = ({
  title,
  videos,
  size= "medium",
  shouldWrap = false,
  shouldScale,
}: Props) => {
    console.log(videos);
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={clsx(styles.cardWrapper, shouldWrap && styles.wrap)}>
    {videos.map((video, idx) => {
          return (
            <Link href={`/video/${video.id}`} key={idx}>
              <a>
                <Card
                  key="what"
                  id="whatever"
                  imgUrl={video.imgUrl}
                  shouldScale={true}
                  size={size}
                />
              </a>
            </Link>
          );
        })} 
      </div>
    </section>
  );
};

export default SectionCards