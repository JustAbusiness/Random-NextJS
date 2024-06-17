import Post from "@/app/config/models/Post";
import { NextRequest, NextResponse } from "next/server";

// GET POST

export async function GET(
  req: NextRequest,
  context: { params: { postId: number } }
) {
  try {
    const id = context.params.postId;
    const post = await Post.findById(id);

    if (post) {
      return NextResponse.json(
        {
          data: post,
          message: "Success",
        },
        { status: 201, statusText: "Get post successfully" }
      );
    }

    return NextResponse.json(
      {
        data: null,
        message: "Error",
      },
      { status: 400, statusText: "Get post unsuccessfully" }
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

// PUT ONE POST (EDIT)

export async function PUT(
  req: NextRequest,
  context: { params: { postId: number } }
) {
  try {
    const { title, description } = await req.json();
    const id = context.params.postId;

    const post = await Post.findById(id);

    if (!post) {
      return NextResponse.json(
        {
          data: null,
          message: "The post is not exist",
        },
        { status: 400, statusText: "Update post successfully" }
      );
    }

    // Check if existed
    const existedTitle = await Post.findOne({ title });
    if (!existedTitle) {
      const updated = await Post.findByIdAndUpdate(
        id,
        { title, description },
        { new: true }
      );
      return NextResponse.json(
        {
          data: updated,
          message: "Success",
        },
        { status: 201, statusText: "Update post successfully" }
      );
    } else {
      return NextResponse.json(
        {
          data: null,
          messgae: "The title has existed, please try other title",
        },
        { status: 401, statusText: "Failed to update title of one post"}
      )
    } 



  } catch (error) {
    return NextResponse.json(
      {
        data: null,
        message: "Error",
      },
      { status: 400, statusText: "Update  post failed" }
    );
  }
}
