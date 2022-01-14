"use strict";(self.webpackChunktyler_bennning_portfolio=self.webpackChunktyler_bennning_portfolio||[]).push([[934],{872:function(e,t,i){var n=i(1721),o=i(7294),a=i(9),r=i(7661),l=i(5444),p=(0,a.default)(l.Link).withConfig({displayName:"ProjectItem__Container",componentId:"sc-wqlfe5-0"})(["border:2px solid ",";border-radius:4px;display:flex;justify-content:flex-start;align-items:center;height:200px;margin-bottom:20px;text-decoration:none;color:inherit;transition:0.25s ease-in-out;&:hover,:active{"," box-shadow:0 10px 18px -5px rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.04);transform:translateY(-2px);}img{border-radius:4px 0 0 4px;max-height:200px;}@media (max-width:","){height:125px;margin-bottom:8px;img{max-height:125px;}}}"],r.O9.ink20,"",r.Jc.small),s=a.default.div.withConfig({displayName:"ProjectItem__TextContainer",componentId:"sc-wqlfe5-1"})(["padding:20px;width:100%;"]),d=a.default.h2.withConfig({displayName:"ProjectItem__Heading",componentId:"sc-wqlfe5-2"})(["font-size:24px;margin:0 0 4px 0;@media (max-width:","){font-size:18px;}"],r.Jc.smallMedium),m=a.default.h3.withConfig({displayName:"ProjectItem__Subheading",componentId:"sc-wqlfe5-3"})(["font-size:16px;font-weight:500;color:",";margin:0 0 4px 0;line-height:1.25;@media (max-width:","){font-size:14px;}@media (max-width:","){display:none;}"],r.O9.ink80,r.Jc.smallMedium,r.Jc.small),c=a.default.span.withConfig({displayName:"ProjectItem__MetaData",componentId:"sc-wqlfe5-4"})(["font-size:12px;color:",";"],r.O9.ink80),f=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this.props.imgSrc,t=this.props.title,i=this.props.subtitle,n=this.props.timeline,a=this.props.readTime,r=this.props.linkTo;return o.createElement(p,{to:r},o.createElement("img",{src:e}),o.createElement(s,null,o.createElement(d,null,t),o.createElement(m,null,i),o.createElement(c,null,n," | ",a,"M Read")))},t}(o.Component);t.Z=f},7277:function(e,t,i){i.r(t);var n=i(1721),o=i(7294),a=i(740),r=i(872),l=i(5516),p=i(9),s=p.default.div.withConfig({displayName:"work-projects__ItemContainer",componentId:"sc-1i4dvvd-0"})([""]),d=p.default.h1.withConfig({displayName:"work-projects__Heading",componentId:"sc-1i4dvvd-1"})(["margin-bottom:0;"]),m=p.default.p.withConfig({displayName:"work-projects__Subheading",componentId:"sc-1i4dvvd-2"})(["margin-top:8px;line-height:1.65;margin-bottom:36px;"]),c=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,i=e.allMarkdownRemark.edges;return o.createElement(a.Z,{location:this.props.location,title:t,props:this.props},o.createElement(d,null,"Work Projects"),o.createElement(m,null,"Case studies from companies I’ve worked with over the past few years."),o.createElement(s,null,i.map((function(e){var t=e.node,i=t.frontmatter.title||t.fields.slug;return o.createElement("div",{key:t.fields.slug},o.createElement(r.Z,{title:i,imgSrc:l.Z,subtitle:t.frontmatter.tagline,timeline:t.frontmatter.dateRange,readTime:t.timeToRead,linkTo:t.fields.slug}))}))))},t}(o.Component);t.default=c},5516:function(e,t,i){t.Z=i.p+"static/placeholder-5a540ff2aed8db88780cdef7ca1758bc.png"}}]);
//# sourceMappingURL=component---src-pages-work-projects-js-3845b6f66b2fdbbefb13.js.map