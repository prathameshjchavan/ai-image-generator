import { NextResponse } from "next/server";

export async function GET(request: Request) {
	// Connect to our Microsoft Azure Function Endpoint
	const response = await fetch("...", {
		cache: "no-store",
	});

	const textData = await response.json();

	return NextResponse.json(textData.trim(), { status: 200 });
}
