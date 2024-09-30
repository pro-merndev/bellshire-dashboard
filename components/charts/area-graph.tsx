'use client';

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip
} from '@/components/ui/chart';

const chartData = [
  { month: '01/01', amount: 3800 },
  { month: '02/01', amount: 900 },
  { month: '03/01', amount: 1000 },
  { month: '04/01', amount: 2000 },
  { month: '05/01', amount: 950 },
  { month: '06/01', amount: 1900 }
];

const chartConfig = {
  amount: {
    label: 'Amount',
    color: 'var(--chart-1)'
  },
  month: {
    label: 'Month',
    color: 'var(--chart-1)'
  }
} satisfies ChartConfig;

export function AreaGraph() {
  return (
    <ChartContainer
      config={chartConfig}
      className="aspect-square max-h-[250px] w-full"
    >
      <AreaChart data={chartData}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="0%"
              stopColor="rgba(255, 255, 255, 0.3)" // More transparent starting point
              stopOpacity={0.3}
            />
            <stop
              offset="50%"
              stopColor="rgba(255, 255, 255, 0.2)" // Softer gradient at midpoint
              stopOpacity={0.2}
            />
            <stop
              offset="100%"
              stopColor="rgba(255, 255, 255, 0.05)" // Very faint at the bottom
              stopOpacity={0.05}
            />
          </linearGradient>
        </defs>

        {/* CartesianGrid with custom line styles */}
        <CartesianGrid
          strokeWidth={2}
          stroke="#fff"
          strokeDasharray="0"
          vertical={true}
          horizontal={true}
        />

        {/* Y-axis for dollar amounts */}
        <YAxis
          domain={[0, 4000]}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value: number) => {
            const isShowThousand = value != 0 ? 'k' : '';
            return `${value.toString()[0]}${isShowThousand}`;
          }}
          // stroke="#fff"
          className="[&>g>g>text]:stroke-lightHeading dark:[&>g>g>text]:stroke-calendarScheduleText dark:[&>g>g>text]:stroke-1"
        />

        {/* X-axis for months */}
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          className="[&>g>g>text]:stroke-lightHeading dark:[&>g>g>text]:stroke-calendarScheduleText dark:[&>g>g>text]:stroke-1"
        />

        {/* Tooltip */}
        <ChartTooltip
          cursor={false}
          content={
            <h6 className="rounded-full bg-[#272727] px-4 py-1.5 font-inter text-white">
              $950
            </h6>
          }
        />

        {/* Line with gradient fill and shadow */}
        <Area
          dataKey="amount"
          type="linear"
          stroke="var(--chart-1)"
          strokeWidth={3}
          dot={false}
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ChartContainer>
  );
}
