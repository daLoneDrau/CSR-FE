/* jshint multistr: true */
/* jshint node: true */
"use strict";

angular.module('restApp').run(function($templateCache) {
    var multiStr = ' \
    <basic-nav></basic-nav> \
    <div class="col-sm-9"> \
		<div class="col-sm-12"> \
	        <div class="form-group"> <!-- Select Entity --> \
		        <label for="selEntity" class="control-label col-sm-4">Choose:</label> \
				<div class="col-sm-8"> \
		        	<select class="form-control" name="selEntity" id="selEntity" \
	    					ng-model="social_class_select" \
	    					ng-options="sc as sc.title for sc in social_classes | orderBy:[\'id\'] track by sc.id" \
    						ng-change="update()"> \
		            	<option value="">---Please select---</option> <!-- not selected / blank option --> \
		        	</select> \
				</div> \
			</div> \
		</div> \
	    <div class="col-sm-12" ng-show="social_class_select != null"> \
    		<hr> \
	    	<table class="table table-striped" style="border:2px solid #ddd;"> \
    			<thead> \
		    	    <tr style="background-color:#000;color:#fff;"> \
	    				<th class="text-center">1D100</th> \
					    <th>Father\'s Vocation</th> \
					    <th>PC\s Starting Skills (Basic Knowledge)</th> \
			    	    <th class="text-center">Social Status</th> \
		    	    </tr> \
	    	  	</thead> \
			  	<tbody> \
			    	<tr ng-repeat="entity in selected_entities | orderBy:[\'id\']"> \
				        <td class="text-center" style="border-right:2px solid #ddd;"><span ng-if="entity.roll_min<10">0</span>{{entity.roll_min}}<span ng-if="entity.roll_min!=entity.roll_max">-<span ng-if="entity.roll_max<10">0</span>{{entity.roll_max}}</span>%</td> \
				        <td style="border-right:2px solid #ddd;">{{entity.name}}<span ng-if="entity.is_liveried"> (L)</span><span ng-if="entity.name==\'Labourer\'||entity.name==\'Sergeant\'||entity.name==\'Man-At-Arms\'"><sup>2</sup></span></td> \
    					<td style="border-right:2px solid #ddd;"> \
						    <span ng-repeat="skill in entity.starting_skills"><span ng-if="!$first">, </span>{{skill.name}}</span> \
						    <span ng-repeat="skill in entity.binary_skills"><span ng-if="!$first"> <strong>or</strong> </span>{{skill.name}}</span> \
						    <span ng-if="entity.num_starting_agricultural_skills>0"><span ng-if="entity.starting_skills.length>0||entity.binary_skills.length>0">, </span>{{entity.num_starting_agricultural_skills}} Agricultural Skill<span ng-if="entity.num_starting_agricultural_skills>1">s</span></span> \
						    <span ng-if="entity.num_starting_animal_skills>0"><span ng-if="entity.starting_skills.length>0||entity.binary_skills.length>0">, </span>{{entity.num_starting_animal_skills}} Animal Skill<span ng-if="entity.num_starting_animal_skills>1">s</span></span> \
						    <span ng-if="entity.num_starting_combat_skills>0"><span ng-if="entity.num_starting_agricultural_skills>0||entity.num_starting_animal_skills>0||entity.starting_skills.length>0||entity.binary_skills.length>0"> + </span>{{entity.num_starting_combat_skills}} Combat Skill<span ng-if="entity.num_starting_combat_skills>1">s</span></span> \
						    <span ng-if="entity.num_starting_outdoor_skills>0"><span ng-if="entity.num_starting_agricultural_skills>0||entity.num_starting_animal_skills>0||entity.starting_skills.length>0||entity.binary_skills.length>0"> + </span>{{entity.num_starting_outdoor_skills}} Outdoor Skill<span ng-if="entity.num_starting_outdoor_skills>1">s</span></span> \
						    <span ng-if="entity.num_starting_trade_skills>0"><span ng-if="entity.num_starting_agricultural_skills>0||entity.num_starting_animal_skills>0||entity.starting_skills.length>0||entity.binary_skills.length>0"> + </span>{{entity.num_starting_trade_skills}} Trade Skill<span ng-if="entity.num_starting_trade_skills>1">s</span></span> \
						    <span ng-if="entity.num_starting_thievery_skills>0"><span ng-if="entity.num_starting_agricultural_skills>0||entity.num_starting_animal_skills>0||entity.starting_skills.length>0||entity.binary_skills.length>0"> + </span>{{entity.num_starting_thievery_skills}} Thievery Skill<span ng-if="entity.num_starting_thievery_skills>1">s</span></span> \
						    <span ng-if="entity.num_starting_bonus_skills>0"><span ng-if="entity.num_starting_agricultural_skills>0||entity.num_starting_animal_skills>0||entity.starting_skills.length>0||entity.binary_skills.length>0"> + </span>{{entity.num_starting_bonus_skills}} Skill<span ng-if="entity.num_starting_bonus_skills>1">s</span><sup>1</sup></span> \
						</td> \
    					<td class="text-center"><span ng-if="entity.social_status<10">0</span>{{entity.social_status}}<span ng-if="entity.thieves_guild_status>0">/{{entity.thieves_guild_status}}<sup>2</sup></span></td> \
				    </tr> \
    				<tr style="border-top:2px solid #ddd;"> \
    					<td colspan=4> \
    						<sup>1</sup>Appropriate skill of the PC\'s choice. \
                <span ng-show="social_class_select.name==\'SERVILE\'"><br><sup>2</sup>Labourers receive <strong>Endurance</strong> and <strong>Conditioning</strong> at <strong>Level 2</strong> as standard.</span> \
                <span ng-show="social_class_select.name==\'FREEMAN\'"><br><sup>2</sup>The term "sergeant" is English and does not have the same meaning in other parts of Europe. Here we use it to distinguish retainers and freeholders who owe service as lightly-armoured or well-armoured cavalry. Similarly, "Man-at-arms" is used to identify troops of the common class.  In other lands, the term "Man-at-arms" included well-armed and armoured foot soldiers that could be of the lesser gentility, almost the equivalent of knights expect that they had not been knighted and did not hold lands equivalent to a knight\'s fee.<br>(L) Character\'s father is in liveried service in the household of a knight or great lord. Such characters have an excellent chance of being accepted into the service of the lord. This is a consequence of being in relatively close contact with him during their youth, giving the lord the opportunity to take notice of their merits.</span> \
                <span ng-show="social_class_select.name==\'TOWNSMAN\'"><br><sup>2</sup>Second value indicates status within the Thieves\'s & Beggars\' Guild</span> \
    					</td> \
    				</tr> \
			  	</tbody> \
	  		</table> \
	    </div> \
    </div> \
    ';
    $templateCache.put('father_vocation', multiStr);
});