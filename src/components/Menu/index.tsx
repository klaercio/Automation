import IMenu from "../../interfaces/IMenu";
import style from './Menu.module.scss';

export default function Menu() {

    const menu = [{
        nome: 'Cadastro',
        subMenus: [{
            submenu: 'Produto',
            linkSubmenu: 'localhost/cadastro/produto',
        }, {
            submenu: 'Cliente',
            linkSubmenu: 'localhost/cadastro/cliente',
        },
        {
            submenu: 'Funcionário',
            linkSubmenu: 'localhost/cadastro/funcionário',
        },
        {
            submenu: 'Fornecedor',
            linkSubmenu: 'localhost/cadastro/fornecedor',
        }],
    }, 
    {
        nome: 'Estoque',
        subMenus: [{
            submenu: 'Consulta Produto',
            linkSubmenu: 'localhost/cadastro/consultaProduto',
        }]
    },
    {
        nome: 'Relatórios',
        subMenus: [{
            submenu: 'Vendas por produto',
            linkSubmenu: 'localhost/cadastro/vendasPorProduto',
        }]
    }];

    return (
        <div className={style.menu}>
            <ul>
                {menu.map(item => {
                  return( <li className={style.item}> <strong>{item.nome}</strong> <ul>{item.subMenus.map(itemSub => { return <li className={style.item}>{itemSub.submenu}</li>})}</ul></li>)
                })}
            </ul>
        </div>
    );
}