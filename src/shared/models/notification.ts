export type NotificationItem = {
    type: 'success' | 'error';
    message: string;
};

export type Notification = {
    items: Array<NotificationItem>;
};
