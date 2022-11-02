import { MouseEvent } from "react";
import { DropdownState } from "../../../types/Dropdown.type";

interface DropdownItemProps {
    title: string;
    handleClick: (page: string | number) => void;
    page: string | number;
    isActive: boolean;
}

export default function DropdownItem({ title, handleClick, page, isActive }: DropdownItemProps) {

    return (
        <>
            <li className={isActive ? "active" : ""} onClick={() => handleClick(page)}>
                <a href="#1">{`${title} ${page}`}</a>
            </li>
        </>
    );
};
