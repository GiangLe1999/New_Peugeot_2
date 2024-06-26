"use client";

import { FC } from "react";
import { Accordion } from "@szhsin/react-accordion";
import { AccordionItem } from "@/components/accordion-item";
import UserAvatar from "../user-avatar";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { linkConstants } from "@/data/constants";

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */

interface Props {
  isExpand: boolean;
}

const ProfileAccordion: FC<Props> = ({ isExpand }): JSX.Element => {
  const { data: session } = useSession();

  return (
    <div className="my-4 transition text-[#999999] border-y border-[#b4b4b44d] m-4 pt-4 pb-2">
      <Accordion transition transitionTimeout={500}>
        <AccordionItem
          header={
            <div className="flex items-center gap-3 w-full">
              <UserAvatar
                wrapperClasses={`${
                  isExpand ? "w-[34px] h-[34px] ml-[7px]" : "w-11 h-11"
                }`}
              />
              <div
                className={`${
                  isExpand ? "flex items-center justify-between" : "hidden"
                }`}
              >
                <span className="text-sm">{session?.user?.name}</span>
              </div>
            </div>
          }
        >
          <Link
            href={linkConstants.profile}
            className={`${
              isExpand ? "mb-1 gap-4 admin-sidebar-item" : "hidden"
            }`}
          >
            <span>MP</span> Thông tin user
          </Link>
          <button
            className={`${
              isExpand ? "w-full admin-sidebar-item gap-[19px]" : "hidden"
            }`}
            onClick={() => signOut()}
          >
            <span>LO</span> Đăng xuất
          </button>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ProfileAccordion;
