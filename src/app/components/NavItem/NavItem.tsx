import { FC } from "react";
import styles from "./NavItem.module.css";

export interface NavitemProps {
  name: string;
  url: string;
}

const Navitem: FC<NavitemProps> = ({ name, url }) => {
  return (
    <li>
      <a href={url} className={styles.item}>
        {name}
      </a>
    </li>
  );
};

export default Navitem;
