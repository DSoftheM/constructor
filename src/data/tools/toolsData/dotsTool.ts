import { IToolData } from "../../../types/ToolData.interface";

interface IDotsToolData extends IToolData { }

export const dotsToolDropdownImg: string = 'img/dots.svg';

export const dotsToolData: IDotsToolData[] = [
    {
        id: 1,
        imgPath: './img/img.svg',
        text: 'Изображение'
    },
    {
        id: 2,
        imgPath: './img/audio.svg',
        text: 'Аудио'
    },
    {
        id: 3,
        imgPath: './img/video.svg',
        text: 'Видео'
    },
    {
        id: 4,
        imgPath: './img/canvas.svg',
        text: 'Холст'
    },
];