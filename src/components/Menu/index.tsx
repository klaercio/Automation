import IMenu from "../../interfaces/IMenu";
import style from './Menu.module.scss';

export default function Menu(menu: IMenu[]) {
    return (
        <div className={style.menu}>
            <ul>
                {menu.map(item => {
                  return( <li> <strong>{item.nome}</strong> {item.submMenus.map(itemSub => { return <li>itemSub.submenu</li>})}</li>)
                })}
            </ul>
        </div>
    );
}