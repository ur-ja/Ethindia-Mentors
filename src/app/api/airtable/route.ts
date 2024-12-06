import { NextResponse } from "next/server";

export async function GET() {
  const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY!;
  const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID!;
  const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME!;

  const url = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`;

  try {
    console.log("Fetching data from Airtable...");
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch data from Airtable" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
