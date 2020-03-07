(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{146:function(e,n,t){"use strict";t.r(n);var a=t(7),r=t.n(a),i=t(0),o=t.n(i),s=t(147),l=t(152),c=t(153),u=t(149),d=t.n(u),p=(t(4),t(148)),m=t(150);function g(){var e=d()(["\n    width: 100%;\n    height: 3px;\n    background: #fff;\n    transition: ease-in-out 0.2s;\n    &.active {\n      background: ",";\n    }\n"]);return g=function(){return e},e}function h(){var e=d()(["\n    border: none;\n    display: inline-block;\n    text-decoration: none;\n    cursor: pointer;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    cursor: pointer;\n\n    font-weight: 600;\n    background: none;\n    color: ",";\n    border: 2px solid ",";\n    padding: 12px 20px;\n    transition: ease-in-out 0.2s;\n    z-index: 100;\n\n    &:hover {\n        background: ",";\n    }\n    &.active, .active:hover {\n        color: ",";\n        border-top: 2px solid ",";\n        border-bottom: 2px solid #fff;\n\n    }\n    &:focus {\n        outline: none;\n        background: ",";\n        border-bottom: 2px solid ",";\n    }\n"]);return h=function(){return e},e}function b(){var e=d()(["\n    border: none;\n    display: inline-block;\n    text-decoration: none;\n    cursor: pointer;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    background: ",";\n    color: ",";\n    border-radius: 20px;\n    font-weight: 600;\n    padding: 12px 20px;\n    cursor: pointer;\n    transition: ease-in-out 0.2s;\n    &:hover {\n        background: ",";\n    }\n    &.active, .active:hover {\n        background: ",";\n        color: ",";\n    }\n    &:focus {\n        outline: none;\n        box-shadow: inset 0 0 0 2px #004a54;\n    }\n"]);return b=function(){return e},e}function f(){var e=d()(["\n  margin-right: 8px;\n  margin-bottom: -2px;\n  z-index: 100;\n"]);return f=function(){return e},e}var k=p.a.li(f()),y=(p.a.button(b(),m.a.ink20,m.a.ink80,m.a.ink20,m.a.brandLight,m.a.teal90),p.a.button(h(),m.a.ink80,m.a.ink20,m.a.ink20,m.a.teal90,m.a.teal90,m.a.ink20,m.a.ink20)),w=p.a.div(g(),m.a.teal90),v=function(e){function n(){for(var n,t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(n=e.call.apply(e,[this].concat(a))||this).onClick=function(){var e=n.props,t=e.label;(0,e.onClick)(t)},n}return r()(n,e),n.prototype.render=function(){var e=this.onClick,n=this.props,t=n.activeTab,a=n.label;return o.a.createElement(k,null,o.a.createElement(w,{className:t===a&&"active"}),o.a.createElement(y,{onClick:e,className:t===a&&"active"},a))},n}(i.Component);function x(){var e=d()(["\n    list-style-type: none;\n    margin: 0;\n    padding: 0;    \n    display: flex;\n    justify-content: flex-start;\n    border-bottom: 2px solid ",";\n    z-index: 10;\n    margin-bottom: 20px;\n"]);return x=function(){return e},e}var E=p.a.ul(x(),m.a.ink20),I=function(e){function n(n){var t;return(t=e.call(this,n)||this).onClickTab=function(e){t.setState({activeTab:e})},t.state={activeTab:t.props.children[0].props.label},t}return r()(n,e),n.prototype.render=function(){var e=this.onClickTab,n=this.props.children,t=this.state.activeTab;return o.a.createElement(o.a.Fragment,null,o.a.createElement(E,null,n.map(function(n){var a=n.props.label;return o.a.createElement(v,{key:a,label:a,activeTab:t,onClick:e})})),o.a.createElement("div",null,n.map(function(e){if(e.props.label===t)return e.props.children})))},n}(i.Component);t.d(n,"pageQuery",function(){return C});var T=function(e){function n(){return e.apply(this,arguments)||this}return r()(n,e),n.prototype.render=function(){var e=this.props.data,n=e.site.siteMetadata.title;e.allMarkdownRemark.edges;return o.a.createElement(l.a,{location:this.props.location,title:n},o.a.createElement(c.a,{title:"Design Portfolio - Tyler Benning",keywords:["ux design","ui design","portfolio","product design","gatsby","javascript","react"]}),o.a.createElement(I,null,o.a.createElement("div",{label:"What I Do at Work"},o.a.createElement("p",null,"Product design is what I do at work everyday. "),o.a.createElement("p",null,"Sometimes that means fixing lots of small problems inside a big software app. Other times it means starting big ambitious projects from scratch. On some occasions, it means talking through problems and designing my way out of designing anything at all."),o.a.createElement("p",null,"When I work, I value sketching and writing over talking in circles. I think great ideas come from different team members when they have lots of relevant inputs from users and customers to give them context. I care about my teammates' work, even if I don't understand all of its nuances. I think roles are a helpful way to designate accountability within teams, but I like to stretch into adjacent roles of product and engineering. "),o.a.createElement("p",null,"Making a successful product is a team sport.")),o.a.createElement("div",{label:"What I'm Learning"},o.a.createElement("p",null,"Professionally, I'm drawn to the intersection of design and front-end development. I'd heard that learning React can help you become better at Javascript, so I started picking it up. A good starting point for me, was to build this site using"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org/",rel:"noopener",target:"_blank"}," Gatsby")," which uses React. "),o.a.createElement("p",null,"If you're interested, you can read more about how I ",o.a.createElement("code",null,"export default"),"'d my way to launching this site"," ",o.a.createElement(s.Link,{to:"/personal-projects/tylerbenning-website/"},"here.")),o.a.createElement("p",null,"Outside work, I keep some hobbies. I started brewing kombucha,"," ",o.a.createElement("a",{href:"https://www.youtube.com/watch?v=cKx8xE8jJZs",target:"_blank",rel:"noopener"},"swinging kettlebells,")," ","and writing music. I've dabbled in salsa dancing, sensory deprivation tanks, singing lessons, and drawing terribly. Ask me again in a month, and this list will likely be entirely different.")),o.a.createElement("div",{label:"What This Site's About"},o.a.createElement("p",null,"Stories are at the heart of design, and are what connect people to common ideas, goals, and motivations. Designers help craft these stories and enable people to have new interactions and experiences. I built this site so I'd have a place to write about and share some of my own stories and experiences as a Product Designer. Through this site, maybe we can share an experience."))))},n}(o.a.Component),C=(n.default=T,"2937973900")},153:function(e,n,t){"use strict";var a=t(154),r=t(0),i=t.n(r),o=t(4),s=t.n(o),l=t(156),c=t.n(l),u=t(147);function d(e){var n=e.description,t=e.lang,r=e.meta,o=e.keywords,s=e.title;return i.a.createElement(u.StaticQuery,{query:p,render:function(e){var a=n||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:t},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:s},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},n.a=d;var p="1025518380"},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Tyler Benning Product Designer",description:"The portfolio and stories of Tyler Benning ",author:"Tyler Benning"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-d741d8733c50edda5ca5.js.map