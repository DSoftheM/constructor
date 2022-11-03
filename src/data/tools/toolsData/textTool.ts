import { IToolData } from "../../../types/ToolData.interface";

interface ITextToolData extends IToolData { }

export const textToolDropdownImg: string = 'img/T.svg';

export const textToolData: ITextToolData[] = [
    {
        id: 1,
        imgPath: './img/T.svg',
        text: 'Текст'
    },
    {
        id: 2,
        imgPath: './img/T-underline.svg',
        text: 'Ссылка'
    },
    {
        id: 3,
        imgPath: './img/T-double.svg',
        text: 'Заголовок'
    },
    {
        id: 4,
        imgPath: './img/S-double.svg',
        text: 'Параграф'
    },
];