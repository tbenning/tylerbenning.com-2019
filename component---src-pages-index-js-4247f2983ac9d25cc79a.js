(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{146:function(e,t,n){"use strict";n.r(t);var a=n(7),i=n.n(a),r=n(0),o=n.n(r),s=n(147),l=n(151),c=n(152),d=(n(4),n(148)),p=n(149),u=d.a.li.withConfig({displayName:"Tab__StyledTab",componentId:"sc-1140fip-0"})(["margin-right:8px;margin-bottom:-2px;z-index:100;"]),m=d.a.button.withConfig({displayName:"Tab__StyledButtonTwo",componentId:"sc-1140fip-1"})(["border:none;display:inline-block;text-decoration:none;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;cursor:pointer;font-weight:600;background:none;color:",";border:2px solid ",";padding:12px 20px;transition:ease-in-out 0.2s;z-index:100;&:hover{background:",";}&.active,.active:hover{color:",";border-top:2px solid ",";border-bottom:2px solid #fff;}&:focus{outline:none;background:",";border-bottom:2px solid ",";}"],p.a.ink80,p.a.ink20,p.a.ink20,p.a.teal90,p.a.teal90,p.a.ink20,p.a.ink20),g=d.a.div.withConfig({displayName:"Tab__FakeBorderTop",componentId:"sc-1140fip-2"})(["width:100%;height:3px;background:#fff;transition:ease-in-out 0.2s;&.active{background:",";}"],p.a.teal90),h=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).onClick=function(){var e=t.props,n=e.label;(0,e.onClick)(n)},t}return i()(t,e),t.prototype.render=function(){var e=this.onClick,t=this.props,n=t.activeTab,a=t.label;return o.a.createElement(u,null,o.a.createElement(g,{className:n===a&&"active"}),o.a.createElement(m,{onClick:e,className:n===a&&"active"},a))},t}(r.Component),b=d.a.ul.withConfig({displayName:"Tabs__StyledTabs",componentId:"sc-1dq7u52-0"})(["list-style-type:none;margin:0;padding:0;display:flex;justify-content:flex-start;border-bottom:2px solid ",";z-index:10;margin-bottom:20px;"],p.a.ink20),f=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClickTab=function(e){n.setState({activeTab:e})},n.state={activeTab:n.props.children[0].props.label},n}return i()(t,e),t.prototype.render=function(){var e=this.onClickTab,t=this.props.children,n=this.state.activeTab;return o.a.createElement(o.a.Fragment,null,o.a.createElement(b,null,t.map(function(t){var a=t.props.label;return o.a.createElement(h,{key:a,label:a,activeTab:n,onClick:e})})),o.a.createElement("div",null,t.map(function(e){if(e.props.label===n)return e.props.children})))},t}(r.Component);n.d(t,"pageQuery",function(){return w});var y=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title;e.allMarkdownRemark.edges;return o.a.createElement(l.a,{location:this.props.location,title:t},o.a.createElement(c.a,{title:"Design Portfolio - Tyler Benning",keywords:["ux design","ui design","portfolio","product design","gatsby","javascript","react"]}),o.a.createElement(f,null,o.a.createElement("div",{label:"What I Do at Work"},o.a.createElement("p",null,"Product design is what I do at work everyday. "),o.a.createElement("p",null,"Sometimes that means fixing lots of small problems inside a big software app. Other times it means starting big ambitious projects from scratch. On some occasions, it means talking through problems and designing my way out of designing anything at all."),o.a.createElement("p",null,"When I work, I value sketching and writing over talking in circles. I think great ideas come from different team members when they have lots of relevant inputs from users and customers to give them context. I care about my teammates' work, even if I don't understand all of its nuances. I think roles are a helpful way to designate accountability within teams, but I like to stretch into adjacent roles of product and engineering. "),o.a.createElement("p",null,"Making a successful product is a team sport.")),o.a.createElement("div",{label:"What I'm Learning"},o.a.createElement("p",null,"Professionally, I'm drawn to the intersection of design and front-end development. I'd heard that learning React can help you become better at Javascript, so I started picking it up. A good starting point for me, was to build this site using"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org/",rel:"noopener",target:"_blank"}," Gatsby")," which uses React. "),o.a.createElement("p",null,"If you're interested, you can read more about how I ",o.a.createElement("code",null,"export default"),"'d my way to launching this site"," ",o.a.createElement(s.Link,{to:"/personal-projects/tylerbenning-website/"},"here.")),o.a.createElement("p",null,"Outside work, I keep some hobbies. I started brewing kombucha,"," ",o.a.createElement("a",{href:"https://www.youtube.com/watch?v=cKx8xE8jJZs",target:"_blank",rel:"noopener"},"swinging kettlebells,")," ","and writing music. I've dabbled in salsa dancing, sensory deprivation tanks, singing lessons, and drawing terribly. Ask me again in a month, and this list will likely be entirely different.")),o.a.createElement("div",{label:"What This Site's About"},o.a.createElement("p",null,"Stories are at the heart of design, and are what connect people to common ideas, goals, and motivations. Designers help craft these stories and enable people to have new interactions and experiences. I built this site so I'd have a place to write about and share some of my own stories and experiences as a Product Designer. Through this site, maybe we can share an experience."))))},t}(o.a.Component),w=(t.default=y,"2937973900")},152:function(e,t,n){"use strict";var a=n(153),i=n(0),r=n.n(i),o=n(4),s=n.n(o),l=n(155),c=n.n(l),d=n(147);function p(e){var t=e.description,n=e.lang,i=e.meta,o=e.keywords,s=e.title;return r.a.createElement(d.StaticQuery,{query:u,render:function(e){var a=t||e.site.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:n},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:s},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})},data:a})}p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=p;var u="1025518380"},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Tyler Benning Product Designer",description:"The portfolio and stories of Tyler Benning ",author:"Tyler Benning"}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-4247f2983ac9d25cc79a.js.map