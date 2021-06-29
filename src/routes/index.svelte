<script lang="ts">
	import { authStore, signInWithGoogle, signOut } from '$lib/firebase/core';

	let user;

	authStore.subscribe((v) => {
		user = v;
	});
</script>

<h1>Authentication stuff</h1>
<p>{user?.displayName}</p>

<button on:click={() => signInWithGoogle()}>G sign in</button>
<button on:click={() => signOut()}>sign out</button>

<style lang="scss">
	p {
		background-color: rgba(255, 166, 0, 0.404);
	}
</style>
