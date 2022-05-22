import React from "react";
import { useRouter } from "next/router";

const LangSwitcher = () => {
	const router = useRouter();

	const handleLocaleChange = (event) => {
		const value = event.target.value;

		router.push(router.route, router.asPath, {
			locale: value,
		});
	};
	return (
		<select onChange={handleLocaleChange} value={router.locale}>
			<option value="en">English</option>
			<option value="fr">French</option>
		</select>
	)
}

export default LangSwitcher;
