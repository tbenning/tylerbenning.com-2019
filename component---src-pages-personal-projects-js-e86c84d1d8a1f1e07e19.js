(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return g});var i=n(7),a=n.n(i),o=n(0),r=n.n(o),p=n(151),s=n(156),l=n(157),m=n.n(l),d=n(148),c=d.a.div.withConfig({displayName:"personal-projects__ItemContainer",componentId:"smio6n-0"})([""]),h=d.a.h1.withConfig({displayName:"personal-projects__Heading",componentId:"smio6n-1"})(["margin-bottom:0;"]),f=d.a.p.withConfig({displayName:"personal-projects__Subheading",componentId:"smio6n-2"})(["margin-top:8px;line-height:1.65;margin-bottom:36px;"]),u=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,n=e.allMarkdownRemark.edges;return r.a.createElement(p.a,{location:this.props.location,title:t,props:this.props},r.a.createElement(h,null,"Personal Projects"),r.a.createElement(f,null,"Everything from open source, classes I've taken, to passion projects."),r.a.createElement(c,null,n.map(function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug;return r.a.createElement("div",{key:t.fields.slug},r.a.createElement(s.a,{title:n,imgSrc:m.a,subtitle:t.frontmatter.tagline,timeline:t.frontmatter.dateRange,readTime:t.timeToRead,linkTo:t.fields.slug}))})))},t}(r.a.Component);t.default=u;var g="3783529504"},156:function(e,t,n){"use strict";var i=n(7),a=n.n(i),o=(n(154),n(0)),r=n.n(o),p=n(148),s=n(149),l=n(147),m=Object(p.a)(l.Link).withConfig({displayName:"ProjectItem__Container",componentId:"wqlfe5-0"})(["border:2px solid ",";border-radius:4px;display:flex;justify-content:flex-start;align-items:center;height:200px;margin-bottom:20px;text-decoration:none;color:inherit;transition:0.25s ease-in-out;&:hover,:active{"," box-shadow:0 10px 18px -5px rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.04);transform:translateY(-2px);}img{border-radius:4px 0 0 4px;max-height:200px;}@media (max-width:","){height:125px;margin-bottom:8px;img{max-height:125px;}}}"],s.a.ink20,"",s.b.small),d=p.a.div.withConfig({displayName:"ProjectItem__TextContainer",componentId:"wqlfe5-1"})(["padding:20px;width:100%;"]),c=p.a.h2.withConfig({displayName:"ProjectItem__Heading",componentId:"wqlfe5-2"})(["font-size:24px;margin:0 0 4px 0;@media (max-width:","){font-size:18px;}"],s.b.smallMedium),h=p.a.h3.withConfig({displayName:"ProjectItem__Subheading",componentId:"wqlfe5-3"})(["font-size:16px;font-weight:500;color:",";margin:0 0 4px 0;line-height:1.25;@media (max-width:","){font-size:14px;}@media (max-width:","){display:none;}"],s.a.ink80,s.b.smallMedium,s.b.small),f=p.a.span.withConfig({displayName:"ProjectItem__MetaData",componentId:"wqlfe5-4"})(["font-size:12px;color:",";"],s.a.ink80),u=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.imgSrc,t=this.props.title,n=this.props.subtitle,i=this.props.timeline,a=this.props.readTime,o=this.props.linkTo;return r.a.createElement(m,{to:o},r.a.createElement("img",{src:e}),r.a.createElement(d,null,r.a.createElement(c,null,t),r.a.createElement(h,null,n),r.a.createElement(f,null,i," | ",a,"M Read")))},t}(o.Component);t.a=u},157:function(e,t,n){e.exports=n.p+"static/placeholder-7efef6bc2e40097b578d2b54bcc0920f.png"}}]);
//# sourceMappingURL=component---src-pages-personal-projects-js-e86c84d1d8a1f1e07e19.js.map