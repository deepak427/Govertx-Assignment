import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  activePage?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage }) => {
  // Navigation items
  const navItems = [
    {
      name: "Dashboard",
      path: "/",
      ariaLabel: "Navigate to Dashboard",
      logo: "/icons/dashboard.png"
    },
    {
      name: "Analytics",
      path: "/",
      ariaLabel: "Navigate to Analytics",
      logo: "/icons/analytics.png"
    },
    { name: "Connect", path: "/", ariaLabel: "Navigate to Connect", logo: "/icons/connect.png" },
    { name: "Dealroom", path: "/", ariaLabel: "Navigate to Dealroom", logo: "/icons/dealroom.png" },
    { name: "Profile", path: "/profile", ariaLabel: "Navigate to Profile", logo: "/icons/profile.png" },
    { name: "Settings", path: "/", ariaLabel: "Navigate to Settings", logo: "/icons/settings.png" },
  ];

  return (
    <aside className={styles.sidebar} aria-label="Main Navigation">
      <div className={styles.brandSection}>
        <div className={styles.logoContainer}>
          <Image
            src="/images/logo.png"
            alt="Vertxlabs Logo"
            width={24}
            height={24}
            className={styles.logo}
          />
        </div>
        <span className={styles.companyName}>Vertxlabs, Inc</span>
      </div>

      <div className={styles.sidebarMain}>
        <nav className={styles.sidebarLeft}>
          {/* Profile Avatar */}
          <header className={styles.profileSection}>
            <div className={styles.avatarContainer}>
              <Image
                src="/images/profile.webp" // Replace with your actual avatar image path
                alt="User profile"
                width={40}
                height={40}
                className={styles.avatar}
                priority
              />
            </div>
          </header>

          {/* Add Button at Bottom */}
          <footer className={styles.bottomContent}>
            <Image
              src="/icons/plus.png" // Replace with your actual avatar image path
              alt="Plus icon"
              width={10}
              height={10}
              className={styles.plusIcon}
              priority
            />
          </footer>
        </nav>

        <nav className={styles.sidebarRight}>
          {/* Navigation Links */}
          <nav className={styles.navigation} aria-label="Primary navigation">
            <ul className={styles.navList}>
              {navItems.map((item) => (
                <li key={item.name} className={styles.navListItem}>
                  <Link
                    href={item.path}
                    className={`${styles.navItem} ${
                      activePage === item.name.toLowerCase()
                        ? styles.active
                        : ""
                    }`}
                    aria-current={
                      activePage === item.name.toLowerCase()
                        ? "page"
                        : undefined
                    }
                    aria-label={item.ariaLabel}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </nav>
      </div>

      <nav className={styles.sidebarBottom}>
        {/* Navigation Links */}
        <nav className={styles.navigationBottom} aria-label="Primary navigation">
          <ul className={styles.navListBottom}>
            {navItems.map((item) => (
              <li key={item.name} className={styles.navListItem}>
                <Link
                  href={item.path}
                  className={`${styles.navItemBottom} ${
                    activePage === item.name.toLowerCase() ? styles.active : ""
                  }`}
                  aria-current={
                    activePage === item.name.toLowerCase() ? "page" : undefined
                  }
                  aria-label={item.ariaLabel}
                >
                  <Image
                    src={item.logo}
                    alt={item.name}
                    width={25}
                    height={25}
                    priority
                  />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </nav>
    </aside>
  );
};

export default Sidebar;
