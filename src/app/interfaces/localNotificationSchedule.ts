export interface LocalNotificationSchedule {
  at?: Date;
  repeats?: boolean;
  every?: 'year'|'month'|'two-weeks'|'week'|'day'|'hour'|'minute'|'second';
  count?: number;
  on?: {
    year?: number;
    month?: number;
    day?: number;
    hour?: number;
    minute?: number;
  };
}
