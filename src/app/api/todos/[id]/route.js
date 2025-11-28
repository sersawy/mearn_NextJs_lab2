import { dbConnection } from "@/app/_lib/dbconnection";
import { todoModel } from "@/app/_lib/models/todo";
dbConnection();
export async function GET(req, { params }) {
  const { id } = await params;
  console.log(`server id`, id);
  const todo = await todoModel.findById(id);
  return new Response(JSON.stringify(todo), { status: 200 });
}
