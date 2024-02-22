import { chirit } from '../deps.ts';

class Projects extends chirit.Store<{
  items: Array<{
    name: string;
    description: string;
    url: string;
    image: string;
    tags: string;
  }>;
}> {}

const data = await (await fetch('assets/data/projects.json')).json();

export default new Projects({ items: data });
