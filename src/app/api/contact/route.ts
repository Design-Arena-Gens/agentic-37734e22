import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;
  if (!payload.name || !payload.email || !payload.message) {
    return NextResponse.json(
      { success: false, error: "Missing required fields" },
      { status: 400 }
    );
  }

  console.log("Contact submission", {
    name: payload.name,
    email: payload.email,
    message: payload.message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ success: true }, { status: 200 });
}
