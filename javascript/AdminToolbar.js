jQuery.noConflict();

(function($) {    
       $(document).ready(function() {
        clean();
        var absoluteURL = window.location.href,
        devActions = [
        {
            name:'Build',
            urlParam:'/dev/build/'
        },
        {
            name:'Flush',
            urlParam:'?flush=1'
        },
        {
            name:'Show queries',
            urlParam:'?showqueries=1'
        },
        {
            name:'Show template',
            urlParam:'?showtemplate=1'
        },
        {
            name:'Debug',
            urlParam:'?debug=1'
        }],
        quickLinks = [
        {
            name:'API',
            url:'http://api.silverstripe.org'
        },
        {
            name:'Docs',
            url:'http://doc.silverstripe.org/framework/'
        },
        {
            name:'Forums',
            url:'http://www.silverstripe.org/forums/'
        },
        {
            name:'Add-ons',
            url:'http://addons.silverstripe.org/'
        }],
        searchPlatforms = [
        {
            name:'Silverstripe sites',
            url:'http://www.silverstripe.org/search/?q='
        },
        {
            name:'Google',
            url:'https://www.google.com/#q='   
        },
        {
            name:'GitHub',
            url:'https://github.com/search?q='   
        },
        {
            name:'Stackoverflow',
            url:'http://stackoverflow.com/search?q='   
        }
        ],
        isAdminURL = absoluteURL.search("admin/"),
        niceURL = getNiceURL(absoluteURL);
        
        $('body').prepend('<div class="adminToolbar"></div>');
        var atbActions ='<ul class="atbActions">';
        atbActions +='<li id="atbFrontendBackend"></li>';
    
        // Dev actions
        if(devActions.length > 0){
            for(var i = 0; i < devActions.length; i++){
                if(devActions[i].name == 'Build') atbActions +='<li><a href="./dev/build">Build</a></li>';
                else atbActions +='<li><a href="'+niceURL+devActions[i].urlParam+'">'+devActions[i].name+'</a></li>';
            }
        }
        atbActions +='<li class="borderRight">&nbsp;</li>';
    
        //Quicklinks
        if(quickLinks.length > 0){
            for(var i = 0; i < quickLinks.length; i++){
                atbActions +='<li><a href="'+quickLinks[i].url+'">'+quickLinks[i].name+'</a></li>'
            }
        }
        atbActions +='<li class="borderRight">&nbsp;</li>';
        
        //Platforms
        if(searchPlatforms.length > 0){
            atbActions +='<li id="atbSearch"><input id="atbSearchTerm" type="text" placeholder="Search..." name="atbSearchTerm"></li>';
            atbActions +='<li><select name="atbSelectPlatform" id="atbSelectPlatform">';
            atbActions +='<option value="">Select platform</option>';
            for(var i = 0; i < searchPlatforms.length; i++){
                atbActions +='<option value="'+searchPlatforms[i].url+'">'+searchPlatforms[i].name+'</a></option>'
            }
            atbActions +='</select></li>';
        }
     
        atbActions +='</ul>';
        
        $('.adminToolbar').html(atbActions);
    
        if(isAdminURL > -1 )
            $('#atbFrontendBackend').html('<a href="./">Frontend</a>');       
        else
            $('#atbFrontendBackend').html('<a href="admin/">Backend</a>');
    
  
        $('#atbSelectPlatform').change(function(){
            var atbPlatform = $("#atbSelectPlatform").val(),
            atbSearchTerm = $("#atbSearchTerm").val();       
            window.location.href = atbPlatform+atbSearchTerm;         
        })
        
    
        function getNiceURL(url){
            var retURL = url.split('?');
            if(retURL[0]) return retURL[0];
            else return url;
        }
        
        function clean(){
            $( 'body').find( ".adminToolbar" ).remove();
        }
    });
}(jQuery));
