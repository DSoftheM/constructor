import { useState, MouseEvent } from 'react';
import { Icon } from '../../enums/Icons';
import { DropdownState } from '../../types/Dropdown.type';
import './Dropdown.scss';
import DropdownItem from './DropdownItem/DropdownItem';

interface DropdownProps {
    title: string;
    pagesCount: number;
    pages?: string[];
    dropdownArrow?: boolean
}

export default function Dropdown({ title, pagesCount, pages, dropdownArrow = true }: DropdownProps) {
    const [activePage, setActivePage] = useState<string | number>(pages ? pages[0] : 1);
    const selected: string = `${title} ${activePage}`;

    const handleClick = (page: string | number) => {
        setActivePage(page);
    };

    return (
        <>
            <div className="dropdown">
                <div className="dropdown__img">
                    {selected}
                    {dropdownArrow && <img src={Icon.Arrow} alt="arrow down" />}
                </div>
                <ul>
                    {
                        pages ? pages.map((page, index) =>
                            <DropdownItem
                                key={index}
                                title={title}
                                handleClick={handleClick}
                                page={page}
                                isActive={page === activePage}
                            />
                        ) : Array(pagesCount)
                            .fill(null)
                            .map((_, index) =>
                                <DropdownItem
                                    key={index}
                                    title={title}
                                    handleClick={handleClick}
                                    page={index + 1}
                                    isActive={index + 1 === activePage}
                                />
                            )
                    }
                </ul>
            </div>
        </>
    );
};
