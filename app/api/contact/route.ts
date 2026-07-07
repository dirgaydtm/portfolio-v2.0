import { type NextRequest, NextResponse } from "next/server";
import { ContactSchema } from "@/features/contact/schemas/contact";
import { sendContactMessage } from "@/features/contact/services/contact-service";

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		const validation = ContactSchema.safeParse(body);

		if (!validation.success) {
			return NextResponse.json(
				{ error: validation.error.issues[0]?.message || "Invalid input" },
				{ status: 400 },
			);
		}

		await sendContactMessage(validation.data);

		return NextResponse.json({ success: true });
	} catch (error) {
		return NextResponse.json(
			{ error: error instanceof Error ? error.message : "Failed to send" },
			{ status: 500 },
		);
	}
}
