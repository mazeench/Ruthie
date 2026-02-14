"use client";

import React from "react";

import { sendEmail } from "@/lib/resend";

const NoButton = () => {
  function send() {
    sendEmail();
    alert("CHECK YOUR EMAIL 😡");
  }
  return (
    <form action={send}>
      <button
        className="border-red-600 border-2 px-20 py-5 text-3xl font-bold text-white bg-red-600 rounded-2xl hover:cursor-pointer"
        type="submit"
      >
        No
      </button>
    </form>
  );
};

export default NoButton;
