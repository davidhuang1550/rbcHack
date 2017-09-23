define(['PartialViewStrings','CommonAjax'], 
        function(_, CommonAjax) {

    function route(path, loadInto, ...args){
        let inlinePromise;
        inlinePromise = CommonAjax(path);
        inlinePromise.done(function(result){
            let mClass;
            switch (path){
                case _.FrontPage:
                    $(loadInto).html(result);
                    require(['FrontPage'], function(FrontPage){
                        mClass = new FrontPage();
                        mClass.InitializeListeners();
                    });
                    break;
                case _.Story:
                    $(loadInto).html(result);
                    require(['Story'], function(Story){
                        mClass = new Story();
                        mClass.InitializeListeners();
                    });
                default:
                    console.log("404 error");
                    break;
            }


        })
    
    }

    return route;

});