"use strict";(self.webpackChunk_grams_dev_ui=self.webpackChunk_grams_dev_ui||[]).push([[543],{"./src/components/Profile/Profile.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/List/List.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Label/Label.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Image/Image.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Profile=({id,name,developer,labelColor="green",labelSize="tiny",labelText=">_",image="https://assets.grams.dev/img/ui/Profile/default.png",size="tiny",onSelect})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Z.Item,{"data-testid":"Profile",onClick:()=>onSelect(id),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Z.Content,{children:developer&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Z,{color:labelColor,size:labelSize,children:labelText})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Z,{size,avatar:!0,src:image}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Z.Header,{children:name})]});Profile.displayName="Profile";const __WEBPACK_DEFAULT_EXPORT__=Profile;try{Profile.displayName="Profile",Profile.__docgenInfo={description:"Displays a user's profile, including the image, name, and an optional developer label. Note that the Profile component is sugar for `List.Item` and needs to be used within a List based component, for example: `SelectProfile`",displayName:"Profile",props:{id:{defaultValue:null,description:"The unique identifier for the profile.",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"The name associated with the profile.",name:"name",required:!1,type:{name:"string"}},image:{defaultValue:{value:"https://assets.grams.dev/img/ui/Profile/default.png"},description:"The URL of the profile's image.",name:"image",required:!1,type:{name:"string"}},developer:{defaultValue:null,description:"Indicates whether the profile belongs to a developer.",name:"developer",required:!1,type:{name:"boolean"}},labelColor:{defaultValue:{value:"green"},description:"Indicates the color of the developer label. Defaults to grey",name:"labelColor",required:!1,type:{name:"enum",value:[{value:'"red"'},{value:'"orange"'},{value:'"yellow"'},{value:'"olive"'},{value:'"green"'},{value:'"teal"'},{value:'"blue"'},{value:'"violet"'},{value:'"purple"'},{value:'"pink"'},{value:'"brown"'},{value:'"grey"'},{value:'"black"'}]}},labelSize:{defaultValue:{value:"tiny"},description:"Indicates the color of the developer label. Defaults to grey",name:"labelSize",required:!1,type:{name:"enum",value:[{value:'"mini"'},{value:'"tiny"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"big"'},{value:'"huge"'},{value:'"massive"'}]}},labelText:{defaultValue:{value:">_"},description:"Indicates the color of the developer label. Defaults to grey",name:"labelText",required:!1,type:{name:"string"}},size:{defaultValue:{value:"tiny"},description:"The size of the profile. Defaults to 'tiny'",name:"size",required:!1,type:{name:"enum",value:[{value:'"mini"'},{value:'"tiny"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"big"'},{value:'"huge"'},{value:'"massive"'}]}},onSelect:{defaultValue:null,description:"A callback function that is triggered when the profile is selected.",name:"onSelect",required:!1,type:{name:"(id: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Profile/Profile.tsx#Profile"]={docgenInfo:Profile.__docgenInfo,name:"Profile",path:"src/components/Profile/Profile.tsx#Profile"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/semantic-ui-react/dist/es/elements/List/List.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>List_List});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),inheritsLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),map=__webpack_require__("./node_modules/lodash-es/map.js"),invoke=__webpack_require__("./node_modules/lodash-es/invoke.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("./node_modules/react/index.js"),classNameBuilders=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js"),getUnhandledProps=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js"),getElementType=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/getElementType.js"),childrenUtils=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js"),factories=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/factories.js");function ListDescription(props){var children=props.children,className=props.className,content=props.content,classes=(0,clsx_m.Z)(className,"description"),rest=(0,getUnhandledProps.Z)(ListDescription,props),ElementType=(0,getElementType.Z)(ListDescription,props);return react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes}),childrenUtils.kK(children)?content:children)}ListDescription.handledProps=["as","children","className","content"],ListDescription.propTypes={},ListDescription.create=(0,factories.u5)(ListDescription,(function(content){return{content}}));const List_ListDescription=ListDescription;function ListHeader(props){var children=props.children,className=props.className,content=props.content,classes=(0,clsx_m.Z)("header",className),rest=(0,getUnhandledProps.Z)(ListHeader,props),ElementType=(0,getElementType.Z)(ListHeader,props);return react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes}),childrenUtils.kK(children)?content:children)}ListHeader.handledProps=["as","children","className","content"],ListHeader.propTypes={},ListHeader.create=(0,factories.u5)(ListHeader,(function(content){return{content}}));const List_ListHeader=ListHeader;function ListContent(props){var children=props.children,className=props.className,content=props.content,description=props.description,floated=props.floated,header=props.header,verticalAlign=props.verticalAlign,classes=(0,clsx_m.Z)((0,classNameBuilders.cD)(floated,"floated"),(0,classNameBuilders.Ok)(verticalAlign),"content",className),rest=(0,getUnhandledProps.Z)(ListContent,props),ElementType=(0,getElementType.Z)(ListContent,props);return childrenUtils.kK(children)?react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes}),List_ListHeader.create(header),List_ListDescription.create(description),content):react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes}),children)}ListContent.handledProps=["as","children","className","content","description","floated","header","verticalAlign"],ListContent.propTypes={},ListContent.create=(0,factories.u5)(ListContent,(function(content){return{content}}));const List_ListContent=ListContent;var Icon=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Icon/Icon.js");function ListIcon(props){var className=props.className,verticalAlign=props.verticalAlign,classes=(0,clsx_m.Z)((0,classNameBuilders.Ok)(verticalAlign),className),rest=(0,getUnhandledProps.Z)(ListIcon,props);return react.createElement(Icon.Z,(0,esm_extends.Z)({},rest,{className:classes}))}ListIcon.handledProps=["className","verticalAlign"],ListIcon.propTypes={},ListIcon.create=(0,factories.u5)(ListIcon,(function(name){return{name}}));const List_ListIcon=ListIcon;var isPlainObject=__webpack_require__("./node_modules/lodash-es/isPlainObject.js"),Image=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Image/Image.js"),ListItem=function(_Component){function ListItem(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_Component.call.apply(_Component,[this].concat(args))||this).handleClick=function(e){_this.props.disabled||(0,invoke.Z)(_this.props,"onClick",e,_this.props)},_this}return(0,inheritsLoose.Z)(ListItem,_Component),ListItem.prototype.render=function render(){var _this$props=this.props,active=_this$props.active,children=_this$props.children,className=_this$props.className,content=_this$props.content,description=_this$props.description,disabled=_this$props.disabled,header=_this$props.header,icon=_this$props.icon,image=_this$props.image,value=_this$props.value,ElementType=(0,getElementType.Z)(ListItem,this.props),classes=(0,clsx_m.Z)((0,classNameBuilders.lG)(active,"active"),(0,classNameBuilders.lG)(disabled,"disabled"),(0,classNameBuilders.lG)("li"!==ElementType,"item"),className),rest=(0,getUnhandledProps.Z)(ListItem,this.props),valueProp="li"===ElementType?{value}:{"data-value":value};if(!childrenUtils.kK(children))return react.createElement(ElementType,(0,esm_extends.Z)({},valueProp,{role:"listitem",className:classes,onClick:this.handleClick},rest),children);var iconElement=List_ListIcon.create(icon,{autoGenerateKey:!1}),imageElement=Image.Z.create(image,{autoGenerateKey:!1});if(!(0,react.isValidElement)(content)&&(0,isPlainObject.Z)(content))return react.createElement(ElementType,(0,esm_extends.Z)({},valueProp,{role:"listitem",className:classes,onClick:this.handleClick},rest),iconElement||imageElement,List_ListContent.create(content,{autoGenerateKey:!1,defaultProps:{header,description}}));var headerElement=List_ListHeader.create(header,{autoGenerateKey:!1}),descriptionElement=List_ListDescription.create(description,{autoGenerateKey:!1});return iconElement||imageElement?react.createElement(ElementType,(0,esm_extends.Z)({},valueProp,{role:"listitem",className:classes,onClick:this.handleClick},rest),iconElement||imageElement,(content||headerElement||descriptionElement)&&react.createElement(List_ListContent,null,headerElement,descriptionElement,content)):react.createElement(ElementType,(0,esm_extends.Z)({},valueProp,{role:"listitem",className:classes,onClick:this.handleClick},rest),headerElement,descriptionElement,content)},ListItem}(react.Component);ListItem.handledProps=["active","as","children","className","content","description","disabled","header","icon","image","onClick","value"],ListItem.propTypes={},ListItem.create=(0,factories.u5)(ListItem,(function(content){return{content}}));const List_ListItem=ListItem;function ListList(props){var children=props.children,className=props.className,content=props.content,rest=(0,getUnhandledProps.Z)(ListList,props),ElementType=(0,getElementType.Z)(ListList,props),classes=(0,clsx_m.Z)((0,classNameBuilders.lG)("ul"!==ElementType&&"ol"!==ElementType,"list"),className);return react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes}),childrenUtils.kK(children)?content:children)}ListList.handledProps=["as","children","className","content"],ListList.propTypes={};const List_ListList=ListList;var List=function(_Component){function List(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_Component.call.apply(_Component,[this].concat(args))||this).handleItemOverrides=function(predefinedProps){return{onClick:function onClick(e,itemProps){(0,invoke.Z)(predefinedProps,"onClick",e,itemProps),(0,invoke.Z)(_this.props,"onItemClick",e,itemProps)}}},_this}return(0,inheritsLoose.Z)(List,_Component),List.prototype.render=function render(){var _this2=this,_this$props=this.props,animated=_this$props.animated,bulleted=_this$props.bulleted,celled=_this$props.celled,children=_this$props.children,className=_this$props.className,content=_this$props.content,divided=_this$props.divided,floated=_this$props.floated,horizontal=_this$props.horizontal,inverted=_this$props.inverted,items=_this$props.items,link=_this$props.link,ordered=_this$props.ordered,relaxed=_this$props.relaxed,selection=_this$props.selection,size=_this$props.size,verticalAlign=_this$props.verticalAlign,classes=(0,clsx_m.Z)("ui",size,(0,classNameBuilders.lG)(animated,"animated"),(0,classNameBuilders.lG)(bulleted,"bulleted"),(0,classNameBuilders.lG)(celled,"celled"),(0,classNameBuilders.lG)(divided,"divided"),(0,classNameBuilders.lG)(horizontal,"horizontal"),(0,classNameBuilders.lG)(inverted,"inverted"),(0,classNameBuilders.lG)(link,"link"),(0,classNameBuilders.lG)(ordered,"ordered"),(0,classNameBuilders.lG)(selection,"selection"),(0,classNameBuilders.sU)(relaxed,"relaxed"),(0,classNameBuilders.cD)(floated,"floated"),(0,classNameBuilders.Ok)(verticalAlign),"list",className),rest=(0,getUnhandledProps.Z)(List,this.props),ElementType=(0,getElementType.Z)(List,this.props);return childrenUtils.kK(children)?childrenUtils.kK(content)?react.createElement(ElementType,(0,esm_extends.Z)({role:"list",className:classes},rest),(0,map.Z)(items,(function(item){return List_ListItem.create(item,{overrideProps:_this2.handleItemOverrides})}))):react.createElement(ElementType,(0,esm_extends.Z)({role:"list",className:classes},rest),content):react.createElement(ElementType,(0,esm_extends.Z)({role:"list",className:classes},rest),children)},List}(react.Component);List.handledProps=["animated","as","bulleted","celled","children","className","content","divided","floated","horizontal","inverted","items","link","onItemClick","ordered","relaxed","selection","size","verticalAlign"],List.propTypes={},List.Content=List_ListContent,List.Description=List_ListDescription,List.Header=List_ListHeader,List.Icon=List_ListIcon,List.Item=List_ListItem,List.List=List_ListList;const List_List=List}}]);