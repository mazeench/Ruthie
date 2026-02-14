"use server";

import {Resend} from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async () => {
    await resend.emails.send({
        to: "oruth312@gmail.com",
        from: "OrcDev <onboarding@resend.dev>",
        subject: "wrong answer",
        html: "<strong>WRONG ANSWER</strong>",
    })
}

export const yesEmail = async () => {
    await resend.emails.send({
        to: "oruth312@gmail.com",
        from:"OrcDev <onboarding@resend.dev>",
        subject: "THANK YOUUUUUU!",
        html: "<strong>THANK YOU I LOVE YOU SO MUCH I CANT WAIT TO SEE YOU SOONNNNN</strong>",
    })
}
