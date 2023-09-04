"use strict";(self.webpackChunk_grams_dev_ui=self.webpackChunk_grams_dev_ui||[]).push([[42],{"./src/components/Settings/Settings.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicSection:()=>BasicSection,Primary:()=>Primary,Sectioned:()=>Sectioned,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Settings__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Settings/Settings.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Modules/Settings",component:_Settings__WEBPACK_IMPORTED_MODULE_1__.Z,tags:["autodocs"]},GeneralSettings=[{header:"Theme",description:"Toggle between light and dark mode, or match your system's theme.",action:{type:"dropdown",options:[{key:"dark",text:"Dark"},{key:"light",text:"Light"},{key:"system",text:"System theme"}],confirmText:"Apply"}},{header:"External Connections",description:"Allow or block deep linking to external sites or apps.",action:{type:"toggle"}}],Primary={args:{settings:GeneralSettings}},Sectioned={args:{settings:GeneralSettings},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Settings__WEBPACK_IMPORTED_MODULE_1__.Z.Section,{title:"General Settings",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Story,{})})]},BasicSection={args:{settings:GeneralSettings},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Settings__WEBPACK_IMPORTED_MODULE_1__.Z.Section,{basic:!0,title:"General Settings",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Story,{})})]};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    settings: GeneralSettings\n  }\n}",...Primary.parameters?.docs?.source}}},Sectioned.parameters={...Sectioned.parameters,docs:{...Sectioned.parameters?.docs,source:{originalSource:'{\n  args: {\n    settings: GeneralSettings\n  },\n  decorators: [Story => <Settings.Section title="General Settings">\n        <Story />\n      </Settings.Section>]\n}',...Sectioned.parameters?.docs?.source}}},BasicSection.parameters={...BasicSection.parameters,docs:{...BasicSection.parameters?.docs,source:{originalSource:'{\n  args: {\n    settings: GeneralSettings\n  },\n  decorators: [Story => <Settings.Section basic title="General Settings">\n        <Story />\n      </Settings.Section>]\n}',...BasicSection.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Sectioned","BasicSection"]},"./src/components/Settings/Settings.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _SettingsAction__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Settings/SettingsAction.tsx"),_SettingsItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Settings/SettingsItem.tsx"),_SettingsSection__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Settings/SettingsSection.tsx"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Divider/Divider.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Settings=({settings,size="large"})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{"data-testid":"Settings",children:(settings||[]).map(((setting,idx)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Settings.Item,{action:setting.action,header:setting.header,description:setting.description,children:setting.children,size},setting.header),idx<settings.length-1&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Z,{})]},idx)))});Settings.displayName="Settings",Settings.Section=_SettingsSection__WEBPACK_IMPORTED_MODULE_3__.Z,Settings.Action=_SettingsAction__WEBPACK_IMPORTED_MODULE_1__.Z,Settings.Item=_SettingsItem__WEBPACK_IMPORTED_MODULE_2__.Z;const __WEBPACK_DEFAULT_EXPORT__=Settings},"./src/components/Settings/SettingsAction.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Checkbox/Checkbox.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/modules/Dropdown/Dropdown.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Input/Input.js"),semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Button/Button.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SettingsAction=({type,confirmText,defaultState,onChange,onConfirm,options,primary=!0,text,size="large"})=>{const modules={checkbox:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Z,{label:text,checked:Boolean(defaultState),onChange:(e,data)=>onChange?.(data.checked)}),dropdown:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Z,{selection:!0,options:options||[],defaultValue:defaultState,onChange:(e,data)=>onChange?.(data.value)}),input:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Z,{size,defaultValue:defaultState,onChange:(e,data)=>onChange?.(data.value)}),password:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Z,{size,type:"password",defaultValue:defaultState,onChange:(e,data)=>onChange?.(data.value)}),toggle:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Z,{toggle:!0,label:text,checked:Boolean(defaultState),onChange:(e,data)=>onChange?.(data.checked)})};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{children:[modules[type],confirmText&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Z,{size,primary,onClick:()=>onConfirm?.(defaultState),children:confirmText})})]})};SettingsAction.displayName="SettingsAction";const __WEBPACK_DEFAULT_EXPORT__=SettingsAction;try{SettingsAction.displayName="SettingsAction",SettingsAction.__docgenInfo={description:"SettingsAction is a sub-component of the Settings component.\nIt renders different types of UI elements based on the 'type' prop.",displayName:"SettingsAction",props:{type:{defaultValue:null,description:"Specifies the type of UI control to render ('button', 'checkbox', 'dropdown', 'input', 'password', 'toggle').",name:"type",required:!0,type:{name:"enum",value:[{value:'"password"'},{value:'"checkbox"'},{value:'"dropdown"'},{value:'"input"'},{value:'"toggle"'}]}},options:{defaultValue:null,description:"Provides a list of selectable options for the 'dropdown' type.",name:"options",required:!1,type:{name:"DropdownItemProps[]"}},text:{defaultValue:null,description:"Sets the display text or label for the action control.",name:"text",required:!1,type:{name:"string"}},confirmText:{defaultValue:null,description:"Specifies the text for a confirm button, if applicable.",name:"confirmText",required:!1,type:{name:"string"}},defaultState:{defaultValue:null,description:"Sets the initial state value for controls like 'checkbox', 'toggle', 'input', etc.",name:"defaultState",required:!1,type:{name:"string | number | boolean | (string | number | boolean)[]"}},onChange:{defaultValue:null,description:"Callback function triggered when the action state changes.",name:"onChange",required:!1,type:{name:"(value: string | number | boolean | (string | number | boolean)[]) => void"}},onConfirm:{defaultValue:null,description:"Callback function triggered when the action state is confirmed (e.g., button click, checkbox toggle).",name:"onConfirm",required:!1,type:{name:"(value: string | number | boolean | (string | number | boolean)[]) => void"}},primary:{defaultValue:{value:"true"},description:"An action can be formatted to show different levels of emphasis.",name:"primary",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"large"},description:"Defines the size of the component.",name:"size",required:!1,type:{name:"enum",value:[{value:'"mini"'},{value:'"small"'},{value:'"large"'},{value:'"big"'},{value:'"huge"'},{value:'"massive"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Settings/SettingsAction.tsx#SettingsAction"]={docgenInfo:SettingsAction.__docgenInfo,name:"SettingsAction",path:"src/components/Settings/SettingsAction.tsx#SettingsAction"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Settings/SettingsItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _SettingsAction__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Settings/SettingsAction.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SettingsItem=({action,children,description,header,size="large"})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3",{children:header}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{children:description}),action&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_SettingsAction__WEBPACK_IMPORTED_MODULE_1__.Z,{size,...action}),children]});SettingsItem.displayName="SettingsItem";const __WEBPACK_DEFAULT_EXPORT__=SettingsItem;try{SettingsItem.displayName="SettingsItem",SettingsItem.__docgenInfo={description:"Settings item sub-component for individual settings options.",displayName:"SettingsItem",props:{action:{defaultValue:null,description:"Specifies the action control to render alongside the settings item, if any.",name:"action",required:!1,type:{name:"SettingsActionProps"}},header:{defaultValue:null,description:"Sets the title or header text for the settings item.",name:"header",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"Provides additional explanatory text or elements under the header.",name:"description",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Holds any additional child elements for the settings item.",name:"children",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"large"},description:"Defines the size of the component.",name:"size",required:!1,type:{name:"enum",value:[{value:'"mini"'},{value:'"small"'},{value:'"large"'},{value:'"big"'},{value:'"huge"'},{value:'"massive"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Settings/SettingsItem.tsx#SettingsItem"]={docgenInfo:SettingsItem.__docgenInfo,name:"SettingsItem",path:"src/components/Settings/SettingsItem.tsx#SettingsItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Settings/SettingsSection.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Segment/Segment.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const SettingsSection=({basic=!1,children,title})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Z,{basic,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2",{children:title}),children]});SettingsSection.displayName="SettingsSection";const __WEBPACK_DEFAULT_EXPORT__=SettingsSection;try{SettingsSection.displayName="SettingsSection",SettingsSection.__docgenInfo={description:"Settings section sub-component to encapsulate settings items.",displayName:"SettingsSection",props:{title:{defaultValue:null,description:"Sets the title text to display at the top of the settings section.",name:"title",required:!1,type:{name:"string"}},basic:{defaultValue:{value:"false"},description:"Indicates if the unlock interface should be displayed in a basic segment.",name:"basic",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Holds the child elements to render within the section.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Settings/SettingsSection.tsx#SettingsSection"]={docgenInfo:SettingsSection.__docgenInfo,name:"SettingsSection",path:"src/components/Settings/SettingsSection.tsx#SettingsSection"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/semantic-ui-react/dist/es/elements/Divider/Divider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_lib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js"),_lib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js"),_lib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/getElementType.js"),_lib__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js");function Divider(props){var children=props.children,className=props.className,clearing=props.clearing,content=props.content,fitted=props.fitted,hidden=props.hidden,horizontal=props.horizontal,inverted=props.inverted,section=props.section,vertical=props.vertical,classes=(0,clsx__WEBPACK_IMPORTED_MODULE_1__.Z)("ui",(0,_lib__WEBPACK_IMPORTED_MODULE_2__.lG)(clearing,"clearing"),(0,_lib__WEBPACK_IMPORTED_MODULE_2__.lG)(fitted,"fitted"),(0,_lib__WEBPACK_IMPORTED_MODULE_2__.lG)(hidden,"hidden"),(0,_lib__WEBPACK_IMPORTED_MODULE_2__.lG)(horizontal,"horizontal"),(0,_lib__WEBPACK_IMPORTED_MODULE_2__.lG)(inverted,"inverted"),(0,_lib__WEBPACK_IMPORTED_MODULE_2__.lG)(section,"section"),(0,_lib__WEBPACK_IMPORTED_MODULE_2__.lG)(vertical,"vertical"),"divider",className),rest=(0,_lib__WEBPACK_IMPORTED_MODULE_3__.Z)(Divider,props),ElementType=(0,_lib__WEBPACK_IMPORTED_MODULE_4__.Z)(Divider,props);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ElementType,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__.Z)({},rest,{className:classes}),_lib__WEBPACK_IMPORTED_MODULE_6__.kK(children)?content:children)}Divider.handledProps=["as","children","className","clearing","content","fitted","hidden","horizontal","inverted","section","vertical"],Divider.propTypes={};const __WEBPACK_DEFAULT_EXPORT__=Divider}}]);