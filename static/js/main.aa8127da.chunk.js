(this["webpackJsonpconversion-results-web"]=this["webpackJsonpconversion-results-web"]||[]).push([[0],{10:function(e,c,t){"use strict";t.r(c);var s=t(1),n=t.n(s),i=t(4),r=t.n(i),o=t(0);var l=e=>{let{precision:c,hallucination:t,positive:s,negative:n}=e;return Object(o.jsxs)("div",{className:"metrics-display",children:[Object(o.jsx)("h2",{children:"Conversion Metrics"}),Object(o.jsxs)("div",{className:"metric",children:[Object(o.jsx)("h3",{children:"Precision"}),Object(o.jsx)("p",{children:c})]}),Object(o.jsxs)("div",{className:"metric",children:[Object(o.jsx)("h3",{children:"Hallucination"}),Object(o.jsx)("p",{children:t})]}),Object(o.jsxs)("div",{className:"metric",children:[Object(o.jsx)("h3",{children:"Positive Aspects"}),Object(o.jsx)("p",{children:s})]}),Object(o.jsxs)("div",{className:"metric",children:[Object(o.jsx)("h3",{children:"Negative Aspects"}),Object(o.jsx)("p",{children:n})]})]})};t(3);var j=function(){const[e,c]=Object(s.useState)([]),[t,n]=Object(s.useState)(null),[i,r]=Object(s.useState)({precision:0,hallucination:0,positive:0,negative:0,document_converted:""});return Object(s.useEffect)((()=>{fetch("/results/index.json").then((e=>e.json())).then((e=>c(e))).catch((e=>console.error("Error fetching document list:",e)))}),[]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Conversion Results For Amethyst"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"document-select",children:"Select Document: "}),Object(o.jsxs)("select",{id:"document-select",onChange:e=>{const c=e.target.value;n(c),fetch("/results/".concat(c,".json")).then((e=>e.json())).then((e=>r(e))).catch((e=>console.error("Error fetching document:",e)))},children:[Object(o.jsx)("option",{value:"",children:"--Select a document--"}),e.map(((e,c)=>Object(o.jsx)("option",{value:e,children:e},c)))]})]}),t&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"document-converted",children:[Object(o.jsx)("h2",{children:"Conversion results for ".concat(t)}),Object(o.jsx)("pre",{children:i.document_converted})]}),Object(o.jsx)(l,{precision:i.precision,hallucination:i.hallucination,positive:i.positive,negative:i.negative})]})]})};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root"))},3:function(e,c,t){}},[[10,1,2]]]);
//# sourceMappingURL=main.aa8127da.chunk.js.map