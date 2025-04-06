'use client'

import React, { useState } from "react";
import Image from "next/image";
import styles from "./AnalyticsDashboard.module.css";
import AnalyticsLineChart from "@/components/AnalyticsLineChart";
import FilterDropdown from "@/components/FilterDropdown";

const demographicsData = [
  { country: "India", percentage: 40, flag: "/icons/flag_india.png" },
  { country: "USA", percentage: 25, flag: "/icons/flag_usa.png" },
  { country: "CANADA", percentage: 10, flag: "/icons/flag_canada.png" },
  { country: "UAE", percentage: 7, flag: "/icons/uae_flag.png" },
];

// Filter options
const metricOptions = [
  { label: "Visitors", value: "visitors" },
  { label: "Connections", value: "connections" },
  { label: "Interactions", value: "interactions" },
  { label: "Impressions", value: "impressions" },
];

const timeOptions = [
  { label: "Today", value: "today" },
  { label: "Yesterday", value: "yesterday" },
  { label: "This week", value: "this_week" },
  { label: "Last week", value: "last_week" },
  { label: "Last 7 days", value: "last_7_days" },
  { label: "Last 30 days", value: "last_30_days" },
];

const AnalyticsDashboard: React.FC = () => {
  // State for selected filters
  const [selectedMetric, setSelectedMetric] = useState("visitors");
  const [selectedTime, setSelectedTime] = useState("last_30_days");
  const [selectedCompare, setSelectedCompare] = useState("connections");
  const [selectedInsightMetric, setSelectedInsightMetric] =
    useState("visitors");
  const [selectedDemographicMetric, setSelectedDemographicMetric] =
    useState("visitors");

  return (
    <div className={styles.dashboard}>
      {/* Overview Section */}
      <h2 className={styles.sectionTitle}>Overview</h2>

      <div className={styles.statsContainer}>
        {/* Main Stats Card */}
        <div className={styles.statsCard}>
          <div className={styles.filterBar}>
            <div className={styles.filterGroup}>
              <FilterDropdown
                label="Metric"
                options={metricOptions}
                selectedValue={selectedMetric}
                onSelect={setSelectedMetric}
              />
              <FilterDropdown
                label="Time Period"
                options={timeOptions}
                selectedValue={selectedTime}
                onSelect={setSelectedTime}
              />
              <FilterDropdown
                label="Compare"
                options={metricOptions}
                selectedValue={selectedCompare}
                onSelect={setSelectedCompare}
              />
            </div>
          </div>

          <div className={styles.metricsContainer}>
            <div className={styles.metric}>
              <h3 className={styles.metricValue}>13.49K</h3>
              <div className={styles.metricInfo}>
                <span className={styles.metricGrowthPositive}>+68%</span>
                <span className={styles.metricPrevious}>(897)</span>
              </div>
            </div>

            <div className={styles.metric}>
              <h3 className={styles.metricValue}>3.49K</h3>
              <div className={styles.metricInfo}>
                <span className={styles.metricGrowthPositive}>+80%</span>
                <span className={styles.metricPrevious}>(497)</span>
              </div>
            </div>
          </div>

          <AnalyticsLineChart
            metricType={selectedMetric}
            timeRange={selectedTime}
            compareMetric={selectedCompare}
          />
        </div>

        {/* Insights Card */}
        <div className={styles.insightsCard}>
          <div className={styles.insightsHeader}>
            <h3 className={styles.insightsTitle}>Insights</h3>
            <FilterDropdown
              label="Metric"
              options={metricOptions}
              selectedValue={selectedInsightMetric}
              onSelect={setSelectedInsightMetric}
            />
          </div>

          <div className={styles.insightGroup}>
            <h4 className={styles.insightType}>Founders</h4>
            <div className={styles.insightMetric}>
              <h3 className={styles.InsightsMetricValue}>7.4K</h3>
              <div className={styles.metricInfo}>
                <span className={styles.metricGrowthPositive}>+900%</span>
                <span className={styles.metricPrevious}>(000)</span>
              </div>
            </div>
          </div>

          <div className={styles.insightGroup}>
            <h4 className={styles.insightType}>Investors</h4>
            <div className={styles.insightMetric}>
              <h3 className={styles.InsightsMetricValue}>6.09K</h3>
              <div className={styles.metricInfo}>
                <span className={styles.metricGrowthPositive}>+600%</span>
                <span className={styles.metricPrevious}>(000)</span>
              </div>
            </div>
          </div>

          <div className={styles.viewMore}>
            <a href="#" className={styles.viewMoreLink}>
              View detailed insights
              <span className={styles.arrowIcon}>→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Demographics Section */}
      <h2 className={styles.sectionTitle}>Demographics</h2>

      <div className={styles.demographicsContainer}>
        <div className={styles.mapCard}>
          <div className={styles.filterBar}>
            <div className={styles.filterGroup}>
              <FilterDropdown
                label="Metric"
                options={metricOptions}
                selectedValue={selectedDemographicMetric}
                onSelect={setSelectedDemographicMetric}
              />
            </div>
          </div>

          <div className={styles.worldMapContainer}>
            {/* Placeholder for world map - you'll need an actual map component */}
            <div className={styles.worldMap}>
              <Image
                src="/images/world.png"
                alt="World map with visitor locations"
                width={700}
                height={350}
                className={styles.mapImage}
              />

              {/* Map Legend */}
              <div className={styles.mapLegend}>
                {demographicsData.map((country, index) => (
                  <div key={index} className={styles.legendItem}>
                    <span
                      className={styles.legendDot}
                      style={{
                        backgroundColor: getCountryColor(country.country),
                      }}
                    ></span>
                    <span className={styles.legendText}>{country.country}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.viewMore}>
            <a href="#" className={styles.viewMoreLink}>
              View all countries
              <span className={styles.arrowIcon}>→</span>
            </a>
          </div>
        </div>

        <div className={styles.countryStatsCard}>
          {demographicsData.map((country, index) => (
            <div key={index} className={styles.countryStatRow}>
              <div className={styles.countryInfo}>
                <Image
                  src={country.flag}
                  alt={`${country.country} flag`}
                  width={40}
                  height={30}
                  className={styles.mapImage}
                />
                <span className={styles.countryName}>{country.country}</span>
              </div>
              <div className={styles.countryPercentageContainer}>
                <div
                  className={styles.countryPercentageBar}
                  style={{
                    width: `${country.percentage}%`,
                    backgroundColor: getCountryColor(country.country),
                  }}
                ></div>
                <span className={styles.countryPercentage}>
                  {country.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Helper function to assign colors to countries
function getCountryColor(country: string): string {
  switch (country) {
    case "India":
      return "#6C5DD3";
    case "USA":
      return "#FFA600";
    case "CANADA":
      return "#F7B500";
    case "UAE":
      return "#4ECB71";
    default:
      return "#6C5DD3";
  }
}

export default AnalyticsDashboard;
