// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const themes = require('prism-react-renderer').themes;
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const userWidgetInlinePlugin = require('./src/plugins/userWidgetInlinePlugin');
const inviteWidgetPlugin = require('./src/plugins/inviteWidgetPlugin');
const linebreakPlugins = require('./src/plugins/linebreakPlugin');
const blogAuthorWidgetPlugin = require('./src/plugins/blogAuthorWidgetPlugin');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'White Market Wiki',
	tagline:
		'Офіційна вікі гри White Market.',
	url: 'https://example.com',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.png',
	organizationName: 'White-Heart-Dev',
	projectName: 'White-Market-Wiki',

	i18n: {
		defaultLocale: "uk",
		locales: ["uk"]
	  },

	presets: [
		[
			'@docusaurus/preset-classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/liubquanti-dev/White-Market-Wiki/edit/main/',
					path: 'wiki',
					routeBasePath: '/',
					remarkPlugins: [linebreakPlugins, inviteWidgetPlugin, userWidgetInlinePlugin],
				},
				blog: {
					path: 'blog',
					routeBasePath: '/blog/',
					showReadingTime: true,
					remarkPlugins: [
						linebreakPlugins,
						inviteWidgetPlugin,
						blogAuthorWidgetPlugin,
						userWidgetInlinePlugin,
					],
				},
				theme: {
					customCss: [
						require.resolve('inter-ui/inter.css'),
						require.resolve('./src/css/custom.css'),
					],
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// We don't set the description and title here to assure that the right og:tags will be delivered per page.
			metadata: [
				{
					name: 'og:image',
					content: 'img/logo-background.png',
				},
				{
					name: 'theme-color',
					content: '#c4a26e',
				},
				{
					name: 'twitter:card',
					content: 'summary',
				},
			],
			colorMode: {
				defaultMode: 'dark',
				disableSwitch: false,
				respectPrefersColorScheme: true,
			},
			navbar: {
				title: 'White Market Wiki',
				logo: {
					alt: 'Логотип White Market',
					src: 'img/logo-small.png',
					href: '/',
				},
				items: [
					{
						to: '/',
						label: 'Вікі',
						position: 'left',
					},
					{
						to: 'blog',
						label: 'Блог',
						position: 'left',
					},
					{
						href: 'https://github.com/liubquanti-dev/White-Market-Wiki',
						className: 'navbar-item-github',
						position: 'right',
					},
					{
						href: 'https://discord.gg/TYs8FjvzFf',
						className: 'navbar-item-discord',
						position: 'right',
					},
					{
						type: 'localeDropdown',
						position: 'right',
					}
				],
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
			algolia: {
				// The application ID provided by Algolia
				appId: 'KO08RT1BUB',

				// Public API key: it is safe to commit it
				apiKey: '90b11a8ac9c24d6fc6aa7aa88c159215',

				indexName: 'discordresources',
			},
		}),
};

module.exports = config;