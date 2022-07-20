import style from './header.module.scss';
import IEmpresa from '../../interfaces/IEmpresa';

export default function Header(empresa: IEmpresa) {
    return (
        <div className={style.cabecalho}>
            <div>
                <img src='empresa.logo'></img>
            </div>
            <div>
                <h3>{empresa.nome}</h3>
            </div>
            <div>
                <h3>{empresa.razao}</h3>
            </div>
        </div>

    );
}