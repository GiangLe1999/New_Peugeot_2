"use client";

import AnalyticsBlocks from "@/components/admin-dashboard-page/AnalyticsBlocks";
import ContactListTable from "@/components/admin-dashboard-page/ContactListTable";
import QuickConsultListTable from "@/components/admin-dashboard-page/QuickConsultListTable";
import { NextPage } from "next";

interface Props {}

const DashboardPage: NextPage<Props> = () => {
  return (
    <div className="admin-page-container">
      <AnalyticsBlocks />
      <div className="grid grid-cols-2 gap-10">
        <QuickConsultListTable />
        <QuickConsultListTable />
      </div>
      <ContactListTable />
    </div>
  );
};

export default DashboardPage;
