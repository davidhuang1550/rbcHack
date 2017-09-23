define(['CommonStrings', 'FrontPage'], 
        function(_, FrontPage) {

    function route(path, loadInto, ...args){
        let inlinePromise;
        
        inlinePromise.done(function(result){
            let mClass;
            switch path{
                case _.FrontPage:
                    $(loadInto).html(result);
                    mClass = new FrontPage();
                    mClass.InitializeListeners();
                    break;
                default:
                    
                    break;
            }


        })
    
    }

    return route;

});