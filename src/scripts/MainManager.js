define(['Route', 'CommonAjax','PartialViewStrings'],
    function(Route, CommonAjax,PartialViewStrings) {

    class MainManager {
        constructor(){

        }

        init(){
            Route(PartialViewStrings.FrontPage,'#container');
        }

    };

    return new MainManager();

});
