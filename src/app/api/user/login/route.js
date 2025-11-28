import { userModel } from '@/app/_lib/models/user';
import { dbConnection } from '@/app/_lib/dbconnection';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

dbConnection();

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    const user = await userModel.findOne({ email });
    if (!user) {
      return new Response(JSON.stringify({ message: 'Invalid Email or Password!' }), { status: 400 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return new Response(JSON.stringify({ message: 'Invalid Email or Password!' }), { status: 400 });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return new Response(JSON.stringify({ message: 'Login successful', token }), { status: 200 });
  } catch (error) {
    console.error('Login error:', error);
    return new Response(JSON.stringify({ message: 'Error Logging In!' }), {
      status: 500,
    });
  }
}
