/* jshint multistr: true */
/* jshint node: true */
"use strict";

angular.module('restApp').run(function($templateCache) {
    var multiStr = ' \
    <basic-nav></basic-nav> \
    <div class="col-sm-9"> \
	    <div class="col-sm-12"> \
	    	<table class="table table-striped" style="border:2px solid #ddd;"> \
    			<thead> \
		    	    <tr style="background-color:#000;color:#fff;"> \
	    				<th class="text-center">1D100</th> \
			    	    <th>PC\'s Sibling Rank in Family</th> \
			    	    <th class="text-center">PC Points</th> \
		    	    </tr> \
	    	  	</thead> \
			  	<tbody> \
			    	<tr ng-repeat="entity in entities | orderBy:[\'id\']"> \
				        <td class="text-center" style="border-right:2px solid #ddd;"><span ng-if="entity.roll_min<10">0</span>{{entity.roll_min}}-{{entity.roll_max}}%</td> \
				        <td style="border-right:2px solid #ddd;">{{entity.title}}<span ng-if="entity.title.indexOf(\'unack\')>0"><sup>1</sup></span><span ng-if="entity.title.indexOf(\' ack\')>0"><sup>2</sup></span></td> \
    					<td class="text-center">{{entity.points_adjustment}}</td> \
				    </tr> \
    				<tr style="border-top:2px solid #ddd;"> \
    					<td colspan=3> \
		<sup>1</sup>If a character is illegitimate and unacknowledged by the father, then the character\'s Social Status will be <strong>one quarter</strong> of his father\'s Social Status (rounding down).<br> \
		<sup>2</sup>If a character is illegitimate but acknowledged by the father, then the character\'s Social Status will be <strong>three quarters</strong> of his father\'s Social Status (rounding down). \
    					</td> \
    				</tr> \
			  	</tbody> \
	  		</table> \
	    </div> \
    </div> \
    ';
    $templateCache.put('sibling_rank', multiStr);
});