"use strict";(self.webpackChunktyler_bennning_portfolio=self.webpackChunktyler_bennning_portfolio||[]).push([[292],{872:function(e,t,n){var i=n(1721),o=n(7294),a=n(9),r=n(7661),l=n(5444),s=(0,a.default)(l.Link).withConfig({displayName:"ProjectItem__Container",componentId:"sc-wqlfe5-0"})(["border:2px solid ",";border-radius:4px;display:flex;justify-content:flex-start;align-items:center;height:200px;margin-bottom:20px;text-decoration:none;color:inherit;transition:0.25s ease-in-out;&:hover,:active{"," box-shadow:0 10px 18px -5px rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.04);transform:translateY(-2px);}img{border-radius:4px 0 0 4px;max-height:200px;}@media (max-width:","){height:125px;margin-bottom:8px;img{max-height:125px;}}}"],r.O9.ink20,"",r.Jc.small),p=a.default.div.withConfig({displayName:"ProjectItem__TextContainer",componentId:"sc-wqlfe5-1"})(["padding:20px;width:100%;"]),m=a.default.h2.withConfig({displayName:"ProjectItem__Heading",componentId:"sc-wqlfe5-2"})(["font-size:24px;margin:0 0 4px 0;@media (max-width:","){font-size:18px;}"],r.Jc.smallMedium),c=a.default.h3.withConfig({displayName:"ProjectItem__Subheading",componentId:"sc-wqlfe5-3"})(["font-size:16px;font-weight:500;color:",";margin:0 0 4px 0;line-height:1.25;@media (max-width:","){font-size:14px;}@media (max-width:","){display:none;}"],r.O9.ink80,r.Jc.smallMedium,r.Jc.small),d=a.default.span.withConfig({displayName:"ProjectItem__MetaData",componentId:"sc-wqlfe5-4"})(["font-size:12px;color:",";"],r.O9.ink80),f=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.Z)(t,e),t.prototype.render=function(){var e=this.props.imgSrc,t=this.props.title,n=this.props.subtitle,i=this.props.timeline,a=this.props.readTime,r=this.props.linkTo;return o.createElement(s,{to:r},o.createElement("img",{src:e}),o.createElement(p,null,o.createElement(m,null,t),o.createElement(c,null,n),o.createElement(d,null,i," | ",a,"M Read")))},t}(o.Component);t.Z=f},5255:function(e,t,n){n.r(t);var i=n(1721),o=n(7294),a=n(740),r=n(872),l=n(5516),s=n(9),p=s.default.div.withConfig({displayName:"personal-projects__ItemContainer",componentId:"sc-smio6n-0"})([""]),m=s.default.h1.withConfig({displayName:"personal-projects__Heading",componentId:"sc-smio6n-1"})(["margin-bottom:0;"]),c=s.default.p.withConfig({displayName:"personal-projects__Subheading",componentId:"sc-smio6n-2"})(["margin-top:8px;line-height:1.65;margin-bottom:36px;"]),d=function(e){function t(){return e.apply(this,arguments)||this}return(0,i.Z)(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,n=e.allMarkdownRemark.edges;return o.createElement(a.Z,{location:this.props.location,title:t,props:this.props},o.createElement(m,null,"Personal Projects"),o.createElement(c,null,"Everything from open source, classes I've taken, to passion projects."),o.createElement(p,null,n.map((function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug;return o.createElement("div",{key:t.fields.slug},o.createElement(r.Z,{title:n,imgSrc:l.Z,subtitle:t.frontmatter.tagline,timeline:t.frontmatter.dateRange,readTime:t.timeToRead,linkTo:t.fields.slug}))}))))},t}(o.Component);t.default=d},5516:function(e,t,n){t.Z=n.p+"static/placeholder-5a540ff2aed8db88780cdef7ca1758bc.png"}}]);
//# sourceMappingURL=component---src-pages-personal-projects-js-63efea770c7db5875225.js.map