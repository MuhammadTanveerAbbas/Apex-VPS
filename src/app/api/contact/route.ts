import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 });
    return true;
  }

  if (limit.count >= 3) return false;

  limit.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Send email notification
    const { sendEmail, getContactEmailTemplate } = await import('@/lib/email');
    await sendEmail({
      to: 'sales@apexvps.com',
      subject: `Contact Form: ${validatedData.subject}`,
      html: getContactEmailTemplate(
        validatedData.name,
        validatedData.email,
        validatedData.subject,
        validatedData.message
      ),
    });

    // TODO: Save to database for records
    // await db.contacts.create({ data: validatedData });
    
    console.log('[Contact Form] Sent:', validatedData.email);

    return NextResponse.json({ 
      success: true, 
      message: 'Thank you! We\'ll get back to you within 24 hours.' 
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
