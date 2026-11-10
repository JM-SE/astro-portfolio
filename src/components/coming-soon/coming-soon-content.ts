// Single source of truth for the coming-soon terminal page.
// Keep ALL copy here — components stay presentational.

export type TermLine = {
	prompt: string;
	command: string;
	output: string;
};

export type SocialLink = {
	label: string;
	href: string;
	icon: 'github' | 'linkedin';
};

export const TERMINAL_TITLE = '~/portfolio — zsh';

export const TERMINAL_LINES: TermLine[] = [
	{
		prompt: '$',
		command: 'whoami',
		output: 'José María SE — software engineer (yes, the genius kind)',
	},
	{
		prompt: '$',
		command: 'cat status.txt',
		output: 'portfolio v2: brewing... ██████░░░░ 68% — adding awesome',
	},
	{
		prompt: '$',
		command: 'npm run deploy --future',
		output: 'compiling brilliance... grab a coffee ☕ (deploy pending)',
	},
];

export const TECH_BADGES: string[] = ['Astro', 'TypeScript', 'Cloudflare Workers'];

export const SOCIAL_LINKS: SocialLink[] = [
	{ label: 'GitHub', href: 'https://github.com/JM-SE', icon: 'github' },
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/josemariasilvaezpeleta/',
		icon: 'linkedin',
	},
];

export const FOOTER_JOKE = '// TODO: finish portfolio before the coffee gets cold';
