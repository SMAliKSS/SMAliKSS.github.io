(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{213:function(t,e,n){var content=n(222);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("862d711a",content,!0,{sourceMap:!1})},221:function(t,e,n){"use strict";n(213)},222:function(t,e,n){var r=n(69)(!1);r.push([t.i,".wrapper[data-v-f0b7121a]{padding:8rem 4rem;align-items:flex-start;flex-direction:column;flex:inherit;height:100%}.header[data-v-f0b7121a],.wrapper[data-v-f0b7121a]{display:flex;justify-content:center;width:100%}.header[data-v-f0b7121a]{align-items:center;flex-direction:row;flex:inherit}.header .straight[data-v-f0b7121a]{background:var(--border-color);margin:auto;height:2px;border-radius:50%}.content[data-v-f0b7121a]{width:100%}.main-content[data-v-f0b7121a]{padding-top:3rem}",""]),t.exports=r},233:function(t,e,n){"use strict";n.r(e);var r=n(210),d={name:"about",mounted:function(){r.a.set(this.$refs.heading,{y:500,fontSize:"1.5rem"}),r.a.set(this.$refs.straightHeader,{width:0}),r.a.set(this.$refs.mainContent,{opacity:0,visibility:"hidden"}),"en"===this.$i18n.locale?r.a.set(this.$refs.heading,{x:500}):r.a.set(this.$refs.heading,{x:-500});var t=r.a.timeline();t.to(this.$refs.heading,1,{x:0,y:0},"relocateHeading"),t.to(this.$refs.heading,1,{fontSize:"3rem"},"relocateHeading += 0.3"),t.to(this.$refs.straightHeader,1,{width:"60%"}),t.to(this.$refs.mainContent,1,{opacity:1,visibility:"inherit"})}},o=(n(221),n(40)),component=Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"site-about-me"},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"header"},[n("h1",{ref:"heading",staticClass:"heading-01 heading"},[t._v(t._s(t.$t("main.pillars.headings.about")))]),t._v(" "),n("div",{ref:"straightHeader",staticClass:"straight"})]),t._v(" "),n("div",{staticClass:"content"},[n("p",{ref:"mainContent",staticClass:"main-content des-01"},[t._v(t._s(t.$t("contents.about.main")))])])])])}),[],!1,null,"f0b7121a",null);e.default=component.exports}}]);