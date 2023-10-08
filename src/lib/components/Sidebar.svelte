<script>
    import {dashboardSelected} from "../../stores.js";
    import logo from '$lib/assets/logo.png'

</script>


<button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
    <span class="sr-only">Open sidebar</span>
    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
    </svg>
</button>

<aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div class="h-full px-3 py-4 overflow-y-auto bg-gray-100 dark:bg-gray-800">
        <a href="/" class="flex items-center pl-2.5 mb-5">
            <img src="{logo}" class="h-6 mr-3 sm:h-7" alt="EducaFácil Logo">
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-violet-900"></span>
        </a>
        <ul class="space-y-2 font-medium">
            <li>
                <a href="#" on:click={() => dashboardSelected.set('Maps')} class="flex items-center p-2 text-gray-900 rounded-lg  dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group">
                    <svg class="flex-shrink-0 text-violet-600 transition duration-75 dark:text-gray-400 group-hover:text-violet-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 2C7.589 2 4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12c0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4z"/>
                    </svg>
                    <span class="ml-3 indent-0">Maps</span>
                </a>
            </li>
            <li>
                <a href="#" on:click={() => dashboardSelected.set('List')} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group">
                    <svg class="flex-shrink-0 text-violet-600 transition duration-75 dark:text-gray-400 group-hover:text-violet-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48"><mask id="ipSNotebook0"><g fill="none" stroke-linejoin="round" stroke-width="4"><path fill="#fff" stroke="#fff" d="M10 6a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v36a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V6Z"/><path stroke="#000" stroke-linecap="round" d="M34 6v36"/>
                        <path stroke="#fff" stroke-linecap="round" d="M6 14h8M6 24h8M6 34h8M27 4h12M27 44h12"/></g></mask><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSNotebook0)"/>
                    </svg>
                    <span class="flex-1 ml-3 whitespace-nowrap indent-0.5">Escolas</span>
                </a>
            </li>
            <li>
                <a href="#" on:click={() => dashboardSelected.set('Profile')} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group">
                    <svg class="flex-shrink-0 text-violet-600 transition duration-75 dark:text-gray-400 group-hover:text-violet-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                    <span class="flex-1 ml-3 whitespace-nowrap indent-0">Perfil</span>
                </a>
            </li>
            <li>
                <a href="#" on:click={() => dashboardSelected.set('Config')} class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group">
                    <svg class="flex-shrink-0 text-violet-600 transition duration-75 dark:text-gray-400 group-hover:text-violet-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 36 36">
                        <path fill="currentColor" d="m32.57 15.72l-3.35-1a11.65 11.65 0 0 0-.95-2.33l1.64-3.07a.61.61 0 0 0-.11-.72l-2.39-2.4a.61.61 0 0 0-.72-.11l-3.05 1.63a11.62 11.62 0 0 0-2.36-1l-1-3.31a.61.61 0 0 0-.59-.41h-3.38a.61.61 0 0 0-.58.43l-1 3.3a11.63 11.63 0 0 0-2.38 1l-3-1.62a.61.61 0 0 0-.72.11L6.2 8.59a.61.61 0 0 0-.11.72l1.62 3a11.63 11.63 0 0 0-1 2.37l-3.31 1a.61.61 0 0 0-.43.58v3.38a.61.61 0 0 0 .43.58l3.33 1a11.62 11.62 0 0 0 1 2.33l-1.64 3.14a.61.61 0 0 0 .11.72l2.39 2.39a.61.61 0 0 0 .72.11l3.09-1.65a11.65 11.65 0 0 0 2.3.94l1 3.37a.61.61 0 0 0 .58.43h3.38a.61.61 0 0 0 .58-.43l1-3.38a11.63 11.63 0 0 0 2.28-.94l3.11 1.66a.61.61 0 0 0 .72-.11l2.39-2.39a.61.61 0 0 0 .11-.72l-1.66-3.1a11.63 11.63 0 0 0 .95-2.29l3.37-1a.61.61 0 0 0 .43-.58v-3.41a.61.61 0 0 0-.37-.59ZM18 23.5a5.5 5.5 0 1 1 5.5-5.5a5.5 5.5 0 0 1-5.5 5.5Z" class="clr-i-solid clr-i-solid-path-1"/>
                        <path fill="none" d="M0 0h36v36H0z"/>
                    </svg>
                    <span class="flex-1 ml-3 whitespace-nowrap indent-0">Configurações</span>
                </a>
            </li>
            <li>
                <a href="/user/logout" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group">
                    <svg class="flex-shrink-0 text-violet-600 transition duration-75 dark:text-gray-400 group-hover:text-violet-900 dark:group-hover:text-white" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V5q0-.825.588-1.413T5 3h7v2H5v14h7v2H5Zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5l-5 5Z"/>
                    </svg>
                    <span class="flex-1 ml-3 whitespace-nowrap indent-0">Sair</span>
                </a>
            </li>
        </ul>
    </div>
</aside>

<div class="p-4 sm:ml-64">
    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
        <slot name="main">
        </slot>
    </div>
</div>
