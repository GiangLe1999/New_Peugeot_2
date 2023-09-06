"use client";

import { Dispatch, FC, SetStateAction, useState } from "react";
import { IoWarningOutline } from "react-icons/io5";

interface Props {
  id: string;
  label: string;
  data: string[];
  setState: Dispatch<SetStateAction<string>>;
  defaultOpt: string;
  error: boolean;
  submitted?: boolean;
  setSubmitted: Dispatch<SetStateAction<boolean>>;
  value: string;
}

const FormSelect: FC<Props> = ({
  id,
  label,
  data,
  setState,
  defaultOpt,
  error,
  submitted,
  setSubmitted,
  value,
}): JSX.Element => {
  const [touched, setTouched] = useState(false);
  const isNotValid = (error && submitted && touched) || (submitted && !touched);

  return (
    <div>
      <label className="uppercase text-sm font-bold mb-1 block" htmlFor={id}>
        {label}
      </label>
      <select
        className={`w-full border py-[10px] px-4 rounded-md bg-[#f5f5f5] outline-none ${
          isNotValid && "border-primary"
        }`}
        id={id}
        onChange={(e) => {
          setState(e.target.value);
          setSubmitted(false);
          setTouched(true);
        }}
        value={value}
      >
        <option value="">{defaultOpt}</option>
        {data.map((opt, index) => (
          <option key={index} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      {isNotValid && (
        <p className="mt-1 text-primary text-xs flex items-center gap-1">
          <IoWarningOutline /> Vui lòng chọn lựa chọn phù hợp.
        </p>
      )}
    </div>
  );
};

export default FormSelect;
