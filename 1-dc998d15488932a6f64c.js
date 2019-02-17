(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{147:function(n,e,t){"use strict";t.r(e),t.d(e,"graphql",function(){return f}),t.d(e,"StaticQueryContext",function(){return u}),t.d(e,"StaticQuery",function(){return d});var a=t(0),r=t.n(a),i=t(4),o=t.n(i),l=t(151),c=t.n(l);t.d(e,"Link",function(){return c.a}),t.d(e,"withPrefix",function(){return l.withPrefix}),t.d(e,"navigate",function(){return l.navigate}),t.d(e,"push",function(){return l.push}),t.d(e,"replace",function(){return l.replace}),t.d(e,"navigateTo",function(){return l.navigateTo});var s=t(159),m=t.n(s);t.d(e,"PageRenderer",function(){return m.a});var p=t(49);t.d(e,"parsePath",function(){return p.a});var u=r.a.createContext({}),d=function(n){return r.a.createElement(u.Consumer,null,function(e){return n.data||e[n.query]&&e[n.query].data?(n.render||n.children)(n.data?n.data.data:e[n.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(n,e,t){"use strict";t.d(e,"a",function(){return a}),t.d(e,"b",function(){return r});var a={ink90:"#07243E",ink80:"#3D4852",ink70:"#606F7B",ink60:"#606F7B",ink50:"#8E9FAD",ink40:"#AFBCC7",ink20:"#E5EAEE",ink10:"#F9FCFF",white:"#ffffff",black:"#000000",brand:"#49f2e7",brandLight:"#bbeffd",purple10:"#F2F2FF",purple40:"#524ffc",note:"#ffe564",error:"#ff6464"},r=(a.ink90,a.ink80,a.ink20,{small:"500px",smallMedium:"650px",medium:"800px",large:"1028px"})},152:function(n,e,t){"use strict";var a=t(7),r=t.n(a),i=(t(155),t(149)),o=t.n(i),l=t(0),c=t.n(l),s=t(147),m=(t(166),t(148)),p=t(150),u=(t(167),t(168)),d=t.n(u),f=t(169),g=t.n(f);function h(){var n=o()(["\n  position: relative;\n  background: ",";\n  color: #004a54;\n  padding: 20px 44px;\n  margin-bottom: 16px;\n  font-size: 18px;\n  font-weight: 600;\n  border: none;\n  cursor: pointer;\n  border-radius: 4px;\n  text-decoration: none;\n  display: inline-block;\n\n  box-shadow: 0 2px 4px hsla(0, 0%, 0%, 0.05), 0 10px 10px hsla(0, 0%, 0%, 0.05),\n    inset 0 1px 0 hsl(177, 29%, 93%);\n  transition: ease-in-out 0.2s;\n\n  &:hover {\n    background: #7bfff7;\n    box-shadow: 0 2px 4px hsla(0, 0%, 0%, 0.05),\n      0 14px 16px hsla(0, 0%, 0%, 0.07);\n  }\n  &:focus {\n    outline: none;\n    box-shadow: inset 0 0 0 2px #004a54;\n  }\n\n  &:active {\n    box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.2);\n  }\n\n  @media (max-width: ",") {\n    padding: 16px 32px;\n    font-size: 16px;\n  }\n"]);return h=function(){return n},n}var C=Object(m.a)(s.Link)(h(),p.a.brand,p.b.large);function x(){var n=o()(["\n  font-size: 52px;\n  margin-bottom: 0;\n  @media (max-width: 1028px) {\n    font-size: 42px;\n  }\n"]);return x=function(){return n},n}function L(){var n=o()(["\n  font-family: 'IBM Plex Sans', sans serif;\n  line-height: 1.65;\n  font-size: 24px;\n  color: ",";\n  margin: 12px 0 20px 0;\n  @media (max-width: 1028px) {\n    font-size: 18px;\n  }\n"]);return L=function(){return n},n}function w(){var n=o()(["\n  width: 55%;\n  position: relative;\n  animation: float 3s ease-in-out infinite;\n  img {\n    width: 120%;\n    max-width: 600px;\n    margin-left: -40px;\n    margin-top: -50px;\n  }\n  img.top {\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n\n  @media (max-width: ",") {\n    width: 100%;\n    img {\n      width: 100%;\n      margin-left: 0;\n    }\n  }\n  .top {\n    animation: fade 1s ease-in 2 alternate;\n    animation-delay: 1s;\n  }\n\n  &:hover > .top {\n    animation: fade 1s ease-in infinite alternate;\n  }\n  @keyframes float {\n    0% {\n      transform: translatey(0px);\n    }\n    50% {\n      transform: translatey(-5px);\n    }\n    100% {\n      transform: translatey(0px);\n    }\n  }\n  @keyframes fade {\n    0% {\n      opacity: 1;\n    }\n    20% {\n      opacity: 1;\n    }\n    21% {\n      opacity: 0;\n    }\n    40% {\n      opacity: 0;\n    }\n    41% {\n      opacity: 1;\n    }\n    60% {\n      opacity: 1;\n    }\n    61% {\n      opacity: 0;\n    }\n    80% {\n      opacity: 0;\n    }\n    81% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n"]);return w=function(){return n},n}function v(){var n=o()(["\n  width: 45%;\n  z-index: 10;\n  @media (max-width: ",") {\n    order: 1;\n    width: 100%;\n  }\n"]);return v=function(){return n},n}function E(){var n=o()(["\n  margin: 0 auto;\n  padding: 60px 0 20px 0;\n  display: flex;\n  justify-content: flex-start;\n  @media (max-width: ",") {\n    flex-direction: column;\n    flex-wrap: nowrap;\n  }\n"]);return E=function(){return n},n}var b=m.a.div(E(),p.b.smallMedium),y=m.a.div(v(),p.b.smallMedium),k=m.a.div(w(),p.b.smallMedium),M=m.a.p(L(),p.a.ink80),Z=m.a.h1(x()),j=function(n){function e(){return n.apply(this,arguments)||this}return r()(e,n),e.prototype.render=function(){return c.a.createElement(b,null,c.a.createElement(y,null,c.a.createElement(Z,null,"Hi, I'm Tyler"),c.a.createElement(M,null,"I'm a recovering tab hoarder & product designer living in Toronto 🍁"),c.a.createElement(C,{to:"/work-projects/"},"See Work Projects")),c.a.createElement(k,null,c.a.createElement("img",{src:d.a,alt:"hero image1",className:"bottom"}),c.a.createElement("img",{src:g.a,alt:"hero image2",className:"top"})))},e}(l.Component),P=(t(74),t(160)),R=t.n(P);function F(){var n=o()(["\n  display: inline-block;\n  text-decoration: none;\n  color: ",";\n  width: 100%;\n"]);return F=function(){return n},n}function z(){var n=o()(["\n  padding: 8px 8px 8px 40px;\n  margin: 0;\n  font-size: 16px;\n  width: 100%;\n  font-weight: 500;\n  border: 1px solid rgba(0, 0, 0, 0);\n  list-style: none;\n  ","\n\n  a:hover {\n    color: ",";\n    text-decoration: underline;\n  }\n\n  a {\n    display: flex;\n    align-items: center;\n  }\n  svg {\n    margin-right: 12px;\n  }\n\n  svg path {\n    fill: ",";\n  }\n\n  &.active {\n    ","\n\n    ","\n    font-weight: 600;\n  }\n  &.active a {\n    color: ",";\n  }\n  &.active svg path {\n    fill: ",";\n  }\n  a {\n    color: ",";\n    text-decoration: none;\n  }\n"]);return z=function(){return n},n}function B(){var n=o()(["\n  margin: 0;\n  padding: 0;\n"]);return B=function(){return n},n}function N(){var n=o()(["\n  position: fixed;\n  top: 0;\n  background: #fff;\n  height: calc(100vh);\n  width: 296px;\n  z-index: 10;\n  padding-top: 20px;\n  border-right: 2px solid ",";\n  overflow: scroll;\n\n  img {\n    margin: 40px 40px 20px 40px;\n  }\n"]);return N=function(){return n},n}var q=m.a.div(N(),p.a.ink20),S=m.a.ul(B()),T=m.a.li(z(),"",p.a.ink90,p.a.ink50,"","",p.a.ink90,p.a.ink90,p.a.ink70),A=Object(m.a)(s.Link)(F(),p.a.ink70),H=t(177);function O(){var n=o()(["\n  list-style: none;\n  margin: 16px 0 0 0;\n  padding: 0;\n\n  li {\n    padding-left: 36px;\n    margin-bottom: 8px;\n    font-size: 14px;\n  }\n  li h3 {\n    margin: 0;\n    padding: 0;\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 1;\n    color: ",";\n  }\n  li span {\n    font-size: 12px;\n    font-weight: 500;\n    color: ",";\n  }\n\n  li a {\n    display: block;\n  }\n  li a:hover {\n    text-decoration: none;\n  }\n\n  li a:hover h3 {\n    color: ",";\n    text-decoration: underline;\n  }\n  .active {\n    ","\n  }\n  .active h3 {\n    color: "," !important;\n    font-weight: 600;\n  }\n"]);return O=function(){return n},n}var U=m.a.ul(O(),p.a.ink80,p.a.ink70,p.a.ink90,"",p.a.ink90),I=function(n){function e(){return n.apply(this,arguments)||this}return r()(e,n),e.prototype.render=function(){var n=this.props.location;this.props.rootUrl,this.props.projectType;return c.a.createElement(s.StaticQuery,{query:"3334769602",render:function(e){return c.a.createElement(U,null,e.allMarkdownRemark.edges.map(function(e,t){var a=e.node;return c.a.createElement("li",{key:t,className:n&&n=="/tylerbenning.com"+a.fields.slug?"active":""},console.log("/tylerbenning.com"+a.fields.slug),c.a.createElement(s.Link,{to:a.fields.slug},c.a.createElement("h3",null,a.frontmatter.title),c.a.createElement("span",null,a.frontmatter.company)))}))},data:H})},e}(l.Component),Q=t(178),_=function(n){function e(){return n.apply(this,arguments)||this}return r()(e,n),e.prototype.render=function(){var n=this.props.location;this.props.rootUrl;return c.a.createElement(s.StaticQuery,{query:"3475143567",render:function(e){return c.a.createElement(U,null,e.allMarkdownRemark.edges.map(function(e,t){var a=e.node;return c.a.createElement("li",{key:t,className:n&&n=="/tylerbenning.com"+a.fields.slug?"active":""},c.a.createElement(s.Link,{to:a.fields.slug},c.a.createElement("h3",null,a.frontmatter.title),c.a.createElement("span",null,a.frontmatter.company)))}))},data:Q})},e}(l.Component),D=c.a.createElement("div",null),G=c.a.createElement("div",null),W=function(n){function e(e){var t;return(t=n.call(this,e)||this).state={currentPage:t.props.location.pathname},t}r()(e,n);var t=e.prototype;return t.componentDidMount=function(){this.state.currentPage.split("/");this.setState({currentPage:this.props.location.pathname}),document.URL.indexOf("work-projects")>-1?(D=c.a.createElement(I,{location:this.state.currentPage}),G=c.a.createElement("div",null)):document.URL.indexOf("personal-projects")>-1?(G=c.a.createElement(_,{location:this.state.currentPage}),D=c.a.createElement("div",null)):(D=c.a.createElement("div",null),G=c.a.createElement("div",null))},t.render=function(){return c.a.createElement(q,{className:"hide-medium"},c.a.createElement(A,{to:"/"},c.a.createElement("img",{src:R.a,alt:"tyler benning logo"})),c.a.createElement(S,null,c.a.createElement(T,{className:"/tylerbenning.com/"==this.state.currentPage?"active":""},c.a.createElement(A,{to:"/"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},c.a.createElement("g",{fill:"none",fillRule:"evenodd"},c.a.createElement("rect",{width:"24",height:"24"}),c.a.createElement("path",{fill:"#000",d:"M12.4557391,17.8666667 C13.0510435,17.3333333 13.8323478,17.0645333 14.6642609,16.7557333 L15.9975652,17.2234667 C16.1666087,17.2845333 16.3507826,17.2773333 16.5193043,17.2165333 L17.8523478,16.7592 C18.6845217,17.068 19.4658261,17.3333333 20.0611304,17.8666667 L12.4557391,17.8666667 Z M2.08695652,6.13333333 L21.9130435,6.13333333 L21.9130435,17.2602667 C20.8027826,16.1333333 18.8572174,15.3824 18.102,15.1216 C17.9358261,15.064 17.7555652,15.0650667 17.5904348,15.1250667 L16.2584348,15.6064 L14.9261739,15.1250667 C14.7610435,15.0653333 14.5807826,15.0922667 14.4146087,15.1496 C13.5425217,15.4512 11.0827826,16.2666667 10.155913,17.8666667 L2.08695652,17.8666667 L2.08695652,6.13333333 Z M24,5.7576 C24,4.78693333 23.2301739,4 22.2806087,4 L1.7193913,4 C0.769826087,4 0,4.78693333 0,5.7576 L0,18.2424 C0,19.2130667 0.769826087,20 1.7193913,20 L22.2806087,20 C23.2301739,20 24,19.2130667 24,18.2424 L24,5.7576 Z M8.27973913,14.9333333 C8.27973913,15.3752 7.92913043,15.7333333 7.49713043,15.7333333 L4.87121739,15.7333333 C4.43921739,15.7333333 4.0886087,15.3752 4.0886087,14.9333333 C4.0886087,14.4914667 4.43921739,14.1333333 4.87121739,14.1333333 L7.49713043,14.1333333 C7.92913043,14.1333333 8.27973913,14.4914667 8.27973913,14.9333333 L8.27973913,14.9333333 Z M9.42078261,12.8 L4.87121739,12.8 C4.43921739,12.8 4.0886087,12.4418667 4.0886087,12 C4.0886087,11.5581333 4.43921739,11.2 4.87121739,11.2 L9.42078261,11.2 C9.85278261,11.2 10.2033913,11.5581333 10.2033913,12 C10.2033913,12.4418667 9.85278261,12.8 9.42078261,12.8 L9.42078261,12.8 Z M4.0886087,9.06666667 C4.0886087,8.6248 4.43921739,8.26666667 4.87121739,8.26666667 L9.42078261,8.26666667 C9.85278261,8.26666667 10.2033913,8.6248 10.2033913,9.06666667 C10.2033913,9.50853333 9.85278261,9.86666667 9.42078261,9.86666667 L4.87121739,9.86666667 C4.43921739,9.86666667 4.0886087,9.50853333 4.0886087,9.06666667 L4.0886087,9.06666667 Z M16.2584348,8.67546667 C17.4133043,8.67546667 18.3526957,9.632 18.3526957,10.8077333 C18.3526957,11.9834667 17.4133043,12.9402667 16.2584348,12.9402667 C15.1035652,12.9402667 14.1641739,11.9834667 14.1641739,10.8077333 C14.1641739,9.632 15.1035652,8.67546667 16.2584348,8.67546667 L16.2584348,8.67546667 Z M16.2584348,14.5402667 C18.2762609,14.5402667 19.917913,12.8658667 19.917913,10.8077333 C19.917913,8.7496 18.2762609,7.07546667 16.2584348,7.07546667 C14.2406087,7.07546667 12.5989565,8.7496 12.5989565,10.8077333 C12.5989565,12.8658667 14.2406087,14.5402667 16.2584348,14.5402667 L16.2584348,14.5402667 Z"}))),c.a.createElement("span",null,"Home"))),c.a.createElement(T,{className:"/tylerbenning.com/work-projects/"==this.state.currentPage?"active":""},c.a.createElement(A,{to:"/work-projects/"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},c.a.createElement("g",{fill:"none",fillRule:"evenodd"},c.a.createElement("rect",{width:"24",height:"24"}),c.a.createElement("path",{fill:"#000",d:"M21.9070432,20.9 L18.7826085,20.9 L18.7826085,8.3 L21.9127824,8.3 L21.9070432,20.9 Z M2.0869565,20.9 L5.21739125,20.9 L5.21739125,8.3 L2.0869565,8.3 L2.0869565,20.9 Z M9.65217381,6.2 L14.3478259,6.2 L14.3478259,4.1 L9.65217381,4.1 L9.65217381,6.2 Z M6.78260862,20.9 L17.2173911,20.9 L17.2173911,8.3 L6.78260862,8.3 L6.78260862,20.9 Z M23.4279128,6.7058375 C23.0616519,6.3404375 22.5753911,6.2 22.0583476,6.2 L16.4347824,6.2 L16.4347824,3.05 C16.4347824,2.4701375 15.839739,2 15.2634781,2 L8.73704339,2 C8.16078252,2 7.56521731,2.4701375 7.56521731,3.05 L7.56521731,6.2 L1.94165215,6.2 C0.871043469,6.2 0,6.951275 0,8.02385 L0,21.054875 C0,22.12745 0.871043469,23 1.94165215,23 L22.0523476,23 C23.1226954,23 23.9937389,22.1277125 23.9939997,21.055925 L23.9999997,8.0550875 C24.0002606,7.5335 23.7970432,7.0738625 23.4279128,6.7058375 L23.4279128,6.7058375 Z"}))),c.a.createElement("span",null,"Work Projects")),D),c.a.createElement(T,{className:"/tylerbenning.com/personal-projects/"==this.state.currentPage?"active":""},c.a.createElement(A,{to:"/personal-projects/"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},c.a.createElement("path",{fillRule:"evenodd",d:"M6.24862495,18.639126 C5.99166956,18.8958219 5.41462863,19.0703437 4.82558774,19.1697351 C4.92758729,18.5757346 5.10549955,18.0002559 5.35541149,17.7506035 C5.52601944,17.5802556 5.68827959,17.4665163 5.86436577,17.4665163 C5.99975648,17.4665163 6.14323411,17.5338207 6.30445079,17.6947774 C6.44923276,17.8395601 6.53218892,17.9997342 6.53218892,18.1346038 C6.53218892,18.3174736 6.37801569,18.5099955 6.24862495,18.639126 M3.88072234,16.2740806 C2.68151023,17.4719946 2.63455391,19.8714748 2.6371626,20.3371274 C2.64055389,20.9084322 3.10281272,21.3913022 3.67437542,21.3913022 L3.70828832,21.3913022 C4.24541638,21.3913022 6.55097145,21.3033891 7.72357498,20.1326055 C8.46365867,19.3930397 8.61913625,18.6386043 8.61913625,18.1429517 C8.61913625,17.4482554 8.32096365,16.7637331 7.77913995,16.2224283 C6.45862403,14.9034707 4.83263119,15.3229493 3.88072234,16.2740806 M18.5704837,5.43911507 C18.8861345,5.75476751 19.0661337,6.19302874 19.0661337,6.63911607 C19.0661337,7.08520339 18.8861345,7.52085593 18.5704837,7.83650836 C18.2548329,8.1521608 17.816574,8.33476964 17.370489,8.33476964 C16.924404,8.33476964 16.4887538,8.1521608 16.173103,7.83650836 C15.8574522,7.52085593 15.6748443,7.08520339 15.6748443,6.63911607 C15.6748443,6.19302874 15.8574522,5.75476751 16.173103,5.43911507 C16.4861451,5.12346264 16.924404,4.94346249 17.370489,4.94346249 C17.816574,4.94346249 18.2548329,5.12346264 18.5704837,5.43911507 M11.8291221,15.8352976 L8.15113831,12.1614685 C9.99443454,7.22398611 14.5724144,1.94815566 21.9059473,2.09085143 C22.1524679,10.8305108 14.9365867,14.6159922 11.8291221,15.8352976 M13.8925913,20.5046058 C13.9293737,19.4462571 13.6922443,18.4223432 13.205203,17.5296468 C13.9627649,17.2082552 14.6958051,16.8453854 15.3991064,16.4470372 C15.6800617,17.9449515 15.0140646,19.3849527 13.8925913,20.5046058 M3.49907185,10.114945 C4.60932782,9.0067702 6.03393025,8.34468269 7.51827153,8.60503074 C7.10949072,9.32555307 6.75444881,10.0578145 6.45158058,10.7882499 C5.56358449,10.3100756 4.54724114,10.0779015 3.49907185,10.114945 M23.9341992,1.00641575 C23.8911559,0.496937068 23.4849838,0.0936323867 22.9749861,0.0542410497 C16.3870151,-0.45836807 11.6418186,2.72998239 8.71017933,6.75702921 C7.08992559,6.2261592 5.35045499,6.41555066 3.76411416,7.30929053 C2.23620784,8.16989994 0.934735315,9.62007505 0.0996955145,11.3926852 C-0.091781903,11.7985986 -0.00204316781,12.2814686 0.322477142,12.5916427 C0.646736583,12.9018169 1.13325618,12.9699039 1.53003704,12.7604255 C3.20063838,11.8794682 5.08176053,12.0453814 6.21132077,13.1733823 L10.8109527,17.7680818 C10.8193005,17.7769514 10.8250396,17.7871253 10.8336482,17.7959949 C11.962165,18.9232132 12.1283382,20.8012147 11.2468638,22.4689553 C11.0373865,22.8657382 11.1046905,23.3522603 11.4146022,23.6767823 C11.6162535,23.8880869 11.8906871,24 12.1698163,24 C12.3198156,24 12.4713802,23.9676521 12.6135534,23.9008695 C14.3877195,23.0666079 15.8394523,21.7664329 16.7011007,20.2400838 C17.6010967,18.6456477 17.7884002,16.896255 17.2450113,15.2686884 C18.4280496,14.4195573 19.4871753,13.4624261 20.3767366,12.4241643 C23.108029,9.23633561 24.3048932,5.39502808 23.9341992,1.00641575"})),c.a.createElement("span",null,"Personal Projects")),G),c.a.createElement(T,null,c.a.createElement("a",{href:"http://bit.ly/2FfKMmL",target:"_blank",rel:"noopener"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},c.a.createElement("g",{fill:"none",fillRule:"evenodd"},c.a.createElement("rect",{width:"24",height:"24"}),c.a.createElement("path",{fill:"#000",d:"M14.9175,13.8225 C15.08,13.985 15.1725,14.21 15.1725,14.4425 C15.1725,14.6725 15.08,14.8975 14.9175,15.06 C14.755,15.2225 14.5275,15.315 14.2975,15.315 C14.0675,15.315 13.8425,15.2225 13.68,15.06 C13.515,14.8975 13.4225,14.6725 13.4225,14.4425 C13.4225,14.21 13.515,13.985 13.68,13.8225 C14.005,13.4975 14.5925,13.4975 14.9175,13.8225 L14.9175,13.8225 Z M7.506,6.625 C7.506,6.14175 7.8975,5.75 8.381,5.75 L14.33175,5.75 C14.815,5.75 15.20675,6.14175 15.20675,6.625 C15.20675,7.10825 14.815,7.5 14.33175,7.5 L8.381,7.5 C7.8975,7.5 7.506,7.10825 7.506,6.625 L7.506,6.625 Z M7.506,10.375 C7.506,9.89175 7.8975,9.5 8.381,9.5 L14.33175,9.5 C14.815,9.5 15.20675,9.89175 15.20675,10.375 C15.20675,10.85825 14.815,11.25 14.33175,11.25 L8.381,11.25 C7.8975,11.25 7.506,10.85825 7.506,10.375 L7.506,10.375 Z M7.367,14.375 C7.367,13.89175 7.75875,13.5 8.242,13.5 L11.19725,13.5 C11.6805,13.5 12.07225,13.89175 12.07225,14.375 C12.07225,14.85825 11.6805,15.25 11.19725,15.25 L8.242,15.25 C7.75875,15.25 7.367,14.85825 7.367,14.375 L7.367,14.375 Z M5,21 L18,21 L18,3 L5,3 L5,21 Z M19,1 L4,1 C3.44775,1 3,1.44775 3,2 L3,22 C3,22.55225 3.44775,23 4,23 L19,23 C19.55225,23 20,22.55225 20,22 L20,2 C20,1.44775 19.55225,1 19,1 L19,1 Z"}))),c.a.createElement("span",null,"Resume")))))},e}(l.Component);function K(){var n=o()(["\n  display: inline;\n  list-style: none;\n  text-align: center;\n  width: 25%;\n  border-bottom: 4px solid rgba(0, 0, 0, 0);\n  a {\n    text-decoration: none;\n    color: ",";\n    width: 100%;\n    padding: 12px 0 8px 0;\n    text-align: center;\n    font-size: 12px;\n  }\n  svg {\n    display: block;\n    text-align: center;\n    margin: 0 auto;\n    padding-top: 8px;\n  }\n  svg path {\n    fill: ",";\n  }\n  span {\n    display: block;\n    padding-bottom: 2px;\n  }\n\n  &.active {\n    border-bottom: 4px solid ",";\n    font-weight: 600;\n  }\n  &.active a {\n    color: ",";\n  }\n  &.active svg path {\n    fill: ",";\n  }\n"]);return K=function(){return n},n}function J(){var n=o()(["\n  display: flex;\n  justify-content: space-between;\n  max-width: 100%;\n  margin: 0 20px;\n  padding: 0;\n"]);return J=function(){return n},n}function Y(){var n=o()(["\n  background: ",";\n  border-top: 1px solid ",";\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  z-index: 100;\n"]);return Y=function(){return n},n}var X=m.a.div(Y(),p.a.ink10,p.a.ink20),V=m.a.ul(J()),$=m.a.li(K(),p.a.ink80,p.a.ink50,p.a.brand,p.a.ink90,p.a.ink90),nn=function(n){return c.a.createElement(X,{className:"hide-desktop"},c.a.createElement(V,null,c.a.createElement($,{className:"/"==n.location.pathname?"active":""},c.a.createElement(s.Link,{to:"/"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},c.a.createElement("g",{fill:"none",fillRule:"evenodd"},c.a.createElement("rect",{width:"24",height:"24"}),c.a.createElement("path",{fill:"#000",d:"M12.4557391,17.8666667 C13.0510435,17.3333333 13.8323478,17.0645333 14.6642609,16.7557333 L15.9975652,17.2234667 C16.1666087,17.2845333 16.3507826,17.2773333 16.5193043,17.2165333 L17.8523478,16.7592 C18.6845217,17.068 19.4658261,17.3333333 20.0611304,17.8666667 L12.4557391,17.8666667 Z M2.08695652,6.13333333 L21.9130435,6.13333333 L21.9130435,17.2602667 C20.8027826,16.1333333 18.8572174,15.3824 18.102,15.1216 C17.9358261,15.064 17.7555652,15.0650667 17.5904348,15.1250667 L16.2584348,15.6064 L14.9261739,15.1250667 C14.7610435,15.0653333 14.5807826,15.0922667 14.4146087,15.1496 C13.5425217,15.4512 11.0827826,16.2666667 10.155913,17.8666667 L2.08695652,17.8666667 L2.08695652,6.13333333 Z M24,5.7576 C24,4.78693333 23.2301739,4 22.2806087,4 L1.7193913,4 C0.769826087,4 0,4.78693333 0,5.7576 L0,18.2424 C0,19.2130667 0.769826087,20 1.7193913,20 L22.2806087,20 C23.2301739,20 24,19.2130667 24,18.2424 L24,5.7576 Z M8.27973913,14.9333333 C8.27973913,15.3752 7.92913043,15.7333333 7.49713043,15.7333333 L4.87121739,15.7333333 C4.43921739,15.7333333 4.0886087,15.3752 4.0886087,14.9333333 C4.0886087,14.4914667 4.43921739,14.1333333 4.87121739,14.1333333 L7.49713043,14.1333333 C7.92913043,14.1333333 8.27973913,14.4914667 8.27973913,14.9333333 L8.27973913,14.9333333 Z M9.42078261,12.8 L4.87121739,12.8 C4.43921739,12.8 4.0886087,12.4418667 4.0886087,12 C4.0886087,11.5581333 4.43921739,11.2 4.87121739,11.2 L9.42078261,11.2 C9.85278261,11.2 10.2033913,11.5581333 10.2033913,12 C10.2033913,12.4418667 9.85278261,12.8 9.42078261,12.8 L9.42078261,12.8 Z M4.0886087,9.06666667 C4.0886087,8.6248 4.43921739,8.26666667 4.87121739,8.26666667 L9.42078261,8.26666667 C9.85278261,8.26666667 10.2033913,8.6248 10.2033913,9.06666667 C10.2033913,9.50853333 9.85278261,9.86666667 9.42078261,9.86666667 L4.87121739,9.86666667 C4.43921739,9.86666667 4.0886087,9.50853333 4.0886087,9.06666667 L4.0886087,9.06666667 Z M16.2584348,8.67546667 C17.4133043,8.67546667 18.3526957,9.632 18.3526957,10.8077333 C18.3526957,11.9834667 17.4133043,12.9402667 16.2584348,12.9402667 C15.1035652,12.9402667 14.1641739,11.9834667 14.1641739,10.8077333 C14.1641739,9.632 15.1035652,8.67546667 16.2584348,8.67546667 L16.2584348,8.67546667 Z M16.2584348,14.5402667 C18.2762609,14.5402667 19.917913,12.8658667 19.917913,10.8077333 C19.917913,8.7496 18.2762609,7.07546667 16.2584348,7.07546667 C14.2406087,7.07546667 12.5989565,8.7496 12.5989565,10.8077333 C12.5989565,12.8658667 14.2406087,14.5402667 16.2584348,14.5402667 L16.2584348,14.5402667 Z"}))),c.a.createElement("span",null,"Home"))),c.a.createElement($,{className:"/tylerbenning.com/work-projects/"==n.location.pathname?"active":""},c.a.createElement(s.Link,{to:"/tylerbenning.com/work-projects/"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},c.a.createElement("g",{fill:"none",fillRule:"evenodd"},c.a.createElement("rect",{width:"24",height:"24"}),c.a.createElement("path",{fill:"#000",d:"M21.9070432,20.9 L18.7826085,20.9 L18.7826085,8.3 L21.9127824,8.3 L21.9070432,20.9 Z M2.0869565,20.9 L5.21739125,20.9 L5.21739125,8.3 L2.0869565,8.3 L2.0869565,20.9 Z M9.65217381,6.2 L14.3478259,6.2 L14.3478259,4.1 L9.65217381,4.1 L9.65217381,6.2 Z M6.78260862,20.9 L17.2173911,20.9 L17.2173911,8.3 L6.78260862,8.3 L6.78260862,20.9 Z M23.4279128,6.7058375 C23.0616519,6.3404375 22.5753911,6.2 22.0583476,6.2 L16.4347824,6.2 L16.4347824,3.05 C16.4347824,2.4701375 15.839739,2 15.2634781,2 L8.73704339,2 C8.16078252,2 7.56521731,2.4701375 7.56521731,3.05 L7.56521731,6.2 L1.94165215,6.2 C0.871043469,6.2 0,6.951275 0,8.02385 L0,21.054875 C0,22.12745 0.871043469,23 1.94165215,23 L22.0523476,23 C23.1226954,23 23.9937389,22.1277125 23.9939997,21.055925 L23.9999997,8.0550875 C24.0002606,7.5335 23.7970432,7.0738625 23.4279128,6.7058375 L23.4279128,6.7058375 Z"}))),c.a.createElement("span",null,"Work"))),c.a.createElement($,{className:"/tylerbenning.com/personal-projects/"==n.location.pathname?"active":""},c.a.createElement(s.Link,{to:"/tylerbenning.com/personal-projects/"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},c.a.createElement("path",{fillRule:"evenodd",d:"M6.24862495,18.639126 C5.99166956,18.8958219 5.41462863,19.0703437 4.82558774,19.1697351 C4.92758729,18.5757346 5.10549955,18.0002559 5.35541149,17.7506035 C5.52601944,17.5802556 5.68827959,17.4665163 5.86436577,17.4665163 C5.99975648,17.4665163 6.14323411,17.5338207 6.30445079,17.6947774 C6.44923276,17.8395601 6.53218892,17.9997342 6.53218892,18.1346038 C6.53218892,18.3174736 6.37801569,18.5099955 6.24862495,18.639126 M3.88072234,16.2740806 C2.68151023,17.4719946 2.63455391,19.8714748 2.6371626,20.3371274 C2.64055389,20.9084322 3.10281272,21.3913022 3.67437542,21.3913022 L3.70828832,21.3913022 C4.24541638,21.3913022 6.55097145,21.3033891 7.72357498,20.1326055 C8.46365867,19.3930397 8.61913625,18.6386043 8.61913625,18.1429517 C8.61913625,17.4482554 8.32096365,16.7637331 7.77913995,16.2224283 C6.45862403,14.9034707 4.83263119,15.3229493 3.88072234,16.2740806 M18.5704837,5.43911507 C18.8861345,5.75476751 19.0661337,6.19302874 19.0661337,6.63911607 C19.0661337,7.08520339 18.8861345,7.52085593 18.5704837,7.83650836 C18.2548329,8.1521608 17.816574,8.33476964 17.370489,8.33476964 C16.924404,8.33476964 16.4887538,8.1521608 16.173103,7.83650836 C15.8574522,7.52085593 15.6748443,7.08520339 15.6748443,6.63911607 C15.6748443,6.19302874 15.8574522,5.75476751 16.173103,5.43911507 C16.4861451,5.12346264 16.924404,4.94346249 17.370489,4.94346249 C17.816574,4.94346249 18.2548329,5.12346264 18.5704837,5.43911507 M11.8291221,15.8352976 L8.15113831,12.1614685 C9.99443454,7.22398611 14.5724144,1.94815566 21.9059473,2.09085143 C22.1524679,10.8305108 14.9365867,14.6159922 11.8291221,15.8352976 M13.8925913,20.5046058 C13.9293737,19.4462571 13.6922443,18.4223432 13.205203,17.5296468 C13.9627649,17.2082552 14.6958051,16.8453854 15.3991064,16.4470372 C15.6800617,17.9449515 15.0140646,19.3849527 13.8925913,20.5046058 M3.49907185,10.114945 C4.60932782,9.0067702 6.03393025,8.34468269 7.51827153,8.60503074 C7.10949072,9.32555307 6.75444881,10.0578145 6.45158058,10.7882499 C5.56358449,10.3100756 4.54724114,10.0779015 3.49907185,10.114945 M23.9341992,1.00641575 C23.8911559,0.496937068 23.4849838,0.0936323867 22.9749861,0.0542410497 C16.3870151,-0.45836807 11.6418186,2.72998239 8.71017933,6.75702921 C7.08992559,6.2261592 5.35045499,6.41555066 3.76411416,7.30929053 C2.23620784,8.16989994 0.934735315,9.62007505 0.0996955145,11.3926852 C-0.091781903,11.7985986 -0.00204316781,12.2814686 0.322477142,12.5916427 C0.646736583,12.9018169 1.13325618,12.9699039 1.53003704,12.7604255 C3.20063838,11.8794682 5.08176053,12.0453814 6.21132077,13.1733823 L10.8109527,17.7680818 C10.8193005,17.7769514 10.8250396,17.7871253 10.8336482,17.7959949 C11.962165,18.9232132 12.1283382,20.8012147 11.2468638,22.4689553 C11.0373865,22.8657382 11.1046905,23.3522603 11.4146022,23.6767823 C11.6162535,23.8880869 11.8906871,24 12.1698163,24 C12.3198156,24 12.4713802,23.9676521 12.6135534,23.9008695 C14.3877195,23.0666079 15.8394523,21.7664329 16.7011007,20.2400838 C17.6010967,18.6456477 17.7884002,16.896255 17.2450113,15.2686884 C18.4280496,14.4195573 19.4871753,13.4624261 20.3767366,12.4241643 C23.108029,9.23633561 24.3048932,5.39502808 23.9341992,1.00641575"})),c.a.createElement("span",null,"Personal"))),c.a.createElement($,{className:"/resume/"==n.location.pathname?"active":""},c.a.createElement("a",{href:"http://bit.ly/2FfKMmL",rel:"noopener",target:"_blank"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},c.a.createElement("g",{fill:"none",fillRule:"evenodd"},c.a.createElement("rect",{width:"24",height:"24"}),c.a.createElement("path",{fill:"#000",d:"M14.9175,13.8225 C15.08,13.985 15.1725,14.21 15.1725,14.4425 C15.1725,14.6725 15.08,14.8975 14.9175,15.06 C14.755,15.2225 14.5275,15.315 14.2975,15.315 C14.0675,15.315 13.8425,15.2225 13.68,15.06 C13.515,14.8975 13.4225,14.6725 13.4225,14.4425 C13.4225,14.21 13.515,13.985 13.68,13.8225 C14.005,13.4975 14.5925,13.4975 14.9175,13.8225 L14.9175,13.8225 Z M7.506,6.625 C7.506,6.14175 7.8975,5.75 8.381,5.75 L14.33175,5.75 C14.815,5.75 15.20675,6.14175 15.20675,6.625 C15.20675,7.10825 14.815,7.5 14.33175,7.5 L8.381,7.5 C7.8975,7.5 7.506,7.10825 7.506,6.625 L7.506,6.625 Z M7.506,10.375 C7.506,9.89175 7.8975,9.5 8.381,9.5 L14.33175,9.5 C14.815,9.5 15.20675,9.89175 15.20675,10.375 C15.20675,10.85825 14.815,11.25 14.33175,11.25 L8.381,11.25 C7.8975,11.25 7.506,10.85825 7.506,10.375 L7.506,10.375 Z M7.367,14.375 C7.367,13.89175 7.75875,13.5 8.242,13.5 L11.19725,13.5 C11.6805,13.5 12.07225,13.89175 12.07225,14.375 C12.07225,14.85825 11.6805,15.25 11.19725,15.25 L8.242,15.25 C7.75875,15.25 7.367,14.85825 7.367,14.375 L7.367,14.375 Z M5,21 L18,21 L18,3 L5,3 L5,21 Z M19,1 L4,1 C3.44775,1 3,1.44775 3,2 L3,22 C3,22.55225 3.44775,23 4,23 L19,23 C19.55225,23 20,22.55225 20,22 L20,2 C20,1.44775 19.55225,1 19,1 L19,1 Z"}))),c.a.createElement("span",null,"Resume PDF")))))};t(179);function en(){var n=o()(["\n  padding: 0 8px 8px 8px;\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n  li {\n    list-style: none;\n    margin-bottom: 4px;\n  }\n  h4 {\n    margin-top: 0;\n    margin-bottom: 8px;\n  }\n  a {\n    text-decoration: none;\n    color: ",";\n  }\n  a:hover {\n    text-decoration: underline;\n  }\n\n  @media (max-width: ",") {\n    margin-top: 28px;\n    text-align: center;\n  }\n"]);return en=function(){return n},n}function tn(){var n=o()(["\n  max-width: 728px;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n\n  @media only screen and (max-width: ",") {\n  }\n\n  @media (max-width: ",") {\n    flex-direction: column;\n    align-items: center;\n  }\n"]);return tn=function(){return n},n}function an(){var n=o()(["\n  background: ",";\n  padding: 40px;\n  max-width: 100%;\n  margin: 0 -40px;\n  margin-top: 80px;\n  font-size: 14px;\n  @media only screen and (max-width: ",") {\n    padding-bottom: 92px;\n  }\n\n  @media (max-width: ",") {\n    margin-left: -16px;\n    margin-right: -16px;\n  }\n"]);return an=function(){return n},n}var rn=m.a.footer(an(),p.a.ink10,p.b.medium,p.b.small),on=m.a.div(tn(),p.b.medium,p.b.small),ln=m.a.div(en(),p.a.ink70,p.b.small),cn=function(n){return c.a.createElement(rn,null,c.a.createElement(on,null,c.a.createElement("img",{src:R.a,alt:"logo"}),c.a.createElement(ln,null,c.a.createElement("h4",null,"Contact"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"mailto:tbenning27@gmail.com"},"tbenning27@gmail.com")),c.a.createElement("li",null,c.a.createElement("a",{href:"https://www.linkedin.com/in/tylerbenning/",rel:"noopener",target:"_blank"},"LinkedIn")),c.a.createElement("li",null,c.a.createElement("a",{href:"https://dribbble.com/tbenning",rel:"noopener",target:"_blank"},"Dribbble")),c.a.createElement("li",null,c.a.createElement("a",{href:"https://github.com/tbenning",rel:"noopener",target:"_blank"},"Github")))),c.a.createElement(ln,{className:"hide-mobile"},c.a.createElement("h4",null,"Site"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(s.Link,{to:"/"},"About")),c.a.createElement("li",null,c.a.createElement(s.Link,{to:"/work-projects/"},"Work Projects")),c.a.createElement("li",null,c.a.createElement(s.Link,{to:"/personal-projects/"},"Personal Projects")),c.a.createElement("li",null,c.a.createElement("a",{href:"http://bit.ly/2FfKMmL",target:"_blank",rel:"noopener"},"Resume"))))))};function sn(){var n=o()(["\n  max-width: 728px;\n"]);return sn=function(){return n},n}function mn(){var n=o()(["\n  padding-left: 336px;\n  padding-right: 40px;\n  max-width: 100%;\n  opacity: 0.25;\n  animation: HeroAnimation 2.5s forwards cubic-bezier(0.165, 0.82, 0.165, 1);\n\n  @keyframes HeroAnimation {\n    0% {\n      opacity: 0.25;\n      transform: translateY(10px);\n    }\n    25% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 1;\n      transform: translateY(0px);\n    }\n  }\n\n  @media only screen and (max-width: ",") {\n    padding-left: 40px;\n  }\n\n  @media only screen and (max-width: ",") {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"]);return mn=function(){return n},n}function pn(){var n=o()(["\n  padding: 60px 0 0 0;\n"]);return pn=function(){return n},n}function un(){var n=o()(["\n  height: 20px;\n  width: 100%;\n  background-color: #07243e;\n  position: fixed;\n  top: 0;\n  z-index: 100;\n\n  @media only screen and (max-width: ",") {\n    position: absolute;\n  }\n"]);return un=function(){return n},n}var dn=m.a.div(un(),p.b.medium),fn=m.a.div(pn()),gn=m.a.div(mn(),p.b.medium,p.b.small),hn=m.a.div(sn()),Cn=function(n){function e(){return n.apply(this,arguments)||this}return r()(e,n),e.prototype.render=function(){var n,e=this.props,t=e.location,a=(e.title,e.children);return"/tylerbenning.com/"===t.pathname&&(n=c.a.createElement("div",null,c.a.createElement(j,null))),c.a.createElement("div",null,c.a.createElement(dn,null),c.a.createElement(fn,null,c.a.createElement(W,{location:t}),c.a.createElement(nn,{location:t}),c.a.createElement(gn,null,n),c.a.createElement(gn,null,c.a.createElement(hn,null,a),c.a.createElement(cn,null))))},e}(c.a.Component);e.a=Cn},159:function(n,e,t){var a;n.exports=(a=t(164))&&a.default||a},160:function(n,e,t){n.exports=t.p+"static/logo-c04164c66764f9f0ffbf8ab0fd5e15c3.svg"},164:function(n,e,t){"use strict";t.r(e);t(32);var a=t(0),r=t.n(a),i=t(4),o=t.n(i),l=t(68),c=t(2),s=function(n){var e=n.location,t=c.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(l.a,Object.assign({location:e,pageResources:t},t.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},166:function(n,e,t){},167:function(n,e,t){n.exports=t.p+"static/hero-1-7c7077b444ec8f7508e65ab642650c3a.jpg"},168:function(n,e,t){n.exports=t.p+"static/hero-1@2x-ff47c5686cea7a40de6c25c874a4e2da.jpg"},169:function(n,e,t){n.exports=t.p+"static/hero-2@2x-da5963ffcd6582038e690e9c34b3d20f.jpg"},177:function(n){n.exports={data:{allMarkdownRemark:{edges:[{node:{fields:{slug:"/work-projects/top-hat-eng-week/"},frontmatter:{title:"Front-End Prototyping",company:"Top Hat"}}},{node:{fields:{slug:"/work-projects/top-hat-ux-quickwins/"},frontmatter:{title:"UX Quickwins on Mobile",company:"Top Hat"}}},{node:{fields:{slug:"/work-projects/paddle-motivations-assessment/"},frontmatter:{title:"Motivations Assessment",company:"Paddle"}}},{node:{fields:{slug:"/work-projects/paddle-explore-roles/"},frontmatter:{title:"Career Path Explorer",company:"Paddle"}}},{node:{fields:{slug:"/work-projects/ibm-loss-event-entry/"},frontmatter:{title:"Loss Event Entry",company:"IBM OpenPages"}}}]}}}},178:function(n){n.exports={data:{allMarkdownRemark:{edges:[{node:{fields:{slug:"/personal-projects/tylerbenning-website/tylerbenning-website/"},frontmatter:{title:"Portfolio Site",company:"tylerbenning.com"}}},{node:{fields:{slug:"/personal-projects/all-contributors/all-contributors/"},frontmatter:{title:"Launching an Open Source Brand",company:"All Contributors"}}}]}}}}}]);
//# sourceMappingURL=1-dc998d15488932a6f64c.js.map