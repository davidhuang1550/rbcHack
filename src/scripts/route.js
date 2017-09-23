define(['CommonStrings','CommonAjax'], 
        function(_, CommonAjax) {

    function route(commonStrings, path, loadInto, ...args){
        let inlinePromise;
        inlinePromise = CommonAjax(path);
        inlinePromise.done(function(result){
            let mClass;
            switch (commonStrings){
                case _.FrontPage:
                    $(loadInto).html(result);
                    require(['FrontPage'], function(FrontPage){
                        mClass = new FrontPage();
                        mClass.InitializeListeners();
                    });
                    break;
                default:
                    
                    break;
            }


        })
    
    }

    return route;

});