import { ISettingsItem } from "../../../../types/SettingsItem.interface";
import Dropdown from "../../../Dropdown/Dropdown";
import './Text.scss';

interface TextProps extends ISettingsItem {
  count: number;
  title: string;
}


const style: string[] = [
  'normal',
  'italic',
];

const stretch: string[] = [
  'normal',
  'semi condensed',
  'condensed',
  'extra-condensed',
  'ultra-condensed',
  'semi-expanded',
  'extra-expanded',
  'ultra-expanded',
];

const align: string[] = [
  'initial',
  'inherit',
  'unset',
  'left',
  'right',
  'center',
  'start',
  'end',
  'justify',
];

export default function Text({ count, title }: TextProps): JSX.Element {
  return (
    <>
      <section className={`new-line padding-none`}>
        <header className="add-input__header">
          <h3>{title}</h3>
        </header>
        <div className="seldiv-text">
          <ul className="ul-input">
            <input className="input-text" type="text" placeholder="Ввод" />
            <input className="input-text" type="text" placeholder="Ввод" />
            <input className="input-text" type="text" placeholder="Ввод" />
            <input className="input-text" type="text" placeholder="Ввод" />
          </ul>
          <ul>
            <li className="name-input">font-family: </li>
            <li className="name-input">font-weight: </li>
            <li className="name-input">font-size: </li>
            <li className="name-input">font-height: </li>
            <li className="li-span">
              <span>font-style: </span>
              <div className="Dropdown_font-style seldiv-text-dropdown">
                <Dropdown pagesCount={-1} title="" padding={5} checkMark pages={style} />
              </div>
            </li>
            <li className="li-span">
              <span>font-stretch: </span>
              <div className="Dropdown_font-style seldiv-text-dropdown">
                <Dropdown pagesCount={-1} title="" padding={5} checkMark pages={stretch} />
              </div>
            </li>
            <li className="li-span">
              <span>font-align: </span>
              <div className="Dropdown_font-style seldiv-text-dropdown">
                <Dropdown pagesCount={-1} title="" padding={5} checkMark pages={align} />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

