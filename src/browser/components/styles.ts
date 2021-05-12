export const base = `
:host {
    display: inline-block;
}

:host *,
:host *::before,
:host *::after {
    box-sizing: border-box;
}
`;

export const sections = `
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

export const groupingContent = `
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

dl dt {
    margin: var(--size-space) 0 0 0;
}
dl dt:first-child {
    margin: 0;
}

dl dd {
    margin: var(--size-space-small) 0;
}
dl dd:last-child {
    margin: var(--size-space-small) 0 0 0;
}
`;

export const textLevelSemantics = `
a {
    color: var(--color-primary);
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}

strong {
    color: var(--color-important);
}
`;

export const embeddedContent = `
img {
    border: 0;
    vertical-align: middle;
}
`;

export const forms = `
input,
button,
select,
textarea {
    vertical-align: middle;
    appearance: none;
    -webkit-appearance: none;
}

textarea {
    overflow: auto;
}
`;
