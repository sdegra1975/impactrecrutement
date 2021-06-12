import * as banquecvs from './banquecvs';

const data = {
  candidats: [
    {
      id: 1,
      name: 'Maurain Kamdoum',
      description: 'Support TI',
      quantity: '1',
    },
    {
      id: 2,
      name: 'Sissi',
      description: 'Programmeur Java',
      quantity: 1,
    },
  ],
};

export async function getCandidatsAction() {
  store.getCandidats(data.candidats);
  return data.candidats;
}
