import React from 'react';
import s from '../../../features/components/HeaderContainer/Header/Header.module.css'

export const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.footerBlock}>
                    All rights reserved. {year}
                </div>
            </div>

        </div>
    );
};
