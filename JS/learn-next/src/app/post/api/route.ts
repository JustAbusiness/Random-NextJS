import Post from "@/app/config/models/Post";
import connectDB from "@/app/config/mongoose";
import { NextRequest, NextResponse } from "next/server";

// CREATE POST
export async function POST(req: NextRequest) {
  await connectDB();

  try {
    const { title, description } = await req.json();
    const existed = await Post.findOne({ title });

    if (!existed) {
      const newPost = await Post.create({ title, description });
      return NextResponse.json(
        {
          data: newPost,
          message: "Success",
        },
        { status: 201, statusText: "Create post successfully" }
      );
    }

    return NextResponse.json(
      {
        data: null,
        message: "Title has been set before, please try another !!!",
      },
      { status: 400, statusText: "Invalid titile" }
    );
  } catch (error) {
    return NextResponse.json(
      {
        data: null,
        message: "Error",
      },
      { status: 400, statusText: "Create post failed" }
    );
  }
}

// GET POST

export async function GET(req: NextRequest) {
  try {
    const limit = req.nextUrl.searchParams.get("limit") ?? 10;
    const page = req.nextUrl.searchParams.get("page") ?? 1;
    const totalPosts = await Post.countDocuments();
    const totalPage = Math.ceil(totalPosts / +limit);

    const allPosts = await Post.find()
      .skip((+page - 1) * +limit)
      .limit(+limit);
      
    return NextResponse.json(
      {
        data: allPosts,
        meta: {
          totalPage: totalPage,
          totalCount: totalPosts,
        },
        message: "Success",
      },
      { status: 200, statusText: "Get all posts successfully" }
    );
  } catch (error) {
    return NextResponse.json(
      {
        data: null,
        message: "Error",
      },
      { status: 400, statusText: "Get all posts failed" }
    );
  }
}
