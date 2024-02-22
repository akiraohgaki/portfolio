import { chirit } from '../deps.ts';

class Profiles extends chirit.Store<{
  items: Array<{
    name: string;
    description: string;
    url: string;
    image: string;
  }>;
}> {}

const data = await (await fetch('assets/data/profiles.json')).json();

export default new Profiles({ items: data });
