export interface Chat {
    name: string;
    email: string;
}

export interface ChatType {
    [_id: string]: any;
    members: [Chat];
}
