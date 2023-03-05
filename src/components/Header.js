import { NavLink } from "react-router-dom"
import "../styles/Header/header.css"

const namePaths = [
    { id: 1, title: "Главная", path: "/" },
    { id: 2, title: "Корзина", path: "/basket" },
    { id: 3, title: "Акции", path: "/action" },
    { id: 4, title: "Популярные", path: "/populars" },
    { id: 5, title: "Новинки", path: "/new" },
    { id: 6, title: "Новости", path: "/news" },
    { id: 7, title: "О", path: "/about" },
    { id: 8, title: "Контакты", path: "/contact" },
]

function Header() {


    return (
        <nav className='nav'>
            {namePaths.map(({ id, title, path }) => {
                return (
                    <NavLink key={id} to={path}>
                        {title}
                    </NavLink>
                )
            })}


            <NavLink className='right' to={"/info"}>
                Инфо
            </NavLink>
            <NavLink to={"/call"}>
                Позвонить
            </NavLink>
        </nav >
    )
}

export default Header