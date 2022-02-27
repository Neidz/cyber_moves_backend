export interface verificationRequest {
    headers: {
        token: string;
    };
    user: {
        isAdmin: boolean;
        id: string;
    };
}
