(()=>{var h=class extends HTMLElement{constructor(){super();this._updatedCount=0,this._updateTimerId=void 0,this._updateDelay=100,this._updatePromiseResolvers=[]}static get observedAttributes(){return[]}attributeChangedCallback(e,s,t,o){this._updatedCount&&s!==t&&this.update()}connectedCallback(){this._updatedCount?this.update():this.updateSync()}disconnectedCallback(){}adoptedCallback(e,s){}static define(e,s){window.customElements.define(e,this,s)}get updatedCount(){return this._updatedCount}update(){return this._updateTimerId!==void 0&&(window.clearTimeout(this._updateTimerId),this._updateTimerId=void 0),this._updateTimerId=window.setTimeout(()=>{window.clearTimeout(this._updateTimerId),this._updateTimerId=void 0;let e=this._updatePromiseResolvers.splice(0);if(this.updateSync(),e.length)for(let s of e)s()},this._updateDelay),new Promise(e=>{this._updatePromiseResolvers.push(e)})}updateSync(){try{this.render(),this._updatedCount++,this.updatedCallback()}catch(e){this.errorCallback(e)}}render(){}updatedCallback(){}errorCallback(e){console.error(e)}};var c=class{constructor(e){return new Proxy({},{set:(s,t,o)=>typeof t=="string"&&typeof o=="string"?(e.setAttribute(t,o),!0):!1,get:(s,t)=>{if(typeof t=="string"&&e.hasAttribute(t))return e.getAttribute(t)},deleteProperty:(s,t)=>typeof t=="string"&&e.hasAttribute(t)?(e.removeAttribute(t),!0):!1,has:(s,t)=>!!(typeof t=="string"&&e.hasAttribute(t)),ownKeys:()=>{let s=[];if(e.hasAttributes())for(let t of Array.from(e.attributes))s.push(t.name);return s},getOwnPropertyDescriptor:(s,t)=>{if(typeof t=="string"&&e.hasAttribute(t))return{configurable:!0,enumerable:!0,value:e.getAttribute(t)}}})}};var v=new WeakSet,d=class{constructor(e,s){v.add(e),this._container=e,this._context=s}get container(){return this._container}update(e){e instanceof Document||e instanceof DocumentFragment?this._patchNodesInsideOf(this._container,e):this._patchNodesInsideOf(this._container,this._createDocumentFragment(e)),this._fixOneventHandlersInsideOf(this._container)}clone(){return this._createDocumentFragment(this._container.childNodes)}_createDocumentFragment(e){if(typeof e=="string"){let t=document.createElement("template");return t.innerHTML=e,t.content}let s=document.createDocumentFragment();if(e instanceof Node)s.appendChild(e.cloneNode(!0));else if(e instanceof NodeList&&e.length)for(let t of Array.from(e))s.appendChild(t.cloneNode(!0));return s}_patchNodesInsideOf(e,s){var t,o;if(e.hasChildNodes()||s.hasChildNodes()){let r=Array.from(e.childNodes),n=Array.from(s.childNodes),x=Math.max(r.length,n.length);for(let u=0;u<x;u++)this._patchNodes(e,(t=r[u])!==null&&t!==void 0?t:null,(o=n[u])!==null&&o!==void 0?o:null)}}_patchNodes(e,s,t){s&&!t?e.removeChild(s):!s&&t?e.appendChild(t.cloneNode(!0)):s&&t&&(s.nodeType===t.nodeType&&s.nodeName===t.nodeName?s instanceof Element&&t instanceof Element?(this._patchAttributes(s,t),v.has(s)||this._patchNodesInsideOf(s,t)):s instanceof CharacterData&&t instanceof CharacterData?s.nodeValue!==t.nodeValue&&(s.nodeValue=t.nodeValue):e.replaceChild(t.cloneNode(!0),s):e.replaceChild(t.cloneNode(!0),s))}_patchAttributes(e,s){if(e.hasAttributes())for(let t of Array.from(e.attributes))s.hasAttribute(t.name)||e.removeAttribute(t.name);if(s.hasAttributes())for(let t of Array.from(s.attributes))(!e.hasAttribute(t.name)||e.getAttribute(t.name)!==t.value)&&e.setAttribute(t.name,t.value)}_fixOneventHandlersInsideOf(e){if(e.hasChildNodes())for(let s of Array.from(e.childNodes))s instanceof Element&&this._fixOneventHandlers(s)}_fixOneventHandlers(e){var s;if(e.hasAttributes()){for(let t of Array.from(e.attributes))if(t.name.search(/^on\w+/i)!==-1){let o=t.name.toLowerCase(),r=e;if(o in e&&typeof r[o]=="function"){let n=new Function("event",t.value);e.removeAttribute(t.name),r[o]=n.bind((s=this._context)!==null&&s!==void 0?s:e)}}}v.has(e)||this._fixOneventHandlersInsideOf(e)}};var a=class extends h{constructor(){super();this._attrs=new c(this),this._content=new d(this.createContentContainer(),this)}get attrs(){return this._attrs}get content(){return this._content}dispatch(e,s){return this._content.container.dispatchEvent(new CustomEvent(e,{detail:s,bubbles:!0,composed:!0}))}createContentContainer(){return this.attachShadow({mode:"open"})}render(){this._content.update(this.template())}template(){return""}};var g,b=!1;try{let i="Named capture groups".match(/(?<name>.+)/);b=!!((g=i==null?void 0:i.groups)===null||g===void 0?void 0:g.name)}catch(i){b=!1}var l=`
:host {
  display: inline-block;
}

:host *,
:host *::before,
:host *::after {
  box-sizing: border-box;
}
`;var w=`
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
`,p=`
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
`;var m=class extends a{static get observedAttributes(){return["url","image","tags"]}template(){let e=this.attrs.url||"",s=this.attrs.image||"",t=this.attrs.tags||"",o=e?`<a href="${e}">${e}</a>`:"",r="";if(t)for(let n of t.split(","))n=n.trim(),n&&(r+=`<span>${n}</span>`);return`
      <style>
      ${l}
      ${w}
      ${p}
      </style>

      <style>
      :host {
        --size-cell: 320px;

        display: flex;
        flex-flow: column nowrap;
        gap: var(--size-space);
      }

      :host::before {
        content: ' ';
        display: block;
        width: var(--size-cell);
        height: var(--size-cell);
        border-radius: var(--size-radius);
        background: url(${s}) no-repeat center center / cover;
        box-shadow: 0px 3px var(--size-shadow) var(--color-shadow);
      }

      div {
        width: var(--size-cell);
        text-align: center;
      }

      #link {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin: var(--size-space-large) 0;
      }

      #tags {
        display: flex;
        flex-flow: row wrap;
        gap: var(--size-space-small);
        justify-content: center;
        margin-bottom: 0;
      }

      #tags span {
        display: inline-block;
        border-radius: var(--size-radius);
        padding: var(--size-space-small);
        background-color: var(--color-information);
        color: var(--color-on-information);
        font-size: var(--size-text-small);
        line-height: 1;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
      }

      @media (min-width: 640px) {
        :host {
          --size-cell: 500px;
        }
      }

      @media (min-width: 1024px) {
        :host {
          --size-cell: 425px;

          flex-flow: row nowrap;
          gap: calc(var(--size-cell) / 5);
        }

        div {
          text-align: left;
        }

        #tags {
          justify-content: start;
        }
      }

      @media (min-width: 1280px) {
        :host {
          --size-cell: 500px;
        }
      }
      </style>

      <div>
      <slot name="title"></slot>
      <slot></slot>
      <p id="link">${o}</p>
      <p id="tags">${r}</p>
      </div>
    `}};var C={gmail:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>',github:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',facebook:'<svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',linkedin:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>'},f=class extends a{static get observedAttributes(){return["type","user","size"]}template(){let e=this.attrs.type||"",s=this.attrs.user||"",t=this.attrs.size||"32px",o="",r="";switch(e){case"gmail":{o=`${s}@gmail.com`,r=`mailto:${s}@gmail.com`;break}case"github":{o=`GitHub @${s}`,r=`https://github.com/${s}`;break}case"facebook":{o=`Facebook @${s}`,r=`https://www.facebook.com/${s}`;break}case"linkedin":{o=`LinkedIn @${s}`,r=`https://www.linkedin.com/in/${s}`;break}default:throw new Error("Invalid type")}return`
      <style>
      ${l}
      ${p}
      </style>

      <style>
      :host {
        width: ${t};
        height: ${t};
        line-height: 0;
        vertical-align: middle;
      }

      svg {
        width: ${t};
        height: ${t};
        fill: currentColor;
      }
      </style>

      <a href="${r}" title="${o}">${C[e]}</a>
    `}};var _=class extends a{template(){return`
      <style>
      ${l}
      </style>

      <style>
      :host {
        cursor: pointer;
      }
      </style>

      <slot onclick="this._handleClick()"></slot>
    `}_handleClick(){window.scrollTo({top:0,behavior:"smooth"})}};m.define("akira-project-info");f.define("akira-social-button");_.define("akira-scroll-top-button");})();
