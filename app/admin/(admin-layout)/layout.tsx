"use client";

import AdminHeader from "@/components/Layout/admin-header";
import AdminSidebar from "@/components/Layout/admin-sidebar";
import { FC, ReactNode, useState } from "react";
import AdminChilren from "@/components/Layout/admin-children";
import { AuthProvider } from "@/providers/auth-provider";
import AdminMobileBottomNav from "@/components/Layout/AdminMobileBottomNav";

interface Props {
  children: ReactNode;
}

const AdminPageLayout: FC<Props> = ({ children }): JSX.Element => {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <AuthProvider>
      <div className="bg-[#eee] min-h-screen text-[#3c4858]">
        <div className="md:block hidden">
          <AdminSidebar isExpand={isExpand} />
        </div>
        <AdminHeader isExpand={isExpand} setIsExpand={setIsExpand} />
        <AdminChilren isExpand={isExpand}>{children}</AdminChilren>
      </div>
      <AdminMobileBottomNav />
    </AuthProvider>
  );
};

export default AdminPageLayout;
