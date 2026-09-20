import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request) {
  try {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json(
        { error: "Supabase is not configured." },
        { status: 500 }
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

    const challengeTitle =
      typeof body.challengeTitle === "string"
        ? body.challengeTitle.trim()
        : "";

    if (!firstName || !challengeTitle) {
      return NextResponse.json(
        {
          error:
            "First name and challenge title are required.",
        },
        {
          status: 400,
        }
      );
    }

    const { error } = await supabase
      .from("challenge_activity")
      .insert({
        first_name: firstName,
        challenge_title: challengeTitle,
      });

    if (error) {
      console.error(
        "Challenge activity error:",
        error
      );

      return NextResponse.json(
        {
          error:
            "Could not save challenge activity.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(
      "Challenge activity route error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}