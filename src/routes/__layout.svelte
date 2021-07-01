<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

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

<slot />
