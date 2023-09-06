"use strict";(self.webpackChunk_grams_dev_ui=self.webpackChunk_grams_dev_ui||[]).push([[905],{"./src/components/SelectMethod/SelectMethod.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Mobile:()=>Mobile,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Selection/SelectMethod",component:__webpack_require__("./src/components/SelectMethod/SelectMethod.tsx").Z,tags:["autodocs"]},Primary={},Basic={args:{basic:!0}},Mobile={args:{mobile:!0}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{}",...Primary.parameters?.docs?.source}}},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    basic: true\n  }\n}",...Basic.parameters?.docs?.source}}},Mobile.parameters={...Mobile.parameters,docs:{...Mobile.parameters?.docs,source:{originalSource:"{\n  args: {\n    mobile: true\n  }\n}",...Mobile.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Basic","Mobile"]},"./src/components/SelectItem/SelectItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/List/List.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Image/Image.js"),_hooks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SelectItem=({divided=!1,selection=!0,size="medium",items,onSelect})=>{const inverted=(0,_hooks__WEBPACK_IMPORTED_MODULE_1__.l)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Z,{"data-testid":"SelectItem",divided,size,selection,inverted,children:(items||[]).map((item=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Z.Item,{onClick:()=>onSelect?.(item.id),children:[item.image&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Z,{avatar:!0,src:item.image}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Z.Content,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Z.Header,{children:item.header}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Z.Description,{children:item.description})]})]},item.id)))})};SelectItem.displayName="SelectItem";const __WEBPACK_DEFAULT_EXPORT__=SelectItem;try{SelectItem.displayName="SelectItem",SelectItem.__docgenInfo={description:"Allows users to choose an item from a list of options.\n\nEach item would contain an id, header, description, and image.",displayName:"SelectItem",props:{divided:{defaultValue:{value:"false"},description:"A list can show divisions between content.",name:"divided",required:!1,type:{name:"boolean"}},selection:{defaultValue:{value:"true"},description:"If set to true, the component will allow selection.",name:"selection",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"medium"},description:"Defines the size of the component. It can take values from Semantic UI's sizes.",name:"size",required:!1,type:{name:"enum",value:[{value:'"mini"'},{value:'"tiny"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"big"'},{value:'"huge"'},{value:'"massive"'}]}},items:{defaultValue:null,description:"An array of items to be displayed.",name:"items",required:!1,type:{name:"Item[]"}},onSelect:{defaultValue:null,description:"A callback function that is triggered when a method is selected.",name:"onSelect",required:!1,type:{name:"(id: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SelectItem/SelectItem.tsx#SelectItem"]={docgenInfo:SelectItem.__docgenInfo,name:"SelectItem",path:"src/components/SelectItem/SelectItem.tsx#SelectItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/SelectItem/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>_SelectItem__WEBPACK_IMPORTED_MODULE_0__.Z});var _SelectItem__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/SelectItem/SelectItem.tsx")},"./src/components/SelectMethod/SelectMethod.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_i18next__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Segment/Segment.js"),_SelectItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/SelectItem/index.ts"),_hooks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/hooks/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SelectMethod=({basic=!1,divided=!1,mobile=!1,selection=!0,size="large",methods,onSelect})=>{const{t,i18n}=(0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.$G)(),inverted=(0,_hooks__WEBPACK_IMPORTED_MODULE_3__.l)(),DEFAULT_METHODS=[{id:"new",header:t("ui:selectMethod.new.header"),description:t("ui:selectMethod.new.description"),image:"https://assets.grams.dev/img/ui/SelectMethod/new.png"},{id:"seed",header:t("ui:selectMethod.seed.header"),description:t("ui:selectMethod.seed.description"),image:"https://assets.grams.dev/img/ui/SelectMethod/seed.png"}];return mobile||DEFAULT_METHODS.push({id:"import",header:t("ui:selectMethod.import.header"),description:t("ui:selectMethod.import.description"),image:"https://assets.grams.dev/img/ui/SelectMethod/import.png"},{id:"hardware",header:t("ui:selectMethod.hardware.header"),description:t("ui:selectMethod.hardware.description"),image:"https://assets.grams.dev/img/ui/SelectMethod/ledger.png"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Z,{dir:i18n.dir(),"data-testid":"SelectItem",basic,inverted,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SelectItem__WEBPACK_IMPORTED_MODULE_2__.Q,{divided,selection,size,items:methods||DEFAULT_METHODS,onSelect})})};SelectMethod.displayName="SelectMethod";const __WEBPACK_DEFAULT_EXPORT__=SelectMethod;try{SelectMethod.displayName="SelectMethod",SelectMethod.__docgenInfo={description:"Allows users to choose an onboarding method from a list of options. This is sugar for `SelectItem`\n\nEach method must be constructed using an id, header, description, and image.",displayName:"SelectMethod",props:{basic:{defaultValue:{value:"false"},description:"If set to true, applies a basic style to the component.",name:"basic",required:!1,type:{name:"boolean"}},divided:{defaultValue:{value:"false"},description:"A list can show divisions between content.",name:"divided",required:!1,type:{name:"boolean"}},mobile:{defaultValue:{value:"false"},description:"If set, return only the options to create new profile, or import a 24-word seed.",name:"mobile",required:!1,type:{name:"boolean"}},selection:{defaultValue:{value:"true"},description:"If set to true, the component will allow selection.",name:"selection",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"large"},description:"Defines the size of the component. It can take values from Semantic UI's sizes.",name:"size",required:!1,type:{name:"enum",value:[{value:'"mini"'},{value:'"tiny"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"big"'},{value:'"huge"'},{value:'"massive"'}]}},methods:{defaultValue:null,description:"An array of method options to be displayed.",name:"methods",required:!1,type:{name:"Method[]"}},onSelect:{defaultValue:null,description:"A callback function that is triggered when a method is selected.",name:"onSelect",required:!1,type:{name:"(id: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SelectMethod/SelectMethod.tsx#SelectMethod"]={docgenInfo:SelectMethod.__docgenInfo,name:"SelectMethod",path:"src/components/SelectMethod/SelectMethod.tsx#SelectMethod"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>useInverted});var react=__webpack_require__("./node_modules/react/index.js");const useInverted=()=>{const[inverted,setInverted]=(0,react.useState)(!1),setColorScheme=e=>{setInverted(!!e.matches)};return(0,react.useEffect)((()=>{const matchMedia=window.matchMedia("(prefers-color-scheme: dark)");return setColorScheme(matchMedia),matchMedia.addEventListener("change",setColorScheme),()=>matchMedia.removeEventListener("change",setColorScheme)}),[]),inverted}},"./node_modules/semantic-ui-react/dist/es/elements/List/List.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>List_List});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),inheritsLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),map=__webpack_require__("./node_modules/lodash-es/map.js"),invoke=__webpack_require__("./node_modules/lodash-es/invoke.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("./node_modules/react/index.js"),classNameBuilders=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js"),getUnhandledProps=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js"),getElementType=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/getElementType.js"),childrenUtils=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js"),factories=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/factories.js");function ListDescription(props){var children=props.children,className=props.className,content=props.content,classes=(0,clsx_m.Z)(className,"description"),rest=(0,getUnhandledProps.Z)(ListDescription,props),ElementType=(0,getElementType.Z)(ListDescription,props);return react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes}),childrenUtils.kK(children)?content:children)}ListDescription.handledProps=["as","children","className","content"],ListDescription.propTypes={},ListDescription.create=(0,factories.u5)(ListDescription,(function(content){return{content}}));const List_ListDescription=ListDescription;function ListHeader(props){var children=props.children,className=props.className,content=props.content,classes=(0,clsx_m.Z)("header",className),rest=(0,getUnhandledProps.Z)(ListHeader,props),ElementType=(0,getElementType.Z)(ListHeader,props);return react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes}),childrenUtils.kK(children)?content:children)}ListHeader.handledProps=["as","children","className","content"],ListHeader.propTypes={},ListHeader.create=(0,factories.u5)(ListHeader,(function(content){return{content}}));const List_ListHeader=ListHeader;function ListContent(props){var children=props.children,className=props.className,content=props.content,description=props.description,floated=props.floated,header=props.header,verticalAlign=props.verticalAlign,classes=(0,clsx_m.Z)((0,classNameBuilders.cD)(floated,"floated"),(0,classNameBuilders.Ok)(verticalAlign),"content",className),rest=(0,getUnhandledProps.Z)(ListContent,props),ElementType=(0,getElementType.Z)(ListContent,props);return childrenUtils.kK(children)?react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes}),List_ListHeader.create(header),List_ListDescription.create(description),content):react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes}),children)}ListContent.handledProps=["as","children","className","content","description","floated","header","verticalAlign"],ListContent.propTypes={},ListContent.create=(0,factories.u5)(ListContent,(function(content){return{content}}));const List_ListContent=ListContent;var Icon=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js");function ListIcon(props){var className=props.className,verticalAlign=props.verticalAlign,classes=(0,clsx_m.Z)((0,classNameBuilders.Ok)(verticalAlign),className),rest=(0,getUnhandledProps.Z)(ListIcon,props);return react.createElement(Icon.Z,(0,esm_extends.Z)({},rest,{className:classes}))}ListIcon.handledProps=["className","verticalAlign"],ListIcon.propTypes={},ListIcon.create=(0,factories.u5)(ListIcon,(function(name){return{name}}));const List_ListIcon=ListIcon;var isPlainObject=__webpack_require__("./node_modules/lodash-es/isPlainObject.js"),Image=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Image/Image.js"),ListItem=function(_Component){function ListItem(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_Component.call.apply(_Component,[this].concat(args))||this).handleClick=function(e){_this.props.disabled||(0,invoke.Z)(_this.props,"onClick",e,_this.props)},_this}return(0,inheritsLoose.Z)(ListItem,_Component),ListItem.prototype.render=function render(){var _this$props=this.props,active=_this$props.active,children=_this$props.children,className=_this$props.className,content=_this$props.content,description=_this$props.description,disabled=_this$props.disabled,header=_this$props.header,icon=_this$props.icon,image=_this$props.image,value=_this$props.value,ElementType=(0,getElementType.Z)(ListItem,this.props),classes=(0,clsx_m.Z)((0,classNameBuilders.lG)(active,"active"),(0,classNameBuilders.lG)(disabled,"disabled"),(0,classNameBuilders.lG)("li"!==ElementType,"item"),className),rest=(0,getUnhandledProps.Z)(ListItem,this.props),valueProp="li"===ElementType?{value}:{"data-value":value};if(!childrenUtils.kK(children))return react.createElement(ElementType,(0,esm_extends.Z)({},valueProp,{role:"listitem",className:classes,onClick:this.handleClick},rest),children);var iconElement=List_ListIcon.create(icon,{autoGenerateKey:!1}),imageElement=Image.Z.create(image,{autoGenerateKey:!1});if(!(0,react.isValidElement)(content)&&(0,isPlainObject.Z)(content))return react.createElement(ElementType,(0,esm_extends.Z)({},valueProp,{role:"listitem",className:classes,onClick:this.handleClick},rest),iconElement||imageElement,List_ListContent.create(content,{autoGenerateKey:!1,defaultProps:{header,description}}));var headerElement=List_ListHeader.create(header,{autoGenerateKey:!1}),descriptionElement=List_ListDescription.create(description,{autoGenerateKey:!1});return iconElement||imageElement?react.createElement(ElementType,(0,esm_extends.Z)({},valueProp,{role:"listitem",className:classes,onClick:this.handleClick},rest),iconElement||imageElement,(content||headerElement||descriptionElement)&&react.createElement(List_ListContent,null,headerElement,descriptionElement,content)):react.createElement(ElementType,(0,esm_extends.Z)({},valueProp,{role:"listitem",className:classes,onClick:this.handleClick},rest),headerElement,descriptionElement,content)},ListItem}(react.Component);ListItem.handledProps=["active","as","children","className","content","description","disabled","header","icon","image","onClick","value"],ListItem.propTypes={},ListItem.create=(0,factories.u5)(ListItem,(function(content){return{content}}));const List_ListItem=ListItem;function ListList(props){var children=props.children,className=props.className,content=props.content,rest=(0,getUnhandledProps.Z)(ListList,props),ElementType=(0,getElementType.Z)(ListList,props),classes=(0,clsx_m.Z)((0,classNameBuilders.lG)("ul"!==ElementType&&"ol"!==ElementType,"list"),className);return react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes}),childrenUtils.kK(children)?content:children)}ListList.handledProps=["as","children","className","content"],ListList.propTypes={};const List_ListList=ListList;var List=function(_Component){function List(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_Component.call.apply(_Component,[this].concat(args))||this).handleItemOverrides=function(predefinedProps){return{onClick:function onClick(e,itemProps){(0,invoke.Z)(predefinedProps,"onClick",e,itemProps),(0,invoke.Z)(_this.props,"onItemClick",e,itemProps)}}},_this}return(0,inheritsLoose.Z)(List,_Component),List.prototype.render=function render(){var _this2=this,_this$props=this.props,animated=_this$props.animated,bulleted=_this$props.bulleted,celled=_this$props.celled,children=_this$props.children,className=_this$props.className,content=_this$props.content,divided=_this$props.divided,floated=_this$props.floated,horizontal=_this$props.horizontal,inverted=_this$props.inverted,items=_this$props.items,link=_this$props.link,ordered=_this$props.ordered,relaxed=_this$props.relaxed,selection=_this$props.selection,size=_this$props.size,verticalAlign=_this$props.verticalAlign,classes=(0,clsx_m.Z)("ui",size,(0,classNameBuilders.lG)(animated,"animated"),(0,classNameBuilders.lG)(bulleted,"bulleted"),(0,classNameBuilders.lG)(celled,"celled"),(0,classNameBuilders.lG)(divided,"divided"),(0,classNameBuilders.lG)(horizontal,"horizontal"),(0,classNameBuilders.lG)(inverted,"inverted"),(0,classNameBuilders.lG)(link,"link"),(0,classNameBuilders.lG)(ordered,"ordered"),(0,classNameBuilders.lG)(selection,"selection"),(0,classNameBuilders.sU)(relaxed,"relaxed"),(0,classNameBuilders.cD)(floated,"floated"),(0,classNameBuilders.Ok)(verticalAlign),"list",className),rest=(0,getUnhandledProps.Z)(List,this.props),ElementType=(0,getElementType.Z)(List,this.props);return childrenUtils.kK(children)?childrenUtils.kK(content)?react.createElement(ElementType,(0,esm_extends.Z)({role:"list",className:classes},rest),(0,map.Z)(items,(function(item){return List_ListItem.create(item,{overrideProps:_this2.handleItemOverrides})}))):react.createElement(ElementType,(0,esm_extends.Z)({role:"list",className:classes},rest),content):react.createElement(ElementType,(0,esm_extends.Z)({role:"list",className:classes},rest),children)},List}(react.Component);List.handledProps=["animated","as","bulleted","celled","children","className","content","divided","floated","horizontal","inverted","items","link","onItemClick","ordered","relaxed","selection","size","verticalAlign"],List.propTypes={},List.Content=List_ListContent,List.Description=List_ListDescription,List.Header=List_ListHeader,List.Icon=List_ListIcon,List.Item=List_ListItem,List.List=List_ListList;const List_List=List},"./node_modules/semantic-ui-react/dist/es/elements/Segment/Segment.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Segment_Segment});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("./node_modules/react/index.js"),classNameBuilders=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js"),getUnhandledProps=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js"),getElementType=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/getElementType.js"),childrenUtils=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js");function SegmentGroup(props){var children=props.children,className=props.className,compact=props.compact,content=props.content,horizontal=props.horizontal,piled=props.piled,raised=props.raised,size=props.size,stacked=props.stacked,classes=(0,clsx_m.Z)("ui",size,(0,classNameBuilders.lG)(compact,"compact"),(0,classNameBuilders.lG)(horizontal,"horizontal"),(0,classNameBuilders.lG)(piled,"piled"),(0,classNameBuilders.lG)(raised,"raised"),(0,classNameBuilders.lG)(stacked,"stacked"),"segments",className),rest=(0,getUnhandledProps.Z)(SegmentGroup,props),ElementType=(0,getElementType.Z)(SegmentGroup,props);return react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes}),childrenUtils.kK(children)?content:children)}SegmentGroup.handledProps=["as","children","className","compact","content","horizontal","piled","raised","size","stacked"],SegmentGroup.propTypes={};const Segment_SegmentGroup=SegmentGroup;function SegmentInline(props){var children=props.children,className=props.className,content=props.content,classes=(0,clsx_m.Z)("inline",className),rest=(0,getUnhandledProps.Z)(SegmentInline,props),ElementType=(0,getElementType.Z)(SegmentInline,props);return react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes}),childrenUtils.kK(children)?content:children)}SegmentInline.handledProps=["as","children","className","content"],SegmentInline.propTypes={};const Segment_SegmentInline=SegmentInline;function Segment(props){var attached=props.attached,basic=props.basic,children=props.children,circular=props.circular,className=props.className,clearing=props.clearing,color=props.color,compact=props.compact,content=props.content,disabled=props.disabled,floated=props.floated,inverted=props.inverted,loading=props.loading,placeholder=props.placeholder,padded=props.padded,piled=props.piled,raised=props.raised,secondary=props.secondary,size=props.size,stacked=props.stacked,tertiary=props.tertiary,textAlign=props.textAlign,vertical=props.vertical,classes=(0,clsx_m.Z)("ui",color,size,(0,classNameBuilders.lG)(basic,"basic"),(0,classNameBuilders.lG)(circular,"circular"),(0,classNameBuilders.lG)(clearing,"clearing"),(0,classNameBuilders.lG)(compact,"compact"),(0,classNameBuilders.lG)(disabled,"disabled"),(0,classNameBuilders.lG)(inverted,"inverted"),(0,classNameBuilders.lG)(loading,"loading"),(0,classNameBuilders.lG)(placeholder,"placeholder"),(0,classNameBuilders.lG)(piled,"piled"),(0,classNameBuilders.lG)(raised,"raised"),(0,classNameBuilders.lG)(secondary,"secondary"),(0,classNameBuilders.lG)(stacked,"stacked"),(0,classNameBuilders.lG)(tertiary,"tertiary"),(0,classNameBuilders.lG)(vertical,"vertical"),(0,classNameBuilders.sU)(attached,"attached"),(0,classNameBuilders.sU)(padded,"padded"),(0,classNameBuilders.X4)(textAlign),(0,classNameBuilders.cD)(floated,"floated"),"segment",className),rest=(0,getUnhandledProps.Z)(Segment,props),ElementType=(0,getElementType.Z)(Segment,props);return react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes}),childrenUtils.kK(children)?content:children)}Segment.handledProps=["as","attached","basic","children","circular","className","clearing","color","compact","content","disabled","floated","inverted","loading","padded","piled","placeholder","raised","secondary","size","stacked","tertiary","textAlign","vertical"],Segment.Group=Segment_SegmentGroup,Segment.Inline=Segment_SegmentInline,Segment.propTypes={};const Segment_Segment=Segment}}]);