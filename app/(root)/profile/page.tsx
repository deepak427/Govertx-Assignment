'use client'

import React, { useState } from "react";
import Image from "next/image";
import styles from "./ProfilePage.module.css";

interface Company {
  id: number;
  name: string;
  logo: string;
  role?: string;
  foundedYear?: number;
  category?: string;
  description?: string;
}

interface ExperienceItem {
  id: number;
  company: string;
  logo: string;
}

const ProfilePage: React.FC = () => {
  // Sample data for founded companies
  const [foundedCompanies] = useState<Company[]>([
    {
      id: 1,
      name: "Verbtabs",
      logo: "/icons/v_icon.webp",
      foundedYear: 2020,
      category: "Fintech",
      description: "Decentralized finance platform for business transactions"
    },
    {
      id: 2,
      name: "Lucid Yatra",
      logo: "/images/logo.png",
      role: "Co-Founder",
      description: "Tour and travel platform for adventure enthusiasts"
    }
  ]);

  // Sample data for experience
  const [experienceItems] = useState<ExperienceItem[]>([
    { id: 1, company: "Give and go prepared food", logo: "/images/company_1.png" },
    { id: 2, company: "InboxAI", logo: "/images/company_2.webp" },
  ]);

  return (
    <div className={styles.profilePage}>
      {/* Overview Section */}
      <div className={styles.sectionContainer}>
        <h2 className={styles.sectionTitle}>Overview</h2>
        
        <div className={styles.profileCard}>
          <div className={styles.profileInfo}>
            <div className={styles.profileImageContainer}>
              <div className={styles.profileImage}>
                {/* Placeholder for profile image */}
                <Image 
                  src="/images/profile.webp"
                  alt="Profile"
                  width={100}
                  height={100}
                  className={styles.avatarImage}
                />
              </div>
            </div>
            
            <div className={styles.profileDetails}>
              <div className={styles.nameContainer}>
                <h1 className={styles.profileName}>Mr. Deepak Singh</h1>
                <div className={styles.verifiedBadge}>
                  <span className={styles.verifiedIcon}>✓</span>
                </div>
              </div>
              <p className={styles.profileTitle}>Co-founder & CEO @Lucid Yatra</p>
              <div className={styles.profileBadge}>
                <span>Entrepreneur</span>
              </div>
              
              <div className={styles.socialLinks}>
                <a href="#" className={styles.socialLink}>
                  <div className={styles.socialIcon}>
                    <Image 
                      src="/icons/gmail.png" 
                      alt="LinkedIn" 
                      width={24} 
                      height={24} 
                    />
                  </div>
                </a>
                <a href="#" className={styles.socialLink}>
                  <div className={styles.socialIcon}>
                    <Image 
                      src="/icons/x.png" 
                      alt="Twitter" 
                      width={24} 
                      height={24} 
                    />
                  </div>
                </a>
                <a href="#" className={styles.socialLink}>
                  <div className={styles.socialIcon}>
                    <Image 
                      src="/icons/linkedin.png"
                      alt="Email" 
                      width={24} 
                      height={24} 
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founded Companies Section */}
      <div className={styles.gridContainer}>
        <div className={styles.gridItem}>
          <div className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionHeading}>Founded Companies</h2>
              <div className={styles.sectionCount}>02</div>
            </div>
            
            <div className={styles.companyList}>
              {foundedCompanies.map((company) => (
                <div key={company.id} className={styles.companyItem}>
                  <div className={styles.companyLogo}>
                    <Image
                      src={company.logo || "/api/placeholder/40/40"}
                      alt={company.name}
                      width={40}
                      height={40}
                    />
                  </div>
                  
                  <div className={styles.companyInfo}>
                    <div className={styles.companyHeader}>
                      <h3 className={styles.companyName}>{company.name}</h3>
                      {company.role && (
                        <span className={styles.roleTag}>{company.role}</span>
                      )}
                    </div>
                    
                    {company.foundedYear && (
                      <div className={styles.companyMeta}>
                        Founded in {company.foundedYear} • {company.category}
                      </div>
                    )}
                    
                    <p className={styles.companyDescription}>
                      {company.description}
                    </p>
                  </div>
                  
                  <div className={styles.viewProfileButton}>
                    <a href="#" className={styles.viewLink}>View Profile</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Experience Section */}
        <div className={styles.gridItem}>
          <div className={styles.sectionCard}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionHeading}>Experience</h2>
              <div className={styles.sectionCount}>03</div>
            </div>
            
            <div className={styles.experienceList}>
              {experienceItems.map((item) => (
                <div key={item.id} className={styles.experienceItem}>
                  <div className={styles.experienceLogo}>
                    <Image
                      src={item.logo || "/api/placeholder/30/30"}
                      alt={item.company}
                      width={30}
                      height={30}
                    />
                  </div>
                  
                  <div className={styles.experienceInfo}>
                    <h3 className={styles.experienceCompany}>{item.company}</h3>
                  </div>
                  
                  <div className={styles.viewProfileButton}>
                    <a href="#" className={styles.viewLink}>View Profile</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;