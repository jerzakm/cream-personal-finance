<script lang="ts">
	import { authStore, signOut } from '$lib/firebase/core';

	let user;

	authStore.subscribe((v) => {
		user = v;
	});
</script>

<h1>Authentication stuff</h1>
<p>{user?.displayName}</p>
<button on:click={() => signOut()}>sign out</button>
