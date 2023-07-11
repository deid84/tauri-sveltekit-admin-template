<script lang="ts">
	import node_logo from '$lib/images/tauri.png';
	import svelte_logo from '$lib/images/svelte.png';

	const date = new Date().getFullYear();
</script>

<!-- Footer starts -->
<footer
	class="fixed bottom-0 right-14 h-16"
>
	<!-- <div class="flex-none"> -->
	<div
		class="flex justify-between text-gray-600 dark:text-gray-300 text-center"
	>
		<div />
		<div class="m-4 leading-loose">
			<span>© {date} Copyright:</span>
			<a
				class="text-gray-700 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
				href="#"
				target="blank">Your Brand</a
			>
		</div>
		<div class="flex mr-2">
			<img src={node_logo} alt="tauri" title="Tauri" class=" my-2 mr-2" />
			<img src={svelte_logo} alt="sveltejs" title="Svelte" class=" my-2" />
		</div>
	</div>
</footer>
<!-- Footer ends -->
