import { NextResponse } from "next/server";

export async function GET(request: Request) {
	const response = await fetch("http://localhost:7071/api/getImages", {
		cache: "no-store",
	});

	const blob = await response.blob();
	const textData = await blob.text();
	const data = JSON.parse(textData);

	return NextResponse.json(data, { status: 200 });
}
