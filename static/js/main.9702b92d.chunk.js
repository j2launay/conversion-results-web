(this["webpackJsonpconversion-results-web"]=this["webpackJsonpconversion-results-web"]||[]).push([[0],{28:function(e,c,t){"use strict";t.r(c);var s=t(2),n=t.n(s),i=t(9),r=t.n(i),o=t(40),l=t(0);var j=e=>{let{precision:c,hallucination:t,positive:s,negative:n}=e;return Object(l.jsxs)("div",{className:"metrics-display",children:[Object(l.jsx)("h2",{children:"Conversion Metrics"}),Object(l.jsxs)("div",{className:"metric",children:[Object(l.jsx)("h3",{children:"Precision"}),Object(l.jsx)("p",{children:c})]}),Object(l.jsxs)("div",{className:"metric",children:[Object(l.jsx)("h3",{children:"Hallucination"}),Object(l.jsx)("p",{children:t})]}),Object(l.jsxs)("div",{className:"metric",children:[Object(l.jsx)("h3",{children:"Positive Aspects"}),Object(l.jsx)("p",{children:s})]}),Object(l.jsxs)("div",{className:"metric",children:[Object(l.jsx)("h3",{children:"Negative Aspects"}),Object(l.jsx)("p",{children:n})]})]})};var a=e=>{let{content:c}=e;return Object(l.jsxs)("div",{className:"text-display",children:[Object(l.jsx)("h2",{children:"Conversion Results for Amethyst"}),Object(l.jsx)("p",{children:c})]})};t(8);var h=function(){const[e,c]=Object(s.useState)([]),[t,n]=Object(s.useState)(null),[i,r]=Object(s.useState)({precision:0,hallucination:0,positive:0,negative:0,document_converted:""}),[h,d]=Object(s.useState)(null);return Object(s.useEffect)((()=>{fetch("".concat("/conversion-results-web","/results/index.json")).then((e=>e.json())).then((e=>c(e))).catch((e=>console.error("Error fetching document list:",e)))}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Conversion Results"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"document-select",children:"Select Document: "}),Object(l.jsxs)("select",{id:"document-select",onChange:e=>{const c=e.target.value;n(c),fetch("".concat("/conversion-results-web","/results/").concat(c,".json")).then((e=>e.json())).then((e=>r(e))).catch((e=>console.error("Error fetching document:",e))),fetch("".concat("/conversion-results-web","/results/").concat(c,"_summary.json")).then((e=>e.json())).then((e=>d(e))).catch((e=>console.error("Error fetching summary:",e)))},children:[Object(l.jsx)("option",{value:"",children:"--Select a document--"}),e.map(((e,c)=>Object(l.jsx)("option",{value:e,children:e},c)))]})]}),t&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(a,{content:"Conversion results for ".concat(t)}),h&&Object(l.jsxs)("div",{className:"executive-summary",children:[Object(l.jsx)("h2",{children:"Executive Summary"}),Object(l.jsx)(o.a,{children:h.summary})]}),Object(l.jsxs)("div",{className:"document-converted",children:[Object(l.jsx)("h2",{children:"Converted Document"}),Object(l.jsx)("pre",{children:i.document_converted})]}),Object(l.jsx)(j,{precision:i.precision,hallucination:i.hallucination,positive:i.positive,negative:i.negative})]})]})};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root"))},8:function(e,c,t){}},[[28,1,2]]]);
//# sourceMappingURL=main.9702b92d.chunk.js.map