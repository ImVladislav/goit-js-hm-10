document.querySelector("#search-box").addEventListener("input",(function(o){console.log(o)}));function o({population:o}){return`<div> population ${o}</div>`}fetch("https://restcountries.com/v3.1/name/Sweden").then((o=>o.json())).then((n=>{console.log(n);const e=n.map(o).join("");console.log(e)}));
//# sourceMappingURL=index.fbc309a9.js.map
