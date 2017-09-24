define(['jquery','Route','PartialViewStrings','FrontpageInit'], 
        function($,Route,PartialViewStrings) {
    
    class FrontPage{
    
        constructor(){

        }
//commonStrings, path, loadInto, ...args
        InitializeListeners(){
            $('#getstarted').on('click',function(){
                Route(PartialViewStrings.StoryOne,"#container");
            });
        }
    
    }


    return FrontPage;


});