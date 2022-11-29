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
  'inline-block',
  'flex',
  'inline-flex',
  'grid',
  'inline-grid',
  'none',
  'contents',
  'table',
  'table-row',
  'list-item',
  'inherit',
  'initial',
  'revert',
  'revert-layer',
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
            <input className="meaning-margin-left meaning-margin" type="text" placeholder="0"></input>
            <input className="meaning-margin-up meaning-margin" type="text" placeholder="0"></input>
            <input className="meaning-margin-right meaning-margin" type="text" placeholder="0"></input>
            <input className="meaning-margin-down meaning-margin" type="text" placeholder="0"></input>
            <div className="border-border">
              <div className="border">border</div>
              <input className="meaning-border-left meaning-margin" type="text" placeholder="0"></input>
              <input className="meaning-border-up meaning-margin" type="text" placeholder="0"></input>
              <input className="meaning-border-right meaning-margin" type="text" placeholder="0"></input>
              <input className="meaning-border-down meaning-margin" type="text" placeholder="0"></input>
              <div className="border-padding">
                <div className="padding">padding</div>
                <input className="meaning-padding-left meaning-margin" type="text" placeholder="0"></input>
                <input className="meaning-padding-up meaning-margin" type="text" placeholder="0"></input>
                <input className="meaning-padding-right meaning-margin" type="text" placeholder="0"></input>
                <input className="meaning-padding-down meaning-margin" type="text" placeholder="0"></input>
                <div className="border-size-block">
                  <div className="size-block">
                    <input className="size-left" type="text" placeholder="0"/>
                    <span className="span_size">×</span>
                    <input className="size-right" type="text" placeholder="0"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
