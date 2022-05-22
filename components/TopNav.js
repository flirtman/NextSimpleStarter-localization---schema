import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const TopNav = () => {
	const router = useRouter();

	return (
		<nav>
			<Link href="/">
				<a className={router.asPath === "/" ? "active" : ""}>Home</a>
			</Link>
			<Link href="/about">
				<a className={router.asPath === "/about" ? "active" : ""}>About</a>
			</Link>
		</nav>
	)
}

export default TopNav;
