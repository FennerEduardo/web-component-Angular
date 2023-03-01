(()=>{"use strict";const e=document.querySelector("#btnSubmit"),t={author:{identification:"123"},authorDependence:{code:"71301"},type:{id:"2563"},reference:"Prueba Cancelación de Gravamenes",observations:"Correo electrónico - checklist",sourceThirdPerson:{identificationType:{name:""},identification:"",name:"",lastname:"",email:"",address:"",phone:"",municipality:{code:"11001"}},targetDependence:{code:"71301"},targetUser:{identification:"46382722"}},s=new Proxy({documento:null,anexos:[]},{set:(t,s,o)=>(t[s]=o,e.disabled="documento"!==s||null===o,null!==t.documento&&(e.disabled=!1),!0)}),o=async()=>(function(){const e=document.querySelectorAll('.desplegable-govco[data-type="filter"]');for(const t of e)c(t.id)}(),document.body.addEventListener("mouseup",a.bind(void 0),!0),!0);function a(e){e.preventDefault(),e.target.closest(".checkbox-seleccion-govco")||e.target.closest(".desplegable-govco")||function(){const e=document.querySelectorAll(".desplegable-govco:not(.desplegable-calendar-govco) .desplegable-selected-option:not(.dont-close)");e&&e.forEach((function(e){if(e.classList.contains("desplegable-arrow-active")&&(e.classList.remove("desplegable-arrow-active"),e.nextElementSibling.classList.add("desplegable-hide"),e.classList.contains("search-filter-selected-option"))){const t=e.nextElementSibling.querySelector(".same-as-selected");t&&(e.querySelector("input").value=t.innerHTML)}}))}()}function n(e){e.preventDefault();let t=this.querySelector(".desplegable-selected-option");if(t.classList.contains("desplegable-arrow-active"))if("DIV"==t.tagName&&(t=t.querySelector("input")),this.querySelector(".desplegable-items").onscroll=function(){const e=this.querySelectorAll("li");document.activeElement==e[0]&&(this.scrollTop=0)},38==e.which)!function(e,t){const s=document.activeElement,o=e.querySelectorAll(".desplegable-items li:not(.none-desplegable-govco)");if(s===o[0])t.focus();else for(let e=1;e<o.length;e++)s===o[e]&&o[e-1].focus()}(this,t);else if(40==e.which)!function(e,t){let s=document.activeElement;const o=e.querySelectorAll(".desplegable-items li:not(.none-desplegable-govco)"),a=e.querySelector(".desplegable-items li.same-as-selected");if(a&&s===t)a.focus();else if(s===t)o[0].focus();else for(let e=0;e<o.length-1;e++)s===o[e]&&o[e+1].focus()}(this,t);else if(9==e.which){let s=e.target.parentNode;"INPUT"==t.tagName&&(s=s.parentNode),i(s)}}function i(e){const t=e.querySelector(".desplegable-items"),s=e.querySelector(".desplegable-selected-option.desplegable-arrow-active");if(s&&(s.classList.remove("desplegable-arrow-active"),t.classList.add("desplegable-hide")),e.classList.contains("desplegable-filter-govco")){const t=e.querySelector(".same-as-selected");t&&(e.querySelector(".desplegable-selected-option input").value=t.innerHTML)}}function l(e){e.preventDefault(),13==e.which?function(e){const t=e.parentNode,s=t.parentNode;let o=s.querySelector(".desplegable-selected-option"),a=s.querySelector('input[type="hidden"]');const n=t.querySelector("li.same-as-selected");n&&(n.classList.remove("same-as-selected"),0==n.classList.length&&n.removeAttribute("class")),"DIV"==o.tagName?(o.querySelector(".btn-clear-desplegable-govco").classList.remove("d-none"),o=o.querySelector("input"),o.value=e.innerHTML):o.innerHTML=e.innerHTML,a.value=e.getAttribute("value"),e.classList.add("same-as-selected"),i(s)}(e.target):9==e.which&&i(e.target.parentNode.parentNode)}function c(e){let s;const o=document.getElementById(e);if(null==o||null==o)return!1;const a=o.querySelector("select"),i=function(e){const t=document.createElement("DIV");return t.setAttribute("class","desplegable-selected-option search-filter-selected-option"),t.addEventListener("click",r),"true"==e.getAttribute("aria-invalid")&&t.classList.add("error-desplegable-govco"),t}(a);o.appendChild(i);let c=document.createElement("ul");c.setAttribute("class","desplegable-items desplegable-hide");const g=function(e,t){let s=document.createElement("input");return s.setAttribute("type","text"),s.setAttribute("autocomplete","off"),s.setAttribute("class","browser-default"),s.addEventListener("keyup",d),s.addEventListener("keydown",u),s.setAttribute("placeholder",e.getAttribute("placeholder")?e.getAttribute("placeholder"):"Ingrese texto..."),e.disabled&&(s.disabled=!0,t.classList.add("disabled-desplegable-govco"),t.parentNode.previousElementSibling.classList.add("disabled-desplegable-govco")),s}(a,i),m=a.options[a.selectedIndex].getAttribute("value")?a.options[a.selectedIndex].getAttribute("value"):"";m>0&&(g.value=a.options[a.selectedIndex].innerHTML),i.appendChild(g);const h=document.createElement("button");h.addEventListener("click",v),h.setAttribute("class","btn-clear-desplegable-govco"),0==m&&h.classList.add("d-none"),i.appendChild(h);for(let e=1;e<a.length;e++)s=document.createElement("li"),s.innerHTML=a.options[e].innerHTML,s.setAttribute("value",a.options[e].getAttribute("value")),s.setAttribute("tabindex","-1"),m>0&&a.options[e].getAttribute("value")==m&&s.classList.add("same-as-selected"),s.addEventListener("click",(function(s){t.sourceThirdPerson.identificationType.name=a.options[e].getAttribute("value"),p(s.target)})),s.addEventListener("keydown",l),c.appendChild(s);o.appendChild(c);let f=function(e,t){let s=document.createElement("input");if(s.setAttribute("type","hidden"),s.value=t,e.attributes.length>0)for(const t of e.attributes)"class"==t.name?s.classList.add(t.value):s.setAttribute(t.name,t.value);return s.addEventListener("change",(e=>{console.log(s)})),s}(a,m);o.appendChild(f),o.addEventListener("keydown",n),o.removeChild(a)}function r(e){if(e.preventDefault(),this.classList.contains("desplegable-arrow-active")){this.classList.remove("desplegable-arrow-active");const e=this.nextElementSibling;e.classList.add("desplegable-hide");const t=e.querySelector(".same-as-selected");t&&(this.querySelector("input").value=t.innerHTML)}else e.stopPropagation(),m(this),g(this.querySelector("input")),this.querySelector("input").focus()}function d(){g(this)}function u(e){e.preventDefault(),13==e.which&&m(this.parentNode)}function p(e){const t=e.parentNode,s=t.parentNode,o=s.querySelector(".desplegable-selected-option input"),a=s.querySelector('input[type="hidden"]'),n=t.querySelector("li.same-as-selected");n&&(n.classList.remove("same-as-selected"),0==n.classList.length&&n.removeAttribute("class")),o.value=e.innerHTML,a.value=e.getAttribute("value"),e.classList.add("same-as-selected"),s.querySelector(".btn-clear-desplegable-govco").classList.remove("d-none"),i(s)}function v(e){e.preventDefault();const t=e.target.closest(".desplegable-govco.desplegable-filter-govco"),s=t.querySelector(".desplegable-selected-option input");s.value="",g(s),t.querySelector(".btn-clear-desplegable-govco").classList.add("d-none"),t.querySelector(".desplegable-items").querySelector(".same-as-selected").classList.remove("same-as-selected")}function g(e){const t=e.closest(".desplegable-govco.desplegable-filter-govco").querySelector("input[type='hidden']");let s,o,a;for(s=e.value.toUpperCase(),o=e.parentNode.nextElementSibling.getElementsByTagName("li"),a=0;a<o.length;a++)(o[a].textContent||o[a].innerText).toUpperCase().indexOf(s)>-1?o[a].classList.remove("none-desplegable-govco"):o[a].classList.add("none-desplegable-govco");const n=e.nextElementSibling;""!=e.value&&null!=e.value&&null!=e.value?n.classList.remove("d-none"):(n.classList.add("d-none"),t.value="")}function m(e){e&&(e.nextElementSibling.classList.remove("desplegable-hide"),e.classList.add("desplegable-arrow-active"))}function h(e,t,s){for(let o of s)o.addEventListener(e,t,!1)}function f(e){var s=/^\d+$/;s.test(this.value)&&!1===this.classList.contains("success")?(this.classList.remove("error"),this.classList.add("success"),A(this,"Número de documento válido","success","")):!1===s.test(this.value)&&!1===this.classList.contains("error")&&(this.classList.remove("success"),this.classList.add("error"),A(this,"Número de documento no válido","error","")),t.sourceThirdPerson.identification=e.target.value}function b(e){var s=/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;s.test(this.value)&&!1===this.classList.contains("success")?(this.classList.remove("error"),this.classList.add("success"),A(this,"Nombre válido","success","")):!1===s.test(this.value)&&!1===this.classList.contains("error")&&(this.classList.remove("success"),this.classList.add("error"),A(this,"Nombre no válido","error","")),t.sourceThirdPerson.name=e.target.value}function y(e){var s=/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;s.test(this.value)&&!1===this.classList.contains("success")?(this.classList.remove("error"),this.classList.add("success"),A(this,"Apellido válido","success","")):!1===s.test(this.value)&&!1===this.classList.contains("error")&&(this.classList.remove("success"),this.classList.add("error"),A(this,"Apellido no válido","error","")),t.sourceThirdPerson.lastname=e.target.value}function L(e){const s=/^([da-z_.-]+)@([da-z.-]+).([a-z.]{2,6})$/;s.test(this.value)&&!1===this.classList.contains("success")?(this.classList.remove("error"),this.classList.add("success"),A(this,"Correo electrónico válido","success","")):!1===s.test(this.value)&&!1===this.classList.contains("error")&&(this.classList.remove("success"),this.classList.add("error"),A(this,"Correo electrónico no válido","error","")),t.sourceThirdPerson.email=e.target.value}function S(e){const s=/(\d{3}\d{7})/;s.test(this.value)&&!1===this.classList.contains("success")?(this.classList.remove("error"),this.classList.add("success"),A(this,"Número de teléfono válido","success","")):!1===s.test(this.value)&&!1===this.classList.contains("error")&&(this.classList.remove("success"),this.classList.add("error"),A(this,"Número de teléfono no válido","error","")),t.sourceThirdPerson.phone=e.target.value}function x(e){const s=/[-a-zA-Z0-9+&@#\/%?=~_|!:,.;]/gm;s.test(this.value)&&!1===this.classList.contains("success")?(this.classList.remove("error"),this.classList.add("success"),A(this,"Dirección válida","success","")):!1===s.test(this.value)&&!1===this.classList.contains("error")&&(this.classList.remove("success"),this.classList.add("error"),A(this,"Dirección no válida","error","")),t.sourceThirdPerson.address=e.target.value}function A(e,t,s,o){var a={success:{id:"campoSuccess-id","aria-invalid":"false",class:"success-texto-govco",role:"status","aria-live":"polite"},error:{id:"campoWarning-id","aria-invalid":"true",class:"error-texto-govco",role:"alert","aria-live":"assertive"}},n=e.closest(".entradas-de-texto-govco"),i=n.querySelector(".alert-entradas-de-texto-govco");i&&n.removeChild(i);var l=document.createElement("span"),c=n.appendChild(l);e.setAttribute("aria-describedby",o+" "+a[s].id),e.setAttribute("aria-invalid",a[s]["aria-invalid"]),c.textContent=t,c.classList.add(a[s].class,"alert-entradas-de-texto-govco"),c.id=a[s].id,c.setAttribute("role",a[s].role),c.setAttribute("aria-live",a[s]["aria-live"])}const q={},E={},w={},N="Seleccione un documento para adjuntar.",T=()=>{let e=document.querySelectorAll(".container-carga-de-archivo-govco");for(let t of e)t.offsetWidth<340?t.classList.add("responsive-govco","small-fileupload-govco"):t.offsetWidth<652?(t.classList.add("responsive-govco"),t.classList.remove("small-fileupload-govco")):t.classList.remove("responsive-govco","small-fileupload-govco")},C=e=>{const t=e.target,s=t.id,o=t.parentNode,a=o.parentNode.querySelector(".button-loader-carga-de-archivo-govco");let n="";const i=w[s].maximumQuantity;if(E[s]=[],P(t,!1,""),q[s].length+t.files.length>i)P(t,!0,"Supera la cantidad de archivos permitida."),q[s].length>=i&&(t.disabled=!0,t.classList.remove("active"));else if(t.files.length>0){let e=k(t.files,s);if(0===e.invalidExtensions&&0===e.invalidSize)n=E[s]&&E[s].length>1?E[s].length+" archivos seleccionados":E[s][0].name,I(o,n),z(a,!1);else{E[s]=[];const o=D(e.invalidExtensions,e.invalidSize);P(t,!0,o)}}else P(t,!0,N),U(t,o),z(a,!0)},D=(e,t)=>{let s="";return e>0&&(s=e>1?"Formato de archivo no permitido.":"Uno de los archivos tiene un formato no admitido."),t>0&&(s+=t>1?" El archivo excede el tamaño máximo permitido.":" Uno de los archivos excede el tamaño máximo permitido."),s},k=(e,t)=>{let s=0,o=0,a=w[t].validExtensions,n=w[t].validSize;return a.length>0||n>0?[...e].forEach((e=>{const i=e.name.split(".").pop().toLowerCase();a&&Array.isArray(a)&&a.includes(i)?n>=e.size?E[t].push(e):o++:s++})):E[t].push(...e),{invalidExtensions:s,invalidSize:o}},H=(e,t=[],s=0,o=1)=>{const a=t.map((e=>e.toString().toLowerCase())),n=isNaN(s)?0:parseInt(s),i=isNaN(o)?0:parseInt(o);w[e]={validExtensions:a,validSize:n,maximumQuantity:i}},I=(e,t)=>{e.querySelector(".file-name-carga-de-archivo-govco").innerHTML=t||"Sin archivo seleccionado"},z=(e,t)=>{e.disabled=t},M=async e=>{const t=e.target,s=t.parentNode.parentNode,o=s.querySelector(".input-carga-de-archivo-govco"),a=o.id,n=s.querySelector(".load-carga-de-archivo-govco");if(W(n,!0),z(t,!0),o.value){const e=s.nextElementSibling,t=e.querySelector(".attached-files-carga-de-archivo-govco"),i=await O(o,n,s,"add",E[a]);i.length>0&&(Z(t,i,a),e.style.display=q[a].length>0?"block":"none",q[a].length>=w[a].maximumQuantity&&(o.disabled=!0,o.classList.remove("active"))),U(o,s)}else P(o,!0,N),W(n,!1)},O=async(e,t,o,a,n)=>{const i="add"==a?"data-action":"data-action-delete",l=e.getAttribute(i);let c={};try{if("uploadDocument"===l)s.documento=n[0],c=n;else if("uploadFile"===l)s.anexos=s.anexos.concat(n),c=n;else if("deleteDocument"===l)s.documento=null,c=s.anexos;else if("deleteFile"===l){console.log(l);const e=s.anexos.findIndex((e=>e.name===n.name));console.log(e),s.anexos.splice(e,1),c=s.anexos}else if(c=n,W(t,!1),"delete"==a)return!0;if(console.log(s),W(t,!1),"delete"==a)return!0}catch(s){if(P(e,!0,s),W(t,!1),U(e,o),"delete"==a)return!1}return c},P=(e,t,s)=>{const o=e.parentNode.parentNode.nextElementSibling,a=o.querySelector(".alert-carga-de-archivo-govco"),n=e.id;e.setAttribute("data-error",t?"1":"0"),j(a,t),a.innerHTML=s,q[n].length<=0&&(o.style.display=t?"block":"none")},j=(e,t)=>{t?e.classList.remove("visually-hidden"):e.classList.add("visually-hidden")},W=(e,t)=>{e.style.visibility=t?"visible":"hidden"},U=(e,t)=>{e.value="",I(t,"")},Z=(e,t,s)=>(t.forEach((function(t){const o=$(t.size);B(e,t.name,o),q[s].push(t)})),!0),B=(e,t,s)=>{const o=document.createElement("div");o.classList.add("attached-file-carga-de-archivo-govco"),o.setAttribute("tabindex","0");const a=document.createElement("div");a.classList.add("icon-text-carga-de-archivo-govco");const n=document.createElement("div");n.classList.add("file-alt-carga-de-archivo-govco");const i=document.createElement("div");i.classList.add("container-text-name-carga-de-archivo-govco");const l=document.createElement("span");l.classList.add("text-name-carga-de-archivo-govco");const c=document.createTextNode(t);l.appendChild(c);const r=document.createElement("span"),d=document.createTextNode(s);r.appendChild(d);const u=document.createElement("button");u.classList.add("trash-alt-1-carga-de-archivo-govco"),a.appendChild(n),i.appendChild(l),i.appendChild(r),a.appendChild(i),o.appendChild(a),o.appendChild(u),e.appendChild(o),u.addEventListener("click",F,!1)},$=e=>{if(e){var t=parseInt(e);return t<1024?t+"bytes":t<1048576?parseInt(t/1024)+"KB":t<1073741824?parseInt(t/1048576)+"MB":parseInt(t/1073741824)+"GB"}},F=async e=>{const t=e.target.parentNode,s=t.parentNode.parentNode,o=s.parentNode,a=o.querySelector(".input-carga-de-archivo-govco"),n=a.id,i=o.querySelector(".load-carga-de-archivo-govco"),l=t.querySelector(".text-name-carga-de-archivo-govco").innerHTML,c=q[n].find((e=>e.name===l)),r=q[n].indexOf(c);if(W(i,!0),r>=0){if(!0===await O(a,i,o,"delete",c)){let e=t.parentNode;q[n].splice(r,1),e.removeChild(t),q[n].length<w[n].maximumQuantity&&(a.disabled=!1,a.classList.add("active")),s.style.display=q[n].length>0?"block":"none"}}else W(i,!1)};class J{static async parseAsync(e){const t=await e.text(),s=e.headers.get("Content-Type");return this.parse(t,s)}static parse(e,t){const s=this.parseHeader(t).directives.get("boundary");if(!s)throw new Error("Invalid Content Type: no boundary");let o=`--${s}`;o=o.replace('"',""),o=o.replace('"',""),new Q;const a=e.split(o);for(const e of a){if(!e)continue;const t=e.match(/Content-Type: ([^\r\n]+)/);if(console.log("contentTypeMatch",t),t){const s=t[1];if(s.startsWith("application/json")){const e=extractJSON(t.input);console.log("json",e)}else if(s.startsWith("text/")){const t=e.match(/[\r\n\r\n]([\s\S]*)/)[1];console.log("text",t)}else if(s.startsWith("image/")){const t=e.match(/[\r\n\r\n]([\s\S]*)/)[1],o=URL.createObjectURL(new Blob([t],{type:s}));console.log("img",o)}}}return[]}static parseHeader(e){if(!e)throw new Error("Invalid Header Value: "+e);var t=new R;t.fullText=e;const s=e.split(/;/g);t.value=s[0];for(var o=1;o<s.length;o++){const e=s[o].trim().split("=",2);t.directives.append(e[0],e[1])}return t}static nextLine(e,t){const s=e.indexOf("\n",t+1);let o=e.substring(t+1,-1==s?null:s);for(;o.endsWith("\r");)o=o.substr(0,o.length-1);return[o,s]}static extractJSON(e){let t,s,o;t=e.indexOf("{",t+1);do{if(s=e.lastIndexOf("}"),console.log("firstOpen: "+t,"firstClose: "+s),s<=t)return null;do{o=e.substring(t,s+1),console.log("candidate: "+o);try{const e=JSON.parse(o);return console.log("...found"),[e,t,s+1]}catch(e){console.log("...failed")}s=e.substr(0,s).lastIndexOf("}")}while(s>t);t=e.indexOf("{",t+1)}while(-1!=t)}}class Q{entryHeaders=new Headers;bodyHeaders=new Headers;body="";json(){return JSON.parse(this.body)}}class R{fullText;value;directives=new Headers}const V=async(e,t)=>{console.log("upload",e);const s=new FormData,o=JSON.stringify(e),a=new Blob([o],{type:"application/json"}),n=new File([a],"document.json",{type:"application/json"});s.append("document.json",n,n.name);const{documento:i,anexos:l}=t;i&&s.append("documento1",i,i.name),l.length&&l.forEach(((e,t)=>{s.append(`anexo${t+1}`,e,e.name)})),G(s).then((async e=>{if(e.headers.get("Content-Type").startsWith("multipart/mixed"))return await J.parseAsync(e);throw new Error("La respuesta del servidor no es de tipo multipart/mixed")})).then((e=>{console.log(e)})).catch((e=>console.log(e)))},G=async e=>{const t=encodeURIComponent("nXSw+spZBJdPbAZSqnzkF4oMWy4Cmv7cj5Ni0NAAM+4=");return await fetch(`https://pruebas-gesdoc.minvivienda.gov.co:443/SGD_WS/gesdoc/createReceived?appkey=${t}`,{method:"POST",mode:"cors",headers:{"Content-Type":"multipart/form-data"},body:e})};window.addEventListener("load",(async()=>{await o(),(()=>{const e=document.querySelectorAll("input[disabled]");for(let t of e)t.closest(".entradas-de-texto-govco").classList.add("disabled-govco");h("keyup",f,document.querySelectorAll('input[typeData="identification"]'))})(),(()=>{const e=document.querySelectorAll("input[disabled]");for(let t of e)t.closest(".entradas-de-texto-govco").classList.add("disabled-govco");h("keyup",b,document.querySelectorAll('input[typeData="name"]'))})(),(()=>{const e=document.querySelectorAll("input[disabled]");for(let t of e)t.closest(".entradas-de-texto-govco").classList.add("disabled-govco");h("keyup",y,document.querySelectorAll('input[typeData="surname"]'))})(),(()=>{const e=document.querySelectorAll("input[disabled]");for(let t of e)t.closest(".entradas-de-texto-govco").classList.add("disabled-govco");h("keyup",L,document.querySelectorAll('input[typeData="mail"]'))})(),(()=>{const e=document.querySelectorAll("input[disabled]");for(let t of e)t.closest(".entradas-de-texto-govco").classList.add("disabled-govco");h("keyup",S,document.querySelectorAll('input[typeData="phone"]'))})(),(()=>{const e=document.querySelectorAll("input[disabled]");for(let t of e)t.closest(".entradas-de-texto-govco").classList.add("disabled-govco");h("keyup",x,document.querySelectorAll('input[typeData="text"]'))})(),(()=>{const e=document.querySelectorAll(".input-carga-de-archivo-govco");((e,t,s)=>{for(let o of s)o.addEventListener(e,t,!1),q[o.id]=[],E[o.id]=[],w[o.id]={validExtensions:[],validSize:0,maximumQuantity:1}})("change",C,e);const t=document.querySelectorAll(".button-loader-carga-de-archivo-govco");((e,t,s)=>{for(let o of s)o.addEventListener(e,t,!1)})("click",M,t),window.addEventListener("resize",T),T()})(),H("document",["docx","jpg","pdf","png"],5e6,1),H("files",["docx","jpg","pdf","png"],5e6,10),console.log(t),e.addEventListener("click",(async e=>{e.preventDefault(),await V(t,s)}))}))})();