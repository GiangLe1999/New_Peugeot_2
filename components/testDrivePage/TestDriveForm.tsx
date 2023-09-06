"use client";

import { FC, FormEvent, useState } from "react";
import FormInput from "../FormInput";
import { CarLineType } from "@/types";
import FormSelect from "../FormSelect";
import { IoWarningOutline } from "react-icons/io5";
import { ImSpinner3 } from "react-icons/im";
import Swal from "sweetalert2";

interface Props {
  carLines: { name: string; carLines: CarLineType[] }[];
}

const TestDriveForm: FC<Props> = ({ carLines }): JSX.Element => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [choseCarName, setChoseCarName] = useState("");
  const [choseCarLine, setCarLine] = useState("");
  const [enteredContent, setEnteredContent] = useState("");
  const [confirm1Checked, setConfirm1Checked] = useState(false);
  const [confirm2Checked, setConfirm2Checked] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const carNames = carLines.map((item) => item.name.toUpperCase());
  const carLinesNames = carLines
    .find((item) => item.name.toUpperCase() === choseCarName)
    ?.carLines.map((item2) => item2.name);

  const resetFormValue = () => {
    setEnteredName("");
    setEnteredPhone("");
    setEnteredEmail("");
    setChoseCarName("");
    setCarLine("");
    setEnteredContent("");
    setSubmitted(false);
    setLoading(false);
    setConfirm1Checked(false);
    setConfirm2Checked(false);
  };

  const submitHandler = async (e: FormEvent<Element>) => {
    e.preventDefault();
    setSubmitted(true);

    if (
      !enteredName ||
      !enteredName.trim() ||
      !enteredPhone ||
      !enteredPhone.trim() ||
      !enteredEmail ||
      !enteredPhone.trim() ||
      !choseCarName ||
      !choseCarLine ||
      !confirm1Checked ||
      !confirm2Checked
    ) {
      Swal.fire({
        icon: "error",
        title: "Không hợp lệ!",
        text: "Vui lòng kiểm tra lại thông tin trước khi gửi form.",
        confirmButtonColor: "#C4161C",
      });
      return;
    }

    try {
      setLoading(true);

      const data = JSON.stringify({
        name: enteredName,
        phone: enteredPhone,
        email: enteredEmail,
        carName: choseCarName,
        carLine: choseCarLine,
        content: enteredContent,
      });
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/test-drive`,
        {
          method: "POST",
          body: data,
        }
      );

      if (res.status === 201) {
        resetFormValue();
        Swal.fire({
          icon: "success",
          title: "Thành công!",
          text: "Chúng tôi sẽ liên hệ đến anh (chị) trong thời gian sớm nhất.",
          confirmButtonColor: "#2b2b2b",
        });
      } else {
        setLoading(false);
        throw new Error();
      }
    } catch (error) {
      resetFormValue();
      Swal.fire({
        icon: "error",
        title: "Không hợp lệ!",
        text: "Vui lòng kiểm tra lại thông tin trước khi gửi form.",
        confirmButtonColor: "#C4161C",
      });
    }
  };

  return (
    <form className="w-[70%] mx-auto shadow-md p-6 border rounded-md text-textColor">
      <p className="text-center font-bold leading-8 mt-4 mb-8 text-black">
        XIN VUI LÒNG ĐIỀN THÔNG TIN BÊN DƯỚI. <br />
        ĐẠI LÝ MAZDA SẼ LIÊN HỆ VỚI BẠN TRONG THỜI GIAN SỚM NHẤT
      </p>

      <div className="space-y-6">
        <FormInput
          id="name"
          label="Họ và tên *"
          type="text"
          error={!enteredName}
          submitted={submitted}
          setState={setEnteredName}
          setSubmitted={setSubmitted}
          value={enteredName}
        />

        <div className="grid grid-cols-2 gap-4">
          <FormInput
            id="phone"
            label="Số điện thoại *"
            type="number"
            error={!enteredPhone}
            submitted={submitted}
            setState={setEnteredPhone}
            setSubmitted={setSubmitted}
            value={enteredPhone}
          />
          <FormInput
            id="email"
            label="Email *"
            type="email"
            error={!enteredEmail}
            submitted={submitted}
            setState={setEnteredEmail}
            setSubmitted={setSubmitted}
            value={enteredEmail}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FormSelect
            data={carNames}
            id="carName"
            label="Dòng xe *"
            setState={setChoseCarName}
            defaultOpt="--- Dòng xe quan tâm ---"
            error={!choseCarName}
            submitted={submitted}
            setSubmitted={setSubmitted}
            value={choseCarName}
          />
          <FormSelect
            data={carLinesNames || []}
            id="carLine"
            label="Phiên bản *"
            setState={setCarLine}
            defaultOpt="--- Vui lòng chọn dòng xe trước ---"
            error={!choseCarLine}
            submitted={submitted}
            setSubmitted={setSubmitted}
            value={choseCarLine}
          />
        </div>

        <FormInput
          id="content"
          label="Nội dung"
          rows={5}
          error={!enteredContent}
          submitted={submitted}
          setState={setEnteredContent}
          setSubmitted={setSubmitted}
          value={enteredContent}
          noValidate
        />

        <div>
          <div className="flex gap-2 items-center text-sm">
            <input
              type="checkbox"
              name="confirm1"
              id="confirm1"
              className="cursor-pointer"
              checked={confirm1Checked}
              onChange={(e) => {
                setSubmitted(false);
                setConfirm1Checked(e.target.checked);
              }}
            />
            <label htmlFor="confirm1" className="cursor-pointer">
              Tôi xác nhận rằng Mazda có thể gửi cho tôi thêm thông tin về các
              sản phẩm hoặc dịch vụ của Mazda. *
            </label>
          </div>
          {submitted && !confirm1Checked && (
            <p className="mt-1 text-primary text-xs flex items-center gap-1">
              <IoWarningOutline /> Vui lòng xác nhận.
            </p>
          )}
        </div>

        <div>
          <div className="flex gap-2 items-center text-sm">
            <input
              type="checkbox"
              name="confirm2"
              id="confirm2"
              checked={confirm2Checked}
              className="cursor-pointer"
              onChange={(e) => {
                setSubmitted(false);
                setConfirm2Checked(e.target.checked);
              }}
            />

            <label htmlFor="confirm2" className="cursor-pointer">
              Tôi đã đọc và đồng ý với các quy định và chính xách của Mazda Việt
              Nam. *
            </label>
          </div>
          {submitted && !confirm2Checked && (
            <p className="mt-1 text-primary text-xs flex items-center gap-1">
              <IoWarningOutline /> Vui lòng xác nhận.
            </p>
          )}
        </div>
      </div>

      <p className="text-sm italic mt-6 font-bold text-primary">
        (*) &nbsp;Các trường bắt buộc
      </p>

      <button
        onClick={submitHandler}
        type="button"
        className="bg-secondary w-full text-white mt-8 mb-6 uppercase text-xl rounded-md py-3 hover:scale-[1.01] transition flex items-ceter gap-1 items-center justify-center"
      >
        {loading ? (
          <>
            <ImSpinner3 size={25} className="animate-spin" /> Đang gửi...
          </>
        ) : (
          "Đăng ký"
        )}
      </button>
    </form>
  );
};

export default TestDriveForm;
