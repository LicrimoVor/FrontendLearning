"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[9885],{"./src/shared/ui/Stack/Flex/Flex.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AlignEnd:function(){return AlignEnd},ComponentH1:function(){return ComponentH1},Default:function(){return Default},DirectionColumn:function(){return DirectionColumn},Gap32:function(){return Gap32},Gap4:function(){return Gap4},JustifyEnd:function(){return JustifyEnd},__namedExportsOrder:function(){return __namedExportsOrder}});var _Flex__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/ui/Stack/Flex/Flex.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const meta={title:"shared/Flex",component:_Flex__WEBPACK_IMPORTED_MODULE_0__.k,args:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"first"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"first"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"first"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"first"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"first"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{children:"first"})]})}};__webpack_exports__.default=meta;const Default={},Gap4={args:{gap:4}},Gap32={args:{gap:32}},DirectionColumn={args:{direction:"column"}},JustifyEnd={args:{justify:"end"}},AlignEnd={args:{align:"end"}},ComponentH1={args:{Component:"h1"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},Gap4.parameters={...Gap4.parameters,docs:{...Gap4.parameters?.docs,source:{originalSource:"{\n  args: {\n    gap: 4\n  }\n}",...Gap4.parameters?.docs?.source}}},Gap32.parameters={...Gap32.parameters,docs:{...Gap32.parameters?.docs,source:{originalSource:"{\n  args: {\n    gap: 32\n  }\n}",...Gap32.parameters?.docs?.source}}},DirectionColumn.parameters={...DirectionColumn.parameters,docs:{...DirectionColumn.parameters?.docs,source:{originalSource:"{\n  args: {\n    direction: 'column'\n  }\n}",...DirectionColumn.parameters?.docs?.source}}},JustifyEnd.parameters={...JustifyEnd.parameters,docs:{...JustifyEnd.parameters?.docs,source:{originalSource:"{\n  args: {\n    justify: 'end'\n  }\n}",...JustifyEnd.parameters?.docs?.source}}},AlignEnd.parameters={...AlignEnd.parameters,docs:{...AlignEnd.parameters?.docs,source:{originalSource:"{\n  args: {\n    align: 'end'\n  }\n}",...AlignEnd.parameters?.docs?.source}}},ComponentH1.parameters={...ComponentH1.parameters,docs:{...ComponentH1.parameters?.docs,source:{originalSource:"{\n  args: {\n    Component: 'h1'\n  }\n}",...ComponentH1.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Gap4","Gap32","DirectionColumn","JustifyEnd","AlignEnd","ComponentH1"]},"./src/shared/lib/classNames/classNames.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function classNames(cls,mods={},additional=[]){return[cls,...additional.filter(Boolean),...Object.entries(mods).filter((([_,value])=>Boolean(value))).map((([className])=>className))].join(" ")}__webpack_require__.d(__webpack_exports__,{A:function(){return classNames}})},"./src/shared/ui/Stack/Flex/Flex.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{k:function(){return Flex}});var classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Flex_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Stack/Flex/Flex.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Flex_module.Z,options);var Flex_Flex_module=Flex_module.Z&&Flex_module.Z.locals?Flex_module.Z.locals:void 0,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const FlexJustify={center:Flex_Flex_module.justifyCenter,end:Flex_Flex_module.justifyEnd,start:Flex_Flex_module.justifyStart,spaceBetween:Flex_Flex_module.justifySpaceBetween},FlexAlign={center:Flex_Flex_module.alignCenter,end:Flex_Flex_module.alignEnd,start:Flex_Flex_module.alignStart,baseline:Flex_Flex_module.alignBaseline},FlexGap={4:Flex_Flex_module.gap4,8:Flex_Flex_module.gap8,12:Flex_Flex_module.gap12,16:Flex_Flex_module.gap16,32:Flex_Flex_module.gap32},FlexDirection={row:Flex_Flex_module.directionRow,column:Flex_Flex_module.directionColumn},Flex=props=>{const{className:className,children:children,justify:justify="start",align:align="center",direction:direction="row",gap:gap,max:max,Component:Component="div"}=props,classes=[className,FlexJustify[justify],FlexAlign[align],FlexDirection[direction],gap&&FlexGap[gap]],mods={[Flex_Flex_module.maxWidth]:max};return(0,jsx_runtime.jsx)(Component,{className:(0,classNames.A)(Flex_Flex_module.Flex,mods,classes),children:children})};Flex.displayName="Flex";try{Flex.displayName="Flex",Flex.__docgenInfo={description:"Компонент позиционирования flex",displayName:"Flex",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"start"'},{value:'"spaceBetween"'}]}},align:{defaultValue:null,description:"",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"end"'},{value:'"start"'},{value:'"baseline"'}]}},gap:{defaultValue:null,description:"",name:"gap",required:!1,type:{name:"enum",value:[{value:"4"},{value:"8"},{value:"12"},{value:"16"},{value:"32"}]}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"boolean"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}},Component:{defaultValue:null,description:"",name:"Component",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"title"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"label"'},{value:'"legend"'},{value:'"li"'},{value:'"link"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"slot"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"table"'},{value:'"tbody"'},{value:'"td"'},{value:'"template"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Stack/Flex/Flex.tsx#Flex"]={docgenInfo:Flex.__docgenInfo,name:"Flex",path:"src/shared/ui/Stack/Flex/Flex.tsx#Flex"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Stack/Flex/Flex.module.scss":function(module,__webpack_exports__,__webpack_require__){var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-Stack-Flex-Flex-module__Flex{display:flex}.src-shared-ui-Stack-Flex-Flex-module__justifyCenter{justify-content:center}.src-shared-ui-Stack-Flex-Flex-module__justifyEnd{justify-content:end}.src-shared-ui-Stack-Flex-Flex-module__justifyStart{justify-content:start}.src-shared-ui-Stack-Flex-Flex-module__justifySpaceBetween{justify-content:space-between}.src-shared-ui-Stack-Flex-Flex-module__alignCenter{align-items:center}.src-shared-ui-Stack-Flex-Flex-module__alignEnd{align-items:end}.src-shared-ui-Stack-Flex-Flex-module__alignStart{align-items:start}.src-shared-ui-Stack-Flex-Flex-module__alignBaseline{align-items:baseline}.src-shared-ui-Stack-Flex-Flex-module__gap4{gap:4px}.src-shared-ui-Stack-Flex-Flex-module__gap8{gap:8px}.src-shared-ui-Stack-Flex-Flex-module__gap12{gap:12px}.src-shared-ui-Stack-Flex-Flex-module__gap16{gap:16px}.src-shared-ui-Stack-Flex-Flex-module__gap32{gap:32px}.src-shared-ui-Stack-Flex-Flex-module__directionRow{flex-direction:row}.src-shared-ui-Stack-Flex-Flex-module__directionColumn{flex-direction:column}.src-shared-ui-Stack-Flex-Flex-module__maxWidth{min-width:100%}","",{version:3,sources:["webpack://./src/shared/ui/Stack/Flex/Flex.module.scss"],names:[],mappings:"AAAA,4CACI,YAAA,CAGJ,qDACI,sBAAA,CAGJ,kDACI,mBAAA,CAGJ,oDACI,qBAAA,CAGJ,2DACI,6BAAA,CAGJ,mDACI,kBAAA,CAGJ,gDACI,eAAA,CAGJ,kDACI,iBAAA,CAGJ,qDACI,oBAAA,CAGJ,4CACI,OAAA,CAGJ,4CACI,OAAA,CAGJ,6CACI,QAAA,CAGJ,6CACI,QAAA,CAGJ,6CACI,QAAA,CAGJ,oDACI,kBAAA,CAGJ,uDACI,qBAAA,CAGJ,gDACI,cAAA",sourcesContent:[".Flex {\n    display: flex;\n}\n\n.justifyCenter {\n    justify-content: center;\n}\n\n.justifyEnd {\n    justify-content: end;\n}\n\n.justifyStart {\n    justify-content: start;\n}\n\n.justifySpaceBetween {\n    justify-content: space-between;\n}\n\n.alignCenter {\n    align-items: center;\n}\n\n.alignEnd {\n    align-items: end;\n}\n\n.alignStart {\n    align-items: start;\n}\n\n.alignBaseline {\n    align-items: baseline;\n}\n\n.gap4 {\n    gap: 4px;\n}\n\n.gap8 {\n    gap: 8px;\n}\n\n.gap12 {\n    gap: 12px;\n}\n\n.gap16 {\n    gap: 16px;\n}\n\n.gap32 {\n    gap: 32px;\n}\n\n.directionRow {\n    flex-direction: row;\n}\n\n.directionColumn {\n    flex-direction: column;\n}\n\n.maxWidth {\n    min-width: 100%;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={Flex:"src-shared-ui-Stack-Flex-Flex-module__Flex",justifyCenter:"src-shared-ui-Stack-Flex-Flex-module__justifyCenter",justifyEnd:"src-shared-ui-Stack-Flex-Flex-module__justifyEnd",justifyStart:"src-shared-ui-Stack-Flex-Flex-module__justifyStart",justifySpaceBetween:"src-shared-ui-Stack-Flex-Flex-module__justifySpaceBetween",alignCenter:"src-shared-ui-Stack-Flex-Flex-module__alignCenter",alignEnd:"src-shared-ui-Stack-Flex-Flex-module__alignEnd",alignStart:"src-shared-ui-Stack-Flex-Flex-module__alignStart",alignBaseline:"src-shared-ui-Stack-Flex-Flex-module__alignBaseline",gap4:"src-shared-ui-Stack-Flex-Flex-module__gap4",gap8:"src-shared-ui-Stack-Flex-Flex-module__gap8",gap12:"src-shared-ui-Stack-Flex-Flex-module__gap12",gap16:"src-shared-ui-Stack-Flex-Flex-module__gap16",gap32:"src-shared-ui-Stack-Flex-Flex-module__gap32",directionRow:"src-shared-ui-Stack-Flex-Flex-module__directionRow",directionColumn:"src-shared-ui-Stack-Flex-Flex-module__directionColumn",maxWidth:"src-shared-ui-Stack-Flex-Flex-module__maxWidth"},__webpack_exports__.Z=___CSS_LOADER_EXPORT___}}]);