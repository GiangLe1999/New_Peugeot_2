"use client";

import { Dispatch, FC, SetStateAction, useState } from "react";
import { IoWarningOutline } from "react-icons/io5";

interface Props {
  id?: string;
  label: string;
  type?: string;
  rows?: number;
  error: boolean;
  submitted?: boolean;
  setState: Dispatch<SetStateAction<string>>;
  setSubmitted: Dispatch<SetStateAction<boolean>>;
  value: string;
  noValidate?: boolean;
}

const FormInput: FC<Props> = ({
  id,
  label,
  type,
  rows,
  error,
  submitted,
  setState,
  setSubmitted,
  value,
  noValidate,
}): JSX.Element => {
  const [touched, setTouched] = useState(false);
  const isNotValid =
    (error && submitted && touched && !noValidate) ||
    (submitted && !touched && !noValidate);

  let Component = "input" as any;
  if (rows) {
    Component = "textarea";
  }
  return (
    <div>
      <label className="uppercase text-sm font-bold mb-1 block" htmlFor={id}>
        {label}
      </label>
      <Component
        id={id}
        type={type}
        className={`w-full py-[10px] px-4 rounded-md bg-[#f5f5f5] outline-none border ${
          isNotValid && "border-primary"
        }`}
        rows={rows}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setState(e.target.value);
          setSubmitted(false);
          setTouched(true);
        }}
        value={value}
      />

      {isNotValid && (
        <p className="mt-1 text-primary text-xs flex items-center gap-1">
          <IoWarningOutline /> Vui lòng nhập thông tin hợp lệ.
        </p>
      )}
    </div>
  );
};

export default FormInput;
