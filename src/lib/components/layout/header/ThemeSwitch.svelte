<script lang="ts">
	import { onMount } from 'svelte';
	const light =
		'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z';
	const dark =
		'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z';
	let darkMode: boolean;

	onMount(() => {
		darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
	});

	function handleSwitchDarkMode() {
		darkMode = !darkMode;

		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}
</script>

<div class="flex items-center">
	<button
		aria-label="open logs"
		class="flex items-center m-3 p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full active:bg-gray-300 dark:active:bg-gray-600"
		on:click={handleSwitchDarkMode}
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="icon icon-tabler icon-tabler-archive"
			width="20"
			height="20"
			viewBox="0 0 24 24"
			stroke-width="2"
			stroke="currentColor"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d={darkMode ? dark : light} />
		</svg>
	</button>
</div>
