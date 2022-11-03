import { IToolData } from "../../../types/ToolData.interface";

interface IBoxToolData extends IToolData { }

export const boxToolDropdownImg: string = 'img/box.svg';

export const boxToolData: IBoxToolData[] = [
    {
        id: 1,
        imgPath: './img/box.svg',
        text: 'Секция'
    },
    {
        id: 2,
        imgPath: './img/article.svg',
        text: 'Статья'
    },
    {
        id: 3,
        imgPath: './img/iframe.svg',
        text: 'IFrame'
    }
];