/* jshint multistr: true */
/* jshint node: true */
"use strict";

angular.module('restApp').run(function($templateCache) {
    var multiStr = ' \
    <basic-nav></basic-nav> \
    <div class="col-sm-9"> \
	    <div class="col-sm-12"> \
	    	<table class="table" style="border:2px solid #ddd;"> \
    			<thead> \
		    	    <tr style="background-color:#000;color:#fff;"> \
	    				<th class="text-center">1D100</th> \
			    	    <th>Social Class</th> \
			    	    <th class="text-center">PC Points<sup>1</sup></th> \
		    	    </tr> \
	    	  	</thead> \
			  	<tbody> \
			    	<tr ng-repeat="entity in entities | orderBy:[\'id\']"> \
				        <td class="text-center" style="border-right:2px solid #ddd;"><span ng-if="entity.roll_min<10">0</span>{{entity.roll_min}}-{{entity.roll_max}}%</td> \
				        <td style="border-right:2px solid #ddd;">{{entity.title}}</td> \
    					<td class="text-center"><span ng-if="entity.points_adjustment>0">+</span>{{entity.points_adjustment}}</td> \
				    </tr> \
    				<tr style="border-top:2px solid #ddd;"> \
    					<td colspan=3> \
    						<sup>1</sup>Positive numbers show the number of extra points gained if this class is chosen, whilst negative numbers show the number of points which must be spent in order to obtain that particular social class. \
    					</td> \
    				</tr> \
			  	</tbody> \
	  		</table> \
	    </div> \
    </div> \
    ';
    $templateCache.put('social_class', multiStr);
});