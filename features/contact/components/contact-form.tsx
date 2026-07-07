"use client";

import { Loader2, Send } from "lucide-react";
import { Button } from "@/shared/components/button";
import { Input } from "@/shared/components/input";
import { Label } from "@/shared/components/label";
import { Textarea } from "@/shared/components/textarea";
import { useContactForm } from "../hooks/use-contact-form";

export default function ContactForm({
	className,
}: React.ComponentProps<"form">) {
	const { form, isSubmitting, isSubmitted, handleChange, handleSubmit } =
		useContactForm();

	return (
		<form onSubmit={handleSubmit} className={className} noValidate>
			<div className="grid gap-4 sm:grid-cols-2">
				<div className="space-y-2">
					<Label htmlFor="name">Name</Label>
					<Input
						id="name"
						name="name"
						value={form.name}
						onChange={handleChange}
						placeholder="What should I call you?"
						maxLength={50}
						required
						disabled={isSubmitting}
					/>
				</div>
				<div className="space-y-2">
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						name="email"
						type="email"
						value={form.email}
						onChange={handleChange}
						placeholder="your@email.com"
						maxLength={50}
						required
						disabled={isSubmitting}
					/>
				</div>
			</div>
			<div className="space-y-2">
				<Label htmlFor="subject">Subject</Label>
				<Input
					id="subject"
					name="subject"
					value={form.subject}
					onChange={handleChange}
					placeholder="What's on your mind?"
					maxLength={100}
					required
					disabled={isSubmitting}
				/>
			</div>
			<div className="space-y-2">
				<Label htmlFor="message">Message</Label>
				<Textarea
					id="message"
					name="message"
					value={form.message}
					onChange={handleChange}
					placeholder="Tell me more about it..."
					rows={5}
					required
					disabled={isSubmitting}
					className="resize-none h-24"
				/>
			</div>
			<Button
				type="submit"
				className="w-full cursor-pointer"
				disabled={isSubmitting || isSubmitted}
			>
				{isSubmitting ? (
					<>
						<Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
						Sending...
					</>
				) : isSubmitted ? (
					<>Message Sent!</>
				) : (
					<>
						<Send className="mr-2 h-4 w-4" aria-hidden="true" />
						Send Message
					</>
				)}
			</Button>
		</form>
	);
}
