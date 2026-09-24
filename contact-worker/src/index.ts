interface Env {
  RESEND_API_KEY: string;
  CONTACT_TO_EMAIL: string;
  CONTACT_FROM_EMAIL: string;
  ALLOWED_ORIGIN: string;
}

type ContactPayload = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function json(
  data: unknown,
  status = 200,
  origin = "*",
) {
  return new Response(
    JSON.stringify(data),
    {
      status,

      headers: {
        "Content-Type":
          "application/json",

        "Access-Control-Allow-Origin":
          origin,

        "Access-Control-Allow-Headers":
          "Content-Type",

        "Access-Control-Allow-Methods":
          "POST, OPTIONS",

        "Vary":
          "Origin",
      },
    },
  );
}

function escapeHtml(
  value: string,
) {
  return value
    .replaceAll(
      "&",
      "&amp;",
    )
    .replaceAll(
      "<",
      "&lt;",
    )
    .replaceAll(
      ">",
      "&gt;",
    )
    .replaceAll(
      '"',
      "&quot;",
    )
    .replaceAll(
      "'",
      "&#039;",
    );
}

export default {
  async fetch(
    request: Request,
    env: Env,
  ): Promise<Response> {
    const origin =
      request.headers.get(
        "Origin",
      ) ?? "";

    const allowedOrigin =
      origin ===
        env.ALLOWED_ORIGIN ||
      origin.startsWith(
        "http://localhost:",
      )
        ? origin
        : env.ALLOWED_ORIGIN;

    if (
      request.method ===
      "OPTIONS"
    ) {
      return json(
        {
          ok: true,
        },
        200,
        allowedOrigin,
      );
    }

    const url =
      new URL(
        request.url,
      );

    if (
      url.pathname !==
      "/api/contact"
    ) {
      return json(
        {
          error:
            "Not found.",
        },
        404,
        allowedOrigin,
      );
    }

    if (
      request.method !==
      "POST"
    ) {
      return json(
        {
          error:
            "Method not allowed.",
        },
        405,
        allowedOrigin,
      );
    }

    let body:
      ContactPayload;

    try {
      body =
        await request.json();
    } catch {
      return json(
        {
          error:
            "Invalid request.",
        },
        400,
        allowedOrigin,
      );
    }

    const name =
      body.name?.trim() ??
      "";

    const email =
      body.email?.trim() ??
      "";

    const subject =
      body.subject?.trim() ??
      "";

    const message =
      body.message?.trim() ??
      "";

    if (
      !name ||
      !email ||
      !subject ||
      !message
    ) {
      return json(
        {
          error:
            "Please fill in all fields.",
        },
        400,
        allowedOrigin,
      );
    }

    if (
      name.length > 100 ||
      email.length > 200 ||
      subject.length > 200 ||
      message.length > 5000
    ) {
      return json(
        {
          error:
            "Message is too long.",
        },
        400,
        allowedOrigin,
      );
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !emailPattern.test(
        email,
      )
    ) {
      return json(
        {
          error:
            "Invalid email address.",
        },
        400,
        allowedOrigin,
      );
    }

    const safeName =
      escapeHtml(name);

    const safeEmail =
      escapeHtml(email);

    const safeSubject =
      escapeHtml(subject);

    const safeMessage =
      escapeHtml(message)
        .replaceAll(
          "\n",
          "<br>",
        );

    const response =
      await fetch(
        "https://api.resend.com/emails",
        {
          method: "POST",

          headers: {
            Authorization:
              `Bearer ${env.RESEND_API_KEY}`,

            "Content-Type":
              "application/json",
          },

          body:
            JSON.stringify({
              from:
                env.CONTACT_FROM_EMAIL,

              to: [
                env.CONTACT_TO_EMAIL,
              ],

              reply_to:
                email,

              subject:
                `[FlashPT7] ${subject}`,

              html: `
                <div
                  style="
                    background:#080a0b;
                    color:#ffffff;
                    padding:32px;
                    font-family:Arial,sans-serif;
                  "
                >
                  <p
                    style="
                      color:#8b9090;
                      font-size:12px;
                      letter-spacing:2px;
                    "
                  >
                    NEW WEBSITE MESSAGE
                  </p>

                  <h1>
                    ${safeSubject}
                  </h1>

                  <p>
                    <strong>Name:</strong>
                    ${safeName}
                  </p>

                  <p>
                    <strong>Email:</strong>
                    ${safeEmail}
                  </p>

                  <div
                    style="
                      margin-top:28px;
                      padding-top:24px;
                      border-top:1px solid #333;
                      line-height:1.7;
                    "
                  >
                    ${safeMessage}
                  </div>
                </div>
              `,
            }),
        },
      );

    const result =
      await response.json();

    if (
      !response.ok
    ) {
      console.error(
        "Resend error:",
        result,
      );

      return json(
        {
          error:
            "Unable to send message.",
        },
        500,
        allowedOrigin,
      );
    }

    return json(
      {
        success: true,
      },
      200,
      allowedOrigin,
    );
  },
};