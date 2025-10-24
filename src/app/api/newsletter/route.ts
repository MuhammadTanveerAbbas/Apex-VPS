import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = newsletterSchema.parse(body);

    // Send welcome email
    const { sendEmail, getNewsletterWelcomeTemplate } = await import('@/lib/email');
    await sendEmail({
      to: email,
      subject: 'Welcome to ApexVPS!',
      html: getNewsletterWelcomeTemplate(email),
    });

    // TODO: Add to email marketing service (Mailchimp, ConvertKit, etc.)
    // await mailchimp.lists.addListMember(listId, { email_address: email });

    console.log('[Newsletter] Subscribed:', email);

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed!'
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    );
  }
}
