"use client";
import styles from "./Navigation.module.scss";
import Link from "next/link";
import { useState } from "react";
import classNames from "classnames";
import Marquee from "react-fast-marquee";
import { FaXTwitter, FaTelegram, FaToolbox, FaGlobe } from "react-icons/fa6";
import {config} from "@/data/config";

export default function Navigation() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMobileMenu = () => {
    setShowMobileMenu((p) => !p);
  };
  return (
    <>
      <div className={styles.navigationWrapper}>
        <div className={styles.navigationInner}>
          <Link href={"/"}>{config.name}</Link>
          <div className={styles.desktopNavigationLinks}>
            <Link href={"/biy"}>Buy {config.name}</Link>
            <div className={styles.socialLinks}>
              <div>
                <p>Vibe with us:</p>
              </div>
              <Link href={"https://twitter.com/home"} target={"_blank"}>
                <FaXTwitter size={24} />
              </Link>
              <Link href={"/https://web.telegram.org/a/"} target={"_blank"}>
                <FaTelegram size={24} />
              </Link>
            </div>
          </div>

          <button
            onClick={toggleMobileMenu}
            id={"mobile-menu-toggle"}
            aria-label={"mobile-menu-toggle"}
            className={classNames(
              styles.mobileMenuToggle,
              styles.mobileMenuHamburger,
            )}
          >
            <svg
              className="feather feather-menu"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={classNames(styles.mobileMenu, {
          [styles.mobileMenuOpen]: showMobileMenu,
        })}
      >
        <div className={styles.mobileMenuInner}>
          <div className={styles.mobileMenuControls}>
            <div>
              <button
                onClick={toggleMobileMenu}
                id={"close-mobile-menu"}
                aria-label="close mobile menu"
                className={styles.mobileMenuToggle}
              >
                <svg
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className={styles.menuList}>
            <Link href={"/biy"}>Buy DogInTheRain</Link>
            <div className={styles.mobileSocialLinks}>
              <p>Vibe with us:</p>
              <Link href={"https://twitter.com/home"} target={"_blank"}>
                <FaXTwitter size={24} /> X/Twitter
              </Link>
              <Link href={"/https://web.telegram.org/a/"} target={"_blank"}>
                <FaTelegram size={24} /> Telegram
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.marquee}>
        <Marquee>
          <p>
            🚀 🚀 🚀 Welcome to the World of FatAss Crypto! 💰 💰 💰 Embrace the Beauty of Generous Curves in Every Transaction! 🤑 🤑 🤑 Invest in Ample Assets for Bigger Gains! 🏆 🏆 🏆 Join Our Community and Ride the Wave of Financial Freedom Today! 📈 📈 📈 Don't Miss Out on the Opportunity of a Lifetime!
          </p>
        </Marquee>
      </div>
    </>
  );
}
