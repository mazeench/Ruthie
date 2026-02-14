"use client";

import React from "react";

import { sendEmail, yesEmail } from "@/lib/resend";

const NoButton = () => {
  function send() {
    yesEmail();
    alert("check your email <3");
  }
  return (
    <form action={send}>
      <button
        className="border-green-400 border-2 px-20 py-5 text-3xl font-bold text-white bg-green-400 rounded-2xl hover:cursor-pointer"
        type="submit"
      >
        Yes
      </button>
    </form>
  );
};

export default NoButton;
