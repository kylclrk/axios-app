import { writable } from 'svelte/store';

export const activeRole = writable('Technician');
export const activeModal = writable({
  title: '',
  content: '',
  isOpen: false
})