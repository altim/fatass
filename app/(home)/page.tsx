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
          <div className={styles.boxCentered}>
            <h1>{config.name}</h1>
            <Image
              className={classNames("rounded", styles.responsiveImage)}
              src={"/assets/dog.jpg"}
              width={764}
              height={461}
              alt={"DogInTheRain"}
            />
            <Button
              id={"buy"}
              name={`🐾 Buy ${config.name} 🐾`}
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
                Let the $RAIN of riches begin!
              </h2>
            </div>
            <div className={styles.doubleColumn}>
              <div className={styles.infoBox}>
                <Image
                  src={"/assets/dogintheraincash.jpg"}
                  alt={"Dog In The Rain Cash"}
                  width={1024}
                  height={1024}
                />
                <p>
                  🌧 Invest in DogInTheRain and watch your portfolio showered
                  with success, just like our fearless canine friend embracing
                  the raindrops!
                </p>
              </div>
              <div className={styles.infoBox}>
                <Image
                  src={"/assets/dogintherain.jpg"}
                  alt={"Dog In The Rain Cash"}
                  width={1024}
                  height={1024}
                />
                <p>
                  🐾 Our meme coin makes a splash in the crypto world just like
                  our doggy in the rain – no umbrellas needed, just profits
                  pouring in!
                </p>
              </div>
              <div className={styles.infoBox}>
                <Image
                  src={"/assets/dogintherain2.jpg"}
                  alt={"Dog In The Rain Cash"}
                  width={1024}
                  height={1024}
                />
                <p>
                  💰 Don&apos;t chase the bull, don&apos;t fear the bear – ride
                  the rain with DogInTheRain! Our doggy mascot knows how to
                  weather the crypto storms and still wag its tail.
                </p>
              </div>

              <div className={styles.infoBox}>
                <Image
                  src={"/assets/dogcoin.jpg"}
                  alt={"Dog In The Rain Cash"}
                  width={1024}
                  height={1024}
                />
                <p>
                  🚀 The only coin where ruff market conditions turn into a
                  downpour of profits. Let&apos;s splash into the future
                  together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
