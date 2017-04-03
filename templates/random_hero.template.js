/* jshint multistr: true */
/* jshint node: true */
"use strict";

angular.module('restApp').run(function($templateCache) {
    var multiStr = ' \
	    <basic-nav></basic-nav> \
	    <!-- -------------------- --> \
	    <!-- View NPC --> \
	    <!-- -------------------- --> \
	    <div class="col-sm-9"> \
    		<div class="col-sm-12"> \
    			<button class="btn btn-default" type="submit" ng-click="getRandomEntity()">Random Hero</button> \
    		</div> \
			<div class="col-sm-12" ng-show="entitySelect!=null"> \
				<div class="col-sm-4">&nbsp;</div> \
				<div class="col-sm-4"> \
			    	<table class="table table-striped" style="border:2px solid #ddd;"> \
						<thead> \
				    	    <tr style="background-color:#000;color:#fff;"> \
			    				<th>Character Name</th> \
				    	    </tr> \
			    	  	</thead> \
					  	<tbody> \
					    	<tr> \
								<td>{{entitySelect.first_name.name}} {{entitySelect.last_name.name}} <span ng-if="entitySelect.gender.name==\'Male\'"><i class="fa fa-mars" aria-hidden="true"></i></span><span ng-if="entitySelect.gender.name==\'Female\'"><i class="fa fa-venus" aria-hidden="true"></i></span></td> \
						    </tr> \
					  	</tbody> \
			  		</table> \
    			</div> \
			</div> \
			<div class="col-sm-12" ng-show="entitySelect!=null"> \
				<div class="col-sm-4"> \
    				<div class="col-sm-12"> \
			    	<table class="table table-striped" style="border:2px solid #ddd;"> \
					<thead> \
			    	    <tr style="background-color:#000;color:#fff;"> \
							<th>ATTRIBUTES</th> \
							<th>LVL</th> \
							<th>AR%</th> \
			    	    </tr> \
				  	</thead> \
				  	<tbody> \
				    	<tr> \
							<td style="background-color:#000;color:#fff;">Strength</td> \
							<td style="border-right:1px solid #fff;">{{entitySelect.attributes.STR}}</td> \
							<td></td> \
						</tr> \
				    	<tr> \
							<td style="background-color:#000;color:#fff;">Constiution</td> \
							<td style="border-right:1px solid #fff;">{{entitySelect.attributes.CON}}</td> \
							<td></td> \
						</tr> \
					    	<tr> \
							<td style="background-color:#000;color:#fff;">Agility</td> \
							<td style="border-right:1px solid #fff;">{{entitySelect.attributes.AGIL}}</td> \
							<td></td> \
						</tr> \
					    	<tr> \
							<td style="background-color:#000;color:#fff;">Intellect</td> \
							<td style="border-right:1px solid #fff;">{{entitySelect.attributes.INT}}</td> \
							<td></td> \
						</tr> \
					    	<tr> \
							<td style="background-color:#000;color:#fff;">Wisdom</td> \
							<td style="border-right:1px solid #fff;">{{entitySelect.attributes.WIS}}</td> \
							<td></td> \
						</tr> \
					    	<tr> \
							<td style="background-color:#000;color:#fff;">Discipline</td> \
							<td style="border-right:1px solid #fff;">{{entitySelect.attributes.DISC}}</td> \
							<td></td> \
						</tr> \
					    	<tr> \
							<td style="background-color:#000;color:#fff;">Bardic Voice</td> \
							<td style="border-right:1px solid #fff;">{{entitySelect.attributes.BV}}</td> \
							<td></td> \
						</tr> \
					    	<tr> \
							<td style="background-color:#000;color:#fff;">Appearance</td> \
							<td style="border-right:1px solid #fff;">{{entitySelect.attributes.APP}}</td> \
							<td></td> \
						</tr> \
					    	<tr> \
							<td style="background-color:#000;color:#fff;">Piety</td> \
							<td style="border-right:1px solid #fff;">{{entitySelect.attributes.PTY}}</td> \
							<td></td> \
						</tr> \
				  	</tbody> \
					</table> \
					</div> \
					<div class="col-sm-12"> \
			    	<table class="table table-striped" style="border:2px solid #ddd;"> \
					<thead> \
			    	    <tr style="background-color:#000;color:#fff;"> \
							<th colspan="2">FAMILY BACKGROUND</th> \
			    	    </tr> \
				  	</thead> \
				  	<tbody> \
				    	<tr> \
							<td style="background-color:#000;color:#fff;">Fathers Social Class</td> \
							<td style="border-right:1px solid #fff;">{{entitySelect.social_class.title}}</td> \
						</tr> \
				    	<tr> \
							<td style="background-color:#000;color:#fff;">Fathers Vocation</td> \
							<td style="border-right:1px solid #fff;">{{entitySelect.father_vocation.name}}</td> \
						</tr> \
				    	<tr> \
							<td style="background-color:#000;color:#fff;">Sibling Rank</td> \
							<td style="border-right:1px solid #fff;">{{entitySelect.sibling_rank.title}}</td> \
						</tr> \
				    	<tr> \
							<td style="background-color:#000;color:#fff;">Family Status</td> \
							<td style="border-right:1px solid #fff;">{{entitySelect.family_status.title}}</td> \
						</tr> \
				  	</tbody> \
					</table> \
					</div> \
				</div> \
    			<div class="col-sm-8"> \
    				<div class="coll-sm-6"> \
				    	<table class="table table-striped" style="border:2px solid #ddd;"> \
						<thead> \
				    	    <tr style="background-color:#000;color:#fff;"> \
								<th colspan="4">VOCATION</th> \
				    	    </tr> \
					  	</thead> \
					  	<tbody> \
					    	<tr> \
								<td colspan="4"></td> \
							</tr> \
					    	<tr> \
								<td style="background-color:#000;color:#fff;">Level</td> \
								<td style="border-right:1px solid #fff;"></td> \
								<td style="background-color:#000;color:#fff;">Age</td> \
								<td style="border-right:1px solid #fff;"></td> \
							</tr> \
					  	</tbody> \
						</table> \
    				</div> \
    				<div class="coll-sm-6">&nbsp;</div> \
    				<div class="coll-sm-12"> \
				    	<table class="table table-striped" style="border:2px solid #ddd;"> \
						<thead> \
				    	    <tr style="background-color:#000;color:#fff;"> \
								<th colspan="4">CHARACTER DESCRIPTION</th> \
				    	    </tr> \
					  	</thead> \
					  	<tbody> \
					    	<tr> \
								<td style="background-color:#000;color:#fff;">Birth Aspect</td> \
								<td style="border-right:1px solid #fff;">{{entitySelect.birth_aspect.title}}</td> \
								<td style="background-color:#000;color:#fff;">Body</td> \
								<td style="border-right:1px solid #fff;">{{entitySelect.attributes.BP}}/{{entitySelect.attributes.MBP}}</td> \
							</tr> \
					    	<tr> \
								<td style="background-color:#000;color:#fff;">Birth Sign</td> \
								<td style="border-right:1px solid #fff;"></td> \
								<td style="background-color:#000;color:#fff;">Fatigue</td> \
								<td style="border-right:1px solid #fff;"></td> \
							</tr> \
					    	<tr> \
								<td style="background-color:#000;color:#fff;">Social Status</td> \
								<td style="border-right:1px solid #fff;"></td> \
								<td style="background-color:#000;color:#fff;">BAP</td> \
								<td style="border-right:1px solid #fff;"></td> \
							</tr> \
					    	<tr> \
								<td style="background-color:#000;color:#fff;">Age</td> \
								<td style="border-right:1px solid #fff;"></td> \
								<td style="background-color:#000;color:#fff;">INF</td> \
								<td style="border-right:1px solid #fff;"></td> \
							</tr> \
					    	<tr> \
								<td style="background-color:#000;color:#fff;">Height</td> \
								<td style="border-right:1px solid #fff;">{{Math.floor(entitySelect.height / 12)}}\' {{entitySelect.height % 12}}"</td> \
								<td style="background-color:#000;color:#fff;">ML</td> \
								<td style="border-right:1px solid #fff;"></td> \
							</tr> \
					    	<tr> \
								<td style="background-color:#000;color:#fff;">Weight</td> \
								<td style="border-right:1px solid #fff;">{{entitySelect.weight}}lbs.</td> \
								<td style="background-color:#000;color:#fff;">PMF</td> \
								<td style="border-right:1px solid #fff;"></td> \
							</tr> \
					    	<tr> \
								<td style="background-color:#000;color:#fff;">Build</td> \
								<td style="border-right:1px solid #fff;">{{entitySelect.build_string}}</td> \
								<td style="background-color:#000;color:#fff;">PFF</td> \
								<td style="border-right:1px solid #fff;"></td> \
							</tr> \
					  	</tbody> \
						</table> \
    				</div> \
    			</div> \
	    	</div> \
	    </div> \
    </div> \
    ';
    $templateCache.put('random_hero', multiStr);
});