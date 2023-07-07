<script lang="ts">
    import { page } from '$app/stores';
    import logo from '$lib/images/logo.png';

    const menus = [
        {
            name: 'Dashboard',
            url: '/',
            svg: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
        },
        {
            name: 'Gateways',
            url: '/bs',
            svg: 'M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z'
        },
        {
            name: 'Logout',
            url: '/#',
            svg: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
        }
    ];

    $: currentPage = $page.url.pathname;
</script>

<div class="px-0">
    <div class="px-8 pt-2 w-full flex items-center h-20">
        <img src={logo} alt="logo" class="w-8" />
        <p class="pl-3 mt-2 text-xl text-gray-300 font-medium">
            Wine Diagnostic
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
