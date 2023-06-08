import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="#intro" title="intro" className={styles.link}>
              Intro
            </Link>
          </li>
          <li>
            <Link href="#about" title="about" className={styles.link}>
              About
            </Link>
          </li>
          <li>
            <Link href="#services" title="services" className={styles.link}>
              Services
            </Link>
          </li>
          <li>
            <Link href="#works" title="works" className={styles.link}>
              Works
            </Link>
          </li>
          <li>
            <Link href="#contact" title="contact us" className={styles.link}>
              Say Hello
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}