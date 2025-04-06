import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

interface NavbarProps {
  activePage?: string;
}

const Navbar: React.FC<NavbarProps> = ({ activePage }) => {
  return (
    <div className={styles.navbarOuter}>
      {" "}
      <header className={`${styles.navbar} ${styles.navbarFirst}`}>
        {/* Middle - Analytics Section with Tabs */}
        <div className={styles.analyticsSection}>
          <h1 className={styles.sectionTitle}>Analytics</h1>
        </div>

        {/* Right side - User Actions */}
        <div className={styles.actionsSection}>
          <Link href="/activity" className={styles.actionLink}>
            Activity
          </Link>
          <Link href="/logout" className={styles.actionLink}>
            Log out
          </Link>
        </div>
      </header>
      <header className={`${styles.navbar} ${styles.navbarSecond}`}>
        {/* Middle - Analytics Section with Tabs */}

        {activePage === "profile" ? (
          <>
            {" "}
            <div className={styles.Status}>
              <h1 className={styles.sectionTitle}>Overview</h1>
            </div>
            <div className={styles.Status}>
              <h1 className={styles.sectionTitle}>Porfolio</h1>
            </div>
            <div className={styles.Status}>
              <h1 className={styles.sectionTitle}>Experience</h1>
            </div>
            <div className={styles.Status}>
              <h1 className={styles.sectionTitle}>Media</h1>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className={styles.Status}>
              <h1 className={styles.sectionTitle}>Overview</h1>
            </div>
            <div className={styles.Status}>
              <h1 className={styles.sectionTitle}>Demographics</h1>
            </div>
          </>
        )}

        {/* Right side - User Actions */}
        <div className={styles.moreSection}>
          <Link href="/activity" className={styles.actionLink}>
            More
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
