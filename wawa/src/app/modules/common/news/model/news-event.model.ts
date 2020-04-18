export enum NewsEventType
{
    DELETE='Delete'
}

export class NewsEvent
{
    constructor(
        public newsId: number,
        public eventName: NewsEventType)
    {}
}
