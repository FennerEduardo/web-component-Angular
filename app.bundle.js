(()=>{"use strict";const e=document.querySelector("#btnSubmit"),t=document.querySelector("#formComplete"),s=document.querySelector("#respuesta"),o={author:{identification:"123"},authorDependence:{code:"71301"},type:{id:"2563"},reference:"Prueba Cancelación de Gravamenes",observations:"Correo electrónico - checklist",sourceThirdPerson:{identificationType:{name:""},identification:"",name:"",lastname:"",email:"",address:"",phone:"",municipality:{code:"11001"}},targetDependence:{code:"71301"},targetUser:{identification:"46382722"}},a=new Proxy({documento:null,anexos:[]},{set:(t,s,o)=>(t[s]=o,e.disabled="documento"!==s||null===o,null!==t.documento&&(e.disabled=!1),!0)}),n=async()=>(function(){const e=document.querySelectorAll('.desplegable-govco[data-type="filter"]');for(const t of e)d(t.id)}(),document.body.addEventListener("mouseup",i.bind(void 0),!0),!0);function i(e){e.preventDefault(),e.target.closest(".checkbox-seleccion-govco")||e.target.closest(".desplegable-govco")||function(){const e=document.querySelectorAll(".desplegable-govco:not(.desplegable-calendar-govco) .desplegable-selected-option:not(.dont-close)");e&&e.forEach((function(e){if(e.classList.contains("desplegable-arrow-active")&&(e.classList.remove("desplegable-arrow-active"),e.nextElementSibling.classList.add("desplegable-hide"),e.classList.contains("search-filter-selected-option"))){const t=e.nextElementSibling.querySelector(".same-as-selected");t&&(e.querySelector("input").value=t.innerHTML)}}))}()}function l(e){e.preventDefault();let t=this.querySelector(".desplegable-selected-option");if(t.classList.contains("desplegable-arrow-active"))if("DIV"==t.tagName&&(t=t.querySelector("input")),this.querySelector(".desplegable-items").onscroll=function(){const e=this.querySelectorAll("li");document.activeElement==e[0]&&(this.scrollTop=0)},38==e.which)!function(e,t){const s=document.activeElement,o=e.querySelectorAll(".desplegable-items li:not(.none-desplegable-govco)");if(s===o[0])t.focus();else for(let e=1;e<o.length;e++)s===o[e]&&o[e-1].focus()}(this,t);else if(40==e.which)!function(e,t){let s=document.activeElement;const o=e.querySelectorAll(".desplegable-items li:not(.none-desplegable-govco)"),a=e.querySelector(".desplegable-items li.same-as-selected");if(a&&s===t)a.focus();else if(s===t)o[0].focus();else for(let e=0;e<o.length-1;e++)s===o[e]&&o[e+1].focus()}(this,t);else if(9==e.which){let s=e.target.parentNode;"INPUT"==t.tagName&&(s=s.parentNode),c(s)}}function c(e){const t=e.querySelector(".desplegable-items"),s=e.querySelector(".desplegable-selected-option.desplegable-arrow-active");if(s&&(s.classList.remove("desplegable-arrow-active"),t.classList.add("desplegable-hide")),e.classList.contains("desplegable-filter-govco")){const t=e.querySelector(".same-as-selected");t&&(e.querySelector(".desplegable-selected-option input").value=t.innerHTML)}}function r(e){e.preventDefault(),13==e.which?function(e){const t=e.parentNode,s=t.parentNode;let o=s.querySelector(".desplegable-selected-option"),a=s.querySelector('input[type="hidden"]');const n=t.querySelector("li.same-as-selected");n&&(n.classList.remove("same-as-selected"),0==n.classList.length&&n.removeAttribute("class")),"DIV"==o.tagName?(o.querySelector(".btn-clear-desplegable-govco").classList.remove("d-none"),o=o.querySelector("input"),o.value=e.innerHTML):o.innerHTML=e.innerHTML,a.value=e.getAttribute("value"),e.classList.add("same-as-selected"),c(s)}(e.target):9==e.which&&c(e.target.parentNode.parentNode)}function d(e){let t;const s=document.getElementById(e);if(null==s||null==s)return!1;const a=s.querySelector("select"),n=function(e){const t=document.createElement("DIV");return t.setAttribute("class","desplegable-selected-option search-filter-selected-option"),t.addEventListener("click",u),"true"==e.getAttribute("aria-invalid")&&t.classList.add("error-desplegable-govco"),t}(a);s.appendChild(n);let i=document.createElement("ul");i.setAttribute("class","desplegable-items desplegable-hide");const c=function(e,t){let s=document.createElement("input");return s.setAttribute("type","text"),s.setAttribute("autocomplete","off"),s.setAttribute("class","browser-default"),s.addEventListener("keyup",p),s.addEventListener("keydown",v),s.setAttribute("placeholder",e.getAttribute("placeholder")?e.getAttribute("placeholder"):"Ingrese texto..."),e.disabled&&(s.disabled=!0,t.classList.add("disabled-desplegable-govco"),t.parentNode.previousElementSibling.classList.add("disabled-desplegable-govco")),s}(a,n),d=a.options[a.selectedIndex].getAttribute("value")?a.options[a.selectedIndex].getAttribute("value"):"";d>0&&(c.value=a.options[a.selectedIndex].innerHTML),n.appendChild(c);const h=document.createElement("button");h.addEventListener("click",g),h.setAttribute("class","btn-clear-desplegable-govco"),0==d&&h.classList.add("d-none"),n.appendChild(h);for(let e=1;e<a.length;e++)t=document.createElement("li"),t.innerHTML=a.options[e].innerHTML,t.setAttribute("value",a.options[e].getAttribute("value")),t.setAttribute("tabindex","-1"),d>0&&a.options[e].getAttribute("value")==d&&t.classList.add("same-as-selected"),t.addEventListener("click",(function(t){o.sourceThirdPerson.identificationType.name=a.options[e].getAttribute("value"),m(t.target)})),t.addEventListener("keydown",r),i.appendChild(t);s.appendChild(i);let f=function(e,t){let s=document.createElement("input");if(s.setAttribute("type","hidden"),s.value=t,e.attributes.length>0)for(const t of e.attributes)"class"==t.name?s.classList.add(t.value):s.setAttribute(t.name,t.value);return s.addEventListener("change",(e=>{console.log(s)})),s}(a,d);s.appendChild(f),s.addEventListener("keydown",l),s.removeChild(a)}function u(e){if(e.preventDefault(),this.classList.contains("desplegable-arrow-active")){this.classList.remove("desplegable-arrow-active");const e=this.nextElementSibling;e.classList.add("desplegable-hide");const t=e.querySelector(".same-as-selected");t&&(this.querySelector("input").value=t.innerHTML)}else e.stopPropagation(),f(this),h(this.querySelector("input")),this.querySelector("input").focus()}function p(){h(this)}function v(e){e.preventDefault(),13==e.which&&f(this.parentNode)}function m(e){const t=e.parentNode,s=t.parentNode,o=s.querySelector(".desplegable-selected-option input"),a=s.querySelector('input[type="hidden"]'),n=t.querySelector("li.same-as-selected");n&&(n.classList.remove("same-as-selected"),0==n.classList.length&&n.removeAttribute("class")),o.value=e.innerHTML,a.value=e.getAttribute("value"),e.classList.add("same-as-selected"),s.querySelector(".btn-clear-desplegable-govco").classList.remove("d-none"),c(s)}function g(e){e.preventDefault();const t=e.target.closest(".desplegable-govco.desplegable-filter-govco"),s=t.querySelector(".desplegable-selected-option input");s.value="",h(s),t.querySelector(".btn-clear-desplegable-govco").classList.add("d-none"),t.querySelector(".desplegable-items").querySelector(".same-as-selected").classList.remove("same-as-selected")}function h(e){const t=e.closest(".desplegable-govco.desplegable-filter-govco").querySelector("input[type='hidden']");let s,o,a;for(s=e.value.toUpperCase(),o=e.parentNode.nextElementSibling.getElementsByTagName("li"),a=0;a<o.length;a++)(o[a].textContent||o[a].innerText).toUpperCase().indexOf(s)>-1?o[a].classList.remove("none-desplegable-govco"):o[a].classList.add("none-desplegable-govco");const n=e.nextElementSibling;""!=e.value&&null!=e.value&&null!=e.value?n.classList.remove("d-none"):(n.classList.add("d-none"),t.value="")}function f(e){e&&(e.nextElementSibling.classList.remove("desplegable-hide"),e.classList.add("desplegable-arrow-active"))}function b(e,t,s){for(let o of s)o.addEventListener(e,t,!1)}function y(e){var t=/^\d+$/;t.test(this.value)&&!1===this.classList.contains("success")?(this.classList.remove("error"),this.classList.add("success"),E(this,"Número de documento válido","success","")):!1===t.test(this.value)&&!1===this.classList.contains("error")&&(this.classList.remove("success"),this.classList.add("error"),E(this,"Número de documento no válido","error","")),o.sourceThirdPerson.identification=e.target.value}function L(e){var t=/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;t.test(this.value)&&!1===this.classList.contains("success")?(this.classList.remove("error"),this.classList.add("success"),E(this,"Nombre válido","success","")):!1===t.test(this.value)&&!1===this.classList.contains("error")&&(this.classList.remove("success"),this.classList.add("error"),E(this,"Nombre no válido","error","")),o.sourceThirdPerson.name=e.target.value}function S(e){var t=/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;t.test(this.value)&&!1===this.classList.contains("success")?(this.classList.remove("error"),this.classList.add("success"),E(this,"Apellido válido","success","")):!1===t.test(this.value)&&!1===this.classList.contains("error")&&(this.classList.remove("success"),this.classList.add("error"),E(this,"Apellido no válido","error","")),o.sourceThirdPerson.lastname=e.target.value}function x(e){const t=/^([da-z_.-]+)@([da-z.-]+).([a-z.]{2,6})$/;t.test(this.value)&&!1===this.classList.contains("success")?(this.classList.remove("error"),this.classList.add("success"),E(this,"Correo electrónico válido","success","")):!1===t.test(this.value)&&!1===this.classList.contains("error")&&(this.classList.remove("success"),this.classList.add("error"),E(this,"Correo electrónico no válido","error","")),o.sourceThirdPerson.email=e.target.value}function A(e){const t=/(\d{3}\d{7})/;t.test(this.value)&&!1===this.classList.contains("success")?(this.classList.remove("error"),this.classList.add("success"),E(this,"Número de teléfono válido","success","")):!1===t.test(this.value)&&!1===this.classList.contains("error")&&(this.classList.remove("success"),this.classList.add("error"),E(this,"Número de teléfono no válido","error","")),o.sourceThirdPerson.phone=e.target.value}function q(e){const t=/[-a-zA-Z0-9+&@#\/%?=~_|!:,.;]/gm;t.test(this.value)&&!1===this.classList.contains("success")?(this.classList.remove("error"),this.classList.add("success"),E(this,"Dirección válida","success","")):!1===t.test(this.value)&&!1===this.classList.contains("error")&&(this.classList.remove("success"),this.classList.add("error"),E(this,"Dirección no válida","error","")),o.sourceThirdPerson.address=e.target.value}function E(e,t,s,o){var a={success:{id:"campoSuccess-id","aria-invalid":"false",class:"success-texto-govco",role:"status","aria-live":"polite"},error:{id:"campoWarning-id","aria-invalid":"true",class:"error-texto-govco",role:"alert","aria-live":"assertive"}},n=e.closest(".entradas-de-texto-govco"),i=n.querySelector(".alert-entradas-de-texto-govco");i&&n.removeChild(i);var l=document.createElement("span"),c=n.appendChild(l);e.setAttribute("aria-describedby",o+" "+a[s].id),e.setAttribute("aria-invalid",a[s]["aria-invalid"]),c.textContent=t,c.classList.add(a[s].class,"alert-entradas-de-texto-govco"),c.id=a[s].id,c.setAttribute("role",a[s].role),c.setAttribute("aria-live",a[s]["aria-live"])}const w={},N={},C={},T="Seleccione un documento para adjuntar.",k=()=>{let e=document.querySelectorAll(".container-carga-de-archivo-govco");for(let t of e)t.offsetWidth<340?t.classList.add("responsive-govco","small-fileupload-govco"):t.offsetWidth<652?(t.classList.add("responsive-govco"),t.classList.remove("small-fileupload-govco")):t.classList.remove("responsive-govco","small-fileupload-govco")},D=e=>{const t=e.target,s=t.id,o=t.parentNode,a=o.parentNode.querySelector(".button-loader-carga-de-archivo-govco");let n="";const i=C[s].maximumQuantity;if(N[s]=[],U(t,!1,""),w[s].length+t.files.length>i)U(t,!0,"Supera la cantidad de archivos permitida."),w[s].length>=i&&(t.disabled=!0,t.classList.remove("active"));else if(t.files.length>0){let e=H(t.files,s);if(0===e.invalidExtensions&&0===e.invalidSize)n=N[s]&&N[s].length>1?N[s].length+" archivos seleccionados":N[s][0].name,j(o,n),O(a,!1);else{N[s]=[];const o=I(e.invalidExtensions,e.invalidSize);U(t,!0,o)}}else U(t,!0,T),Z(t,o),O(a,!0)},I=(e,t)=>{let s="";return e>0&&(s=e>1?"Formato de archivo no permitido.":"Uno de los archivos tiene un formato no admitido."),t>0&&(s+=t>1?" El archivo excede el tamaño máximo permitido.":" Uno de los archivos excede el tamaño máximo permitido."),s},H=(e,t)=>{let s=0,o=0,a=C[t].validExtensions,n=C[t].validSize;return a.length>0||n>0?[...e].forEach((e=>{const i=e.name.split(".").pop().toLowerCase();a&&Array.isArray(a)&&a.includes(i)?n>=e.size?N[t].push(e):o++:s++})):N[t].push(...e),{invalidExtensions:s,invalidSize:o}},z=(e,t=[],s=0,o=1)=>{const a=t.map((e=>e.toString().toLowerCase())),n=isNaN(s)?0:parseInt(s),i=isNaN(o)?0:parseInt(o);C[e]={validExtensions:a,validSize:n,maximumQuantity:i}},j=(e,t)=>{e.querySelector(".file-name-carga-de-archivo-govco").innerHTML=t||"Sin archivo seleccionado"},O=(e,t)=>{e.disabled=t},M=async e=>{const t=e.target,s=t.parentNode.parentNode,o=s.querySelector(".input-carga-de-archivo-govco"),a=o.id,n=s.querySelector(".load-carga-de-archivo-govco");if(R(n,!0),O(t,!0),o.value){const e=s.nextElementSibling,t=e.querySelector(".attached-files-carga-de-archivo-govco"),i=await P(o,n,s,"add",N[a]);i.length>0&&($(t,i,a),e.style.display=w[a].length>0?"block":"none",w[a].length>=C[a].maximumQuantity&&(o.disabled=!0,o.classList.remove("active"))),Z(o,s)}else U(o,!0,T),R(n,!1)},P=async(e,t,s,o,n)=>{const i="add"==o?"data-action":"data-action-delete",l=e.getAttribute(i);let c={};try{if("uploadDocument"===l)a.documento=n[0],c=n;else if("uploadFile"===l)a.anexos=a.anexos.concat(n),c=n;else if("deleteDocument"===l)a.documento=null,c=a.anexos;else if("deleteFile"===l){console.log(l);const e=a.anexos.findIndex((e=>e.name===n.name));console.log(e),a.anexos.splice(e,1),c=a.anexos}else if(c=n,R(t,!1),"delete"==o)return!0;if(console.log(a),R(t,!1),"delete"==o)return!0}catch(a){if(U(e,!0,a),R(t,!1),Z(e,s),"delete"==o)return!1}return c},U=(e,t,s)=>{const o=e.parentNode.parentNode.nextElementSibling,a=o.querySelector(".alert-carga-de-archivo-govco"),n=e.id;e.setAttribute("data-error",t?"1":"0"),W(a,t),a.innerHTML=s,w[n].length<=0&&(o.style.display=t?"block":"none")},W=(e,t)=>{t?e.classList.remove("visually-hidden"):e.classList.add("visually-hidden")},R=(e,t)=>{e.style.visibility=t?"visible":"hidden"},Z=(e,t)=>{e.value="",j(t,"")},$=(e,t,s)=>(t.forEach((function(t){const o=F(t.size);B(e,t.name,o),w[s].push(t)})),!0),B=(e,t,s)=>{const o=document.createElement("div");o.classList.add("attached-file-carga-de-archivo-govco"),o.setAttribute("tabindex","0");const a=document.createElement("div");a.classList.add("icon-text-carga-de-archivo-govco");const n=document.createElement("div");n.classList.add("file-alt-carga-de-archivo-govco");const i=document.createElement("div");i.classList.add("container-text-name-carga-de-archivo-govco");const l=document.createElement("span");l.classList.add("text-name-carga-de-archivo-govco");const c=document.createTextNode(t);l.appendChild(c);const r=document.createElement("span"),d=document.createTextNode(s);r.appendChild(d);const u=document.createElement("button");u.classList.add("trash-alt-1-carga-de-archivo-govco"),a.appendChild(n),i.appendChild(l),i.appendChild(r),a.appendChild(i),o.appendChild(a),o.appendChild(u),e.appendChild(o),u.addEventListener("click",J,!1)},F=e=>{if(e){var t=parseInt(e);return t<1024?t+"bytes":t<1048576?parseInt(t/1024)+"KB":t<1073741824?parseInt(t/1048576)+"MB":parseInt(t/1073741824)+"GB"}},J=async e=>{const t=e.target.parentNode,s=t.parentNode.parentNode,o=s.parentNode,a=o.querySelector(".input-carga-de-archivo-govco"),n=a.id,i=o.querySelector(".load-carga-de-archivo-govco"),l=t.querySelector(".text-name-carga-de-archivo-govco").innerHTML,c=w[n].find((e=>e.name===l)),r=w[n].indexOf(c);if(R(i,!0),r>=0){if(!0===await P(a,i,o,"delete",c)){let e=t.parentNode;w[n].splice(r,1),e.removeChild(t),w[n].length<C[n].maximumQuantity&&(a.disabled=!1,a.classList.add("active")),s.style.display=w[n].length>0?"block":"none"}}else R(i,!1)};class Q{static async parseAsync(e){const t=await e.text(),s=e.headers.get("Content-Type");return this.parse(t,s)}static parse(e,t){const s={},o=this.parseHeader(t).directives.get("boundary");if(!o)throw new Error("Invalid Content Type: no boundary");let a=`--${o}`;a=a.replace('"',""),a=a.replace('"',""),new V;const n=e.split(a);for(const e of n){if(!e)continue;const t=e.match(/Content-Type: ([^\r\n]+)/);if(t){const o=t[1];if(o.startsWith("application/json")){const e=this.extractJSON(t.input);s.json=e}else if(o.startsWith("text/"))e.match(/[\r\n\r\n]([\s\S]*)/)[1];else if(o.startsWith("application/octet-stream")){const t=e.match(/[\r\n\r\n]([\s\S]*)/)[1];console.log(t);const o=_(t);console.log(o),delete o[0],delete o[1],delete o[2],delete o[3],delete o[4];const a=o.join("");console.log(a);const n=new Blob([a],{type:"image/png"}),i=URL.createObjectURL(n);s.img=i}}}return s}static parseHeader(e){if(!e)throw new Error("Invalid Header Value: "+e);var t=new G;t.fullText=e;const s=e.split(/;/g);t.value=s[0];for(var o=1;o<s.length;o++){const e=s[o].trim().split("=",2);t.directives.append(e[0],e[1])}return t}static nextLine(e,t){const s=e.indexOf("\n",t+1);let o=e.substring(t+1,-1==s?null:s);for(;o.endsWith("\r");)o=o.substr(0,o.length-1);return[o,s]}static extractJSON(e){let t,s,o;t=e.indexOf("{",t+1);do{if(s=e.lastIndexOf("}"),console.log("firstOpen: "+t,"firstClose: "+s),s<=t)return null;do{o=e.substring(t,s+1),console.log("candidate: "+o);try{const e=JSON.parse(o);return console.log("...found"),[e,t,s+1]}catch(e){console.log("...failed")}s=e.substr(0,s).lastIndexOf("}")}while(s>t);t=e.indexOf("{",t+1)}while(-1!=t)}static blobToImage(e){return new Promise((t=>{const s=URL.createObjectURL(e);let o=new Image;o.onload=()=>{URL.revokeObjectURL(s),t(o)},o.src=s}))}}class V{entryHeaders=new Headers;bodyHeaders=new Headers;body="";json(){return JSON.parse(this.body)}}class G{fullText;value;directives=new Headers}const _=e=>e.split(/\r\n|\r|\n/,-1),K=(e,t=[],s=[])=>{const o=document.createElement(e);return t.forEach((e=>{o.classList.add(e)})),s?.forEach((e=>{e&&o.setAttribute(e.attribute,e.value)})),o},X=async(e,o)=>{console.log("upload",e);const a=new FormData,n=JSON.stringify(e),i=new Blob([n],{type:"application/json"}),l=new File([i],"document.json",{type:"application/json"});a.append("document.json",l,l.name);const{documento:c,anexos:r}=o;c&&a.append("documento1",c,c.name),r.length&&r.forEach(((e,t)=>{a.append(`anexo${t+1}`,e,e.name)})),Y(a).then((async e=>{if(e.headers.get("Content-Type").startsWith("multipart/mixed"))return await Q.parseAsync(e);throw new Error("La respuesta del servidor no es de tipo multipart/mixed")})).then((e=>{console.log("obj data: ",e);const o=K("p"),a=K("img");o.textContent=`${e.json[0].message}, Recuerde que puede consultar el estado de la petición por medio de nuestro portal con el número de radicado: ${e.json[0].idelement.id}`,a.src=e.img,t.style.display="none",s.appendChild(o),s.appendChild(a)})).catch((e=>console.log(e)))},Y=async e=>{const t=encodeURIComponent("nXSw+spZBJdPbAZSqnzkF4oMWy4Cmv7cj5Ni0NAAM+4=");return await fetch(`https://pruebas-gesdoc.minvivienda.gov.co:443/SGD_WS/gesdoc/createReceived?appkey=${t}`,{method:"POST",mode:"cors",headers:{"Content-Type":"multipart/form-data"},body:e})};window.addEventListener("load",(async()=>{await n(),(()=>{const e=document.querySelectorAll("input[disabled]");for(let t of e)t.closest(".entradas-de-texto-govco").classList.add("disabled-govco");b("keyup",y,document.querySelectorAll('input[typeData="identification"]'))})(),(()=>{const e=document.querySelectorAll("input[disabled]");for(let t of e)t.closest(".entradas-de-texto-govco").classList.add("disabled-govco");b("keyup",L,document.querySelectorAll('input[typeData="name"]'))})(),(()=>{const e=document.querySelectorAll("input[disabled]");for(let t of e)t.closest(".entradas-de-texto-govco").classList.add("disabled-govco");b("keyup",S,document.querySelectorAll('input[typeData="surname"]'))})(),(()=>{const e=document.querySelectorAll("input[disabled]");for(let t of e)t.closest(".entradas-de-texto-govco").classList.add("disabled-govco");b("keyup",x,document.querySelectorAll('input[typeData="mail"]'))})(),(()=>{const e=document.querySelectorAll("input[disabled]");for(let t of e)t.closest(".entradas-de-texto-govco").classList.add("disabled-govco");b("keyup",A,document.querySelectorAll('input[typeData="phone"]'))})(),(()=>{const e=document.querySelectorAll("input[disabled]");for(let t of e)t.closest(".entradas-de-texto-govco").classList.add("disabled-govco");b("keyup",q,document.querySelectorAll('input[typeData="text"]'))})(),(()=>{const e=document.querySelectorAll(".input-carga-de-archivo-govco");((e,t,s)=>{for(let o of s)o.addEventListener(e,t,!1),w[o.id]=[],N[o.id]=[],C[o.id]={validExtensions:[],validSize:0,maximumQuantity:1}})("change",D,e);const t=document.querySelectorAll(".button-loader-carga-de-archivo-govco");((e,t,s)=>{for(let o of s)o.addEventListener(e,t,!1)})("click",M,t),window.addEventListener("resize",k),k()})(),z("document",["docx","jpg","pdf","png"],5e6,1),z("files",["docx","jpg","pdf","png"],5e6,10),console.log(o),e.addEventListener("click",(async e=>{e.preventDefault(),await X(o,a)}))}))})();