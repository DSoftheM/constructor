import { MouseEvent } from "react";
import { DropdownState } from "../../../types/Dropdown.type";
import './DropdownItem.scss';

interface DropdownItemProps {
    handleClick: () => void;
    text: string;
    isActive: boolean;
    checkMark: boolean;
    padding: number;
}

export default function DropdownItem({ handleClick, text, isActive, checkMark, padding }: DropdownItemProps) {
    const activeClass: string = `${checkMark ? 'active-check-mark' : 'active'}`;

    return (
        <>
            <li className={isActive ? activeClass : ''} onClick={handleClick} style={{ padding: padding + 'px' }}>
                <a href="#1">{text}</a>
            </li>
        </>
    );
};
