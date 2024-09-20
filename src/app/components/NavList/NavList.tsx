import NavItem, { NavitemProps } from "../NavItem/NavItem";
import styles from "./NavList.module.css";

const itemsArr: NavitemProps[] = [
  { name: "projects", url: "#" },
  { name: "skills", url: "#" },
  { name: "contacts", url: "#" },
];

const NavList = () => {
  return (
    <ul className={styles.list}>
      {itemsArr.map((item) => {
        return <NavItem name={item.name} url={item.url} />;
      })}
    </ul>
  );
};
export default NavList;
