export async function POST(req: Request) {
  const body = await req.json();

  console.log("Lead Data:", body);

  return Response.json({
    message: "Form submitted successfully 🚀",
  });
}