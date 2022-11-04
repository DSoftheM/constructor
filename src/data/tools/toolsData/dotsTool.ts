import { Icon } from "../../../enums/Icons";
import { IToolData } from "../../../types/ToolData.interface";

interface IDotsToolData extends IToolData { }

export const dotsToolDropdownImg: string = Icon.Dots;

export const dotsToolData: IDotsToolData[] = [
    {
        id: 1,
        imgPath: Icon.Img,
        text: 'Изображение'
    },
    {
        id: 2,
        imgPath: Icon.Audio,
        text: 'Аудио'
    },
    {
        id: 3,
        imgPath: Icon.Video,
        text: 'Видео'
    },
    {
        id: 4,
        imgPath: Icon.Canvas,
        text: 'Холст'
    },
];