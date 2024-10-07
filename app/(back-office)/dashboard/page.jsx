import CustomersDataTable from "@/components/backoffice/CustomersDataTable";
import DashboardCharts from "@/components/backoffice/DashboardCharts";
import Heading from "@/components/backoffice/Heading";
import LargeCards from "@/components/backoffice/LargeCards";
import SmallCards from "@/components/backoffice/SmallCards";
import React from "react";

function page() {
  return <div>
    <Heading  title="Dashboard Overwiev"/>
    <LargeCards />
    <SmallCards />
    <DashboardCharts />
    <CustomersDataTable />
  </div>;
}

export default page;
