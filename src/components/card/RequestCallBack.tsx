"use client";
import React, { useState } from "react";
import PhoneInput, {
  isPossiblePhoneNumber,
  Value,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Icon } from "../ui/Icon";

const RequestCallBack = ({ className }: { className?: string }) => {
  const [phone, setPhone] = useState<Value>();

  return (
    <div
      className={`bg-provincialpink p-6 border border-goldentainoi  rounded-2xl font-albertsans ${
        className ?? ""
      }`}
    >
      <h2 className="mb-6 w-full font-semibold text-lg text-center">
        Request a Callback
      </h2>
      <form className="flex flex-col gap-2">
        <div>
          {/* <label htmlFor="name" className="block mb-1 font-medium text-sm">
            Full Name <span className="text-red-500">*</span>
          </label> */}
          <input
            id="name"
            name="name"
            type="text"
            required
            className="bg-white px-3 py-2 border-[1px] border-black rounded-md w-full text-sm"
            placeholder="Full Name *"
          />
        </div>

        <div>
          {/* <label htmlFor="phone" className="block mb-1 font-medium text-sm">
            Phone Number <span className="text-red-500">*</span>
          </label> */}
          <PhoneInput
            id="phone"
            name="phone"
            defaultCountry="IN"
            countryCallingCodeEditable={false}
            international
            required
            value={phone}
            onChange={setPhone}
            className="bg-white px-3 py-2 border-[1px] border-black rounded-md focus:outline-none focus:ring-0 w-full text-sm"
            error={
              phone
                ? isPossiblePhoneNumber(phone)
                  ? undefined
                  : "Invalid phone number"
                : "Phone number required"
            }
            placeholder="Enter your number"
          />
        </div>

        <button
          type="submit"
          disabled={phone ? !isPossiblePhoneNumber(phone) : true}
          className="flex justify-center items-center bg-koromiko hover:bg-yelloworange py-2 rounded-md w-full font-medium text-black text-sm cursor-pointer disabled:cursor-not-allowed"
        >
          <Icon name="phone" className="mr-2 w-3 h-3 text-black" /> Request a
          Callback
        </button>
        <p className="text-black text-xs text-center">
          {" We won't spam or misuse your number."}
        </p>
      </form>
    </div>
  );
};

export default RequestCallBack;
