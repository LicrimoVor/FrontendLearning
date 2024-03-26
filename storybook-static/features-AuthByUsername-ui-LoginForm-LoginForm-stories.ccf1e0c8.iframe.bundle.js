(self.webpackChunkproject=self.webpackChunkproject||[]).push([[8314,2115],{"./src/features/AuthByUsername/ui/LoginForm/LoginForm.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:function(){return Dark},Error:function(){return Error},Light:function(){return Light},Red:function(){return Red},__namedExportsOrder:function(){return __namedExportsOrder}});var _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs"),_shared_config_storybook_themeDecorator__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/shared/config/storybook/themeDecorator/index.ts"),_shared_config_storybook_storeDecorator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/shared/config/storybook/storeDecorator/index.ts"),_shared_lib_context_ThemeContext__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/shared/lib/context/ThemeContext/index.ts");const meta={title:"features/LoginForm",component:__webpack_require__("./src/features/AuthByUsername/ui/LoginForm/LoginForm.tsx").default,play:async({canvasElement:canvasElement})=>{const canvas=(0,_storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.uh)(canvasElement),login=canvas.getByTestId("username");await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.type(login,"project@test.ru",{delay:100});const password=canvas.getByTestId("password");await _storybook_testing_library__WEBPACK_IMPORTED_MODULE_0__.mV.type(password,"secret_password",{delay:100})},decorators:[(0,_shared_config_storybook_storeDecorator__WEBPACK_IMPORTED_MODULE_2__.Y)({})]};__webpack_exports__.default=meta;const Light={decorators:[(0,_shared_config_storybook_themeDecorator__WEBPACK_IMPORTED_MODULE_1__.W)(_shared_lib_context_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.Q.LIGHT)]},Dark={decorators:[(0,_shared_config_storybook_themeDecorator__WEBPACK_IMPORTED_MODULE_1__.W)(_shared_lib_context_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.Q.DARK)]},Red={decorators:[(0,_shared_config_storybook_themeDecorator__WEBPACK_IMPORTED_MODULE_1__.W)(_shared_lib_context_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.Q.RED)]},Error={decorators:[(0,_shared_config_storybook_storeDecorator__WEBPACK_IMPORTED_MODULE_2__.Y)({loginForm:{username:"ErorMe",password:"qwerty",error:"ERROR!"}})],play:void 0};Light.parameters={...Light.parameters,docs:{...Light.parameters?.docs,source:{originalSource:"{\n  decorators: [themeDecorator(Theme.LIGHT)]\n}",...Light.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"{\n  decorators: [themeDecorator(Theme.DARK)]\n}",...Dark.parameters?.docs?.source}}},Red.parameters={...Red.parameters,docs:{...Red.parameters?.docs,source:{originalSource:"{\n  decorators: [themeDecorator(Theme.RED)]\n}",...Red.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:"{\n  decorators: [storeDecorator({\n    loginForm: {\n      username: 'ErorMe',\n      password: 'qwerty',\n      error: 'ERROR!'\n    }\n  })],\n  play: undefined\n}",...Error.parameters?.docs?.source}}};const __namedExportsOrder=["Light","Dark","Red","Error"]},"./src/features/AuthByUsername/ui/LoginForm/LoginForm.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return LoginForm_LoginForm}});var react=__webpack_require__("./node_modules/react/index.js"),useTranslation=__webpack_require__("./node_modules/react-i18next/dist/es/useTranslation.js"),es=__webpack_require__("./node_modules/react-redux/es/index.js"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),Button=__webpack_require__("./src/shared/ui/Button/index.ts"),Input=__webpack_require__("./src/shared/ui/Input/index.ts"),Text=__webpack_require__("./src/shared/ui/Text/index.ts"),DynamicModuleLoader=__webpack_require__("./src/shared/lib/components/DynamicModuleLoader/index.ts"),useAppDispatch=__webpack_require__("./src/shared/lib/hooks/useAppDispatch/index.ts");const getLoginUsername=state=>state.loginForm?.username||"",getLoginLoading=state=>state.loginForm?.isLoading||!1,getLoginError=state=>state.loginForm?.error,getLoginPassword=state=>state.loginForm?.password||"";var loginByUsername=__webpack_require__("./src/features/AuthByUsername/model/services/loginByUsername/loginByUsername.ts"),loginSlice=__webpack_require__("./src/features/AuthByUsername/model/slice/loginSlice.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),LoginForm_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/AuthByUsername/ui/LoginForm/LoginForm.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(LoginForm_module.Z,options);var LoginForm_LoginForm_module=LoginForm_module.Z&&LoginForm_module.Z.locals?LoginForm_module.Z.locals:void 0,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const initialReducers={loginForm:loginSlice.t},LoginForm=(0,react.memo)((props=>{const{className:className,onSuccess:onSuccess}=props,{t:t}=(0,useTranslation.$)(),dispatch=(0,useAppDispatch.T)(),username=(0,es.v9)(getLoginUsername),password=(0,es.v9)(getLoginPassword),error=(0,es.v9)(getLoginError),isLoading=(0,es.v9)(getLoginLoading),onChangeUsername=(0,react.useCallback)((value=>{dispatch(loginSlice.BK.setUsername(value))}),[dispatch]),onChangePassword=(0,react.useCallback)((value=>{dispatch(loginSlice.BK.setPassword(value))}),[dispatch]),onLoginClick=(0,react.useCallback)((async()=>{"fulfilled"===(await dispatch((0,loginByUsername.j)({username:username,password:password}))).meta.requestStatus&&onSuccess()}),[dispatch,username,password,onSuccess]);return(0,jsx_runtime.jsx)(DynamicModuleLoader.W,{reducers:initialReducers,removeAfterUnmount:!0,children:(0,jsx_runtime.jsxs)("div",{className:(0,classNames.A)(LoginForm_LoginForm_module.LoginForm,{},[className]),children:[(0,jsx_runtime.jsx)(Text.xv,{title:t("LoginForm")}),(0,jsx_runtime.jsx)(Input.I,{type:"text","data-testid":"username",className:LoginForm_LoginForm_module.input,placeholder:t("EnterUsername"),autofocus:!0,onChange:onChangeUsername,value:username}),(0,jsx_runtime.jsx)(Input.I,{type:"text","data-testid":"password",className:LoginForm_LoginForm_module.input,placeholder:t("EnterPassword"),onChange:onChangePassword,value:password}),(0,jsx_runtime.jsxs)("div",{className:LoginForm_LoginForm_module.footerContent,children:[error&&(0,jsx_runtime.jsx)(Text.xv,{className:LoginForm_LoginForm_module.error,text:t("Wrong username or password"),theme:Text.lg.ERROR}),(0,jsx_runtime.jsx)(Button.zx,{className:LoginForm_LoginForm_module.loginBtn,theme:Button.bn.OUTLINE,onClick:onLoginClick,disabled:isLoading,children:t("Login")})]})]})})}));var LoginForm_LoginForm=LoginForm;try{LoginForm.displayName="LoginForm",LoginForm.__docgenInfo={description:"Форма логина пользователя с помощью username",displayName:"LoginForm",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onSuccess:{defaultValue:null,description:"",name:"onSuccess",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/features/AuthByUsername/ui/LoginForm/LoginForm.tsx#LoginForm"]={docgenInfo:LoginForm.__docgenInfo,name:"LoginForm",path:"src/features/AuthByUsername/ui/LoginForm/LoginForm.tsx#LoginForm"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/ui/Input/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{I:function(){return _ui_Input__WEBPACK_IMPORTED_MODULE_0__.I}});var _ui_Input__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/shared/ui/Input/ui/Input.tsx")},"./src/shared/ui/Input/ui/Input.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{I:function(){return Input}});var react=__webpack_require__("./node_modules/react/index.js"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Input_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/ui/Input.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Input_module.Z,options);var ui_Input_module=Input_module.Z&&Input_module.Z.locals?Input_module.Z.locals:void 0,jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Input=(0,react.memo)((props=>{const{className:className,value:value,onChange:onChange,type:type="text",placeholder:placeholder,autofocus:autofocus,readonly:readonly,...otherProps}=props,ref=(0,react.useRef)(),[isFocused,setIsFocused]=(0,react.useState)(!1),[caretPosition,setCaretPosition]=(0,react.useState)(0),isCaretVisible=isFocused&&!readonly;(0,react.useEffect)((()=>{autofocus&&(setIsFocused(!0),ref.current.focus())}),[autofocus]);const mods={[ui_Input_module.readonly]:readonly};return(0,jsx_runtime.jsxs)("div",{className:(0,classNames.A)(ui_Input_module.InputWrapper,{},[className]),children:[placeholder&&(0,jsx_runtime.jsx)("div",{className:ui_Input_module.placeholder,children:`${placeholder}>`}),(0,jsx_runtime.jsxs)("div",{className:ui_Input_module.caretWrapper,children:[(0,jsx_runtime.jsx)("input",{"data-testid":"input",ref:ref,type:type,value:value,onChange:e=>{onChange?.(e.target.value),setCaretPosition(e.target.value.length)},className:(0,classNames.A)(ui_Input_module.input,mods),...otherProps,onFocus:()=>{setIsFocused(!0)},onBlur:()=>{setIsFocused(!1)},onSelect:e=>{setCaretPosition(e?.target.selectionStart)},readOnly:readonly}),isCaretVisible&&(0,jsx_runtime.jsx)("span",{className:ui_Input_module.caret,style:{left:9*caretPosition+"px"}})]})]})}));try{Input.displayName="Input",Input.__docgenInfo={description:"Кастомный инпут.\nКаретку в продакшене не повторять!\nТакие изащрения не нужны!",displayName:"Input",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"string"}},autofocus:{defaultValue:null,description:"",name:"autofocus",required:!1,type:{name:"boolean"}},readonly:{defaultValue:null,description:"",name:"readonly",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Input/ui/Input.tsx#Input"]={docgenInfo:Input.__docgenInfo,name:"Input",path:"src/shared/ui/Input/ui/Input.tsx#Input"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/features/AuthByUsername/ui/LoginForm/LoginForm.module.scss":function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-features-AuthByUsername-ui-LoginForm-LoginForm-module__LoginForm{display:flex;flex-direction:column}.src-features-AuthByUsername-ui-LoginForm-LoginForm-module__input{margin-top:10px}.src-features-AuthByUsername-ui-LoginForm-LoginForm-module__loginBtn{margin-top:15px;margin-left:auto}.src-features-AuthByUsername-ui-LoginForm-LoginForm-module__footerContent{display:flex;align-items:center}.src-features-AuthByUsername-ui-LoginForm-LoginForm-module__error{width:20vw}","",{version:3,sources:["webpack://./src/features/AuthByUsername/ui/LoginForm/LoginForm.module.scss"],names:[],mappings:"AAAA,sEACI,YAAA,CACA,qBAAA,CAGJ,kEACI,eAAA,CAGJ,qEACI,eAAA,CACA,gBAAA,CAGJ,0EACI,YAAA,CACA,kBAAA,CAGJ,kEACI,UAAA",sourcesContent:[".LoginForm {\n    display: flex;\n    flex-direction: column;\n}\n\n.input {\n    margin-top: 10px;\n}\n\n.loginBtn {\n    margin-top: 15px;\n    margin-left: auto;\n}\n\n.footerContent {\n    display: flex;\n    align-items: center;\n}\n\n.error {\n    width: 20vw;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={LoginForm:"src-features-AuthByUsername-ui-LoginForm-LoginForm-module__LoginForm",input:"src-features-AuthByUsername-ui-LoginForm-LoginForm-module__input",loginBtn:"src-features-AuthByUsername-ui-LoginForm-LoginForm-module__loginBtn",footerContent:"src-features-AuthByUsername-ui-LoginForm-LoginForm-module__footerContent",error:"src-features-AuthByUsername-ui-LoginForm-LoginForm-module__error"},__webpack_exports__.Z=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[16].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Input/ui/Input.module.scss":function(module,__webpack_exports__,__webpack_require__){"use strict";var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".src-shared-ui-Input-ui-Input-module__InputWrapper{display:flex}.src-shared-ui-Input-ui-Input-module__placeholder{margin-right:5px}.src-shared-ui-Input-ui-Input-module__input{background:transparent;border:none;outline:none;width:100%;color:transparent;text-shadow:0 0 0 var(--primary-color)}.src-shared-ui-Input-ui-Input-module__input:focus{outline:none}.src-shared-ui-Input-ui-Input-module__caretWrapper{flex-grow:1;position:relative}.src-shared-ui-Input-ui-Input-module__readonly{opacity:.8}.src-shared-ui-Input-ui-Input-module__caret{height:3px;width:9px;background:var(--primary-color);bottom:0;left:0;position:absolute;animation:src-shared-ui-Input-ui-Input-module__blink 1s forwards infinite}@keyframes src-shared-ui-Input-ui-Input-module__blink{0%{opacity:1}50%{opacity:1}60%{opacity:0}100%{opacity:0}}","",{version:3,sources:["webpack://./src/shared/ui/Input/ui/Input.module.scss"],names:[],mappings:"AAAA,mDACI,YAAA,CAGJ,kDACI,gBAAA,CAGJ,4CACI,sBAAA,CACA,WAAA,CACA,YAAA,CACA,UAAA,CACA,iBAAA,CACA,sCAAA,CAEA,kDACI,YAAA,CAIR,mDACI,WAAA,CACA,iBAAA,CAGJ,+CACI,UAAA,CAGJ,4CACI,UAAA,CACA,SAAA,CACA,+BAAA,CACA,QAAA,CACA,MAAA,CACA,iBAAA,CACA,yEAAA,CAGJ,sDACI,GACI,SAAA,CAGJ,IACI,SAAA,CAGJ,IACI,SAAA,CAGJ,KACI,SAAA,CAAA",sourcesContent:[".InputWrapper {\n    display: flex;\n}\n\n.placeholder {\n    margin-right: 5px;\n}\n\n.input {\n    background: transparent;\n    border: none;\n    outline: none;\n    width: 100%;\n    color: transparent;\n    text-shadow: 0 0 0 var(--primary-color);\n\n    &:focus {\n        outline: none;\n    }\n}\n\n.caretWrapper {\n    flex-grow: 1;\n    position: relative;\n}\n\n.readonly {\n    opacity: 0.8;\n}\n\n.caret {\n    height: 3px;\n    width: 9px;\n    background: var(--primary-color);\n    bottom: 0;\n    left: 0;\n    position: absolute;\n    animation: blink 1s forwards infinite;\n}\n\n@keyframes blink {\n    0% {\n        opacity: 1;\n    }\n\n    50% {\n        opacity: 1;\n    }\n\n    60% {\n        opacity: 0;\n    }\n\n    100% {\n        opacity: 0;\n    }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={InputWrapper:"src-shared-ui-Input-ui-Input-module__InputWrapper",placeholder:"src-shared-ui-Input-ui-Input-module__placeholder",input:"src-shared-ui-Input-ui-Input-module__input",caretWrapper:"src-shared-ui-Input-ui-Input-module__caretWrapper",readonly:"src-shared-ui-Input-ui-Input-module__readonly",caret:"src-shared-ui-Input-ui-Input-module__caret",blink:"src-shared-ui-Input-ui-Input-module__blink"},__webpack_exports__.Z=___CSS_LOADER_EXPORT___},"?4f7e":function(){}}]);