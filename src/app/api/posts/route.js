const { postesData } = require("./postsData");

export async function GET() {
  return new Response(JSON.stringify({ data: postesData }), { status: 200 });
}
