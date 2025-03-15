import React from 'react';
import logo from '../../assets/logo/Logo.png'
import {NavLink} from 'react-router-dom';
import clsx from 'clsx';
import s from './Navigation.module.css'
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";

const Navigation = () => {
	const buildLinkClass = ({isActive}) => {
		return clsx(s.link, isActive && s.active)
	}
	return (
		<div className={s.container}>
			<img src={logo} alt="Logo"/>
			<nav className={s.nav}>
				<NavLink className={buildLinkClass} to='/'>Home</NavLink>
				<NavLink className={buildLinkClass} to='/shop'>Shop</NavLink>
				<NavLink className={buildLinkClass} to='/care'>Plant Care</NavLink>
				<NavLink className={buildLinkClass} to='blogs'>Blogs</NavLink>
			</nav>
			<div className={s.aside}>
				<CiSearch width={20} height={20}/>
				<CiShoppingCart width={20} height={20}/>
				<button className={s.btn}><CiLogin />Login</button>
			</div>
		</div>
	);
};

export default Navigation;