import { writable } from 'svelte/store';

export const name = writable('');
export const location = writable('');
export const date = writable('');
export const tasks = writable([]);
