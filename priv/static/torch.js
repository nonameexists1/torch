!function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){
/*!
 * Pikaday
 *
 * Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/Pikaday/Pikaday
 */
!function(t,a){"use strict";var i;try{i=n(!function(){var e=new Error("Cannot find module 'moment'");throw e.code="MODULE_NOT_FOUND",e}())}catch(e){}e.exports=function(e){var t="function"==typeof e,n=!!window.addEventListener,a=window.document,i=window.setTimeout,o=function(e,t,a,i){n?e.addEventListener(t,a,!!i):e.attachEvent("on"+t,a)},s=function(e,t,a,i){n?e.removeEventListener(t,a,!!i):e.detachEvent("on"+t,a)},r=function(e,t){return-1!==(" "+e.className+" ").indexOf(" "+t+" ")},l=function(e,t){r(e,t)||(e.className=""===e.className?t:e.className+" "+t)},d=function(e,t){var n;e.className=(n=(" "+e.className+" ").replace(" "+t+" "," ")).trim?n.trim():n.replace(/^\s+|\s+$/g,"")},h=function(e){return/Array/.test(Object.prototype.toString.call(e))},u=function(e){return/Date/.test(Object.prototype.toString.call(e))&&!isNaN(e.getTime())},c=function(e){var t=e.getDay();return 0===t||6===t},f=function(e){return e%4==0&&e%100!=0||e%400==0},m=function(e,t){return[31,f(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]},g=function(e){u(e)&&e.setHours(0,0,0,0)},p=function(e,t){return e.getTime()===t.getTime()},y=function(e,t,n){var a,i;for(a in t)(i=void 0!==e[a])&&"object"==typeof t[a]&&null!==t[a]&&void 0===t[a].nodeName?u(t[a])?n&&(e[a]=new Date(t[a].getTime())):h(t[a])?n&&(e[a]=t[a].slice(0)):e[a]=y({},t[a],n):!n&&i||(e[a]=t[a]);return e},v=function(e,t,n){var i;a.createEvent?((i=a.createEvent("HTMLEvents")).initEvent(t,!0,!1),i=y(i,n),e.dispatchEvent(i)):a.createEventObject&&(i=a.createEventObject(),i=y(i,n),e.fireEvent("on"+t,i))},b=function(e){return e.month<0&&(e.year-=Math.ceil(Math.abs(e.month)/12),e.month+=12),e.month>11&&(e.year+=Math.floor(Math.abs(e.month)/12),e.month-=12),e},D={field:null,bound:void 0,ariaLabel:"Use the arrow keys to pick a date",position:"bottom left",reposition:!0,format:"YYYY-MM-DD",toString:null,parse:null,defaultDate:null,setDefaultDate:!1,firstDay:0,formatStrict:!1,minDate:null,maxDate:null,yearRange:10,showWeekNumber:!1,pickWholeWeek:!1,minYear:0,maxYear:9999,minMonth:void 0,maxMonth:void 0,startRange:null,endRange:null,isRTL:!1,yearSuffix:"",showMonthAfterYear:!1,showDaysInNextAndPreviousMonths:!1,enableSelectionDaysInNextAndPreviousMonths:!1,numberOfMonths:1,mainCalendar:"left",container:void 0,blurFieldOnSelect:!0,i18n:{previousMonth:"Previous Month",nextMonth:"Next Month",months:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},theme:null,events:[],onSelect:null,onOpen:null,onClose:null,onDraw:null,keyboardInput:!0},_=function(e,t,n){for(t+=e.firstDay;t>=7;)t-=7;return n?e.i18n.weekdaysShort[t]:e.i18n.weekdays[t]},w=function(e){var t=[],n="false";if(e.isEmpty){if(!e.showDaysInNextAndPreviousMonths)return'<td class="is-empty"></td>';t.push("is-outside-current-month"),e.enableSelectionDaysInNextAndPreviousMonths||t.push("is-selection-disabled")}return e.isDisabled&&t.push("is-disabled"),e.isToday&&t.push("is-today"),e.isSelected&&(t.push("is-selected"),n="true"),e.hasEvent&&t.push("has-event"),e.isInRange&&t.push("is-inrange"),e.isStartRange&&t.push("is-startrange"),e.isEndRange&&t.push("is-endrange"),'<td data-day="'+e.day+'" class="'+t.join(" ")+'" aria-selected="'+n+'"><button class="pika-button pika-day" type="button" data-pika-year="'+e.year+'" data-pika-month="'+e.month+'" data-pika-day="'+e.day+'">'+e.day+"</button></td>"},M=function(e,t,n,a){return'<tr class="pika-row'+(n?" pick-whole-week":"")+(a?" is-selected":"")+'">'+(t?e.reverse():e).join("")+"</tr>"},k=function(e,t,n,a,i,o){var s,r,l,d,u,c=e._o,f=n===c.minYear,m=n===c.maxYear,g='<div id="'+o+'" class="pika-title" role="heading" aria-live="assertive">',p=!0,y=!0;for(l=[],s=0;s<12;s++)l.push('<option value="'+(n===i?s-t:12+s-t)+'"'+(s===a?' selected="selected"':"")+(f&&s<c.minMonth||m&&s>c.maxMonth?'disabled="disabled"':"")+">"+c.i18n.months[s]+"</option>");for(d='<div class="pika-label">'+c.i18n.months[a]+'<select class="pika-select pika-select-month" tabindex="-1">'+l.join("")+"</select></div>",h(c.yearRange)?(s=c.yearRange[0],r=c.yearRange[1]+1):(s=n-c.yearRange,r=1+n+c.yearRange),l=[];s<r&&s<=c.maxYear;s++)s>=c.minYear&&l.push('<option value="'+s+'"'+(s===n?' selected="selected"':"")+">"+s+"</option>");return u='<div class="pika-label">'+n+c.yearSuffix+'<select class="pika-select pika-select-year" tabindex="-1">'+l.join("")+"</select></div>",c.showMonthAfterYear?g+=u+d:g+=d+u,f&&(0===a||c.minMonth>=a)&&(p=!1),m&&(11===a||c.maxMonth<=a)&&(y=!1),0===t&&(g+='<button class="pika-prev'+(p?"":" is-disabled")+'" type="button">'+c.i18n.previousMonth+"</button>"),t===e._o.numberOfMonths-1&&(g+='<button class="pika-next'+(y?"":" is-disabled")+'" type="button">'+c.i18n.nextMonth+"</button>"),g+"</div>"},x=function(s){var l=this,d=l.config(s);l._onMouseDown=function(e){if(l._v){var t=(e=e||window.event).target||e.srcElement;if(t)if(r(t,"is-disabled")||(!r(t,"pika-button")||r(t,"is-empty")||r(t.parentNode,"is-disabled")?r(t,"pika-prev")?l.prevMonth():r(t,"pika-next")&&l.nextMonth():(l.setDate(new Date(t.getAttribute("data-pika-year"),t.getAttribute("data-pika-month"),t.getAttribute("data-pika-day"))),d.bound&&i((function(){l.hide(),d.blurFieldOnSelect&&d.field&&d.field.blur()}),100))),r(t,"pika-select"))l._c=!0;else{if(!e.preventDefault)return e.returnValue=!1,!1;e.preventDefault()}}},l._onChange=function(e){var t=(e=e||window.event).target||e.srcElement;t&&(r(t,"pika-select-month")?l.gotoMonth(t.value):r(t,"pika-select-year")&&l.gotoYear(t.value))},l._onKeyChange=function(e){if(e=e||window.event,l.isVisible())switch(e.keyCode){case 13:case 27:d.field&&d.field.blur();break;case 37:e.preventDefault(),l.adjustDate("subtract",1);break;case 38:l.adjustDate("subtract",7);break;case 39:l.adjustDate("add",1);break;case 40:l.adjustDate("add",7)}},l._onInputChange=function(n){var a;n.firedBy!==l&&(a=d.parse?d.parse(d.field.value,d.format):t?(a=e(d.field.value,d.format,d.formatStrict))&&a.isValid()?a.toDate():null:new Date(Date.parse(d.field.value)),u(a)&&l.setDate(a),l._v||l.show())},l._onInputFocus=function(){l.show()},l._onInputClick=function(){l.show()},l._onInputBlur=function(){var e=a.activeElement;do{if(r(e,"pika-single"))return}while(e=e.parentNode);l._c||(l._b=i((function(){l.hide()}),50)),l._c=!1},l._onClick=function(e){var t=(e=e||window.event).target||e.srcElement,a=t;if(t){!n&&r(t,"pika-select")&&(t.onchange||(t.setAttribute("onchange","return;"),o(t,"change",l._onChange)));do{if(r(a,"pika-single")||a===d.trigger)return}while(a=a.parentNode);l._v&&t!==d.trigger&&a!==d.trigger&&l.hide()}},l.el=a.createElement("div"),l.el.className="pika-single"+(d.isRTL?" is-rtl":"")+(d.theme?" "+d.theme:""),o(l.el,"mousedown",l._onMouseDown,!0),o(l.el,"touchend",l._onMouseDown,!0),o(l.el,"change",l._onChange),d.keyboardInput&&o(a,"keydown",l._onKeyChange),d.field&&(d.container?d.container.appendChild(l.el):d.bound?a.body.appendChild(l.el):d.field.parentNode.insertBefore(l.el,d.field.nextSibling),o(d.field,"change",l._onInputChange),d.defaultDate||(t&&d.field.value?d.defaultDate=e(d.field.value,d.format).toDate():d.defaultDate=new Date(Date.parse(d.field.value)),d.setDefaultDate=!0));var h=d.defaultDate;u(h)?d.setDefaultDate?l.setDate(h,!0):l.gotoDate(h):l.gotoDate(new Date),d.bound?(this.hide(),l.el.className+=" is-bound",o(d.trigger,"click",l._onInputClick),o(d.trigger,"focus",l._onInputFocus),o(d.trigger,"blur",l._onInputBlur)):this.show()};return x.prototype={config:function(e){this._o||(this._o=y({},D,!0));var t=y(this._o,e,!0);t.isRTL=!!t.isRTL,t.field=t.field&&t.field.nodeName?t.field:null,t.theme="string"==typeof t.theme&&t.theme?t.theme:null,t.bound=!!(void 0!==t.bound?t.field&&t.bound:t.field),t.trigger=t.trigger&&t.trigger.nodeName?t.trigger:t.field,t.disableWeekends=!!t.disableWeekends,t.disableDayFn="function"==typeof t.disableDayFn?t.disableDayFn:null;var n=parseInt(t.numberOfMonths,10)||1;if(t.numberOfMonths=n>4?4:n,u(t.minDate)||(t.minDate=!1),u(t.maxDate)||(t.maxDate=!1),t.minDate&&t.maxDate&&t.maxDate<t.minDate&&(t.maxDate=t.minDate=!1),t.minDate&&this.setMinDate(t.minDate),t.maxDate&&this.setMaxDate(t.maxDate),h(t.yearRange)){var a=(new Date).getFullYear()-10;t.yearRange[0]=parseInt(t.yearRange[0],10)||a,t.yearRange[1]=parseInt(t.yearRange[1],10)||a}else t.yearRange=Math.abs(parseInt(t.yearRange,10))||D.yearRange,t.yearRange>100&&(t.yearRange=100);return t},toString:function(n){return n=n||this._o.format,u(this._d)?this._o.toString?this._o.toString(this._d,n):t?e(this._d).format(n):this._d.toDateString():""},getMoment:function(){return t?e(this._d):null},setMoment:function(n,a){t&&e.isMoment(n)&&this.setDate(n.toDate(),a)},getDate:function(){return u(this._d)?new Date(this._d.getTime()):null},setDate:function(e,t){if(!e)return this._d=null,this._o.field&&(this._o.field.value="",v(this._o.field,"change",{firedBy:this})),this.draw();if("string"==typeof e&&(e=new Date(Date.parse(e))),u(e)){var n=this._o.minDate,a=this._o.maxDate;u(n)&&e<n?e=n:u(a)&&e>a&&(e=a),this._d=new Date(e.getTime()),g(this._d),this.gotoDate(this._d),this._o.field&&(this._o.field.value=this.toString(),v(this._o.field,"change",{firedBy:this})),t||"function"!=typeof this._o.onSelect||this._o.onSelect.call(this,this.getDate())}},gotoDate:function(e){var t=!0;if(u(e)){if(this.calendars){var n=new Date(this.calendars[0].year,this.calendars[0].month,1),a=new Date(this.calendars[this.calendars.length-1].year,this.calendars[this.calendars.length-1].month,1),i=e.getTime();a.setMonth(a.getMonth()+1),a.setDate(a.getDate()-1),t=i<n.getTime()||a.getTime()<i}t&&(this.calendars=[{month:e.getMonth(),year:e.getFullYear()}],"right"===this._o.mainCalendar&&(this.calendars[0].month+=1-this._o.numberOfMonths)),this.adjustCalendars()}},adjustDate:function(e,t){var n,a=this.getDate()||new Date,i=24*parseInt(t)*60*60*1e3;"add"===e?n=new Date(a.valueOf()+i):"subtract"===e&&(n=new Date(a.valueOf()-i)),this.setDate(n)},adjustCalendars:function(){this.calendars[0]=b(this.calendars[0]);for(var e=1;e<this._o.numberOfMonths;e++)this.calendars[e]=b({month:this.calendars[0].month+e,year:this.calendars[0].year});this.draw()},gotoToday:function(){this.gotoDate(new Date)},gotoMonth:function(e){isNaN(e)||(this.calendars[0].month=parseInt(e,10),this.adjustCalendars())},nextMonth:function(){this.calendars[0].month++,this.adjustCalendars()},prevMonth:function(){this.calendars[0].month--,this.adjustCalendars()},gotoYear:function(e){isNaN(e)||(this.calendars[0].year=parseInt(e,10),this.adjustCalendars())},setMinDate:function(e){e instanceof Date?(g(e),this._o.minDate=e,this._o.minYear=e.getFullYear(),this._o.minMonth=e.getMonth()):(this._o.minDate=D.minDate,this._o.minYear=D.minYear,this._o.minMonth=D.minMonth,this._o.startRange=D.startRange),this.draw()},setMaxDate:function(e){e instanceof Date?(g(e),this._o.maxDate=e,this._o.maxYear=e.getFullYear(),this._o.maxMonth=e.getMonth()):(this._o.maxDate=D.maxDate,this._o.maxYear=D.maxYear,this._o.maxMonth=D.maxMonth,this._o.endRange=D.endRange),this.draw()},setStartRange:function(e){this._o.startRange=e},setEndRange:function(e){this._o.endRange=e},draw:function(e){if(this._v||e){var t,n=this._o,a=n.minYear,o=n.maxYear,s=n.minMonth,r=n.maxMonth,l="";this._y<=a&&(this._y=a,!isNaN(s)&&this._m<s&&(this._m=s)),this._y>=o&&(this._y=o,!isNaN(r)&&this._m>r&&(this._m=r)),t="pika-title-"+Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,2);for(var d=0;d<n.numberOfMonths;d++)l+='<div class="pika-lendar">'+k(this,d,this.calendars[d].year,this.calendars[d].month,this.calendars[0].year,t)+this.render(this.calendars[d].year,this.calendars[d].month,t)+"</div>";this.el.innerHTML=l,n.bound&&"hidden"!==n.field.type&&i((function(){n.trigger.focus()}),1),"function"==typeof this._o.onDraw&&this._o.onDraw(this),n.bound&&n.field.setAttribute("aria-label",n.ariaLabel)}},adjustPosition:function(){var e,t,n,i,o,s,r,h,u,c,f,m;if(!this._o.container){if(this.el.style.position="absolute",t=e=this._o.trigger,n=this.el.offsetWidth,i=this.el.offsetHeight,o=window.innerWidth||a.documentElement.clientWidth,s=window.innerHeight||a.documentElement.clientHeight,r=window.pageYOffset||a.body.scrollTop||a.documentElement.scrollTop,f=!0,m=!0,"function"==typeof e.getBoundingClientRect)h=(c=e.getBoundingClientRect()).left+window.pageXOffset,u=c.bottom+window.pageYOffset;else for(h=t.offsetLeft,u=t.offsetTop+t.offsetHeight;t=t.offsetParent;)h+=t.offsetLeft,u+=t.offsetTop;(this._o.reposition&&h+n>o||this._o.position.indexOf("right")>-1&&h-n+e.offsetWidth>0)&&(h=h-n+e.offsetWidth,f=!1),(this._o.reposition&&u+i>s+r||this._o.position.indexOf("top")>-1&&u-i-e.offsetHeight>0)&&(u=u-i-e.offsetHeight,m=!1),this.el.style.left=h+"px",this.el.style.top=u+"px",l(this.el,f?"left-aligned":"right-aligned"),l(this.el,m?"bottom-aligned":"top-aligned"),d(this.el,f?"right-aligned":"left-aligned"),d(this.el,m?"top-aligned":"bottom-aligned")}},render:function(e,t,n){var a=this._o,i=new Date,o=m(e,t),s=new Date(e,t,1).getDay(),r=[],l=[];g(i),a.firstDay>0&&(s-=a.firstDay)<0&&(s+=7);for(var d=0===t?11:t-1,h=11===t?0:t+1,f=0===t?e-1:e,y=11===t?e+1:e,v=m(f,d),b=o+s,D=b;D>7;)D-=7;b+=7-D;for(var k,x,S,E,R=!1,N=0,C=0;N<b;N++){var O=new Date(e,t,N-s+1),A=!!u(this._d)&&p(O,this._d),T=p(O,i),I=-1!==a.events.indexOf(O.toDateString()),j=N<s||N>=o+s,Y=N-s+1,L=t,P=e,W=a.startRange&&p(a.startRange,O),F=a.endRange&&p(a.endRange,O),B=a.startRange&&a.endRange&&a.startRange<O&&O<a.endRange;j&&(N<s?(Y=v+Y,L=d,P=f):(Y-=o,L=h,P=y));var H={day:Y,month:L,year:P,hasEvent:I,isSelected:A,isToday:T,isDisabled:a.minDate&&O<a.minDate||a.maxDate&&O>a.maxDate||a.disableWeekends&&c(O)||a.disableDayFn&&a.disableDayFn(O),isEmpty:j,isStartRange:W,isEndRange:F,isInRange:B,showDaysInNextAndPreviousMonths:a.showDaysInNextAndPreviousMonths,enableSelectionDaysInNextAndPreviousMonths:a.enableSelectionDaysInNextAndPreviousMonths};a.pickWholeWeek&&A&&(R=!0),l.push(w(H)),7==++C&&(a.showWeekNumber&&l.unshift((k=N-s,x=t,S=e,E=void 0,void 0,E=new Date(S,0,1),'<td class="pika-week">'+Math.ceil(((new Date(S,x,k)-E)/864e5+E.getDay()+1)/7)+"</td>")),r.push(M(l,a.isRTL,a.pickWholeWeek,R)),l=[],C=0,R=!1)}return function(e,t,n){return'<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="'+n+'">'+function(e){var t,n=[];e.showWeekNumber&&n.push("<th></th>");for(t=0;t<7;t++)n.push('<th scope="col"><abbr title="'+_(e,t)+'">'+_(e,t,!0)+"</abbr></th>");return"<thead><tr>"+(e.isRTL?n.reverse():n).join("")+"</tr></thead>"}(e)+(a=t,"<tbody>"+a.join("")+"</tbody></table>");var a}(a,r,n)},isVisible:function(){return this._v},show:function(){this.isVisible()||(this._v=!0,this.draw(),d(this.el,"is-hidden"),this._o.bound&&(o(a,"click",this._onClick),this.adjustPosition()),"function"==typeof this._o.onOpen&&this._o.onOpen.call(this))},hide:function(){var e=this._v;!1!==e&&(this._o.bound&&s(a,"click",this._onClick),this.el.style.position="static",this.el.style.left="auto",this.el.style.top="auto",l(this.el,"is-hidden"),this._v=!1,void 0!==e&&"function"==typeof this._o.onClose&&this._o.onClose.call(this))},destroy:function(){var e=this._o;this.hide(),s(this.el,"mousedown",this._onMouseDown,!0),s(this.el,"touchend",this._onMouseDown,!0),s(this.el,"change",this._onChange),e.keyboardInput&&s(a,"keydown",this._onKeyChange),e.field&&(s(e.field,"change",this._onInputChange),e.bound&&(s(e.trigger,"click",this._onInputClick),s(e.trigger,"focus",this._onInputFocus),s(e.trigger,"blur",this._onInputBlur))),this.el.parentNode&&this.el.parentNode.removeChild(this.el)}},x}(i)}()},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a);!function(){function e(e,t){const n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function t(t){var n=t.getAttribute("data-confirm");if(n&&!window.confirm(n))return;const a=e("_method",t.getAttribute("data-method")),i=e("_csrf_token",t.getAttribute("data-csrf")),o=document.createElement("form");o.method="get"===t.getAttribute("data-method")?"get":"post",o.action=t.getAttribute("data-to"),o.style.display="hidden",o.appendChild(i),o.appendChild(a),document.body.appendChild(o),o.submit()}window.addEventListener("click",(function(e){for(var n=e.target;n&&n.getAttribute;){if(n.getAttribute("data-method"))return t(n),e.preventDefault(),!1;n=n.parentNode}}),!1)}(),window.onload=()=>{const e=Array.prototype.slice;e.call(document.querySelectorAll(".torch-nav a"),0).forEach(e=>{const t=window.location.href,n=e.getAttribute("href");RegExp(n).test(t)&&e.classList.add("active")}),e.call(document.querySelectorAll("button.torch-flash-close"),0).forEach(e=>{e.addEventListener("click",(function(){const t=e.closest(".torch-flash");t.parentNode.removeChild(t)}))});const t=document.querySelector("form#torch-filters-form");if(!t)return;t.addEventListener("submit",(function(t){t.preventDefault();let n=!0;e.call(this.querySelectorAll(".field"),0).forEach(e=>{const t=e.getElementsByTagName("label")[0].textContent,a=e.getElementsByClassName("start")[0],i=e.getElementsByClassName("end")[0];a&&i&&(""===a.value&&""!==i.value?(window.alert(`Please select a start date for the ${t} field`),n=!1):""===i.value&&""!==a.value&&(window.alert(`Please select an end at date for the ${t} field`),n=!1))}),n&&(e.call(this.querySelectorAll("input, select"),0).forEach(e=>{""===e.value&&(e.disabled=!0)}),t.target.submit())})),e.call(document.querySelectorAll("select.filter-type"),0).forEach(e=>{e.addEventListener("change",e=>{e.target.nextElementSibling.name=e.target.value})});const n=e=>e.toLocaleString("en-us",{year:"numeric",month:"2-digit",day:"2-digit"}).replace(/(\d+)\/(\d+)\/(\d+)/,"$3-$1-$2"),a=e=>{const t=e.split("-");if(3===t.length)return new Date(t[0],t[1]-1,t[2])};e.call(document.querySelectorAll(".datepicker"),0).forEach(e=>{const t=a(e.value)||new Date;new i.a({field:e,toString:e=>n(e),onSelect:t=>e.value=n(t),defaultDate:t,parse:a,theme:"torch-datepicker"})}),e.call(document.querySelectorAll(".torch-flash-close"),0).forEach(e=>{e.addEventListener("click",(function(t){let n=e;for(;(n=n.parentElement)&&!(n.matches||n.matchesSelector).call(n,"torch-flash");)n.parentNode.removeChild(n)}))})}}]);
//# sourceMappingURL=torch.js.map