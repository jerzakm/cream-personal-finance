<script lang="ts">
	import { signInWithGoogle } from '$lib/firebase/core';
</script>

<button on:click={() => signInWithGoogle()}>G sign in</button>
