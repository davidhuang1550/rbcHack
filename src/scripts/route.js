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
                case _.StoryOne:
                    $(loadInto).html(result);
                    require(['StoryOne'], function(StoryOne){
                        mClass = new StoryOne();
                        mClass.InitializeListeners();
                    });
                    break;
                case _.StoryTwo:
                    $(loadInto).html(result);
                    require(['StoryTwo'], function(StoryTwo){
                        mClass = new StoryTwo();
                        mClass.InitializeListeners();
                    });
                    break;
                case _.StoryThree:
                    $(loadInto).html(result);
                    require(['StoryThree'], function(StoryThree){
                        mClass = new StoryThree();
                        mClass.InitializeListeners();        
                    });
                    break;
                case _.ChallengeOne:
                    $(loadInto).html(result);
                    require(['ChallengeOne'], function(ChallengeOne){
                        mClass = new ChallengeOne();
                        mClass.InitializeListeners();
                    });
                    break;
                case _.ChallengeTwo:
                    $(loadInto).html(result);
                    require(['ChallengeTwo'], function(ChallengeTwo){
                        mClass = new ChallengeTwo();
                        mClass.InitializeListeners();
                    });
                    break;
                case _.ChallengeThree:
                    $(loadInto).html(result);
                    require(['ChallengeThree'], function(ChallengeThree){
                        mClass = new ChallengeThree();
                        mClass.InitializeListeners();
                    });
                    break;
                default:
                    console.log("404 error");
                    break;
            }


        })

    }

    return route;

});
