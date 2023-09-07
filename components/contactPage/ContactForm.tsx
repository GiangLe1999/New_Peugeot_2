"use client";

import { FC } from "react";
import CustomerForm from "../testDrivePage/CustomerForm";
import { useFetchCarLines } from "@/hooks/useFetchCarLines";

interface Props {}

const ContactForm: FC<Props> = (props): JSX.Element => {
  const carLines = useFetchCarLines();

  return (
    <div>
      <CustomerForm carLines={carLines} isContactForm />
    </div>
  );
};

export default ContactForm;
