/* jshint multistr: true */
/* jshint node: true */
"use strict";

angular.module('restApp').run(function($templateCache) {
    var multiStr = ' \
<!-- this menu will only be visible when screen is large. --> \
<div class="col-md-2 col-md-offset-1 visible-lg"> \
    <h2>Menu Item</h2> \
    <ul class="nav"> \
        <li class="nav-item"><a class="nav-link active" href="#!omens">Table 1.3a - Birth Omens</a></li> \
        <li class="nav-item"><a class="nav-link active" href="#!social_class">Table 1.5a - Social Class</a></li> \
        <li class="nav-item"><a class="nav-link active" href="#!father_vocation">Table 1.5b - Father\'s Vocation</a></li> \
    </ul> \
</div> \
<!-- this menu will only be visible when screen is medium or small. extra small has no menu. --> \
<div class="col-xs-2 col-xs-offset-1 visible-md visible-sm"> \
    <h3>Short Menu</h3> \
    <ol> \
        <li class="nav-item"><a class="nav-link active" href="#!omens">Birth Omens</a></li> \
        <li class="nav-item"><a class="nav-link active" href="#!social_class">Social Class</a></li> \
        <li class="nav-item"><a class="nav-link active" href="#!father_vocation">Father\'s Vocation</a></li> \
    </ol> \
</div> \
    ';
    $templateCache.put('basic_nav', multiStr);
});