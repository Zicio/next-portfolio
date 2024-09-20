"use client";

import { useEffect, useRef } from "react";
import Social, { ISocial } from "../Social/Social";
import styles from "./Footer.module.css";

const SocialIcons: ISocial[] = [
  { image: "/public/images/icons/vk.svg", name: "VK" },
  { image: "/public/images/icons/instagram.svg", name: "Instagram" },
  { image: "/public/images/icons/twitter.svg", name: "Twitter" },
  { image: "/public/images/icons/github.svg", name: "GitHub" },
  { image: "/public/images/icons/linkedin.svg", name: "LinkedIn" },
];

const Footer = () => {
  const year = useRef("2023");
  useEffect(() => {
    const date = new Date();
    year.current = String(date.getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <ul className={styles.social}>
            {SocialIcons.map((icon) => {
              return (
                <Social key={icon.image} image={icon.image} name={icon.name} />
              );
            })}
          </ul>
          <div className={styles.copyright}>
            <p>{`© ${year.current} frontend-dev.com`}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
