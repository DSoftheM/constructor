import { ISettingsItem } from "../../../../types/SettingsItem.interface";
import Dropdown from "../../../Dropdown/Dropdown";
import './Layout.scss';

interface LayoutProps extends ISettingsItem {
  count: number;
  title: string;
}

const pages: string[] = [
  'block',
  'inline',
  'block2',
  'flex',
  'flex2',
  'grid',
  'grid2',
  'none',
  'contents',
  'table',
  'row',
  'item',
  'inherit',
  'initial',
  'revert',
  'layer',
  'unset'
];

export default function Layout({ count, title }: LayoutProps): JSX.Element {
  return (
    <>
      <div className="line-block"></div>
      <section className={`settings-item add-input padding-none`}>
        <header className="add-input__header">
          <h3>{title}</h3>
        </header>
        <div className="seldiv">
          <div className="display-div">
            <span>display: </span>
            <Dropdown pagesCount={-1} title="" padding={5} checkMark pages={pages} />
          </div>
          <div className="border-margin">
            <div className="margin">margin</div>
            <input className="meaning-margin-left" type="text" placeholder="0"></input>
            <input className="meaning-margin-up" type="text" placeholder="0"></input>
            <input className="meaning-margin-right" type="text" placeholder="0"></input>
            <input className="meaning-margin-down" type="text" placeholder="0"></input>
            <div className="border-border">
              <div className="border">border</div>
              <div className="border-padding">
                <div className="padding">padding</div>
                <div className="border-size-block">
                  <div className="size-block">size-block</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
