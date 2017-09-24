define(['Route', 'CommonAjax','PartialViewStrings'],
    function(Route, CommonAjax,PartialViewStrings) {

    class MainManager {
        constructor(){

        }

        init(){
            Route(PartialViewStrings.StoryOne,'#container');
        }

    };

    return new MainManager();

});
