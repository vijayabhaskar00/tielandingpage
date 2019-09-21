function parseTiles(jsonArray, grid_table, list_source, list_type, list_id)
{
	//code to prepare tile content and append it to table;
	$(jsonArray).each( function(i, item) {
		if(item.type == "1"){  //story
			console.log('story');
			var html = '<div class="grid-item">'+
										'<div class="card menu-category" style="background: white;">'+
												'<a href="/'+
													item.link+
													'/">'+
													'<div class="coverpic" style=\'background:linear-gradient(transparent, #00000059, #000),url("/public/uploads/'+
													item.cover+
												'stryimg");background-size: cover;\'>'+
														'<p class="tile-category"><span>'+
														item.category+
														'</span></p>'+
														'<div class="inner1">'+
																'<div class="story_title">'+
																		'<h2>'+
																				(item.title?item.title:'')+
																		'</h2>'+
																'</div>'+
																// '<div class="description">'+
																// 	'<p>'+
																// 				(item.descr?item.descr.substring(0,100):'')+
																// 	'</p>'+
																// '</div>'+
														'</div>'+
														'</div>'+
													'<div class="outer">'+
														
														'<div class="inner2">'+
															'<div style="width:73%; overflow:hidden; float:left;">'+
																'<div style="float:left">'+
																		'<img class="image-details" src="/public/uploads/'+
																				item.profile+
																					'profilepic">'+
																'</div>'+
															'<div style="padding-left: 45px">'+
															'<div class="author_name">'+
																	'<h4>'+
																			item.author_name.substring(0,20)+
																	'</h4>'+
																	'</div>'+
																			'<div class="clgname">'+
																					'<p>'+
																							(item.magz_title?item.magz_title:'Other')+
																					'</p>'+
																			'</div>'+
																	'</div>'+
														 '</div>'+
														 '<div style="width:25%; overflow:hidden; float:right;margin-top:15px;text-align:center;">'+
														 			'<a href="#" ><span style="margin-right:5px;color:#3d3d3d">'+
																						formatLikeCount(parseInt(item.like_count))+
																						'</span><div onClick="like(\''+
																			item.link+
																				'\', this); return false;" class="'+(parseInt(item.is_like)?'heart-liked':'heart')+'" alt="Like"/></div></a></div><div style="clear: both">'+
																					'</div>'+
																				'</div>'+
																			'</div>'+
																		'</a>'+
																'</div>'+
														'</div>';

			var $items = $(html);
			grid_table.append($items).masonry('appended', $items);
		}
		else if(item.type == "2"){  //event


			var html = '<div class="grid-item">'+
										'<div class="card menu-category" style="background: white;">'+
												'<a href="/'+
													item.link+
													'/">'+
													'<div class="coverpic" style=\'background:linear-gradient(transparent, #00000059, #000),url("/public/uploads/'+
													item.cover+
												'stryimg");background-size: cover;\'>'+
														'<p class="tile-category"><span>'+
														item.category+
														'</span></p>'+
														'<div class="inner1" style="padding-top:25px">'+
																'<div class="story_title">'+
																		'<h2>'+
																				(item.title?item.title:'')+
																		'</h2>'+
																'</div>'+
																// '<div class="description">'+
																// 	'<p>'+
																// 				(item.descr?item.descr.substring(0,100):'')+
																// 	'</p>'+
																// '</div>'+

																'<div class="events-details">'+
																	'<div>'+
																		'<div class="loc" style="float:left">'+
																			'<p><i class="fa fa-map-marker" style="padding-right:10px;"></i>'+
																			(item.loc?item.loc:'')+
																			'</p>'+
																		'</div>'+
																		'<div class="loc" style="float:right">'+
																			'<p><i class="fa fa-clock-o" style="padding-right:10px;"></i>'+
																			(item.date?getStumagzEventDate(item.date):'')+
																			'</p>'+
																		'</div>'+
																	'</div>'+
																	'<div style="clear: both"></div>'+
																'</div>'+
														'</div>'+
													'</div>'+
													'<div class="outer">'+
														
														'<div class="inner2">'+
															'<div style="width:73%; overflow:hidden; float:left;">'+
																'<div style="float:left">'+
																		'<img class="image-details" src="/public/uploads/'+
																				item.profile+
																					'profilepic">'+
																'</div>'+
															'<div style="padding-left: 45px">'+
															'<div class="author_name">'+
																	'<h4>'+
																			item.author_name.substring(0,20)+
																	'</h4>'+
																	'</div>'+
																			'<div class="clgname">'+
																					'<p>'+
																							(item.magz_title?item.magz_title:'Other')+
																					'</p>'+
																			'</div>'+
																	'</div>'+
														 '</div>'+
														 '<div style="width:25%; overflow:hidden; float:right;margin-top:15px;text-align:center;">'+
														 			'<a href="#" ><span style="margin-right:5px;color:#3d3d3d">'+
																						formatLikeCount(parseInt(item.like_count))+
																						'</span><div onClick="like(\''+
																			item.link+
																				'\', this); return false;" class="'+(parseInt(item.is_like)?'heart-liked':'heart')+'" alt="Like"/></div></a></div><div style="clear: both">'+
																					'</div>'+
																				'</div>'+
																			'</div>'+
																		'</a>'+
																'</div>'+
														'</div>';

			var $items = $(html);
			grid_table.append($items).masonry('appended', $items);
		}
		else if(item.type == "3"){  //magazine

			var html = '<div class="grid-item"><div class="card menu-category" style="background: white;"><a href="/'+
							item.link+
						'/"><div class="coverpic" style="background-image: url(/public/uploads/'+
							item.cover+
						'coverpic)"></div><div class="outer"><div><img class="interior1" src="/public/uploads/'+
							item.profile+
						'profilepic" style="border-radius:6px;border:2px solid #fff;background-color:#fff"></div><div class="interior2"><div><div class="collegenme" style="color: rgba(0,0,0,0.75); font-weight: bold;"><h3>'+
							item.title+
						'</h3></div><div class="place" style="text-align:center"><p style="text-align:center">'+
							(item.city?item.city:'NA')+
						'</p></div></div><div class="interior3"><a href="/'+
							item.link+
						'/">View Magazine</a></div><div style="clear: both"></div></div></a></div></div>';
			var $items = $(html);
			grid_table.append($items).masonry('appended', $items);
		}
		else if(item.type == "4"){  //user
			var html = '<div class="grid-item"><div class="card menu-category" style="background: white;"><a href="/'+
							item.link+
						'/"><div class="coverpic" style="background-image: url(/public/uploads/'+
							item.cover+
						'coverpic)"></div><div class="outer"><div><img class="innera" style="border-radius:50%;border:2px solid #fff;margin-top:-41px;"src="/public/uploads/'+
							item.profile+
						'profilepic"></div><div class="innerb"><div><div class="usrname"><h4>'+
							item.title+
						'</h4></div><div style="text-align:center"><div class="collegename" style="display:none;"><h4>'+
						(item.magz_title?item.magz_title:'Other')+
						'</h4></div><div class="place"><p style="text-align:center">'+
							(item.city?item.city:'')+
						'</p></div></div></div><div class="innerc"><div><a href="/'+
							item.link+
						'/">View Profile</a></div></div><div style="clear: both"></div></div></div></a></div></div>';
			var $items = $(html);
			grid_table.append($items).masonry('appended', $items);
		}
    	//code to prepare tile content and append it to table;
    	else if(item.type == "5"){  //project
			var html = '<div class="grid-item">'+
										'<div class="card menu-category" style="background: white;">'+
												'<a href="/'+
													item.link+
													'/">'+
													'<div class="coverpic" style=\'background:linear-gradient(transparent, #00000059, #000),url("/public/uploads/'+
													item.cover+
												'stryimg");background-size: cover;\'>'+
														'<p class="tile-category"><span>'+
														item.category+
														'</span></p>'+
														'<div class="inner1" style="padding-top:45px">'+
																'<div class="story_title">'+
																		'<h2>'+
																				(item.title?item.title:'')+
																		'</h2>'+
																'</div>'+
																// '<div class="description">'+
																// 	'<p>'+
																// 				(item.descr?item.descr.substring(0,100):'')+
																// 	'</p>'+
																// '</div>'+
														'</div>'+
														'</div>'+
													'<div class="outer">'+
														
														'<div class="inner2">'+
															'<div style="width:73%; overflow:hidden; float:left;">'+
																'<div style="float:left">'+
																		'<img class="image-details" src="/public/uploads/'+
																				item.profile+
																					'profilepic">'+
																'</div>'+
															'<div style="padding-left: 45px">'+
															'<div class="author_name">'+
																	'<h4>'+
																			item.author_name.substring(0,20)+
																	'</h4>'+
																	'</div>'+
																			'<div class="clgname">'+
																					'<p>'+
																							(item.magz_title?item.magz_title:'Other')+
																					'</p>'+
																			'</div>'+
																	'</div>'+
														 '</div>'+
														 '<div style="width:25%; overflow:hidden; float:right;margin-top:15px;text-align:center;">'+
														 			'<a href="#" ><span style="margin-right:5px;color:#3d3d3d">'+
																						formatLikeCount(parseInt(item.like_count))+
																						'</span><div onClick="like(\''+
																			item.link+
																				'\', this); return false;" class="'+(parseInt(item.is_like)?'heart-liked':'heart')+'" alt="Like"/></div></a></div><div style="clear: both">'+
																					'</div>'+
																				'</div>'+
																			'</div>'+
																		'</a>'+
																'</div>'+
														'</div>';

					var $items = $(html);
					grid_table.append($items).masonry('appended', $items);
				} 
    	//code to prepare tile content and append it to table;
    	else if(item.type == "9"){  //draft
			var html = '<div class="grid-item"><div class="card menu-category" style="background: white;"><a href="/edit/'+
							item.link+
						'/"><div class="coverpic" style="background-image: url(/public/uploads/'+
							item.cover+
						'stryimg)"><p class="tile-category"><span>'+
							item.category+
						'</span></p></div><div class="outer"><div class="inner1"><div class="story_title"><h2>'+
							(item.title?item.title:'')+
						'</h2></div><div class="description"><p>'+
							(item.descr?item.descr.substring(0,100):'')+
						'</p></div></div><div style="clear: both"></div></div></div></a></div></div>';

			var $items = $(html);
			grid_table.append($items).masonry('appended', $items);
		}
    	//code to prepare tile content and append it to table;
    	else if(item.type == "disc"){  //draft
    		var html = '<div class="grid-item"><a href="/discussions/'+
					item.disc_id+
				'"><div class="card menu-category" style="background: white;padding:5px;"><div class="inner2" style="border:0px;"><div><div style="float:left"><img class="image-details" src="/public/uploads/'+
							item.auth_profile+
						'profilepic"></div><div style="padding-left: 50px;padding-top:3px"><div class="author_name" style="text-align:left"><h4>'+
							item.auth_fname+
						'</h4></div><div class="clgname"><p> Ongoing - '+
						    getStumagzEventDate(item.disc_time)+
						'</p></div></div></div></div><div class="outer"><div class="inner1"><div class="description"><p style="color:rgba(0,0,0,0.80);font-weight:bold;">'+
							item.disc_txt.substring(0,60)+
						'</p></div><div class="coverpic" style="background-image: url(/public/uploads/'+
							item.disc_img+
						'discimg); '+
							(item.has_image == 1?'':'display:none')+
						'"></div></div></div><div class="inner1" style="padding-top:5px;display:none;"></div></div></a></div>';

			var $items = $(html);
			grid_table.append($items).masonry('appended', $items);
		}


	});
}

function prprParticipantList(pData, pData_count){

	var html = "";
	for(var item=0; item<pData.length; item++)
	{
		html = html +'<img style="height: 20px;width:20px;border-radius: 50%;margin: 4px; float: left;" src="/public/uploads/'+pData[item].profile+'profilepic" alt="'+pData[item].title+'" title="'+pData[item].title+'"/>';
		//$(".participants").append($(html));
	}
	if(pData_count == 0)
		html = html + ("<p style='padding-top:4px;'> Be the first one to participate in the discussion </p>");
	else if(pData_count == 1)
		html = html + ("<p style='padding-top:4px;padding-left:5px'> is participating </p>");
	else{
		if(pData_count > 3)
			html = html + ("<p style='padding-top:4px;'> and "+(pData_count - 3)+" others are participating </p>");
		else html = html + ("<p style='padding-top:4px;padding-left:5px;'> are participating </p>");
	}

	return html;
}



function formatLikeCount(count)
{
    if(count < 0)
	     return 0;
	 if(count < 1000)
		return count;
	 if(count < 10000)
        	return (count/1000).toFixed(2)+"k";
	 if(count < 100000)
        	return (count/1000).toFixed(1)+"k";
    return (count/1000).toFixed(0)+"k";
}

function getStumagzDate(UNIX_timestamp)
{
    /*var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    var date = new Date(d);
    var day = date.getDate();
    var monthIndex = date.getMonth();
    return monthNames[monthIndex] +' ' + day;*/
	console.log("preparing time");
	var a = new Date(UNIX_timestamp * 1000);
	  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	  var year = a.getFullYear();
	  var month = months[a.getMonth()];
	  var date = a.getDate();
	  var hour = a.getHours();
	  var min = a.getMinutes();
	  var sec = a.getSeconds();
	  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
	  return time;
}

function getStumagzEventDate(d)
{
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    var date = new Date(d);
    var day = date.getDate();
    var monthIndex = date.getMonth();
    return monthNames[monthIndex] +' ' + day;
}

function parseTickets(jsonArray, grid_table)
{
	//code to prepare tile content and append it to table;
	$(jsonArray).each( function(i, item) {
			var coupon_code_html = '';
			var coupon_value_html = '';
			if('coupon_code' in item && item.coupon_code != null) {
				coupon_code_html = '<span class="grey-text">Promo Code: </span>'+item.coupon_code+'</br>';
				coupon_value_html = '<span class="grey-text">Discount / Cashback: </span>'+item.coupon_value+'</br>';
			}
			var html = '<div class="grid-item" style="width:100%">'+
							'<div class="ticket-list-item">'+
								'<div class="ticket-list-item-head row">'+
									'<div class="col-xs-12 col-sm-6" style="text-align:left">'+
										'<a href="/'+item.event_link+'/" class="ticket-list-item-event-link">'+item.event_title+'</a>'+
									'</div>'+
									'<div class="hidden-xs col-sm-6" style="text-align:right">'+
										(item.order_status=="CONFIRM"?
												'<a href="/bookings/'+item.order_id+'/" class="ticket-list-item-download-btn" >Print / View</a>'
										: 'Failed / Canceled')+
									'</div>'+
								'</div>'+
								'<div class="ticket-list-item-content">'+
								/*'<span class="grey-text">Venue: </span>'+item.event_location+'</br>'+*/
								'<span class="grey-text">Reg No : </span>#00'+item.order_id+'</br>'+
									'<span class="grey-text">City: </span>'+item.event_city+'</br>'+
									'<span class="grey-text">Date: </span>'+item.event_sdate+'</br>'+
									coupon_code_html+coupon_value_html+
										'<div class="row">'+
											'<div class="col-xs-6" style="text-align:left"><span class="grey-text">Quantity: </span>'+item.order_quantity+'</div>'+
											'<div class="col-xs-6" style="text-align:right"><span class="grey-text">Price: </span>'+item.order_amount+'</div>'+
										'</div>'+
								'</div>'+
								'<div class="ticket-list-item-footer row">'+
									'<div class="col-xs-6 col-sm-12" style="text-align:left">'+
										'<span class="hidden-xs grey-text">Purchased on: </span>'+item.purchased_date+
									'</div>'+
									'<div class="visible-xs col-xs-6" style="text-align:right">'+
										(item.order_status=="CONFIRM"?
											'<a href="/bookings/'+item.order_id+'/" class="ticket-list-item-download-btn" >Print / View</a>'
										: 'Failed / Canceled')+
									'</div>'+
							    '</div>'+
							'</div>'+
						'</div>';

			var $items = $(html);
			grid_table.append($items).masonry('appended', $items);
		});
}

function parseUserList(jsonArray,grid_table){

	$(jsonArray).each( function(i, item) {
		var html = ` <div class="grid-item"><div style="margin:10px"><div class="single-team">
                        <div class="team-thumb">
                            <img src="`+item.profile_image+`" alt="image">
                        </div>
                        <h4>`+item.full_name+`</h4>
                        <span>`+item.aoi1+`</span>
                        <span>`+item.aoi2+`</span>
                        <span>`+item.aoi3+`</span>
                    </div></div></div>`;
        
        var $items = $(html);
		grid_table.append($items).masonry('appended', $items);            
	});
}

function parseClgList(jsonArray,grid_table){

	$(jsonArray).each( function(i, item) {
		var html = ` <div class="grid-item"><div style="margin:10px"><div class="single-team">
                        <div class="team-thumb" style="border-radius:inherit">
                            <img src="`+item.logo_image+`" alt="image">
                        </div>
                        <h4>`+item.name+`</h4>
                    </div></div></div>`;
        
        var $items = $(html);
		grid_table.append($items).masonry('appended', $items);            
	});
}



function parseApprovedMenteeTile(jsonArray,grid_table){

	$(jsonArray).each( function(i, item) {
		var html = ` <div class="grid-item"><div style="margin:10px"><div class="single-team">
                        <div class="team-thumb">
                            <img src="`+item.profile_image+`" alt="image">
                        </div>
                        <h4>`+item.full_name+`</h4>
                        <span>`+item.aoi1+`</span>
                        <span>`+item.aoi2+`</span>
                        <span>`+item.aoi3+`</span>
                        <button class="btn btn-danger" onclick="removeMentee(this,'`+item.user_id+`')" >Remove</button>
                    </div></div></div>`;
        
        var $items = $(html);
		grid_table.append($items).masonry('appended', $items);            
	});
}





function linkify(news_text)
{
	var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
	var text1=news_text.replace(exp, "<a target='_blank' href='$1'>$1</a>");
	var exp2 =/(^|[^\/])(www\.[\S]+(\b|$))/gim;
	return text1.replace(exp2, "$1<a target='_blank' href='http://$2' style='color:blue;'>$2</a>");

}

function getStumagzNewsDate(UNIX_timestamp)
{
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    var date = new Date(UNIX_timestamp*1000);
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
	var hour = date.getHours();
	var min = date.getMinutes();
    return day+' '+monthNames[monthIndex]+' '+year+'  '+(hour%12)+':'+(min < 10 ? '0'+min : min )+' '+(hour>11?'PM':'AM');
}




function parseDisc(jsonArray,grid_table){

	$(jsonArray).each( function(i, item) {

	var html = '<div class="grid-item"><a href="/discussions/'+
					item.disc_id+
				'"><div class="card menu-category" style="background: white;padding:5px;"><div class="inner2" style="border:0px;"><div><div style="float:left"><img class="image-details" src="'+
							item.profile_image+
						'"></div><div style="padding-left: 50px;padding-top:3px"><div class="author_name" style="text-align:left"><h4>'+
							item.full_name+
						'</h4></div><div class="clgname"><p> Ongoing - '+
						    getStumagzEventDate(item.disc_time)+
						'</p></div></div></div></div><div class="outer" style="border:none"><div class="inner1"><div class="description"><p style="color:rgba(0,0,0,0.80);font-weight:bold;">'+
							item.disc_txt.substring(0,60)+
						'</p></div><div class="coverpic" style="background-image: url(/public/uploads/'+
							item.disc_img+
						'discimg); '+
							(item.has_image == 1?'':'display:none')+
						'"></div></div></div><div class="inner1" style="padding-top:5px;display:none;"></div></div></a></div>';

			var $items = $(html);
			grid_table.append($items).masonry('appended', $items);
	});		
}


function parsePolls(jsonArray, grid_table) {

	console.log("test");

	$(jsonArray).each(function(i, item) {
		
		var selected = item.selected;
		var options = "";

		item.options.forEach(function(item2){

			options += `<li class="list-group-item" style="cursor:pointer" onclick="sendPoll(`+item2.option_id+`,this,`+item2.vote_count+`,'`+item2.option+`')">`+item2.option+` <span class="badge" `+((selected == item2.option_id)?"style='background-color:#cb202d'":"")+`>`+item2.vote_count+`</span></li>`;
		});

		var html = `<div class="grid-item"><br><div class="card menu-category" style="background: white;"><div class="outer" style="padding:10px"><img class="delupd" onclick="deletePoll('`+item.poll_id+`',this)"src="/public/img/dustbin.svg" style="cursor:pointer;width:16px;margin-right:10px;float:right"><div class="inner1">
			<div class="story_title"><h5 style="color:#797979;font-weight:300">`+item.question+`</h5></div>
			<div class="description"><ul class="list-group">`+options+`</ul>
			</p></div></div></div>`;	
		
		var $items = $(html);		
		grid_table.append($items).masonry('appended', $items);
	});
}