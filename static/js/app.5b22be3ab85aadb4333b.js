webpackJsonp([6],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),o=n("zYko"),i=n.n(o),s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("vue-progress-bar"),e._v(" "),n("header",{directives:[{name:"show",rawName:"v-show",value:e.experiences(),expression:"experiences()"}],staticClass:"header navbar-fixed-top"},[n("nav",{staticClass:"navbar",attrs:{role:"navigation"}},[n("div",{staticClass:"container"},[e._m(0),e._v(" "),n("div",{staticClass:"collapse navbar-collapse nav-collapse"},[n("div",{staticClass:"menu-container"},[n("ul",{staticClass:"nav navbar-nav navbar-nav-right"},e._l(e.menuItems,function(t){return n("li",{key:t,staticClass:"js_nav-item nav-item",class:{active:e.checkPath(t.path)}},[n("a",{staticClass:"nav-item-child nav-item-hover",on:{click:function(n){n.preventDefault(),e.goTo(t.path)}}},[e._v(e._s(t.text))])])}))])])])])]),e._v(" "),n("transition",{attrs:{name:"fade"}},[n("router-view")],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"menu-container js_nav-item"},[t("button",{staticClass:"navbar-toggle",attrs:{type:"button","data-toggle":"collapse","data-target":".nav-collapse"}},[t("span",{staticClass:"sr-only"},[this._v("Toggle navigation")]),this._v(" "),t("span",{staticClass:"toggle-icon"})]),this._v(" "),t("div",{staticClass:"logo"},[t("a",{staticClass:"logo-wrap",attrs:{href:"/"}},[t("img",{staticClass:"logo-img logo-img-main",attrs:{src:n("ZBJ4"),alt:"Asentus Logo"}}),this._v(" "),t("img",{staticClass:"logo-img logo-img-active",attrs:{src:n("NZXh"),alt:"Asentus Logo"}})])])])}]},r=n("VU/8")({name:"app",data:function(){return{menuItems:[{path:"/",text:"Home"},{path:"/about",text:"About"},{path:"/experiences",text:"Experiences"},{path:"/services",text:"Services"},{path:"/skills",text:"Skills"}]}},methods:{goTo:function(e){this.$route.path!==e&&(this.$Progress.start(),this.$router.push(e))},checkPath:function(e){return this.$route.path===e},experiences:function(){return"/experiences"!==this.$route.path&&"/services"!==this.$route.path}}},s,!1,function(e){n("ew+R")},null,null).exports,c=n("/ocq");a.a.use(c.a);var l=new c.a({mode:"history",relative:!0,routes:[{path:"/",name:"Home",component:function(){return n.e(3).then(n.bind(null,"lO7g"))}},{path:"/about",name:"About",component:function(){return n.e(0).then(n.bind(null,"c27y"))}},{path:"/experiences",name:"Experiences",component:function(){return n.e(4).then(n.bind(null,"HQxL"))}},{path:"/services",name:"Services",component:function(){return n.e(1).then(n.bind(null,"bgOd"))}},{path:"/skills",name:"Skills",component:function(){return n.e(2).then(n.bind(null,"O36n"))}}]}),g=n("NYxO");a.a.use(g.a);var A=new g.a.Store({state:{skills:{frontend:[{name:"HTML",percentage:"100%"},{name:"CSS",percentage:"90%"},{name:"Javascript",percentage:"80%"},{name:"VueJS",percentage:"85%"},{name:"AngularJS",percentage:"40%"}],backend:[{name:"NodeJS",percentage:"80%"},{name:"PHP",percentage:"70%"},{name:"Laravel",percentage:"75%"}],android:[{name:"Ionic",percentage:"75%"},{name:"Java",percentage:"15%"},{name:"Kotlin",percentage:"20%"}],design:[{name:"Adobe Photoshop",percentage:"90%"},{name:"Adobe XD (Experience Design)",percentage:"90%"},{name:"Adobe Illustator",percentage:"75%"},{name:"Corel Draw",percentage:"70%"},{name:"Gravit Designer",percentage:"90%"}]},abouts:{greeting:"Hi, i’m Yeppy, Software Developer from Tangerang, Indonesia.",desc:["Currently I am a colleger majoring in Technical Information at Mercubuana Unversity, I also work as a freelancer Web Developer, Mobile Developer, and UI Designer","I really like programming, because it requires me to focus, discipline, team work, and many other positive things from the programming that I get."]},experiences:{schools:[{name:"Elementary School",title:"SD Negeri 2 Cikalahang",years:"2006 - 2012",desc:"This elementary school is located in the village of Cikalahang, not far from my house, so it does not require a vehicle when I leave school or go home from school"},{name:"Junior High School",title:"SMP Negeri 1 Dukupuntang",years:"2012 - 2015",desc:"The school is not far from my house, but at that time I was allowed to ride a motorcycle, so I went to school by motorcycle"},{name:"Senior High School",title:"SMK Negeri 1 Kota Cirebon",years:"2015 - 2018",desc:"In this school I majored in software engineering that i like"},{name:"Bachelor Degree",title:"Mercubuana University",years:"2018 - Now",desc:"In this uniersity I majored in Technical Information continued from senior highschool"}],archievements:[{title:"Graphic Design Competition",years:"2016, 3rd",desc:"Since entering high school, my hobby is designing and editing photos using Adobe Photoshop, and Adobe Illustrator"},{title:"Web Contest - DINAMIK 12 UPI, Bandung",years:"2016, Finalist - 4th",desc:"After knowing what it is programming world, my hobbies make website display design, and follow the DYNAMIC web competition with my team"},{title:"Web Design Competition",years:"2017, 2nd",desc:"Continuing my hobby in web programming, I followed this competition to add to the soul of my competition"},{title:"Web Design Contest - VOCOMFEST 2018 UGM, Yogyakarta",years:"2018, 5th",desc:"My role as Frontend Developer, I followed this competition to evaluate how far I am as a frontend developer"}]},services:[{icon:"icon-screen-smartphone",color:"#f306a0",title:"Android Development"},{icon:"fa fa-code",color:"#d8be10",title:"Web Development"},{icon:"fa fa-code",color:"#d8be10",title:"Clean Code"},{icon:"icon-support",color:"#0fd28a",title:"UI Designer"},{icon:"fa fa-html5",color:"#f97400",title:"HTML5 Design"},{icon:"icon-bulb",color:"#08a6f3",title:"CSS3 Design"}]}});a.a.config.productionTip=!1,a.a.use(i.a,{color:"#39D5FF",failedColor:"red"}),new a.a({el:"#app",router:l,store:A,template:"<App/>",components:{App:r}})},NZXh:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAWCAYAAABwvpo0AAAC50lEQVRYR+1WwXISQRB9g1ThLfkDocrl6lbCXfIHyRcIJ+EWv0D4A3NCvcT8gX6BcAeDVzhI/oDckhIy1hu21951FhDjIYGpoort6Zntfv369Rps+TJbnj92AOwYkI1ADcCzaPsMwDTlegpgL7K1ARQBvFoC6AWASbTfAmA9vtrHbR90RrVczkgcv4/coddvBl0xHHwYn+aiePqvA8aTWJXOuIXc4p16f1kLEIBzlSCDllUF8DV6YND01TYfDkcAJGBf8nLmHYA38lDpjLsweJkBbHdWyJ8M66WpS9DgLf3urK1/a5Y/xeAQRGMWuVi0+80gzmWVBrBiRJ/VLykWMBEJinb6aQB6KlmJgwEJAwSAKwC082yoGHUC4DMPJgCwaFuDEBahMQt2WmsvBs1yLTz/sf/kdjYxwJ6FnQwaZcbl1mFnPKG/Ba7nhXyRgMneKgB8LNCJkmqCZpbdVzwBgEDxHBcBuIz+fwFwnAag3whcvC7Zm9lQQBC7a5eo0sICbUtXn3etAoA+Um1hASvD6l9HfS9o/isAC4IuVgyMZoAkmgVMqtrTeSFfEqCsxdWgGVCnEmsdAHRiTN5VBoCuPp+1H0GLBUr5y8t9DPDpSqIFEgy4/XlpYIqk9aAR7MvFiYrDDgFDZv2hC+u2gPjpnqeNvZtGc5UIarAFAGqCaIC0Au+PBTOhAQYta12rVA3gkrYwZ4PGc06keKWF08J+HzTKDohNGMAzuj/5XI8C1/dpAAiQCJ746ASXTYEEs5ZOAYve7Gn+WIsaX1bpjKsw8ZQiSkd6ZOqg12kBHwt85zbRAOrIMPpRS/SkcO9NTYEeFd7AENxuVlI8d/h+NDQwL/hfa8emDOA53Qb3BYCeAj6GejXA65gyZonnDoAUAv+rBXxF8n0JPloGPEoAOAlk3qZnPBPmnnfURGhQ7PRHE818pj1zhR9HYX5u3HuXiV76gnXP/U0LrKM9D85nB8CDK9k9B7z1DPgFHN1HJqI99+EAAAAASUVORK5CYII="},ZBJ4:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAWCAYAAABwvpo0AAADBklEQVRYR+1WQXJSQRB9D6nCXXIDoUrYSpnsJTdITiCshF08gXADs0LdJLmBnkDYg8EtLIQbkJ0pIW31MDPO//n/g6lsEpgqCujp+b/79evXQ2z54pbnjx0AOwakICAidQAv7PYZyXnoKiKnAPbURrIjIkUAbzMAvSQ51X0RaetXgq/3cXuvu+N6LkcXx78jt+gPWuWe9/s8Oc3ZeAbvyp34sw+7kzZyq3eG+6ktYAE4tw/qkNSgzRKRGoDv9q8GXY/ZknA4ImkCFpGk5N2ZjyTfuz+H3UkPxJsUYHuLQv5k1CjNTYLEB/W7FWn8aFUuIiCSq1wEnUGr7HPJ1AAR0Yop+lr9kmOBiGgiLii1T2MA9AH46thALgIGOABmADRQBbTqGAXghORXPRcBQNARogpBlVyxU0Quh61KvXr+a//ZzWJKYE8g02GzUnIAHHQnU/UX4HpZyBcVMLe3DgBtgwgLYol6ZqTZkyoXMKBPUpPXRBSAK+v/jeRxHIBBs2ziNcn+XowcCM5u2sVW2rEgtMWrr89aOwWCahsWANDKaPWvARQDVoRtEWmZOAhJAMRawwMTMsAlmgaM2oNqz5eFfMkBJYLZsFVWnYqsTQAIE9PkTWUAZOmC0j/SAiqU7s0pDLijK5kMuPlzRbCotB42y/uJ/Q4ZAVRm3dGFjVogCDjseTXPSEbQXCeCJD3YAQCqMU4DTCvY5QUzogFEW8RoRY2ASVrAs2HzpU4kv+LCKZCfw2bFAPHfDDAvifanmhokvcpan7CCKm5m5Hmkba9b36wpEGFW5hQQ9BfP88ehqFnW1EA/pRSlo3BkRuJKQiXJFip/WM2AJffRANWRkf2oxvhJ4Z4bmwJ9VXjC3Cd6aUnp2YNP4xHBV/o71I57McBWzbfBAwLgxS6tEGkiuK5wm55bK4JBhXcAuMvPBgxIKlDSTfDJMuBJAqBjxIwed6cPsxQR3UscNdZvFLs0qXlOUkUwdVW/jKv5Jc17s0Qv/oBNz22sAetE57Hu7wB4rJV7qLi3ngF/AYGS2ibvAZcXAAAAAElFTkSuQmCC"},"ew+R":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.5b22be3ab85aadb4333b.js.map