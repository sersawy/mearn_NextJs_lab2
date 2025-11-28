import { dbConnection } from '@/app/_lib/dbconnection';
import { todoModel } from '@/app/_lib/models/todo';
import { validationSchema } from './schema';

dbConnection();

export async function GET() {
  // get all todos
  try {
    const todos = await todoModel.find();
    return new Response(JSON.stringify({ data: todos }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error getting todos!' }));
  }
}

export async function POST(request) {
  const todo = await request.json();
  try {
    const validation = validationSchema.safeParse(todo);
    if (!validation.success) {
      return new Response(JSON.stringify({ message: 'Invalid Data' }), { status: 422 });
    }
    const newtodo = await todoModel.create(todo);
    return new Response(JSON.stringify({ data: newtodo }), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: 'Error creating Todo' }));
  }
}
export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  try {
    const deletedtodo = await todoModel.findByIdAndDelete(id);
    return new Response(JSON.stringify({ data: deletedtodo }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error deleting Todo' }));
  }
}

export async function PUT(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const updatedData = await request.json();
  try {
    const validation = validationSchema.safeParse(updatedData);
    if (!validation.success) {
      return new Response(JSON.stringify({ message: 'Invalid Data' }), { status: 422 });
    }
    const updatedtodo = await todoModel.findByIdAndUpdate(id, updatedData, { new: true });
    return new Response(JSON.stringify({ data: updatedtodo }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error updating Todo' }));
  }
}
