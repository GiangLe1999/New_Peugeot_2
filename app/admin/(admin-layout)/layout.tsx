"use client";

import AdminHeader from "@/components/Layout/admin-header";
import AdminSidebar from "@/components/Layout/admin-sidebar";
import { FC, ReactNode, useState } from "react";
import AdminChilren from "@/components/Layout/admin-children";
import { AuthProvider } from "@/providers/auth-provider";

interface Props {
  children: ReactNode;
}

const AdminPageLayout: FC<Props> = ({ children }): JSX.Element => {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <AuthProvider>
      <div className="bg-[#eee] min-h-screen text-[#3c4858]">
        <AdminSidebar isExpand={isExpand} />
        <AdminHeader isExpand={isExpand} setIsExpand={setIsExpand} />
        <AdminChilren isExpand={isExpand}>{children}</AdminChilren>
      </div>
    </AuthProvider>
  );
};

export default AdminPageLayout;
