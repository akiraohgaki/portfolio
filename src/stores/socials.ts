import { chirit } from '../deps.ts';

class Socials extends chirit.Store<{
  items: Array<{
    name: string;
    url: string;
  }>;
}> {}

const data = await (await fetch('assets/data/socials.json')).json();

export default new Socials({ items: data });
