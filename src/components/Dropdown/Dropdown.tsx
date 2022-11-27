import { useState, MouseEvent } from 'react';
import { Icon } from '../../enums/Icons';
import { DropdownState } from '../../types/Dropdown.type';
import './Dropdown.scss';
import DropdownItem from './DropdownItem/DropdownItem';

interface DropdownProps {
    title: string;
    pagesCount: number;
    pages?: string[];
    dropdownArrow?: boolean;
    checkMark?: boolean;
    padding?: number;
}

export default function Dropdown({ title, pagesCount, pages, dropdownArrow = true, checkMark = false, padding = 10 }: DropdownProps) {
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
                                handleClick={() => handleClick(page)}
                                isActive={page === activePage}
                                padding={padding}
                                checkMark={checkMark}
                                text={page}
                            />
                        ) : Array(pagesCount)
                            .fill(null)
                            .map((_, index) =>
                                <DropdownItem
                                    key={index}
                                    handleClick={() => handleClick(index + 1)}
                                    text={title + " " + (index + 1)}
                                    isActive={index + 1 === activePage}
                                    padding={padding}
                                    checkMark={checkMark}
                                />
                            )
                    }
                </ul>
            </div>
        </>
    );
};
