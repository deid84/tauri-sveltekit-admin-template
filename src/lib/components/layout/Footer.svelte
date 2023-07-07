<script lang="ts">
	import node_logo from '$lib/images/node.png';
	import svelte_logo from '$lib/images/svelte.png';

	const date = new Date().getFullYear();
</script>

<!-- Footer starts -->
<footer
	class="fixed bottom-0 right-0 h-16 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
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
				href="http://www.capetti.it/"
				target="blank">Capetti Elettronica S.r.l.</a
			>
		</div>
		<div class="flex mr-2">
			<img src={node_logo} alt="nodejs" title="Node.js" class=" my-2 mr-2" />
			<img src={svelte_logo} alt="sveltejs" title="Svelte" class=" my-2" />
		</div>
	</div>
</footer>
<!-- Footer ends -->
