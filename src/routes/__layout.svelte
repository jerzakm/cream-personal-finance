<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	import { authStore } from '$lib/firebase/core';
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => (mounted = true));

	authStore.subscribe((u) => {
		// redirects for auth status changes
		if (mounted) {
			if (!u) goto('/login');
			if (u && $page.path == '/login') goto('/');
		}
	});
</script>

<slot />
