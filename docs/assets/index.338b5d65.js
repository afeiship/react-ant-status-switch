var F=Object.defineProperty;var u=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var f=(n,e,t)=>e in n?F(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,i=(n,e)=>{for(var t in e||(e={}))m.call(e,t)&&f(n,t,e[t]);if(u)for(var t of u(e))h.call(e,t)&&f(n,t,e[t]);return n};var g=(n,e)=>{var t={};for(var s in n)m.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&u)for(var s of u(n))e.indexOf(s)<0&&h.call(n,s)&&(t[s]=n[s]);return t};import{n as C,r as v,R as a,a as A,b as B,_ as R,c as S,P as b,T as N,s as x,B as O,d as w}from"./vendor.4514d871.js";const _=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}};_();const p="react-ant-status-switch";class c extends v.exports.Component{constructor(){super(...arguments);this.state={value:this.props.value},this.handleRGChange=e=>{const{onChange:t}=this.props,{value:s}=e.target;this.setState({value:s},()=>t(e))}}get contentView(){const{items:e}=this.props;return a.createElement(A,{size:"small",items:e,template:B,onChange:this.handleRGChange})}get color(){var s;const{value:e}=this.state,{items:t}=this.props;return((s=t==null?void 0:t.find(o=>o.value===e))==null?void 0:s.color)||e}get text(){const{value:e}=this.state,{text:t,items:s}=this.props,o=s==null?void 0:s.find(r=>r.value===e);return t||(o==null?void 0:o.label)||e}shouldComponentUpdate(e){const{value:t}=e;return t!==this.state.value&&this.setState({value:t}),!0}render(){const d=this.props,{className:e,value:t,onChange:s,items:o,template:r,popoverOpts:l}=d,E=g(d,["className","value","onChange","items","template","popoverOpts"]),y=R(E);return a.createElement("div",i({"data-component":p,className:S(p,e)},y),a.createElement(b,i({content:this.contentView},l),a.createElement(N,{color:this.color},this.text)))}}c.displayName=p;c.version="__VERSION__";c.defaultProps={items:[],onChange:C};const L=x.div`
  width: 80%;
  margin: 100px auto 0;
  p {
    margin-top: 10px;
  }
`,P=[{value:"default",label:"\u9ED8\u8BA4 \u{1F921}"},{value:"success",label:"\u6210\u529F \u{1F60E}"},{value:"warning",label:"\u8B66\u544A \u{1F978}"},{value:"error",label:"\u5931\u8D25 \u{1F624}"},{value:"customize",color:"#080",label:"\u81EA\u5B9A\u4E49\u72B6\u6001 \u{1F929}"}];var D=n=>{const[e,t]=v.exports.useState("default");return a.createElement(L,null,a.createElement("p",null,"\u8F7B\u8F7B\u7684\u79FB\u5411\u6211\uFF0C\u6211\u4F1A\u6539\u53D8\u72B6\u6001\u6EF4."),a.createElement(c,{value:e,items:P,popoverOpts:{placement:"top"},onChange:s=>{console.log("e.",s.target.value),t(s.target.value)}}),a.createElement("p",null,"Current status: ",a.createElement("strong",null,e)),a.createElement("p",null,a.createElement(O,{type:"primary",onClick:s=>t("success")},"Force to Set status")))};w.render(a.createElement(a.StrictMode,null,a.createElement(D,null)),document.getElementById("root"));
