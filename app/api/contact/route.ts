import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail =
      process.env.CONTACT_EMAIL || "divyagoswami20081501@gmail.com";

    // If Resend API Key is set, send via Resend
    if (apiKey && apiKey.trim().length > 0 && !apiKey.includes("your_api_key_here")) {
      const resend = new Resend(apiKey);

      const emailResponse = await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: recipientEmail,
        replyTo: email,
        subject: `New Portfolio Message from ${name}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background: #ffffff; color: #1a202c;">
            <div style="border-bottom: 2px solid #8b5cf6; padding-bottom: 12px; margin-bottom: 20px;">
              <h2 style="color: #6d28d9; margin: 0; font-size: 20px;">New Message from Portfolio Website</h2>
            </div>
            
            <p style="margin: 8px 0;"><strong>Sender Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #06b6d4;">${email}</a></p>
            <p style="margin: 8px 0;"><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
            
            <div style="margin-top: 20px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #06b6d4; border-radius: 6px;">
              <p style="margin: 0; font-weight: 600; color: #475569; margin-bottom: 8px;">Message Content:</p>
              <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
            </div>
            
            <p style="margin-top: 24px; font-size: 12px; color: #94a3b8; text-align: center;">
              Sent from Divya Goswami's Personal Portfolio
            </p>
          </div>
        `,
      });

      if (emailResponse.error) {
        throw new Error(emailResponse.error.message);
      }

      return NextResponse.json({
        success: true,
        fallback: false,
        message: "Message sent successfully!",
      });
    }

    // Graceful fallback to mailto
    const subject = encodeURIComponent(`Portfolio Message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    const mailtoUrl = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    return NextResponse.json({
      success: true,
      fallback: true,
      mailtoUrl,
      message: "Resend key not configured locally; mail client triggered.",
    });
  } catch (error: any) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error?.message || "Failed to process message.",
      },
      { status: 500 }
    );
  }
}

