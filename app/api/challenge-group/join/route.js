import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request) {
  try {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json(
        {
          error: "Supabase is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    const supabase = createClient(
      supabaseUrl,
      supabaseKey
    );

    const body = await request.json();

    const firstName =
      typeof body.firstName === "string"
        ? body.firstName.trim()
        : "";

    const email =
      typeof body.email === "string"
        ? body.email.trim().toLowerCase()
        : "";

    const focus =
      typeof body.focus === "string"
        ? body.focus.trim()
        : "";

    if (!firstName || !email) {
      return NextResponse.json(
        {
          error:
            "Please enter your first name and email.",
        },
        {
          status: 400,
        }
      );
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        {
          error:
            "Please enter a valid email address.",
        },
        {
          status: 400,
        }
      );
    }

    const { error } = await supabase
      .from("challenge_profiles")
      .insert({
        first_name: firstName,
        email,
        focus: focus || null,
      });

    if (error) {
      console.error(
        "Challenge profile error:",
        error
      );

      if (error.code === "23505") {
        return NextResponse.json(
          {
            error:
              "That email is already part of the challenge group.",
          },
          {
            status: 409,
          }
        );
      }

      return NextResponse.json(
        {
          error:
            "Could not save your challenge profile.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      firstName,
    });
  } catch (error) {
    console.error(
      "Challenge join error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Something went wrong. Please try again.",
      },
      {
        status: 500,
      }
    );
  }
}