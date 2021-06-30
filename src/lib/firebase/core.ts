import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/firestore';
import { browser } from '$app/env';
import credentials from './firebase-appsdk.json';
import { writable } from 'svelte/store';

if (!firebase.apps.length) {
	firebase.initializeApp(credentials);
}

export const analytics = (): firebase.analytics.Analytics => firebase.analytics();
export const auth: firebase.auth.Auth = firebase.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();

export const authStore = writable(null);

// listen to auth changes on client

if (browser) {
	// Auth is handled using session cookies, and the server will always re-send
	// a token for any authenticated session
	auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
	auth.onAuthStateChanged((user) => {
		authStore.set(user);
	});
}

export const signInWithGoogle = async () => {
	let credential;

	try {
		credential = await auth.signInWithPopup(googleProvider);
		authStore.set(credential.user);
	} catch {
		console.log('error');
		credential = null;
	}

	return credential;
};

export const signOut = async () => {
	await auth.signOut();
};
