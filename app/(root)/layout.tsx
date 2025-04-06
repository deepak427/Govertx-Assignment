"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import styles from "./layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();

  // Extract the first segment after `/` from the path
  const activePage = pathname?.split("/")[1] || "dashboard";

  return (
    <div className={styles.layoutContainer}>
      <Navbar activePage={activePage} />
      <div className={styles.contentWrapper}>
        <Sidebar activePage={activePage} />
        <main className={styles.mainContent}>{children}</main>
      </div>
    </div>
  );
};

export default RootLayout;
