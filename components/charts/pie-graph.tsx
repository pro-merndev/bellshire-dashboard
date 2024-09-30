'use client';

import * as React from 'react';
import { Label, LabelList, Pie, PieChart, Sector } from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
import { PieSectorDataItem } from 'recharts/types/polar/Pie';
const chartData = [
  { visitors: 50, fill: '#8DD1FF' },
  { visitors: 11, fill: '#F3C222' },
  { visitors: 39, fill: '#4563F9' }
];

export const chartConfig = {
  visitors: {
    label: 'Visitors'
  }
} satisfies ChartConfig;

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({
//   cx,
//   cy,
//   midAngle,
//   innerRadius,
//   outerRadius,
//   fill,
//   value
// }: {
//   [key: string]: any;
// }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);
//   const textColor = fill === '#4563F9' ? 'white' : 'black';

//   return (
//     <text
//       x={x}
//       y={y}
//       fill={textColor}
//       textAnchor={x > cx ? 'start' : 'end'}
//       // dominantBaseline="central"
//     >
//       {value}%
//     </text>
//   );
// };

export function PieGraph() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square max-h-[250px]"
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          // label={renderCustomizedLabel}
          cx="50%"
          cy="50%"
          paddingAngle={10}
          data={chartData}
          dataKey="visitors"
          nameKey="visitors"
          innerRadius={60}
          strokeWidth={5}
          activeIndex={1}
          cornerRadius={10}
          outerRadius={100}
          stroke="#fff"
          activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
            <Sector {...props} outerRadius={outerRadius + 10} />
          )}
        >
          <LabelList
            dataKey="visitors"
            className="relative z-10 fill-background font-inter font-bold"
            stroke="none"
            fontSize={12}
            formatter={(value: keyof typeof chartConfig) => {
              return `${value}%`;
            }}
            // content={(props) => {
            //   const { value, cx, cy, fill } = props; // Destructure needed properties
            //   const textColor = fill === '#4563F9' ? 'white' : 'black'; // Check the fill color

            //   return (
            //     <text
            //       x={cx} // Use cx for horizontal centering
            //       y={cy} // Use cy for vertical centering
            //       textAnchor="middle"
            //       dominantBaseline="middle"
            //       fill={textColor} // Apply dynamic color based on fill
            //       style={{ fontSize: '12px', fontWeight: 'bold' }}
            //     >
            //       {value}%
            //     </text>
            //   );
            // }}
          />
          <Label
            content={({ viewBox }) => {
              if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle" // This helps in centering the text vertically
                  >
                    <tspan
                      x={viewBox.cx}
                      dy={-10} // Adjust the vertical offset if needed
                      className="dark:fill-white fill-foreground text-2xl font-bold"
                    >
                      {totalVisitors.toLocaleString()}%
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      dy={20} // This positions the second line below the first line
                      className="dark:fill-white fill-muted-foreground"
                    >
                      Portefeuille
                    </tspan>
                  </text>
                );
              }
              return null;
            }}
          />
        </Pie>
      </PieChart>
    </ChartContainer>
  );
}
