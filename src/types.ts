import {Dayjs} from "dayjs";

export interface IEvent {
    id: number;
    title: string;
    ticketLink: string;
    eventLink: string;
    //dateTime: Dayjs;
    //duration: number;
    //rating: number;
    imageLink: string;
    type: string;
    description: string;
    /** Дата и время в одной строке, например «1.06 16:00» */
    eventDateTime?: string;
    /** Цветная метка (площадка) */
    tagVenue?: string;
}


export interface IApiEvent {
    ID: string;
    IBLOCK_ID: string;
    NAME: string;
    IBLOCK_SECTION_ID: null | string;
    CREATED_BY: string;
    BP_PUBLISHED: string;
    CODE: null | string;
    PROPERTY_326: string;
    PROPERTY_327: string;
    PROPERTY_328: string;
    PROPERTY_329: string;
    PROPERTY_330: string;
    PROPERTY_332: string;
    PROPERTY_333: string;
    PROPERTY_334: string;

}