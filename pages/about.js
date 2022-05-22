import React from "react";
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useRouter } from "next/router";
import LangSwitcher from "../components/LangSwitcher";
import TopNav from "../components/TopNav";

const jsonData = {
	"@context": "https://schema.org",
	"@type": "Organization",
	"name": "App Name",
	"alternateName": "App Name Corporation Inc.",
	"url": "https://www.mywebsite.com/",
	"logo": "https://www.mywebsite.com/images.logo.webp",
	"contactPoint": {
		"@type": "ContactPoint",
		"telephone": "5555555555",
		"contactType": "customer service",
		"areaServed": "CA",
		"availableLanguage": "en"
	}
};

const HomePage = () => {
	const { t } = useTranslation('common')
	const { locale } = useRouter()
	return (
		<div>
			<Head>
				<title>My page title</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<script
					type="application/ld+json"
					key="item-jsonld"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData) }}
				/>
			</Head>
			<TopNav/>
			<h1>About Page</h1>
			<p>paragraph goes here</p>
			<p>Chosen lang: {locale}</p>
			<p>{t('common:title')}</p>
			<LangSwitcher/>
		</div>
	);
};


// export const getStaticProps = async ({ locales }) => ({
// 	props: {
// 		...await serverSideTranslations(locales, ['common'], nextI18NextConfig)
// 	}
// });

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		}
	}
}
export default HomePage;

