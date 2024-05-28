"use client";

import { FC } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { AiOutlineWarning } from "react-icons/ai";

interface Props {
  id: string;
  type?: string;
  label: string;
  register: UseFormRegisterReturn<string>;
  errorMsg?: string | undefined;
  textarea?: boolean;
  rows?: number;
  placeholder?: string;
  labelCustomClasses?: string;
}

const FormInput: FC<Props> = ({
  type,
  id,
  label,
  register,
  errorMsg,
  textarea,
  rows,
  placeholder,
  labelCustomClasses,
}): JSX.Element => {
  let Component: any = "input";
  if (textarea) Component = "textarea";
  return (
    <div className="mb-4">
      <label htmlFor={id} className={`text-xs font-bold ${labelCustomClasses}`}>
        {label}
      </label>
      <Component
        id={id}
        type={type || "text"}
        {...register}
        className="w-full outline-none border bg-[#f5f5f5] rounded-sm py-[10px] px-4"
        rows={rows}
        placeholder={placeholder}
      />
      {errorMsg && (
        <p className="text-xs text-red-700 mt-1 flex items-center gap-[2px]">
          <AiOutlineWarning />
          {errorMsg}
        </p>
      )}
    </div>
  );
};

export default FormInput;
