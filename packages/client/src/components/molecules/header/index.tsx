import ProductLogo from "~/components/atoms/productLogo";

import styles from "./index.module.scss";

const links = [
  { path: "/", name: "ほーむ" },
  { path: "/about/", name: "あばうと" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <ProductLogo />
      <ul className={styles.ul}>
        {links.map((link) => (
          <li className={styles.li}>
            <a href={link.path}>{link.name}</a>
          </li>
        ))}
      </ul>
    </header>
  );
}
