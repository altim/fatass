import Link from "next/link";
import styles from "./(notfound)/NotFound.module.scss";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.notFoundMessage}>
        <Image
          src={"/assets/notfound.jpg"}
          alt={"Doggy didnt find the page"}
          width={1024}
          height={1024}
        />
        <h3>
          Oh no, this page is in the doghouse!
          <br />
          Sorry for the ruff experience! 🐾
        </h3>
        <Link href="/">Click here to return Home</Link>
      </div>
    </div>
  );
}
