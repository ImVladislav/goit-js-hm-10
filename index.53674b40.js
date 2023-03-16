!function(){document.querySelector("#search-box").addEventListener("input",(function(n){console.log(n)}));function n(n){var o=n.population;return"<div> population ".concat(o,"</div>")}fetch("https://restcountries.com/v3.1/name/Sweden").then((function(n){return n.json()})).then((function(o){console.log(o);var t=o.map(n).join("");console.log(t)}))}();
//# sourceMappingURL=index.53674b40.js.map
