const base = `
:host {
  display: inline-block;

  & *,
  & *::before,
  & *::after {
    box-sizing: border-box;
  }
}
`;

const sections = `
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-size: inherit;
}
`;

const groupingContent = `
p,
ol,
ul,
dl {
  margin: var(--size-space) 0;
  padding: 0;
}

ol,
ul {
  list-style: none;
}

dl {
  & dt {
    margin: var(--size-space) 0 0 0;

    &:first-child {
      margin: 0;
    }
  }
  & dd {
    margin: var(--size-space-small) 0;

    &:last-child {
      margin: var(--size-space-small) 0 0 0;
    }
  }
}
`;

const textLevelSemantics = `
a {
  color: var(--color-primary);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

strong {
  color: var(--color-important);
}
`;

const embeddedContent = `
img {
  border: 0;
  vertical-align: middle;
}
`;

const forms = `
input,
button,
select,
textarea {
  vertical-align: middle;
  appearance: none;
}

textarea {
  overflow: auto;
}
`;

export default {
  base,
  sections,
  groupingContent,
  textLevelSemantics,
  embeddedContent,
  forms,
};
