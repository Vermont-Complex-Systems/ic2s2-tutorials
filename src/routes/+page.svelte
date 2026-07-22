<script lang="ts">
	import { resolve } from '$app/paths';

	const storywrangler = resolve('/storywrangler');
</script>

<!-- The root forwards to the first tutorial (see +page.ts). This is a
     progressive-enhancement fallback in case the redirect does not fire. -->
<svelte:head>
	<meta http-equiv="refresh" content="0; url={storywrangler}" />
</svelte:head>

<p class="p-8 text-sm">
	Redirecting to the <a class="underline" href={storywrangler}>StoryWrangler tutorial</a>…
</p>
