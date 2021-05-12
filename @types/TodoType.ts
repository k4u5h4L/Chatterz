interface Todo {
    desc: string;
    status: boolean;
}

export interface TodoType {
    email: string;
    list: [Todo];
}
