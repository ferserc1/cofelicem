<script>
	import Header from './Header.svelte';
	import './styles.css';

	export let data;

</script>

<div class="app">
	<Header pages={data.pages} />

	<main>
		<slot />
	</main>

	<footer>
		
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 74px 1rem;
		width: 100%;
		max-width: 85%;
		margin: 0 auto;
		box-sizing: border-box;
		background-color: white;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}

	@media (max-width: 940px) {
		main {
			max-width: 100%;
		}
	}
</style>
