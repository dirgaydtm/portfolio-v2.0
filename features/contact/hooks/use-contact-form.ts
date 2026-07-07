"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ContactSchema } from "../schemas/contact";

export function useContactForm() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	function handleChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) {
		setForm({ ...form, [e.target.id]: e.target.value });
	}

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const empty = Object.values(form).some((v) => !v.trim());
			if (empty) {
				toast.error("Please fill in all fields");
				return;
			}

			const validation = ContactSchema.safeParse(form);
			if (!validation.success) {
				toast.error(validation.error.issues[0]?.message || "Invalid input");
				return;
			}

			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(validation.data),
			});

			if (!res.ok) {
				const data = await res.json();
				toast.error(data.error || "Failed to send message");
				return;
			}

			toast.success("Message sent successfully! I'll get back to you soon.");
			setIsSubmitted(true);
			setForm({ name: "", email: "", subject: "", message: "" });
			setTimeout(() => setIsSubmitted(false), 3000);
		} catch {
			toast.error("Failed to send message");
		} finally {
			setIsSubmitting(false);
		}
	}

	return {
		form,
		isSubmitting,
		isSubmitted,
		handleChange,
		handleSubmit,
	};
}
