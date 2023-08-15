"use strict";(self.webpackChunk_grams_dev_ui=self.webpackChunk_grams_dev_ui||[]).push([[571],{"./src/components/GramsMenu/GramsMenu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>GramsMenu_stories});var react=__webpack_require__("./node_modules/react/index.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),inheritsLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),map=__webpack_require__("./node_modules/lodash-es/map.js"),invoke=__webpack_require__("./node_modules/lodash-es/invoke.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),classNameBuilders=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js"),getUnhandledProps=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js"),getElementType=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/getElementType.js"),childrenUtils=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js"),ModernAutoControlledComponent=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/ModernAutoControlledComponent.js"),factories=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/factories.js");function MenuHeader(props){var children=props.children,className=props.className,content=props.content,classes=(0,clsx_m.Z)("header",className),rest=(0,getUnhandledProps.Z)(MenuHeader,props),ElementType=(0,getElementType.Z)(MenuHeader,props);return react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes}),childrenUtils.kK(children)?content:children)}MenuHeader.handledProps=["as","children","className","content"],MenuHeader.propTypes={};const Menu_MenuHeader=MenuHeader;var _arrayReduce=__webpack_require__("./node_modules/lodash-es/_arrayReduce.js"),deburr=__webpack_require__("./node_modules/lodash-es/deburr.js"),reAsciiWord=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;const _asciiWords=function asciiWords(string){return string.match(reAsciiWord)||[]};var reHasUnicodeWord=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;const _hasUnicodeWord=function hasUnicodeWord(string){return reHasUnicodeWord.test(string)};var lodash_es_toString=__webpack_require__("./node_modules/lodash-es/toString.js"),rsBreakRange="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",rsBreak="["+rsBreakRange+"]",rsDigits="\\d+",rsDingbat="[\\u2700-\\u27bf]",rsLower="[a-z\\xdf-\\xf6\\xf8-\\xff]",rsMisc="[^\\ud800-\\udfff"+rsBreakRange+rsDigits+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",rsRegional="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair="[\\ud800-\\udbff][\\udc00-\\udfff]",rsUpper="[A-Z\\xc0-\\xd6\\xd8-\\xde]",rsMiscLower="(?:"+rsLower+"|"+rsMisc+")",rsMiscUpper="(?:"+rsUpper+"|"+rsMisc+")",reOptMod="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",rsSeq="[\\ufe0e\\ufe0f]?"+reOptMod+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",rsRegional,rsSurrPair].join("|")+")[\\ufe0e\\ufe0f]?"+reOptMod+")*"),rsEmoji="(?:"+[rsDingbat,rsRegional,rsSurrPair].join("|")+")"+rsSeq,reUnicodeWord=RegExp([rsUpper+"?"+rsLower+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[rsBreak,rsUpper,"$"].join("|")+")",rsMiscUpper+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[rsBreak,rsUpper+rsMiscLower,"$"].join("|")+")",rsUpper+"?"+rsMiscLower+"+(?:['’](?:d|ll|m|re|s|t|ve))?",rsUpper+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",rsDigits,rsEmoji].join("|"),"g");const _unicodeWords=function unicodeWords(string){return string.match(reUnicodeWord)||[]};const lodash_es_words=function words(string,pattern,guard){return string=(0,lodash_es_toString.Z)(string),void 0===(pattern=guard?void 0:pattern)?_hasUnicodeWord(string)?_unicodeWords(string):_asciiWords(string):string.match(pattern)||[]};var reApos=RegExp("['’]","g");const _createCompounder=function createCompounder(callback){return function(string){return(0,_arrayReduce.Z)(lodash_es_words((0,deburr.Z)(string).replace(reApos,"")),callback,"")}};var _baseSlice=__webpack_require__("./node_modules/lodash-es/_baseSlice.js");const _castSlice=function castSlice(array,start,end){var length=array.length;return end=void 0===end?length:end,!start&&end>=length?array:(0,_baseSlice.Z)(array,start,end)};var _hasUnicode=__webpack_require__("./node_modules/lodash-es/_hasUnicode.js");const _asciiToArray=function asciiToArray(string){return string.split("")};var rsAstral="[\\ud800-\\udfff]",_unicodeToArray_rsCombo="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",_unicodeToArray_rsNonAstral="[^\\ud800-\\udfff]",_unicodeToArray_rsRegional="(?:\\ud83c[\\udde6-\\uddff]){2}",_unicodeToArray_rsSurrPair="[\\ud800-\\udbff][\\udc00-\\udfff]",_unicodeToArray_reOptMod="(?:"+_unicodeToArray_rsCombo+"|\\ud83c[\\udffb-\\udfff])"+"?",_unicodeToArray_rsSeq="[\\ufe0e\\ufe0f]?"+_unicodeToArray_reOptMod+("(?:\\u200d(?:"+[_unicodeToArray_rsNonAstral,_unicodeToArray_rsRegional,_unicodeToArray_rsSurrPair].join("|")+")[\\ufe0e\\ufe0f]?"+_unicodeToArray_reOptMod+")*"),rsSymbol="(?:"+[_unicodeToArray_rsNonAstral+_unicodeToArray_rsCombo+"?",_unicodeToArray_rsCombo,_unicodeToArray_rsRegional,_unicodeToArray_rsSurrPair,rsAstral].join("|")+")",reUnicode=RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+rsSymbol+_unicodeToArray_rsSeq,"g");const _unicodeToArray=function unicodeToArray(string){return string.match(reUnicode)||[]};const _stringToArray=function stringToArray(string){return(0,_hasUnicode.Z)(string)?_unicodeToArray(string):_asciiToArray(string)};const lodash_es_upperFirst=function createCaseFirst(methodName){return function(string){string=(0,lodash_es_toString.Z)(string);var strSymbols=(0,_hasUnicode.Z)(string)?_stringToArray(string):void 0,chr=strSymbols?strSymbols[0]:string.charAt(0),trailing=strSymbols?_castSlice(strSymbols,1).join(""):string.slice(1);return chr[methodName]()+trailing}}("toUpperCase");const lodash_es_startCase=_createCompounder((function(result,word,index){return result+(index?" ":"")+lodash_es_upperFirst(word)}));var Icon=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js"),MenuItem=function(_Component){function MenuItem(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_Component.call.apply(_Component,[this].concat(args))||this).handleClick=function(e){_this.props.disabled||(0,invoke.Z)(_this.props,"onClick",e,_this.props)},_this}return(0,inheritsLoose.Z)(MenuItem,_Component),MenuItem.prototype.render=function render(){var _this$props=this.props,active=_this$props.active,children=_this$props.children,className=_this$props.className,color=_this$props.color,content=_this$props.content,disabled=_this$props.disabled,fitted=_this$props.fitted,header=_this$props.header,icon=_this$props.icon,link=_this$props.link,name=_this$props.name,onClick=_this$props.onClick,position=_this$props.position,classes=(0,clsx_m.Z)(color,position,(0,classNameBuilders.lG)(active,"active"),(0,classNameBuilders.lG)(disabled,"disabled"),(0,classNameBuilders.lG)(!0===icon||icon&&!(name||content),"icon"),(0,classNameBuilders.lG)(header,"header"),(0,classNameBuilders.lG)(link,"link"),(0,classNameBuilders.sU)(fitted,"fitted"),"item",className),ElementType=(0,getElementType.Z)(MenuItem,this.props,(function(){if(onClick)return"a"})),rest=(0,getUnhandledProps.Z)(MenuItem,this.props);return childrenUtils.kK(children)?react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes,onClick:this.handleClick}),Icon.Z.create(icon,{autoGenerateKey:!1}),childrenUtils.kK(content)?lodash_es_startCase(name):content):react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes,onClick:this.handleClick}),children)},MenuItem}(react.Component);function MenuMenu(props){var children=props.children,className=props.className,content=props.content,position=props.position,classes=(0,clsx_m.Z)(position,"menu",className),rest=(0,getUnhandledProps.Z)(MenuMenu,props),ElementType=(0,getElementType.Z)(MenuMenu,props);return react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes}),childrenUtils.kK(children)?content:children)}MenuItem.handledProps=["active","as","children","className","color","content","disabled","fitted","header","icon","index","link","name","onClick","position"],MenuItem.propTypes={},MenuItem.create=(0,factories.u5)(MenuItem,(function(val){return{content:val,name:val}})),MenuMenu.handledProps=["as","children","className","content","position"],MenuMenu.propTypes={};const Menu_MenuMenu=MenuMenu;var Menu=function(_Component){function Menu(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_Component.call.apply(_Component,[this].concat(args))||this).handleItemOverrides=function(predefinedProps){return{onClick:function onClick(e,itemProps){var index=itemProps.index;_this.setState({activeIndex:index}),(0,invoke.Z)(predefinedProps,"onClick",e,itemProps),(0,invoke.Z)(_this.props,"onItemClick",e,itemProps)}}},_this}(0,inheritsLoose.Z)(Menu,_Component);var _proto=Menu.prototype;return _proto.renderItems=function renderItems(){var _this2=this,items=this.props.items,activeIndex=this.state.activeIndex;return(0,map.Z)(items,(function(item,index){return MenuItem.create(item,{defaultProps:{active:parseInt(activeIndex,10)===index,index},overrideProps:_this2.handleItemOverrides})}))},_proto.render=function render(){var _this$props=this.props,attached=_this$props.attached,borderless=_this$props.borderless,children=_this$props.children,className=_this$props.className,color=_this$props.color,compact=_this$props.compact,fixed=_this$props.fixed,floated=_this$props.floated,fluid=_this$props.fluid,icon=_this$props.icon,inverted=_this$props.inverted,pagination=_this$props.pagination,pointing=_this$props.pointing,secondary=_this$props.secondary,size=_this$props.size,stackable=_this$props.stackable,tabular=_this$props.tabular,text=_this$props.text,vertical=_this$props.vertical,widths=_this$props.widths,classes=(0,clsx_m.Z)("ui",color,size,(0,classNameBuilders.lG)(borderless,"borderless"),(0,classNameBuilders.lG)(compact,"compact"),(0,classNameBuilders.lG)(fluid,"fluid"),(0,classNameBuilders.lG)(inverted,"inverted"),(0,classNameBuilders.lG)(pagination,"pagination"),(0,classNameBuilders.lG)(pointing,"pointing"),(0,classNameBuilders.lG)(secondary,"secondary"),(0,classNameBuilders.lG)(stackable,"stackable"),(0,classNameBuilders.lG)(text,"text"),(0,classNameBuilders.lG)(vertical,"vertical"),(0,classNameBuilders.sU)(attached,"attached"),(0,classNameBuilders.sU)(floated,"floated"),(0,classNameBuilders.sU)(icon,"icon"),(0,classNameBuilders.sU)(tabular,"tabular"),(0,classNameBuilders.cD)(fixed,"fixed"),(0,classNameBuilders.H0)(widths,"item"),className,"menu"),rest=(0,getUnhandledProps.Z)(Menu,this.props),ElementType=(0,getElementType.Z)(Menu,this.props);return react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes}),childrenUtils.kK(children)?this.renderItems():children)},Menu}(ModernAutoControlledComponent.Z);Menu.handledProps=["activeIndex","as","attached","borderless","children","className","color","compact","defaultActiveIndex","fixed","floated","fluid","icon","inverted","items","onItemClick","pagination","pointing","secondary","size","stackable","tabular","text","vertical","widths"],Menu.propTypes={},Menu.autoControlledProps=["activeIndex"],Menu.Header=Menu_MenuHeader,Menu.Item=MenuItem,Menu.Menu=Menu_MenuMenu,Menu.create=(0,factories.u5)(Menu,(function(items){return{items}}));const Menu_Menu=Menu;var Input=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Input/Input.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const GramsMenu=({active,setActive,developer=!1,sideBar,developerBar,optionsBar})=>{const[menu,setMenu]=(0,react.useState)(!1),[console,setConsole]=(0,react.useState)(!1),[options,setOptions]=(0,react.useState)(!1);return(0,jsx_runtime.jsx)("div",{"data-testid":"GramsMenu",children:(0,jsx_runtime.jsxs)(Menu_Menu,{attached:"top",borderless:!0,inverted:!0,children:[(0,jsx_runtime.jsx)(Menu_Menu.Item,{icon:"bars",onClick:()=>{setMenu(!0)}}),(0,jsx_runtime.jsx)(Menu_Menu.Item,{position:"right",className:"large-width",children:(0,jsx_runtime.jsx)(Input.Z,{icon:"search",placeholder:"Search anything"})}),developer&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Menu_Menu.Item,{position:"right",icon:"code",onClick:()=>{setConsole(!0)}}),(0,jsx_runtime.jsx)(Menu_Menu.Item,{icon:"user",onClick:()=>{setOptions(!0)}})]}),!developer&&(0,jsx_runtime.jsx)(Menu_Menu.Item,{position:"right",icon:"user",onClick:()=>{setOptions(!0)}})]})})};GramsMenu.displayName="GramsMenu";const GramsMenu_GramsMenu=GramsMenu;try{GramsMenu.displayName="GramsMenu",GramsMenu.__docgenInfo={description:"GramsMenu is sugar for semantic Menu tailored for Grams.",displayName:"GramsMenu",props:{active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"string"}},setActive:{defaultValue:null,description:"",name:"setActive",required:!1,type:{name:"(value: string) => void"}},developer:{defaultValue:{value:"false"},description:"",name:"developer",required:!1,type:{name:"boolean"}},sideBar:{defaultValue:null,description:"",name:"sideBar",required:!1,type:{name:"ReactNode"}},developerBar:{defaultValue:null,description:"",name:"developerBar",required:!1,type:{name:"ReactNode"}},optionsBar:{defaultValue:null,description:"",name:"optionsBar",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/GramsMenu/GramsMenu.tsx#GramsMenu"]={docgenInfo:GramsMenu.__docgenInfo,name:"GramsMenu",path:"src/components/GramsMenu/GramsMenu.tsx#GramsMenu"})}catch(__react_docgen_typescript_loader_error){}const GramsMenu_stories={title:"Components/GramsMenu",component:GramsMenu_GramsMenu,tags:["autodocs"]},Primary={};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]}}]);