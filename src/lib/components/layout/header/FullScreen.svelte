<script lang="ts">
	import { onMount } from 'svelte';
	const open =
		'M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15';
	const close =
		'M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25';
	let element: HTMLElement;
	let fullScreen = false;

	onMount(() => {
		element = document.documentElement;
	});

	function toggleFullscreen(): void {
		fullScreen = !fullScreen;

		if (fullScreen) {
			element.requestFullscreen();
		} else {
			document.exitFullscreen();
		}
	}
</script>

<div class="flex items-center">
	<button
		aria-label="open logs"
		class="flex items-center m-3 p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full active:bg-gray-300 dark:active:bg-gray-600"
		on:click={toggleFullscreen}
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
			<path stroke-linecap="round" stroke-linejoin="round" d={fullScreen ? close : open} />
		</svg>
	</button>
</div>
