<script lang="ts">
	export let items: { id: number; name: string; url: string }[];
</script>

<div class="h-16 m-6 px-5 py-3 rounded-lg dark:border-gray-700 bg-white dark:bg-gray-800 flex">
	<ol class="inline-flex items-center space-x-1 md:space-x-3">
		{#each items as item}
			<li class="inline-flex items-center">
				{#if item.url != ''}
					<a
						href={item.url}
						class="inline-flex items-center text-base font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
					>
						<svg
							class="w-4 h-4 mr-2"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							{#if item.id == 0}
								<path
									d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
								/>
							{:else}
								<path
									fill-rule="evenodd"
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clip-rule="evenodd"
								/>
							{/if}
						</svg>
						{item.name}
					</a>
				{:else}
					<div class="flex items-center">
						<svg
							class="w-4 h-4 text-gray-400"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							{#if item.id == 0}
								<path
									d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
								/>
							{:else}
								<path
									fill-rule="evenodd"
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clip-rule="evenodd"
								/>
							{/if}
						</svg>
						<span
							class="ml-1 text-base font-medium text-gray-500 md:ml-2 dark:text-gray-300"
							>{item.name}</span
						>
					</div>
				{/if}
			</li>
		{/each}
	</ol>
</div>
