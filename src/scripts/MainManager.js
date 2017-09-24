define(['Route', 'CommonAjax','PartialViewStrings'],
    function(Route, CommonAjax,PartialViewStrings) {

    class MainManager {
        constructor(){

        }

        init(){
            Route(PartialViewStrings.Completion,'#container');
        }

    };

    return new MainManager();

});
