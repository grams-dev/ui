"use strict";(self.webpackChunk_grams_dev_ui=self.webpackChunk_grams_dev_ui||[]).push([[576],{"./src/components/SelectProfile/SelectProfile.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Horizontal:()=>Horizontal,Populated:()=>Populated,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>SelectProfile_stories});__webpack_require__("./node_modules/react/index.js");var es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js"),Segment=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/Segment/Segment.js"),List=__webpack_require__("./node_modules/semantic-ui-react/dist/es/elements/List/List.js"),Profile=__webpack_require__("./src/components/Profile/Profile.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const SelectProfile=({basic=!1,profiles,horizontal,createNew=!0,newImage="https://assets.grams.dev/img/SelectProfile/add.png",size="big",onSelect,onCreate})=>{const{t,i18n}=(0,es.$G)();return(0,jsx_runtime.jsx)(Segment.Z,{"data-testid":"SelectProfile",basic,textAlign:"center",children:(0,jsx_runtime.jsxs)(List.Z,{horizontal,relaxed:!0,size,children:[profiles?.map((profile=>(0,jsx_runtime.jsx)(Profile.Z,{...profile,onSelect},profile.id))),createNew&&(0,jsx_runtime.jsx)(Profile.Z,{id:"new-profile",name:t("common:pages.selectProfile.new"),image:newImage,onSelect:onCreate})]})})};SelectProfile.displayName="SelectProfile";const SelectProfile_SelectProfile=SelectProfile;try{SelectProfile.displayName="SelectProfile",SelectProfile.__docgenInfo={description:"Allows users to choose a profile from a list of options. Can be rendered horizontally or vertically",displayName:"SelectProfile",props:{basic:{defaultValue:{value:"false"},description:"If set to true, applies a basic style to the component.",name:"basic",required:!1,type:{name:"boolean"}},profiles:{defaultValue:null,description:"An array of profile options to be displayed.",name:"profiles",required:!1,type:{name:"ProfileProps[]"}},horizontal:{defaultValue:null,description:"If set to true, the component will display the profiles horizontally.",name:"horizontal",required:!1,type:{name:"boolean"}},createNew:{defaultValue:{value:"true"},description:"If set to true, enables the option to create a new profile.",name:"createNew",required:!1,type:{name:"boolean"}},newImage:{defaultValue:{value:"https://assets.grams.dev/img/SelectProfile/add.png"},description:"The URL of the image to be displayed for the 'create new' option.",name:"newImage",required:!1,type:{name:"string"}},size:{defaultValue:{value:"big"},description:"Defines the size of the component. It can take values from Semantic UI's sizes.",name:"size",required:!1,type:{name:"enum",value:[{value:'"mini"'},{value:'"tiny"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"big"'},{value:'"huge"'},{value:'"massive"'}]}},onSelect:{defaultValue:null,description:"A callback function that is triggered when a profile is selected.",name:"onSelect",required:!1,type:{name:"(id: string) => void"}},onCreate:{defaultValue:null,description:"A callback function that is triggered when the 'create new' option is selected.",name:"onCreate",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SelectProfile/SelectProfile.tsx#SelectProfile"]={docgenInfo:SelectProfile.__docgenInfo,name:"SelectProfile",path:"src/components/SelectProfile/SelectProfile.tsx#SelectProfile"})}catch(__react_docgen_typescript_loader_error){}const SelectProfile_stories={title:"Selection/SelectProfile",component:SelectProfile_SelectProfile,tags:["autodocs"]},Primary={},populatedProfiles=[{id:"stefan",name:"Stefan",image:"https://api.multiavatar.com/stefan.svg"},{id:"zoe",name:"Zoe",image:"https://api.multiavatar.com/zoe.svg"}],Populated={args:{profiles:populatedProfiles}},Horizontal={args:{profiles:populatedProfiles,horizontal:!0}},Basic={args:{basic:!0,profiles:populatedProfiles,horizontal:!0}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{}",...Primary.parameters?.docs?.source}}},Populated.parameters={...Populated.parameters,docs:{...Populated.parameters?.docs,source:{originalSource:"{\n  args: {\n    profiles: populatedProfiles\n  }\n}",...Populated.parameters?.docs?.source}}},Horizontal.parameters={...Horizontal.parameters,docs:{...Horizontal.parameters?.docs,source:{originalSource:"{\n  args: {\n    profiles: populatedProfiles,\n    horizontal: true\n  }\n}",...Horizontal.parameters?.docs?.source}}},Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  args: {\n    basic: true,\n    profiles: populatedProfiles,\n    horizontal: true\n  }\n}",...Basic.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Populated","Horizontal","Basic"]},"./node_modules/semantic-ui-react/dist/es/elements/Segment/Segment.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Segment_Segment});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),react=__webpack_require__("./node_modules/react/index.js"),classNameBuilders=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/classNameBuilders.js"),getUnhandledProps=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/getUnhandledProps.js"),getElementType=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/getElementType.js"),childrenUtils=__webpack_require__("./node_modules/semantic-ui-react/dist/es/lib/childrenUtils.js");function SegmentGroup(props){var children=props.children,className=props.className,compact=props.compact,content=props.content,horizontal=props.horizontal,piled=props.piled,raised=props.raised,size=props.size,stacked=props.stacked,classes=(0,clsx_m.Z)("ui",size,(0,classNameBuilders.lG)(compact,"compact"),(0,classNameBuilders.lG)(horizontal,"horizontal"),(0,classNameBuilders.lG)(piled,"piled"),(0,classNameBuilders.lG)(raised,"raised"),(0,classNameBuilders.lG)(stacked,"stacked"),"segments",className),rest=(0,getUnhandledProps.Z)(SegmentGroup,props),ElementType=(0,getElementType.Z)(SegmentGroup,props);return react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes}),childrenUtils.kK(children)?content:children)}SegmentGroup.handledProps=["as","children","className","compact","content","horizontal","piled","raised","size","stacked"],SegmentGroup.propTypes={};const Segment_SegmentGroup=SegmentGroup;function SegmentInline(props){var children=props.children,className=props.className,content=props.content,classes=(0,clsx_m.Z)("inline",className),rest=(0,getUnhandledProps.Z)(SegmentInline,props),ElementType=(0,getElementType.Z)(SegmentInline,props);return react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes}),childrenUtils.kK(children)?content:children)}SegmentInline.handledProps=["as","children","className","content"],SegmentInline.propTypes={};const Segment_SegmentInline=SegmentInline;function Segment(props){var attached=props.attached,basic=props.basic,children=props.children,circular=props.circular,className=props.className,clearing=props.clearing,color=props.color,compact=props.compact,content=props.content,disabled=props.disabled,floated=props.floated,inverted=props.inverted,loading=props.loading,placeholder=props.placeholder,padded=props.padded,piled=props.piled,raised=props.raised,secondary=props.secondary,size=props.size,stacked=props.stacked,tertiary=props.tertiary,textAlign=props.textAlign,vertical=props.vertical,classes=(0,clsx_m.Z)("ui",color,size,(0,classNameBuilders.lG)(basic,"basic"),(0,classNameBuilders.lG)(circular,"circular"),(0,classNameBuilders.lG)(clearing,"clearing"),(0,classNameBuilders.lG)(compact,"compact"),(0,classNameBuilders.lG)(disabled,"disabled"),(0,classNameBuilders.lG)(inverted,"inverted"),(0,classNameBuilders.lG)(loading,"loading"),(0,classNameBuilders.lG)(placeholder,"placeholder"),(0,classNameBuilders.lG)(piled,"piled"),(0,classNameBuilders.lG)(raised,"raised"),(0,classNameBuilders.lG)(secondary,"secondary"),(0,classNameBuilders.lG)(stacked,"stacked"),(0,classNameBuilders.lG)(tertiary,"tertiary"),(0,classNameBuilders.lG)(vertical,"vertical"),(0,classNameBuilders.sU)(attached,"attached"),(0,classNameBuilders.sU)(padded,"padded"),(0,classNameBuilders.X4)(textAlign),(0,classNameBuilders.cD)(floated,"floated"),"segment",className),rest=(0,getUnhandledProps.Z)(Segment,props),ElementType=(0,getElementType.Z)(Segment,props);return react.createElement(ElementType,(0,esm_extends.Z)({},rest,{className:classes}),childrenUtils.kK(children)?content:children)}Segment.handledProps=["as","attached","basic","children","circular","className","clearing","color","compact","content","disabled","floated","inverted","loading","padded","piled","placeholder","raised","secondary","size","stacked","tertiary","textAlign","vertical"],Segment.Group=Segment_SegmentGroup,Segment.Inline=Segment_SegmentInline,Segment.propTypes={};const Segment_Segment=Segment}}]);