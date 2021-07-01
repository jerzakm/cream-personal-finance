<script lang="ts">
	import * as firebaseui from 'firebaseui';
	import 'firebaseui/dist/firebaseui.css';
	import { onMount } from 'svelte';
	import firebase from 'firebase';

	onMount(() => {
		if (firebaseui.auth.AuthUI.getInstance()) {
			const ui = firebaseui.auth.AuthUI.getInstance();
			ui.start('#firebaseui-auth-container', {
				signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
			});
		} else {
			const ui = new firebaseui.auth.AuthUI(firebase.auth());
			ui.start('#firebaseui-auth-container', {
				signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
			});
		}
	});
</script>

<div id="firebaseui-auth-container" />
