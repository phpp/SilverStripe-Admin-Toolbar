<?php

class AdminToolbar extends Controller {

    public static function Initial() {

        Requirements::css('admintoolbar/css/AdminToolbar.css');
        Requirements::javascript('framework/thirdparty/jquery/jquery.js');
        Requirements::javascript('admintoolbar/javascript/AdminToolbar.js');
        
    }
    
}

?>
