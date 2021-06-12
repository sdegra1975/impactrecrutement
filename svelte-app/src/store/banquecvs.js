import { writable } from 'svelte/banquecvs';

const state = {
  candidats: writable([]),
};

const getCandidats = (candidats) => {
  state.candidats.update((old) => candidats);
};

export { state, getCandidats };
