import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import styles from "./layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
  activePage?: string;
  activeTab?: string;
}

const RootLayout: React.FC<LayoutProps> = ({
  children,
  activePage = "dashboard",
}) => {
  return (
    <>
      <div className={styles.layoutContainer}>
        <Navbar />
        <div className={styles.contentWrapper}>
          <Sidebar activePage={activePage} />
          <main className={styles.mainContent}>{children}</main>
        </div>
      </div>
    </>
  );
};

export default RootLayout;
