"use client";

import Link from "next/link";
import { useState } from "react";
import Search from "./Search";

// Lucide — topics without an official brand logo
import { ChevronDown, Binary, Building2, Puzzle } from "lucide-react";

// Official brand logos
import { DiJava } from "react-icons/di";
import {
  SiSpringboot,
  SiDocker,
  SiKubernetes,
  SiPython,
  SiGo,
  SiOpenai,
} from "react-icons/si";

import styles from "./Navbar.module.css";

const topics = [
  { name: "Java",        href: "/java",       icon: DiJava,        color: "#f89820" }, // Java orange
  { name: "DSA",         href: "/dsa",        icon: Binary,        color: "#ec4899" }, // pink (no official logo)
  { name: "Spring Boot", href: "/springBoot", icon: SiSpringboot,  color: "#6db33f" }, // Spring green
  { name: "Docker",      href: "/docker",     icon: SiDocker,      color: "#2496ed" }, // Docker blue
  { name: "Kubernetes",  href: "/kubernetes", icon: SiKubernetes,  color: "#326ce5" }, // K8s blue
  { name: "LLD",         href: "/lld",        icon: Puzzle,        color: "#a855f7" }, // purple (no official logo)
  { name: "HLD",         href: "/hld",        icon: Building2,     color: "#8b5cf6" }, // violet (no official logo)
  { name: "Python",      href: "/python",     icon: SiPython,      color: "#3776ab" }, // Python official blue
  { name: "AI",          href: "/ai",         icon: SiOpenai,      color: "#10a37f" }, // OpenAI green
  { name: "Go",          href: "/go",         icon: SiGo,          color: "#00acd7" }, // Go official cyan
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.wrapper}`}>
        <Link href="/" className={styles.logo}>
          Dev<span>Orbit</span>
        </Link>

        <div className={styles.rightSection}>
          <Search />

          <div
            className={styles.dropdown}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button className={styles.dropdownButton}>
              Topics
              <ChevronDown size={18} />
            </button>

            {open && (
              <div className={styles.dropdownMenu}>
                {topics.map((topic) => {
                  const Icon = topic.icon;

                  return (
                    <Link
                      key={topic.name}
                      href={topic.href}
                      className={styles.dropdownItem}
                    >
                      <Icon size={18} style={{ color: topic.color, flexShrink: 0 }} />
                      <span>{topic.name}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link href="/notes" className={styles.navLink}>
            Notes
          </Link>

          <Link href="/about" className={styles.navLink}>
            About
          </Link>
        </div>
      </div>
    </header>
  );
}