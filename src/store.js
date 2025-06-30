import { writable } from 'svelte/store';

export const name = writable('');
export const location = writable('');
export const date = writable('');
export const tasks = writable([]);
export const role = writable(null);
export const step = writable(1);
export const site = writable('');
