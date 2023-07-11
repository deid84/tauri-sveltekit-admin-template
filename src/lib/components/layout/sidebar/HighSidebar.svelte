<script lang="ts">
    import { page } from '$app/stores';
    import logo from '$lib/images/logo.png';

    const menus = [
        {
            name: 'Home',
            url: '/',
            svg: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
        },
        {
            name: 'About',
            url: '/about',
            svg: 'M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
        },
        {
            name: 'Contacts',
            url: '/contacts',
            svg: 'M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
        }
    ];

    $: currentPage = $page.url.pathname;
</script>

<div class="px-0">
    <div class="px-8 pt-2 w-full flex items-center h-20">
        <img src={logo} alt="logo" class="w-8" />
        <p class="pl-3 mt-2 text-xl text-gray-300 font-medium">
            Tauri + SvelteKit
        </p>
    </div>
    <ul class="mt-12 px-3 text-gray-300 font-medium">
        {#each menus as { name, url, svg }}
            <li
                class="flex justify-between cursor-pointer items-center hover:bg-gray-700 rounded-md mt-1 {url ===
                currentPage
                    ? 'bg-gray-700'
                    : 'bg-gray-900'}"
            >
                <a
                    href={url}
                    class="flex items-center w-full focus:text-gray-200 p-3"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="icon icon-tabler icon-tabler-grid"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d={svg} />
                    </svg>
                    <span class="text-base ml-3">{name}</span>
                </a>
            </li>
        {/each}
    </ul>
</div>
