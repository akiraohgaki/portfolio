import { chirit } from '../deps.ts';
import style from './style.ts';
import { profiles, projects, socials } from '../stores/mod.ts';

chirit.createComponent('akira-index-page', {
  template: () => {
    const profile = profiles.state.items[0];

    return `
      <style>
      ${style.base}
      ${style.sections}
      ${style.groupingContent}
      ${style.textLevelSemantics}
      </style>

      <style>
      :host {
        display: block;
      }

      h1,
      h2,
      h3 {
        margin: var(--size-space) 0;
        font-size: var(--size-text-large);
        font-weight: normal;
        letter-spacing: 0.1em;
      }

      a[href=""] {
        display: none;
      }

      header {
        & akira-card-view {
          & h1 {
            font-size: calc(var(--size-text-large) * 1.7);

            & a {
              color: inherit;
            }

            @media (width >= 640px) {
              font-size: calc(var(--size-text-large) * 2);
            }
            @media (width >= 1024px) {
              margin-top: calc(var(--size-space) * 8);
            }
            @media (width >= 1280px) {
              margin-top: calc(var(--size-space) * 10);
            }
          }
          & p {
            font-size: var(--size-text-large);
          }
          & nav {
            & akira-social-button {
              margin: var(--size-space);

              &:first-child {
                margin-left: 0;
              }
              &:last-child {
                margin-right: 0;
              }
            }
          }
        }
      }

      main {
        & article {
          & h2 {
            margin: calc(var(--size-space) * 3) 0;
            text-align: center;
          }
          & akira-card-view {
            margin: calc(var(--size-space) * 3) 0;

            & akira-badge {
              margin: calc(var(--size-space-small) / 2);

              &:first-child {
                margin-left: 0;
              }
              &:last-child {
                margin-right: 0;
              }
            }
          }
        }
      }

      footer {
        text-align: center;

        & akira-scrolltotop-action {
          font-size: 48px;
        }
      }
      </style>

      <header>
        <akira-card-view image="${profile.image}">
          <h1><a href="${profile.url}">${profile.name}</a></h1>
          <p>${profile.description}</p>
          <nav>${socialButtonsHtml()}</nav>
        </akira-card-view>
      </header>

      <main>
        <article>
          <h2>Work Experience</h2>
          ${projectCardsHtml()}
        </article>
      </main>

      <footer>
        <akira-scrolltotop-action>
          <span>&#x1f388;</span>
        </akira-scrolltotop-action>
      </footer>
    `;
  },
});

function socialButtonsHtml(): string {
  return socials.state.items.map((social) => `
    <akira-social-button name="${social.name}" url="${social.url}" size="32px"></akira-social-button>
  `).join('');
}

function projectCardsHtml(): string {
  return projects.state.items.map((project) => `
    <akira-card-view image="${project.image}">
      <h3>${project.name}</h3>
      <p>${project.description.replaceAll('\n', '<br>')}</p>
      <p><a href="${project.url}">${project.url}</a></p>
      <p>${projectTagsHtml(project.tags)}</p>
    </akira-card-view>
  `).join('');
}

function projectTagsHtml(tags: string): string {
  return tags.split(',').map((tag) => `
    <akira-badge color="information">${tag.trim()}</akira-badge>
  `).join('');
}
