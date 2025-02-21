'use client'

import { ReactElement, useEffect, useState } from "react";
import styles from "./Header.module.css";
import { navLinks } from "@/app/datasources/navlinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = (): ReactElement => {
  const path = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className={styles.header}>
      <h1 className={styles.header_title}>Contact center</h1>
      <div className={styles.navigation}>
        {navLinks.map((navLink, index) => (
          <Link
            key={index}
            href={navLink.href}
            className={`${mounted && path === navLink.href ? styles.active : ""} ${
              styles.nav_link
            }`}
          >
            {navLink.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};
