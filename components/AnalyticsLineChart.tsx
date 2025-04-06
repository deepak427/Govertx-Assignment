'use client'

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import styles from '@/app/(root)/AnalyticsDashboard.module.css';

interface DataPoint {
  name: string;
  visitors: number;
  connections: number;
  interactions?: number;
  impressions?: number;
}

interface AnalyticsLineChartProps {
  metricType?: string;
  timeRange?: string;
  compareMetric?: string;
}

const AnalyticsLineChart: React.FC<AnalyticsLineChartProps> = ({
  metricType = 'visitors',
  timeRange = 'last_30_days',
  compareMetric = 'connections'
}) => {
  // You would fetch actual data based on metricType and timeRange
  // This is just sample data
  const lineChartData = getChartData(timeRange);

  return (
    <div className={styles.chartContainer}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={lineChartData}
          margin={{ top: 10, right: 30, left: 10, bottom: 5 }}
        >
          <CartesianGrid vertical={false} stroke="#1d1d1d" strokeDasharray="3 3" />
          <XAxis 
            dataKey="name" 
            axisLine={{ stroke: '#333333' }}
            tickLine={false}
            tick={{ fill: '#777777', fontSize: 12 }}
          />
          <YAxis 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#777777', fontSize: 12 }}
            ticks={[0, 200, 500, 1000, 1500, 2000]}
          />
          <Line 
            type="linear" 
            dataKey={metricType} 
            stroke="#6C5DD3" 
            strokeWidth={2} 
            dot={{ r: 0 }} 
            activeDot={{ r: 4 }} 
          />
          <Line 
            type="linear" 
            dataKey={compareMetric} 
            stroke="#4ECB71" 
            strokeWidth={2} 
            dot={{ r: 0 }} 
            activeDot={{ r: 4 }} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// Helper function to get data based on time range
function getChartData(timeRange: string): DataPoint[] {
  // Different data sets based on the time range
  switch (timeRange) {
    case 'today':
      return [
        { name: '8 AM', visitors: 200, connections: 100 },
        { name: '10 AM', visitors: 400, connections: 300 },
        { name: '12 PM', visitors: 800, connections: 500 },
        { name: '2 PM', visitors: 600, connections: 400 },
        { name: '4 PM', visitors: 700, connections: 600 },
        { name: '6 PM', visitors: 500, connections: 300 },
      ];
    case 'last_7_days':
      return [
        { name: 'Mon', visitors: 800, connections: 600 },
        { name: 'Tue', visitors: 900, connections: 700 },
        { name: 'Wed', visitors: 700, connections: 500 },
        { name: 'Thu', visitors: 600, connections: 400 },
        { name: 'Fri', visitors: 1000, connections: 800 },
        { name: 'Sat', visitors: 1200, connections: 900 },
        { name: 'Sun', visitors: 800, connections: 600 },
      ];
    case 'last_30_days':
    default:
      return [
        { name: 'Mar 1', visitors: 0, connections: 300 },
        { name: 'Mar 5', visitors: 1500, connections: 1200 },
        { name: 'Mar 10', visitors: 1200, connections: 800 },
        { name: 'Mar 15', visitors: 400, connections: 700 },
        { name: 'Mar 20', visitors: 1100, connections: 400 },
        { name: 'Mar 25', visitors: 1300, connections: 1200 },
        { name: 'Mar 30', visitors: 800, connections: 1000 },
      ];
  }
}

export default AnalyticsLineChart;