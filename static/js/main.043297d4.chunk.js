(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(36)},,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),l=a(7),r=a.n(l),c=(a(18),a(3)),u=a(2);var m=o.a.createContext();function s(e){var t=function(e,t){var a=o.a.useState(!1),n=Object(u.a)(a,2),l=(n[0],n[1]),c=o.a.useState(!0),m=Object(u.a)(c,2),s=m[0],i=m[1],d=o.a.useState(t),p=Object(u.a)(d,2),f=p[0],E=p[1];return o.a.useEffect(function(){setTimeout(function(){try{var a,n=localStorage.getItem(e);n?a=JSON.parse(n):(localStorage.setItem(e,JSON.stringify(t)),a=t),E(a),i(!1)}catch(r){l(r)}},2e3)}),{item:f,saveItem:function(t){try{var a=JSON.stringify(t);localStorage.setItem(e,a),E(t)}catch(r){l(r)}},loading:s}}("TODOS_V1",[]),a=t.item,n=t.saveItem,l=t.loading,r=t.error,s=o.a.useState(""),i=Object(u.a)(s,2),d=i[0],p=i[1],f=o.a.useState(!1),E=Object(u.a)(f,2),T=E[0],v=E[1],g=a.filter(function(e){return!!e.completed}).length,b=a.length,O=[];O=!d.length>=1?a:a.filter(function(e){var t=e.text.toLowerCase(),a=d.toLowerCase();return t.includes(a)});return o.a.createElement(m.Provider,{value:{loading:l,error:r,totalTodos:b,completedTodos:g,searchValue:d,setSearchValue:p,searchedTodos:O,completeTodos:function(e){var t=a.findIndex(function(t){return t.text===e}),o=Object(c.a)(a);o[t].completed=!0,n(o)},deleteTodos:function(e){var t=a.findIndex(function(t){return t.text===e}),o=Object(c.a)(a);o.splice(t,1),n(o)},addTodo:function(e){var t=Object(c.a)(a);t.push({completed:!1,text:e}),n(t)},openModal:T,setOpenModal:v}},e.children)}a(20);function i(e){var t=o.a.useContext(m),a=t.totalTodos,n=t.completedTodos;return o.a.createElement("h2",{className:"TodoCounter-title"},"Has Completado ",n," de ",a," TODOs")}a(22);function d(){var e=o.a.useContext(m),t=e.searchValue,a=e.setSearchValue;return[o.a.createElement("input",{className:"TodoSearch-input",placeholder:"Cebolla",onChange:function(e){a(e.target.value),console.log(e.target.value)},value:t})]}a(24);function p(e){return o.a.createElement("section",null,o.a.createElement("ul",null,e.children))}a(26);var f=a(5);function E(e){return o.a.createElement("li",{className:"TodoItem"},o.a.createElement("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:e.onComplete},o.a.createElement(f.b,null)),o.a.createElement("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete")},e.text),o.a.createElement("span",{className:"Icon Icon-delete",onClick:e.onDelete},o.a.createElement(f.a,null)))}a(28);function T(){var e=o.a.useState(""),t=Object(u.a)(e,2),a=t[0],n=t[1],l=o.a.useState(!1),r=Object(u.a)(l,2),c=r[0],s=r[1],i=o.a.useContext(m),d=i.addTodo,p=i.setOpenModal;return o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""===a?s(!0):(d(a),p(!1))}},o.a.createElement("label",null,"Escribe tu nuevo TODO"),o.a.createElement("span",{className:"TodoForm-spanError ".concat(c&&"TodoForm-spanError--active")},"\xa1Este cambio es obligatorio!"),o.a.createElement("textarea",{placeholder:"Cortar la Cebolla Para el Almuerzo",onChange:function(e){n(e.target.value)},value:a,className:"TodoForm-textArea ".concat(c&&"TodoForm-textArea--error")}),o.a.createElement("div",{className:"TodoForm-buttonContainer"},o.a.createElement("button",{onClick:function(){p(!1)},type:"button",className:"TodoForm-button TodoForm-button--cancel"},"Cancelar"),o.a.createElement("button",{type:"submit",className:"TodoForm-button TodoForm-button--add"},"Agregar")))}a(30);var v=a(9),g=a(8);function b(e){var t=o.a.useContext(m).openModal;console.log(t);return o.a.createElement("button",{className:"CreateTodoButton",onClick:function(){e.setOpenModal(!e.openModal)}},o.a.createElement("span",{className:"iconButton"},t?o.a.createElement(g.a,null):o.a.createElement(v.a,null)))}var O=a(4),h=a.n(O);a(32);function C(e){var t=e.children;return h.a.createPortal(o.a.createElement("div",{className:"ModalBackground"},t),document.getElementById("modal"))}a(34);function x(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("li",{className:"TodoItem__loading"}),o.a.createElement("li",{className:"TodoItem__loading"}),o.a.createElement("li",{className:"TodoItem__loading"}),o.a.createElement("li",{className:"TodoItem__loading"}))}function I(){var e=o.a.useContext(m),t=e.error,a=e.loading,n=e.searchedTodos,l=e.completeTodos,r=e.deleteTodos,c=e.openModal,u=e.setOpenModal;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i,null),o.a.createElement(d,null),o.a.createElement(p,null,t&&o.a.createElement("p",null,"Error"),a&&o.a.createElement(x,null),!a&&!n.length&&o.a.createElement("p",null,"\xa1Crea tu primer TODO!"),n.map(function(e){return o.a.createElement(E,{key:e.text,text:e.text,completed:e.completed,onComplete:function(){return l(e.text)},onDelete:function(){return r(e.text)}})})),!!c&&o.a.createElement(C,null,o.a.createElement(T,null)),o.a.createElement(b,{setOpenModal:u,openModal:c}))}var N=function(){return o.a.createElement(s,null,o.a.createElement(I,null))};r.a.createRoot(document.getElementById("root")).render(o.a.createElement(N,null))}],[[10,2,1]]]);
//# sourceMappingURL=main.043297d4.chunk.js.map