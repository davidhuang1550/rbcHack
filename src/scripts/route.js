define(['PartialViewStrings','CommonAjax', 'ChallengeOne'], 
        function(_, CommonAjax, ChallengeOne) {

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
                case _.ChallengeOne:
                    $(loadInto).html(result);
                    mClass = new ChallengeOne();
                    mClass.InitializeListeners();
                    break;
                case _.ChallengeTwo:
    
                    break;
                case _.ChallengeThree:

                    break;
                default:
                    console.log("404 error");
                    break;
            }


        })
    
    }

    return route;

});