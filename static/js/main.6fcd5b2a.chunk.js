(this["webpackJsonpconversion-results-web"]=this["webpackJsonpconversion-results-web"]||[]).push([[0],{10:function(e,c,t){"use strict";t.r(c);var s=t(1),n=t.n(s),i=t(4),r=t.n(i),o=t(0);var l=e=>{let{precision:c,hallucination:t,positive:s,negative:n}=e;return Object(o.jsxs)("div",{className:"metrics-display",children:[Object(o.jsx)("h2",{children:"Conversion Metrics"}),Object(o.jsxs)("div",{className:"metric",children:[Object(o.jsx)("h3",{children:"Precision"}),Object(o.jsx)("p",{children:c})]}),Object(o.jsxs)("div",{className:"metric",children:[Object(o.jsx)("h3",{children:"Hallucination"}),Object(o.jsx)("p",{children:t})]}),Object(o.jsxs)("div",{className:"metric",children:[Object(o.jsx)("h3",{children:"Positive Aspects"}),Object(o.jsx)("p",{children:s})]}),Object(o.jsxs)("div",{className:"metric",children:[Object(o.jsx)("h3",{children:"Negative Aspects"}),Object(o.jsx)("p",{children:n})]})]})};var j=e=>{let{content:c}=e;return Object(o.jsxs)("div",{className:"text-display",children:[Object(o.jsx)("h2",{children:"Conversion Results for Amethyst"}),Object(o.jsx)("p",{children:c})]})};t(3);var a=function(){const[e,c]=Object(s.useState)([]),[t,n]=Object(s.useState)(null),[i,r]=Object(s.useState)({precision:0,hallucination:0,positive:0,negative:0,document_converted:""});return Object(s.useEffect)((()=>{fetch("".concat("/conversion-results-web","/results/index.json")).then((e=>e.json())).then((e=>c(e))).catch((e=>console.error("Error fetching document list:",e)))}),[]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Conversion Results"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"document-select",children:"Select Document: "}),Object(o.jsxs)("select",{id:"document-select",onChange:e=>{const c=e.target.value;n(c),fetch("".concat("/conversion-results-web","/results/").concat(c,".json")).then((e=>e.json())).then((e=>r(e))).catch((e=>console.error("Error fetching document:",e)))},children:[Object(o.jsx)("option",{value:"",children:"--Select a document--"}),e.map(((e,c)=>Object(o.jsx)("option",{value:e,children:e},c)))]})]}),t&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(j,{content:"Conversion results for ".concat(t)}),Object(o.jsx)(l,{precision:i.precision,hallucination:i.hallucination,positive:i.positive,negative:i.negative}),Object(o.jsxs)("div",{className:"document-converted",children:[Object(o.jsx)("h2",{children:"Converted Document"}),Object(o.jsx)("pre",{children:i.document_converted})]})]})]})};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(a,{})}),document.getElementById("root"))},3:function(e,c,t){}},[[10,1,2]]]);
//# sourceMappingURL=main.6fcd5b2a.chunk.js.map