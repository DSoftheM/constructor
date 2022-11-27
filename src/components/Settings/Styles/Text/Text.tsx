import { ISettingsItem } from "../../../../types/SettingsItem.interface";
import './Text.scss';

interface TextProps extends ISettingsItem {
  count: number;
  title: string;
}

export default function Text({ count, title }: TextProps): JSX.Element {
  return (
    <>
      <div className="line-block"></div>
      <section className={`settings-item add-input padding-none`}>
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
            <li>font-style:
              <select id="selecttheme">
                <option value="normal">normal</option>
                <option value="italic">italic</option>
              </select>
            </li>
            <li>font-stretch:
              <select id="selecttheme">
                <option value="normal">normal</option>
                <option value="semi condensed">semi condensed</option>
                <option value="condensed">condensed</option>
                <option value="extra-condensed">extra-condensed</option>
                <option value="ultra-condensed">ultra-condensed</option>
                <option value="semi-expanded">semi-expanded</option>
                <option value="extra-expanded">extra-expanded</option>
                <option value="ultra-expanded">ultra-expanded</option>
              </select>
            </li>
            <li>text-align:
              <select id="selecttheme">
                <option value="initial">initial</option>
                <option value="inherit">inherit</option>
                <option value="unset">unset</option>
                <option value="left">left</option>
                <option value="right">right</option>
                <option value="center">center</option>
                <option value="start">start</option>
                <option value="end">end</option>
                <option value="justify">justify</option>
              </select>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

