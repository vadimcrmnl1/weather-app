import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import s from "./Navlink.module.css";

type NavLinkComponentPropsType = {
    path: string
    title: string
}

export const NavLinkComponent: FC<NavLinkComponentPropsType> = ({title, path}) => {
    return (
        <NavLink to={path} className={({isActive, isPending}) =>
            isPending ? s.isPending : isActive ? s.isActive : s.isPending}>{title}</NavLink>
    )
}