import styles from "./page.module.scss";
import Image from "next/image";
import Button from "@/app/components/button/Button";
import classNames from "classnames";
import { FaXTwitter, FaTelegram, FaToolbox, FaGlobe } from "react-icons/fa6";
import { config } from "../../data/config";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.singleColumn}>
          <div className={styles.hero}>
            <h1>{config.name}</h1>
            <Image
              className={styles.heroImage}
              src={"/assets/fatass.jpg"}
              width={1024}
              height={1024}
              alt={config.name}
            />
            <Button
              id={"buy"}
              name={`🤗 GRAB THAT ${config.name} 🤗`}
              className={styles.heroBtn}
            />
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.singleColumn}>
          <div className={styles.boxCentered}>
            <h3 className={styles.contractAddress}>
              Contract: {config.contractAddress}
            </h3>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.socialIcons}>
          <Link
            href={config.website}
            target={"_blank"}
            className={styles.iconLink}
          >
            <FaGlobe size={40} />
            Website
          </Link>

          <Link
            href={config.twitter}
            target={"_blank"}
            className={styles.iconLink}
          >
            <FaXTwitter size={40} />
            X/Twitter
          </Link>

          <Link
            href={config.telegram}
            target={"_blank"}
            className={styles.iconLink}
          >
            <FaTelegram size={40} />
            Telegram
          </Link>

          <Link
            href={config.dexscreener}
            target={"_blank"}
            className={styles.iconLink}
          >
            <FaToolbox size={40} />
            DexScreener
          </Link>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.tripleColumn}>
          <div className={styles.fullWidth}>
            <div className={styles.boxCentered}>
              <h2 className={styles.sectionTitle}>
                Grabbing $ASSets by the Cheeks!
              </h2>
            </div>
            <div className={styles.doubleColumn}>
              <div className={styles.infoBox}>
                <Image
                  src={"/assets/fatass2.jpg"}
                  alt={"Fat Ass Cash"}
                  width={1024}
                  height={1024}
                />
                <p>
                  Unlock the untapped potential of FatAss – a cryptocurrency where our curves aren't just celebrated, but embraced as pathways to prosperous ventures and financial freedom. Join us in a journey where every rise and fall of our values is a testament to the beauty of ample assets and the bountiful opportunities they bring. 🚀💰
                </p>
              </div>
              <div className={styles.infoBox}>
                <Image
                  src={"/assets/fatass3.jpg"}
                  alt={"Fat Ass Crypto"}
                  width={1024}
                  height={1024}
                />
                <p>
                  With FatAss, we're not just embracing a currency; we're celebrating a lifestyle. Our cryptocurrency isn't just about numbers on a screen; it's a reflection of the beauty and abundance found in generous curves. Welcome to a world where every curve leads to opportunity. 🎉📈
                </p>
              </div>
              <div className={styles.infoBox}>
                <Image
                  src={"/assets/fatass6.jpg"}
                  alt={"Fat Ass to the moon!"}
                  width={1024}
                  height={1024}
                />
                <p>
                  Thick is in, and so is FatAss – the cryptocurrency that acknowledges the allure of curves and capitalizes on it. Our platform is a celebration of abundance, where every transaction is a testament to the inherent value found in generous proportions. Join our community and embark on a journey where every rise and fall of our values reflects the beauty and potential of ample assets. 💪📊
                </p>
              </div>

              <div className={styles.infoBox}>
                <Image
                  src={"/assets/fatass5.jpg"}
                  alt={"Fat Ass Coin"}
                  width={1024}
                  height={1024}
                />
                <p>
                  Invest in FatAss and experience firsthand the transformative power of ample assets in the digital realm. Our cryptocurrency doesn't just symbolize wealth; it embodies a celebration of curves, where every rise and dip in value reflects the inherent allure and potential of generous proportions. Join our community and discover the riches that await within the embrace of FatAss. 💸💼"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
