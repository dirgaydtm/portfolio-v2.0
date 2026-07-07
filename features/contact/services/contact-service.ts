import nodemailer from "nodemailer";
import type { z } from "zod";
import type { ContactSchema } from "@/features/contact/schemas/contact";
import { profile } from "@/shared/data/profile";

export async function sendContactMessage(data: z.infer<typeof ContactSchema>) {
	const { name, email, subject, message } = data;

	if (!process.env.EMAIL_PASS) {
		throw new Error("Server configuration error");
	}

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: profile.email,
			pass: process.env.EMAIL_PASS,
		},
	});

	await transporter.sendMail({
		from: "Portfolio Contact",
		to: profile.email,
		subject: `[Portfolio] ${subject}`,
		text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
		replyTo: email,
	});
}
