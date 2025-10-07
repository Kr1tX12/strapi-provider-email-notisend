interface Settings {
    defaultFrom: string;
    defaultReplyTo: string;
}
interface SendOptions {
    from?: string;
    to: string | string[];
    cc?: string | string[];
    bcc?: string | string[];
    replyTo?: string;
    subject: string;
    text?: string;
    html?: string;
    from_name?: string;
    payment?: string;
    smtp_headers?: Record<string, string>;
    attachments?: any[];
    [key: string]: unknown;
}
interface ProviderOptions {
    apiKey: string;
}
declare const _default: {
    init(providerOptions: ProviderOptions, settings: Settings): {
        send: (options: SendOptions) => Promise<void>;
    };
};
export = _default;
