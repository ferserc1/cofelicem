<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.svg';
	import logo_mini from '$lib/images/logo_mini.svg';
	import FacebookLogo from '$lib/images/FbLogo.svelte';
	import InstagramLogo from '$lib/images/InstagramLogo.svelte';
	import MobileMenuIcon from '$lib/images/MobileMenuIcon.svelte';
	import CloseIcon from '$lib/images/CloseIcon.svelte';

	export let pages = [];

	let mobileMenuOpen = false;
</script>

<header>
	<div class="logo-container">
		<a href="/">
			<img src={logo} alt="cofelicem" class="logo-desktop"/>
			<img src={logo_mini} alt="cofelicem" class="logo-mobile"/>
		</a>
	</div>

	<nav class="{ mobileMenuOpen ? 'menu-open' : '' } menu">
		<ul>
			{#each pages as pageData}
				<li aria-current={$page.url.pathname === pageData.path ? 'page' : undefined}>
					<a href={pageData.path} on:click={() => mobileMenuOpen = false }>{pageData.title}</a>
				</li>
			{/each}
		</ul>
	</nav>

	<div class="social-desktop">
		<a href="https://www.instagram.com/cofelicem/" target="_blank" rel="noreferrer">
			<InstagramLogo fill="white" />
		</a>
		<a href="https://www.facebook.com/profile.php?id=100088804275407" target="_blank" rel="noreferrer">
			<FacebookLogo fill="white" />
		</a>
	</div>

	<div class="menu-toggle">
		<button on:click={() => mobileMenuOpen = !mobileMenuOpen }>
			{#if mobileMenuOpen}
				<CloseIcon fill="var(--main-color)"/>
			{:else}
				<MobileMenuIcon fill="var(--main-color)"/>
			{/if}
		</button>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	/* Definiciones para mobil */
	@media (max-width: 640px) {
		:root {
			--menu-height: 80px;
		}

		header {
			align-items: center;
			background-color: white;
			height: var(--menu-height);
			border-bottom: 1px solid var(--secondary-color);
		}
	
		nav.menu {
			position: absolute;
			left: 0px;
			top: calc(var(--menu-height) + 1px);
			width: 100%;
			background-color: var(--color-bg-0);
			z-index: 10;
			display: none;
		}

		nav.menu.menu-open {
			display: block;
		}

		ul {
			padding: 0;
			margin: 0;
			list-style: none;
		}

		li {
			padding-left: 10px;
			padding-top: 5px;
			padding-bottom: 5px;
			border-bottom: 1px solid var(--secondary-color);
		}

		li a {
			color: black;
			width: 100%;
			display: inline-block;
		}

		li[aria-current='page'] {
			background-color: var(--color-bg-0);
			color: var(--main-color);
		}

		li[aria-current='page'] a {
			color: var(--main-color);
		}

		li a:hover {
			color: var(--secondary-color);
			text-decoration: none;
		}

		li[aria-current='page'] a:hover {
			cursor: default;
			color: var(--main-color);
		}

		.logo-desktop {
			display: none;
		}
	
		.logo-mobile {
			display: block;
		}
	
		.logo-container {
			width: 130px;
			margin-left: 10px;
		}

		.social-desktop {
			display: none;
		}

		.menu-toggle {
			height: 40px;
			width: 40px;
			margin-right: 5px;
			display: flex;
		}

		.menu-toggle button {
			border: none;
			background-color: transparent;
			border-radius: 5px;
			cursor: pointer;
			padding-right: 0;
			padding-left: 0;
		}

		.menu-toggle button:hover {
			border: 1px solid var(--main-color);
		}
	}

	/* Definiciones para escritorio */
	@media (min-width: 640px) {
		header {
			background-color: var(--main-color);
			height: 70px;
			margin-top: 25px;
			align-items: center;
			z-index: 1;
		}
		
		.logo-container {
			width: 130px;
			height: 130px;
			background-color: white;
			border-radius: 100px;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-left: 1vw;
			margin-top: 45px;
			border: 8px solid var(--main-color);
		}

		.logo-container a {
			width: 60%;
		}

		.logo-desktop {
			display: block;
			height: 80%;
		}

		.logo-mobile {
			display: none;
		}

		nav {
			display: flex;
			justify-content: center;
			--background: rgba(255, 255, 255, 0.7);
		}

		ul {
			position: relative;
			padding: 0;
			margin: 0;
			height: 3em;
			display: flex;
			justify-content: center;
			align-items: center;
			list-style: none;
			background-size: contain;
		}

		li {
			position: relative;
			height: 60%;
			padding-left: 3px;
			padding-right: 3px;
			border-radius: 4px;
		}

		li[aria-current='page'] {
			background-color: var(--color-bg-0);
			color: var(--main-color);
		}

		nav a {
			display: flex;
			height: 100%;
			align-items: center;
			padding: 0 0.4rem;
			font-weight: 700;
			font-size: 0.7rem;
			letter-spacing: 0.1em;
			text-decoration: none;
			transition: color 0.2s linear;
			color: white;
		}

		li[aria-current='page'] a {
			color: var(--main-color);
		}

		a:hover {
			color: var(--color-bg-1);
		}

		li[aria-current='page'] a:hover {
			cursor: default;
		}

		.social-desktop {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-right: 10px;
		}

		.social-desktop a {
			height: 35px;
			width: 35px;
			border: 2px solid var(--color-bg-0);
			margin-right: 7px;
			border-radius: 6px;
		}

		.menu-toggle {
			display: none;
		}
	}

	/* Definiciones para escritorio tamaño grande */
	@media (min-width: 1400px) {
		.logo-container {
			width: 190px;
			height: 190px;
			margin-top: 97px;
		}

		nav a {
			padding: 0 0.8rem;
			font-size: 0.9rem;
		}
	}
	
</style>
