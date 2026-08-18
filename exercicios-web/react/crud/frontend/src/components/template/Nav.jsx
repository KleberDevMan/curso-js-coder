import './Nav.css'
import React from 'react'
import NavItem from './NavItem'

export default () =>
    <aside className="menu-area">
        <nav className="menu">
            <NavItem to="/" icon="fa fa-home" label="Início" />
            <NavItem to="/users" icon="fa fa-users" label="Usuários" />
        </nav>
    </aside>
