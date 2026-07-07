import { z } from "zod";

export const ContactSchema = z.object({
	name: z
		.string()
		.trim()
		.min(2, "Name looks a bit short")
		.max(50, "That name is quite long"),
	email: z
		.string()
		.trim()
		.email("That email doesn't look right")
		.max(50, "Email looks too long"),
	subject: z
		.string()
		.trim()
		.min(3, "What’s this about?")
		.max(100, "Subject is too long"),
	message: z
		.string()
		.trim()
		.min(10, "Don't be shy, write something")
		.max(2000, "That’s a very long message"),
});
