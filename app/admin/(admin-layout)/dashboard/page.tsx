"use client";

import AnalyticsBlocks from "@/components/admin-dashboard-page/AnalyticsBlocks";
import ContactListTable from "@/components/admin-dashboard-page/ContactListTable";
import QuickConsultListTable from "@/components/admin-dashboard-page/QuickConsultListTable";
import TestDriveListTable from "@/components/admin-dashboard-page/TestDriveListTable";
import { NextPage } from "next";

interface Props {}

const DashboardPage: NextPage<Props> = () => {
  return (
    <div className="admin-page-container">
      <AnalyticsBlocks />
      <QuickConsultListTable />
      <TestDriveListTable />
      <ContactListTable />
    </div>
  );
};

export default DashboardPage;
