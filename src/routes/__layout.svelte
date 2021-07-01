<script lang="ts">
	import '../styles/tailwind-output.css';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Sidebar from '$lib/components/Sidebar.svelte';

	import { authStore } from '$lib/firebase/core';
	import { onMount } from 'svelte';

	onMount(() => {
		authStore.subscribe((u) => {
			// if (mounted) {
			console.log(u);
			if (!u) goto('/login');
			if (u && $page.path == '/login') goto('/');
			// }
		});
	});
</script>

<layout>
	<Sidebar />
	<slot />
	<div class="test" />
</layout>

<style lang="scss">
	layout {
		// position: relative;
		display: flex;
		align-items: flex-start;
		.test {
			// position: relative;
			min-height: 3000px;
		}
	}
</style>
