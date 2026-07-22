import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true,
				experimental: { async: true }
			},
			adapter: adapter(),
			// This experimental SvelteKit replaced the built-in `$lib` alias with `#lib`.
			// shadcn-svelte components import from `$lib`, so register it explicitly.
			alias: {
				$lib: 'src/lib',
				'$lib/*': 'src/lib/*'
			},
			// GitHub Pages serves project sites under /<repo>. The CI workflow sets
			// BASE_PATH; locally it stays '' so `npm run dev` works at the root.
			paths: {
				base: (process.env.BASE_PATH || '') as '' | `/${string}`
			},
			experimental: { remoteFunctions: true }
		})
	]
});
