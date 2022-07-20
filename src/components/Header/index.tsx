import style from './header.module.scss';

export default function Header() {
    return (
        <div className={style.cabecalho}>
            <div>
                Logo
            </div>
            <div>
                Nome Empresa
            </div>
            <div>
                Razão social Empresa
            </div>
        </div>

    );
}