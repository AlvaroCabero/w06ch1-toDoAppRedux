const configureStore =(initialValues)=>{
return createStore(rootReducer, 
initialValues, 
composeWithDevToolsApp(applyMiddleware(thunk)); 
//ponemos esto para activar el devtools y los middleware