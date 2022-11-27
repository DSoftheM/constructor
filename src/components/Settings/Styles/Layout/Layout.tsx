import { ISettingsItem } from "../../../../types/SettingsItem.interface";
import './Layout.scss';

interface LayoutProps extends ISettingsItem {
  count: number;
  title: string;
}

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
            <label>display: </label>
            <select id="selecttheme">
              <option value="block">block</option>
              <option value="inline">inline</option>
              <option value="inline-block">inline-block</option>
              <option value="flex">flex</option>
              <option value="inline-flex">inline-flex</option>
              <option value="grid">grid</option>
              <option value="inline-grid">inline-grid</option>
              <option value="none">none</option>
              <option value="contents">contents</option>
              <option value="table">table</option>
              <option value="table-row">table-row</option>
              <option value="list-item">list-item</option>
              <option value="inherit">inherit</option>
              <option value="initial">initial</option>
              <option value="revert">revert</option>
              <option value="revert-layer">revert-layer</option>
              <option value="unset">unset</option>
            </select>
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
