import { Icon } from "../../../enums/Icons";
import { IToolData } from "../../../types/ToolData.interface";

interface IBoxToolData extends IToolData { }

export const boxToolDropdownImg: string = Icon.Box;

export const boxToolData: IBoxToolData[] = [
    {
        id: 1,
        imgPath: Icon.Box,
        text: 'Секция'
    },
    {
        id: 2,
        imgPath: Icon.Article,
        text: 'Статья'
    },
    {
        id: 3,
        imgPath: Icon.Iframe,
        text: 'IFrame'
    }
];