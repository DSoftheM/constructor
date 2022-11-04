import { Icon } from "../../../enums/Icons";
import { IToolData } from "../../../types/ToolData.interface";

interface ITextToolData extends IToolData { }

export const textToolDropdownImg: string = Icon.T;

export const textToolData: ITextToolData[] = [
    {
        id: 1,
        imgPath: Icon.T,
        text: 'Текст'
    },
    {
        id: 2,
        imgPath: Icon.TUnderline,
        text: 'Ссылка'
    },
    {
        id: 3,
        imgPath: Icon.TDouble,
        text: 'Заголовок'
    },
    {
        id: 4,
        imgPath: Icon.SDouble,
        text: 'Параграф'
    },
];