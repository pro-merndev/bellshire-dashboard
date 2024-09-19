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
  { browser: 'firefox', visitors: 50, fill: '#8DD1FF' },
  { browser: 'chrome', visitors: 11, fill: '#F3C222' },
  { browser: 'safari', visitors: 39, fill: '#4563F9' }
];

const chartConfig = {
  visitors: {
    label: 'Visitors'
  },
  chrome: {
    label: 'Chrome',
    color: 'hsl(var(--chart-1))'
  },
  safari: {
    label: 'Safari',
    color: 'hsl(var(--chart-2))'
  },
  firefox: {
    label: 'Firefox',
    color: 'hsl(var(--chart-3))'
  }
} satisfies ChartConfig;

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
          paddingAngle={10}
          data={chartData}
          dataKey="visitors"
          nameKey="browser"
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
            className="z-10 fill-background font-inter font-bold"
            stroke="none"
            fontSize={12}
            formatter={(value: keyof typeof chartConfig) => {
              return `${value}%`;
            }}
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
                      className="fill-foreground text-2xl font-bold"
                    >
                      {totalVisitors.toLocaleString()}%
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      dy={20} // This positions the second line below the first line
                      className="fill-muted-foreground"
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
