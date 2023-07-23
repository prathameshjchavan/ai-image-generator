import { NextResponse } from "next/server";

export async function GET(request: Request) {
	// Connect to our Microsoft Azure Function Endpoint
	// const res = await fetch("http://localhost:7071/api/getChatGPTSuggestion", {
	// 	cache: "no-store",
	// });
	// const textData = await res.text();

	// This is only used for development environment, to avoid unnecassary use of openai api
	const textData =
		"Create a photo-realistic painting of a wintery beachscape in black and white.";

	return NextResponse.json(textData.trim(), { status: 200 });
}
