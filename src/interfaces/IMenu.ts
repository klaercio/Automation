import ISubmenu from "./ISubmenu";

export default interface IMenu{
    nome: string;
    submMenus: ISubmenu[];
}