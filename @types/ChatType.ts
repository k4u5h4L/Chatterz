export interface Chat {
    name: string;
    email: string;
}

export interface Message {
    from: string;
    content: string;
    date: string;
    sentiment?: number;
}

export interface ChatType {
    // [_id: string]: any;
    chatId: string;
    members: [Chat];
    messages: [Message];
}
