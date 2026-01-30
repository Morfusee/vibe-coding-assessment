import DashboardLayout from "@/components/layout/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ChevronDown, Download, FileText } from "lucide-react";
import Head from "next/head";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const mainChartData = [
  {
    name: "28 Jan 2026",
    batches: 4,
    published: 3,
    unpublished: 2,
    rejected: 0,
    pending: 0,
    pendingRelease: 0,
    recipients: 0,
  },
  {
    name: "29 Jan 2026",
    batches: 2,
    published: 1,
    unpublished: 0,
    rejected: 0,
    pending: 0,
    pendingRelease: 0,
    recipients: 0,
  },
];

const monthlyData = [
  { name: "Jan", value: 1.4 },
  { name: "Feb", value: 1.05 },
];

const SummaryCard = ({
  title,
  count,
  icon: Icon,
  colorClass,
}: {
  title: string;
  count: number;
  icon: any;
  colorClass: string;
}) => (
  <Card className="shadow-sm border-(--color-primary-cool-gray-20)">
    <CardContent className="p-6 flex flex-col justify-between h-full">
      <div className="flex items-start gap-4 mb-4">
        <div className={`rounded-md bg-opacity-10`}>
          <Icon className={`size-8 ${colorClass.replace("bg-", "text-")}`} />
        </div>
        <span className="text-lg font-semibold text-(--color-primary-cool-gray-80)">
          {title}
        </span>
      </div>
      <div className="text-3xl font-bold text-(--color-primary-cool-gray-100) text-center">
        {count}
      </div>
    </CardContent>
  </Card>
);

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard</title>
      </Head>

      <div className="space-y-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-(--color-primary-cool-gray-100)">
            Dashboard
          </h1>

          <div className="flex items-center gap-3">
            <div className="relative">
              <button className="flex items-center gap-2 px-4 py-2 w-64 bg-white border border-(--color-primary-cool-gray-30) rounded-md text-sm text-(--color-primary-cool-gray-80) shadow-sm">
                <Calendar className="h-4 w-4 text-(--color-primary-cool-gray-50)" />
                All Dates
                <ChevronDown className="ml-auto size-4" />
              </button>
            </div>

            <Button
              variant="default"
              className="bg-(--color-primary-indigo-70) hover:bg-(--color-primary-indigo-80)"
            >
              <Download className="mr-2 h-4 w-4" /> Export
            </Button>
          </div>
        </div>

        {/* Summary Section */}
        <div>
          <h2 className="text-lg font-bold text-(--color-primary-cool-gray-100) mb-4">
            Summary
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
            <SummaryCard
              title="Batches"
              count={8}
              icon={FileText}
              colorClass="text-indigo-900"
            />
            <SummaryCard
              title="Published"
              count={4}
              icon={FileText}
              colorClass="text-indigo-900"
            />
            <SummaryCard
              title="Unpublished"
              count={1}
              icon={FileText}
              colorClass="text-indigo-900"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-6">
            <SummaryCard
              title="Rejected"
              count={0}
              icon={FileText}
              colorClass="text-indigo-900"
            />
            <SummaryCard
              title="Pending"
              count={0}
              icon={FileText}
              colorClass="text-indigo-900"
            />
            <SummaryCard
              title="Pending-release"
              count={0}
              icon={FileText}
              colorClass="text-indigo-900"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <SummaryCard
              title="Recipients"
              count={1}
              icon={FileText}
              colorClass="text-indigo-900"
            />
          </div>
        </div>

        {/* Charts Section */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-(--color-primary-cool-gray-20)">
          <div className="flex justify-end mb-4">
            <select className="text-sm border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              <option>All Summary</option>
            </select>
          </div>

          <div className="h-100 w-full">
            <h3 className="text-center text-lg font-medium mb-4">Main Chart</h3>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={mainChartData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Legend
                  verticalAlign="top"
                  align="right"
                  wrapperStyle={{ paddingBottom: "20px" }}
                />
                <Line
                  type="monotone"
                  dataKey="batches"
                  stroke="#4ade80"
                  name="Batches"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="published"
                  stroke="#2563eb"
                  name="Published"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="unpublished"
                  stroke="#d97706"
                  name="Unpublished"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="rejected"
                  stroke="#dc2626"
                  name="Rejected"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="pending"
                  stroke="#facc15"
                  name="Pending"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="pendingRelease"
                  stroke="#f97316"
                  name="Pending-release"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="recipients"
                  stroke="#16a34a"
                  name="Recipients"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="h-75 w-full mt-12">
            <h3 className="text-center text-lg font-medium mb-4">
              Monthly Summary Average
            </h3>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  domain={[0.7, 1.4]}
                  ticks={[0.7, 1.05, 1.4]}
                />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#64748b"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
