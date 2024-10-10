import{c as y}from"./classnames-satyqWY2.js";import{a as f,r as m}from"./react-CWdn-sfl.js";import{e as me,b as C,g as de,d as A,k as he,c as ce,f as Ne}from"./@babel-CyN6Efhd.js";import{z as Re,y as be}from"./rc-util-DDDTlteG.js";function pe(e){return!!(e.addonBefore||e.addonAfter)}function _e(e){return!!(e.prefix||e.suffix||e.allowClear)}function fe(e,a,u){var o=a.cloneNode(!0),r=Object.create(e,{target:{value:o},currentTarget:{value:o}});return o.value=u,typeof a.selectionStart=="number"&&typeof a.selectionEnd=="number"&&(o.selectionStart=a.selectionStart,o.selectionEnd=a.selectionEnd),o.setSelectionRange=function(){a.setSelectionRange.apply(a,arguments)},r}function ve(e,a,u,o){if(u){var r=a;if(a.type==="click"){r=fe(a,e,""),u(r);return}if(e.type!=="file"&&o!==void 0){r=fe(a,e,o),u(r);return}u(r)}}function Fe(e,a){if(e){e.focus(a);var u=a||{},o=u.cursor;if(o){var r=e.value.length;switch(o){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(r,r);break;default:e.setSelectionRange(0,r)}}}}var ke=f.forwardRef(function(e,a){var u,o,r=e.inputElement,x=e.children,g=e.prefixCls,I=e.prefix,N=e.suffix,W=e.addonBefore,S=e.addonAfter,B=e.className,te=e.style,K=e.disabled,Y=e.readOnly,j=e.focused,$=e.triggerFocus,E=e.allowClear,D=e.value,P=e.handleReset,ae=e.hidden,s=e.classes,t=e.classNames,p=e.dataAttrs,h=e.styles,v=e.components,T=e.onClear,G=x??r,oe=(v==null?void 0:v.affixWrapper)||"span",H=(v==null?void 0:v.groupWrapper)||"span",V=(v==null?void 0:v.wrapper)||"span",M=(v==null?void 0:v.groupAddon)||"span",i=m.useRef(null),le=function(F){var Q;(Q=i.current)!==null&&Q!==void 0&&Q.contains(F.target)&&($==null||$())},L=_e(e),w=m.cloneElement(G,{value:D,className:y(G.props.className,!L&&(t==null?void 0:t.variant))||null}),q=m.useRef(null);if(f.useImperativeHandle(a,function(){return{nativeElement:q.current||i.current}}),L){var O=null;if(E){var Z=!K&&!Y&&D,_="".concat(g,"-clear-icon"),re=me(E)==="object"&&E!==null&&E!==void 0&&E.clearIcon?E.clearIcon:"✖";O=f.createElement("span",{onClick:function(F){P==null||P(F),T==null||T()},onMouseDown:function(F){return F.preventDefault()},className:y(_,C(C({},"".concat(_,"-hidden"),!Z),"".concat(_,"-has-suffix"),!!N)),role:"button",tabIndex:-1},re)}var R="".concat(g,"-affix-wrapper"),J=y(R,C(C(C(C(C({},"".concat(g,"-disabled"),K),"".concat(R,"-disabled"),K),"".concat(R,"-focused"),j),"".concat(R,"-readonly"),Y),"".concat(R,"-input-with-clear-btn"),N&&E&&D),s==null?void 0:s.affixWrapper,t==null?void 0:t.affixWrapper,t==null?void 0:t.variant),ue=(N||E)&&f.createElement("span",{className:y("".concat(g,"-suffix"),t==null?void 0:t.suffix),style:h==null?void 0:h.suffix},O,N);w=f.createElement(oe,de({className:J,style:h==null?void 0:h.affixWrapper,onClick:le},p==null?void 0:p.affixWrapper,{ref:i}),I&&f.createElement("span",{className:y("".concat(g,"-prefix"),t==null?void 0:t.prefix),style:h==null?void 0:h.prefix},I),w,ue)}if(pe(e)){var d="".concat(g,"-group"),b="".concat(d,"-addon"),z="".concat(d,"-wrapper"),ie=y("".concat(g,"-wrapper"),d,s==null?void 0:s.wrapper,t==null?void 0:t.wrapper),ee=y(z,C({},"".concat(z,"-disabled"),K),s==null?void 0:s.group,t==null?void 0:t.groupWrapper);w=f.createElement(H,{className:ee,ref:q},f.createElement(V,{className:ie},W&&f.createElement(M,{className:b},W),w,S&&f.createElement(M,{className:b},S)))}return f.cloneElement(w,{className:y((u=w.props)===null||u===void 0?void 0:u.className,B)||null,style:A(A({},(o=w.props)===null||o===void 0?void 0:o.style),te),hidden:ae})}),Ae=["show"];function Ie(e,a){return m.useMemo(function(){var u={};a&&(u.show=me(a)==="object"&&a.formatter?a.formatter:!!a),u=A(A({},u),e);var o=u,r=o.show,x=he(o,Ae);return A(A({},x),{},{show:!!r,showFormatter:typeof r=="function"?r:void 0,strategy:x.strategy||function(g){return g.length}})},[e,a])}var Be=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","onKeyUp","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","count","type","classes","classNames","styles","onCompositionStart","onCompositionEnd"],Oe=m.forwardRef(function(e,a){var u=e.autoComplete,o=e.onChange,r=e.onFocus,x=e.onBlur,g=e.onPressEnter,I=e.onKeyDown,N=e.onKeyUp,W=e.prefixCls,S=W===void 0?"rc-input":W,B=e.disabled,te=e.htmlSize,K=e.className,Y=e.maxLength,j=e.suffix,$=e.showCount,E=e.count,D=e.type,P=D===void 0?"text":D,ae=e.classes,s=e.classNames,t=e.styles,p=e.onCompositionStart,h=e.onCompositionEnd,v=he(e,Be),T=m.useState(!1),G=ce(T,2),oe=G[0],H=G[1],V=m.useRef(!1),M=m.useRef(!1),i=m.useRef(null),le=m.useRef(null),L=function(n){i.current&&Fe(i.current,n)},w=Re(e.defaultValue,{value:e.value}),q=ce(w,2),O=q[0],Z=q[1],_=O==null?"":String(O),re=m.useState(null),R=ce(re,2),J=R[0],ue=R[1],d=Ie(E,$),b=d.max||Y,z=d.strategy(_),ie=!!b&&z>b;m.useImperativeHandle(a,function(){var l;return{focus:L,blur:function(){var c;(c=i.current)===null||c===void 0||c.blur()},setSelectionRange:function(c,X,U){var k;(k=i.current)===null||k===void 0||k.setSelectionRange(c,X,U)},select:function(){var c;(c=i.current)===null||c===void 0||c.select()},input:i.current,nativeElement:((l=le.current)===null||l===void 0?void 0:l.nativeElement)||i.current}}),m.useEffect(function(){H(function(l){return l&&B?!1:l})},[B]);var ee=function(n,c,X){var U=c;if(!V.current&&d.exceedFormatter&&d.max&&d.strategy(c)>d.max){if(U=d.exceedFormatter(c,{max:d.max}),c!==U){var k,se;ue([((k=i.current)===null||k===void 0?void 0:k.selectionStart)||0,((se=i.current)===null||se===void 0?void 0:se.selectionEnd)||0])}}else if(X.source==="compositionEnd")return;Z(U),i.current&&ve(i.current,n,o,U)};m.useEffect(function(){if(J){var l;(l=i.current)===null||l===void 0||l.setSelectionRange.apply(l,Ne(J))}},[J]);var ne=function(n){ee(n,n.target.value,{source:"change"})},F=function(n){V.current=!1,ee(n,n.currentTarget.value,{source:"compositionEnd"}),h==null||h(n)},Q=function(n){g&&n.key==="Enter"&&!M.current&&(M.current=!0,g(n)),I==null||I(n)},ge=function(n){n.key==="Enter"&&(M.current=!1),N==null||N(n)},ye=function(n){H(!0),r==null||r(n)},xe=function(n){H(!1),x==null||x(n)},Ee=function(n){Z(""),L(),i.current&&ve(i.current,n,o)},Ce=ie&&"".concat(S,"-out-of-range"),Se=function(){var n=be(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","count","classes","htmlSize","styles","classNames","onClear"]);return f.createElement("input",de({autoComplete:u},n,{onChange:ne,onFocus:ye,onBlur:xe,onKeyDown:Q,onKeyUp:ge,className:y(S,C({},"".concat(S,"-disabled"),B),s==null?void 0:s.input),style:t==null?void 0:t.input,ref:i,size:te,type:P,onCompositionStart:function(X){V.current=!0,p==null||p(X)},onCompositionEnd:F}))},we=function(){var n=Number(b)>0;if(j||d.show){var c=d.showFormatter?d.showFormatter({value:_,count:z,maxLength:b}):"".concat(z).concat(n?" / ".concat(b):"");return f.createElement(f.Fragment,null,d.show&&f.createElement("span",{className:y("".concat(S,"-show-count-suffix"),C({},"".concat(S,"-show-count-has-suffix"),!!j),s==null?void 0:s.count),style:A({},t==null?void 0:t.count)},c),j)}return null};return f.createElement(ke,de({},v,{prefixCls:S,className:y(K,Ce),handleReset:Ee,value:_,focused:oe,triggerFocus:L,suffix:we(),disabled:B,classes:ae,classNames:s,styles:t}),Se())});export{ke as B,Oe as I,ve as r,Fe as t,Ie as u};
