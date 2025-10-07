"use strict";
module.exports = {
    init(providerOptions, settings) {
        const API_URL = "https://api.notisend.ru/v1/email/messages";
        return {
            send: async (options) => {
                const { from = settings.defaultFrom, replyTo = settings.defaultReplyTo, to, cc, bcc, subject, text, html, from_name, payment = "subscriber_priority", smtp_headers, attachments, ...rest } = options;
                try {
                    const payload = {
                        from_email: from,
                        from_name,
                        to: Array.isArray(to) ? to.join(",") : to,
                        subject,
                        text,
                        html,
                        payment,
                        smtp_headers,
                        ...rest,
                    };
                    const response = await fetch(API_URL, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${providerOptions.apiKey}`,
                        },
                        body: JSON.stringify(payload),
                    });
                    if (!response.ok) {
                        const errorText = await response.text();
                        console.error("Notisend email error:", errorText);
                        throw new Error(`Notisend API error (${response.status}): ${errorText}`);
                    }
                    const result = await response.json();
                    console.log("Notisend email sent:", result.status || "ok");
                }
                catch (error) {
                    console.error("Notisend email send failed:", error);
                    throw error;
                }
            },
        };
    },
};
