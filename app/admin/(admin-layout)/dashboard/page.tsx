"use client";

import AnalyticsBlocks from "@/components/admin-dashboard-page/AnalyticsBlocks";
import ContactListTable from "@/components/admin-dashboard-page/ContactListTable";
import { NextPage } from "next";

interface Props {}

const DashboardPage: NextPage<Props> = () => {
  return (
    <div className="admin-page-container">
      <AnalyticsBlocks />
      <ContactListTable />
    </div>
  );
};

export default DashboardPage;
