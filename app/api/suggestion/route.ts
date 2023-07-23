import { NextResponse } from "next/server";

export async function GET(request: Request) {
	// Connect to our Microsoft Azure Function Endpoint
	// const textData = await fetch(
	// 	process.env.NODE_ENV === "production"
	// 		? process.env.SUGGESTION_API!
	// 		: process.env.LOCAL_SUGGESTION_API!,
	// 	{
	// 		cache: "no-store",
	// 	}
	// );

	// This is only used for development environment, to avoid unnecassary use of openai api
	const textData =
		"Create a photo-realistic painting of a wintery beachscape in black and white.";

	return NextResponse.json(textData.trim(), { status: 200 });
}
