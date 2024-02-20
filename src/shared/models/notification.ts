export type NotificationItem = {
    uuid: string;
    type: 'success' | 'error';
    message: string;
};

export type Notification = {
    items: Array<NotificationItem>;
};
