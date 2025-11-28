import { dbConnection } from '@/app/_lib/dbconnection';
import { userModel } from '@/app/_lib/models/user';
import bcrypt from 'bcrypt';
dbConnection();
export async function POST(request) {
  try {
    const { name, email, password } = await request.json();
    const exitsEmail = await userModel.findOne({ email });
    if (exitsEmail) {
      return new Response(JSON.stringify({ message: 'Email Already exists!' }), { status: 400 });
    }

    const hashedPass = await bcrypt.hash(password, 10);
    console.log(`hashedpassword : ${hashedPass}`);

    await userModel.create({ name, email, password: hashedPass });

    return new Response(JSON.stringify({ message: 'SingUp successfully' }), {
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error SingingUp!' }), {
      status: 500,
    });
  }
}
