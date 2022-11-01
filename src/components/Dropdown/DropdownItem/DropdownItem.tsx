import { MouseEvent } from "react";
import { DropdownState } from "../../../types/Dropdown.type";

interface DropdownItemProps {
    title: string;
    handleClick: (page: string | number) => void;
    page: string | number
}

export default function DropdownItem({ title, handleClick, page }: DropdownItemProps) {
    return (
        <>
            <li onClick={() => handleClick(page)}>
                <a href="#1">{`${title} ${page}`}</a>
            </li>
        </>
    );
};
