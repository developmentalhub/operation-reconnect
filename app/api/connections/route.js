import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function GET() {
  try {
    const { count, error } = await supabase
      .from('connections')
      .select('*', {
        count: 'exact',
        head: true,
      });

    if (error) {
      console.error('Connection count error:', error);

      return NextResponse.json(
        {
          error: 'Could not load connection count.',
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      count: count || 0,
    });
  } catch (error) {
    console.error(
      'Connection count route error:',
      error
    );

    return NextResponse.json(
      {
        error: 'Could not load connection count.',
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    const firstName =
      typeof body.firstName === 'string'
        ? body.firstName.trim()
        : '';

    const suburb =
      typeof body.suburb === 'string'
        ? body.suburb.trim()
        : '';

    if (!firstName || !suburb) {
      return NextResponse.json(
        {
          error:
            'Please enter your first name and the suburb where the bench was.',
        },
        {
          status: 400,
        }
      );
    }

    const { error } = await supabase
      .from('connections')
      .insert({
        first_name: firstName,
        suburb,
      });

    if (error) {
      console.error(
        'Connection insert error:',
        error
      );

      return NextResponse.json(
        {
          error: 'Could not add your connection.',
        },
        {
          status: 500,
        }
      );
    }

    const { count, error: countError } =
      await supabase
        .from('connections')
        .select('*', {
          count: 'exact',
          head: true,
        });

    if (countError) {
      console.error(
        'Connection recount error:',
        countError
      );

      return NextResponse.json(
        {
          error:
            'Your connection was saved, but the new total could not be loaded.',
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      count: count || 0,
    });
  } catch (error) {
    console.error(
      'Connection POST route error:',
      error
    );

    return NextResponse.json(
      {
        error: 'Could not add your connection.',
      },
      {
        status: 500,
      }
    );
  }
}