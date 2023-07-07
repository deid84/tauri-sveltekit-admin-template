<script lang="ts">
    import '../app.css';
    //import '$lib/css/style.css';
    import { fade } from 'svelte/transition';
    import Header from '$lib/components/layout/Header.svelte';
    import Sidebar from '$lib/components/layout/Sidebar.svelte';
    import ScrollToTop from '$lib/components/layout/ScrollToTop.svelte';

    let navOpen: boolean = false;
    let bg_colors = 'dark:bg-slate-950 bg-white';

    function sidebarHandler() {
        navOpen = !navOpen;
    }

    function handleNavWithKey(e: any) {
        console.log(e.code);
        if (e.code === 'F2') {
            navOpen = !navOpen;
        }
    }
</script>

<div class={bg_colors}>
    <div class="flex flex-nowrap">
        <ScrollToTop />
        <!-- Sidebar starts -->
        <div
            class="{navOpen
                ? '-left-0 sm:-left-80 md:w-0 border-none'
                : '-left-80 sm:-left-0 w-80 border-r'} z-40 fixed h-screen top-0 bg-slate-900 shadow-lg flex-col justify-between ease-out delay-15 duration-200 flex sm:relative border-gray-700"
        >
            {#if navOpen}
                <button
                    transition:fade={{
                        delay: 0,
                        duration: 250
                    }}
                    aria-label="toggle sidebar"
                    id="openSideBar"
                    class="md:hidden h-10 w-10 bg-slate-900 absolute right-0 mt-3 -mr-10 flex items-center shadow
								 justify-center cursor-pointer focus:outline-none rounded-tr rounded-br border-t border-r border-b border-gray-700"
                    on:click={() => sidebarHandler()}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-adjustments"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="#FFFFFF"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            {/if}
            <Sidebar />
        </div>
        <!-- Sidebar ends -->

        <!-- Body starts -->
        <div class="w-screen h-screen flex flex-col sm:overflow-y-auto">
            <Header on:toggleSidebar={sidebarHandler} />
            <slot />
        </div>
        <!-- Body ends -->
    </div>
</div>

<!-- Use keyboard to handle the sidenav -->
<svelte:window on:keydown={handleNavWithKey} />
