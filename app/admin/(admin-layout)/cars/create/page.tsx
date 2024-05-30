"use client";

import CreateCarForm from "@/components/admin-cars-page/create-car-form";
import AdminCardTitle from "@/components/admin-card-title";
import { MdCreateNewFolder } from "react-icons/md";

const Page = () => {
  return (
    <div className="admin-page-container">
      <div className="admin-card">
        <AdminCardTitle
          cardTitle="Tạo xe mới"
          cardIconClasses="admin-main-gradient"
          icon={MdCreateNewFolder}
          iconSize={22}
        />

        <CreateCarForm />
      </div>
    </div>
  );
};

export default Page;
