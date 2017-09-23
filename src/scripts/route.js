define(['CommonStrings', 'FrontPage','CommonAjax'], 
        function(_, FrontPage, CommonAjax) {

    function route(path, loadInto, ...args){
        let inlinePromise;
        inlinePromise = CommonAjax(path);
        inlinePromise.done(function(result){
            let mClass;
            switch (path){
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