import { NotificationType } from '@/shared/configs/notification';

export type NotificationItem = {
    uuid: string;
    type: NotificationType.SUCCESS | NotificationType.ERROR;
    message: string;
};

export type Notification = {
    items: Array<NotificationItem>;
};
