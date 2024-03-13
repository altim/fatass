import Link from "next/link";
import styles from "./(notfound)/NotFound.module.scss";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.notFoundMessage}>
        <Image
          src={"/assets/notfound.jpg"}
          alt={"Flat ass"}
          width={1024}
          height={1024}
        />
        <h3>
          Looks like you've strayed into the wrong paddock!
          <br />
          Don't worry, we'll help you find your way back to the herd in no time!
        </h3>
        <Link href="/">Click here to return Home</Link>
      </div>
    </div>
  );
}
