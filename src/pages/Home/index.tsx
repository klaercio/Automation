import Header from '../../components/Header';
import Menu from '../../components/Menu';
import { menu } from '../../components/Menu/menu';
export default function Home() {

    return (
        <div>
            <Header nome='google' razao='google'/>
            <Menu menu={menu}></Menu>
            Teste  de aparecimento
        </div>
    );
}