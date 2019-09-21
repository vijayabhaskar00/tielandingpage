
/*
 * place below line inside p tag of content to load quiz - bhone
 * <div id='lb-bhone'><script>$(document).ready(function(){prepareLeaderBoard(\"bhone\",\"Sample Quiz\");});<\/script>
 * 
 */


   

var options = new Array();


function load_leader_board(quiz_id, quiz_name)
{
  
  var quiz_data = new Object();

  quiz_data.board = 1;
  quiz_data.quiz_id = quiz_id;

  $.ajax({
       type: "POST",
       url: "/api/quiz",
       dataType: 'json',
       data: quiz_data,
       success: function(msg)
       {        
          if(msg.result ==1 && msg.message.length>0)
          {
            build_leader_board(quiz_id,msg.message, quiz_name);
          }
       },
    
        error: function()
        { 
          swal({
            title: "Something went wrong, please try again later",
            type: "error",
            confirmButtonText: "OK"          
      });
        }

   });

   build_quiz_qns(quiz_id,quiz_name);
   
}

// append to leader_board_container


function build_leader_board(quiz_id,data, quiz_name)
{


  var quiz_view_data = new Array();

  data.forEach(function(item) {

  	var count=0;

    if(quiz_view_data.length>0)
    {
      quiz_view_data.forEach(function(item2)
      { 

        if(item2.link == item.link)
        {

       	  count=count+1;

        }

      });

      if(count<=0)
      {
      	quiz_view_data.push(item);
      }
   
    }
    else
    {
      console.log("pushed "+item.link+" to quiz_view_data");
      quiz_view_data.push(item);
    }

    

  });


  var leader_board_structure = 
  '<section class="leader_board_container">'+

               '<div class="table-responsive ">'+  
                  '<div class="panel panel-default quiz_panel">'+
                    '<div class="panel-heading">LEADER BOARD - '+quiz_name+'</div>'+
                      '<div class="panel-body">'+  
                        '<table class="table table-striped leader_board_table">'+
    
                        ' </table>'+
                        '</div>'+
                      '</div>'+
                  '</div>'+

              '</section>';

	      
      $('#lb-'+quiz_id).prepend(leader_board_structure);        

      var lead_board_header_view = '<thead>'+
      '<tr>'+
        '<th style="text-align:left;padding-left:30px;">Name</th>'+
        '<th>Score</th>'+
        '<th >Duration</th>'+
      '</tr>'+
      '</thead>';
   

  
  $('.leader_board_table').append(lead_board_header_view); 
  $('.leader_board_table').append('<tbody>'); 
  quiz_view_data.forEach(function(item)
  {
      var quiz_table_row = '<tr>'+
        '<td style="text-align:left;padding-left:30px;"><a href="/'+item.link+'" style="text-decoration:none;color:rgba(0,0,0,0.75);"><img class="qz_lb_img"src="//cdn.stumagz.com/images/'+item.img+'profilepic">'+'&nbsp&nbsp&nbsp'+item.name+'</a></td>'+
        '<td>'+item.score+'</td>'+
        '<td>'+(Math.floor((item.duration)/60) +':'+(Math.floor(item.duration)%60))+'</td>'+
      '</tr>';
      $('.leader_board_table').append(quiz_table_row);
  });


  
  $('.leader_board_table').append('</tbody>');



}

function build_quiz_qns(quiz_id,quiz_name)
{

  var quiz_data = new Object();

  quiz_data.quiz_id = quiz_id;
  quiz_data.status = 1;	

  $.ajax({
       type: "POST",
       url: "/api/quiz",
       dataType: 'json',
       data: quiz_data,
       success: function(msg)
       {        
          if(msg.result ==1 && (msg.message == 0 || msg.message == 1))
          {

            if(msg.message == 0 )
            {
            	 var qns_structure = 

				    '<section class="quiz_container '+quiz_id+'_info">'+
				    '<div class="container" style="width:100%">'+
				        '<div class="row">'+
				                 '<div class="panel panel-default quiz_qns_panel">'+
				                        '<div class="panel-body" style="display:flex;padding:20px;">'+
				                        '<div style="margin:auto">'+
				                        	'<button class="btn btn-success quiz_theme_btn" style="margin-bottom:10px;border-radius:6px" onClick="$(this).hide();build_quiz_qns_view(\''+quiz_id+'\',\''+quiz_name+'\');">Participate Now</button>'+
				                        '</div>'+
				            '</div>'+
				        '</div>'+
				    '</div>'+
				  '</section>';

			$('#lb-'+quiz_id).append(qns_structure);  
            }
            else if(msg.message == 1 )
            {
             	
             	 var qns_structure = 

				  '<section class="quiz_container '+quiz_id+'_info">'+
				    '<div class="container" style="width:100%">'+
				        '<div class="row">'+
				                 '<div class="panel panel-default quiz_qns_panel">'+
				                        '<div class="panel-body" padding:30px;">'+
				                        '<div class="quiz_info_msg" style="text-align:center">'+
                                  '<p style="display:inline">You have only <strong>one</strong> attempt left and your score from previous attempt is :<strong>'+msg.scores[0].score+'</strong></p>'+
                               
                                '</div>'+
                                '<div style="display:flex">'+
                                '<div style="margin:auto">'+
                                  '<button class="btn btn-success quiz_theme_btn" style="margin-bottom:10px;border-radius:6px" onClick="$(this).hide();build_quiz_qns_view(\''+quiz_id+'\',\''+quiz_name+'\');">Try Again</button>'+
                                '</div>'+
                                '</div>'+
				            '</div>'+
				        '</div>'+
				    '</div>'+
				'</section>';
				
			$('#lb-'+quiz_id).append(qns_structure);  
            }

            }

            //two chances left and ready to play
           // build_quiz_qns_view(quiz_id);

          else if(msg.result ==1 && msg.message == 2)
          {
            // chances completed
             var qns_structure = 

				  '<section class="quiz_container '+quiz_id+'_info">'+
				    '<div class="container" style="width:100%">'+
				        '<div class="row">'+
				                 '<div class="panel panel-default quiz_qns_panel">'+
				                        '<div class="panel-body" style="display:flex;padding:20px;">'+
				                        '<div style="margin:auto">'+
                                  '<div class="quiz_info_msg">'+
                                  '<p>No more chances left to play this quiz and your scores from previous attempts are <strong>'+msg.scores[0].score+' </strong> and <strong>'+msg.scores[1].score+'</strong></p>'+
                                  '</div>'+
                                '</div>'+
				        '</div>'+
				    '</div>'+
				'</section>';
				
			$('#lb-'+quiz_id).append(qns_structure);  
            }

          
          else
          {
          	if(msg.error_code == 1)
          	{
          		// non logged in
          		 var qns_structure = 

				  '<section class="quiz_container '+quiz_id+'_info">'+
				    '<div class="container" style="width:100%">'+
				        '<div class="row">'+
				                 '<div class="panel panel-default quiz_qns_panel">'+
				                        '<div class="panel-body" style="padding:20px;">'+
				                       '<div class="quiz_info_msg" style="text-align:center">'+
                                  '<p style="display:inline;cursor:pointer" onClick="document.getElementById(\'login_btn\').click(); return false;">To start quiz, Please <span style="text-decoration: underline;">Login</span></p>'+
                                '</div>'+
				            '</div>'+
				        '</div>'+
				    '</div>'+
				'</section>';
				
			$('#lb-'+quiz_id).append(qns_structure);  
            }

          	}
          }
          //'<button class="btn btn-success quiz_theme_btn" style="margin-bottom:10px;border-radius:6px"onClick="document.getElementById(\'login_btn\').click(); return false;">Login</button>'+
                               
        ,
        error: function()
        { 
            swal({
            title: "Something went wrong, please try again later",
            type: "error",
            confirmButtonText: "OK"          
      });
        }

   });
}

function build_quiz_qns_view(quiz_id,quiz_name)
{
	
  var quiz_data = new Object();

  quiz_data.quiz_id = quiz_id;
  quiz_data.start = 1; 

  var quiz_qns_data = new Object();
  var user_answers = new Object();
  var qns_array = new Array();
  var qns_index = 0;

  $.ajax({
       type: "POST",
       url: "/api/quiz",
       dataType: 'json',
       data: quiz_data,
       success: function(msg)
       {        
          if(msg.result ==1)
          {
            quiz_qns_data = msg.message;
 

  var qns_structure = 

  '<section class="quiz_container">'+
    '<div class="container" style="width:100%">'+
        '<div class="row">'+
                 '<div class="panel panel-default quiz_qns_panel">'+
                    '<div class="panel-heading">Questions<p style="float: right;margin-right: 10px;color: white;font-family: SanFransisco-Medium;"><span class="'+quiz_id+'_span_qno">1</span>/6</p></div>'+
                        '<div class="panel-body">'+
                        '<div class="'+quiz_id+'_qns_placeholder">'+
                        '</div>'+
            '</div>'+
        '</div>'+
    '</div>'+
'</section>';


$('.'+quiz_id+'_info').remove();  
     
$('#lb-'+quiz_id).append(qns_structure);  

        options[quiz_id] = new Array();  
        options[quiz_id]['questions'] = new Array();
        options[quiz_id]['options'] = new Array(); 

quiz_qns_data.forEach(function(q,index){

        var opt = q.options.split(','); 
        //at the time of quiz loading
        options[quiz_id]['questions'].push(parseInt(q.id)); // q_id
        options[quiz_id]['options'].push('e'); // default answer is e - for unattempted

        if(index==0)
        {
          var qns_views = '<div class="qns_container '+quiz_id+index+'" >'+
                            '<p class="qns_text">'+q.question+'</p>'+
                            '<div class="q_options_container">'+
                                '<div class="quiz_opt">'+
                                    '<label class="radio-inline">'+
                                        '<input type="radio" name="options'+quiz_id+index+'" value="a" onClick="recordOptionInput(\''+quiz_id+'\','+q.id+',\'a\')">'+opt[0]+
                                     '</label>'+
                                '</div>'+
                                '<div class="quiz_opt">'+
                                    '<label class="radio-inline">'+
                                        '<input type="radio" name="options'+quiz_id+index+'" value="b" onClick="recordOptionInput(\''+quiz_id+'\','+q.id+',\'b\')">'+opt[1]+
                                     '</label>'+
                                '</div>'+
                                '<div class="quiz_opt">'+
                                    '<label class="radio-inline">'+
                                        '<input type="radio" name="options'+quiz_id+index+'" value="c" onClick="recordOptionInput(\''+quiz_id+'\','+q.id+',\'c\')" >'+opt[2]+
                                     '</label>'+
                                '</div>'+
                                '<div class="quiz_opt">'+
                                    '<label class="radio-inline">'+
                                    '<input type="radio" name="options'+quiz_id+index+'" value="d" onClick="recordOptionInput(\''+quiz_id+'\','+q.id+',\'d\')" >'+opt[3]+
                                     '</label>'+
                                '</div>'+
                            '</div>'+
                        '<button type="button" class="btn btn-success quiz_theme_btn quiz_theme_right_btn" onClick="change_qn(\''+quiz_id+index+'\',\''+quiz_id+(index+1)+'\',\''+quiz_id+'_span_qno\','+(index+1)+')">Next</button>'+
                        '</div>';

                     $('.'+quiz_id+'_qns_placeholder').append(qns_views);
        }
        else if(index==5)
        {
            var qns_views = '<div class="qns_container '+quiz_id+index+'" style="display:none">'+
                            '<p class="qns_text">'+q.question+'</p>'+
                            '<div class="q_options_container">'+
                                '<div class="quiz_opt">'+
                                    '<label class="radio-inline">'+
                                        '<input type="radio" name="options'+quiz_id+index+'" value="a" onClick="recordOptionInput(\''+quiz_id+'\','+q.id+',\'a\')">'+opt[0]+
                                     '</label>'+
                                '</div>'+
                                '<div class="quiz_opt">'+
                                    '<label class="radio-inline">'+
                                        '<input type="radio" name="options'+quiz_id+index+'" value="b" onClick="recordOptionInput(\''+quiz_id+'\','+q.id+',\'b\')" >'+opt[1]+
                                     '</label>'+
                                '</div>'+
                                '<div class="quiz_opt">'+
                                    '<label class="radio-inline">'+
                                        '<input type="radio" name="options'+quiz_id+index+'" value="c" onClick="recordOptionInput(\''+quiz_id+'\','+q.id+',\'c\')">'+opt[2]+
                                     '</label>'+
                                '</div>'+
                                '<div class="quiz_opt">'+
                                    '<label class="radio-inline">'+
                                    '<input type="radio" name="options'+quiz_id+index+'" value="d" onClick="recordOptionInput(\''+quiz_id+'\','+q.id+',\'d\')">'+opt[3]+
                                     '</label>'+
                                '</div>'+
                            '</div>'+
                        '<button type="button" class="btn btn-default" style="margin:10px;" onClick="change_qn(\''+quiz_id+index+'\',\''+quiz_id+(index-1)+'\',\''+quiz_id+'_span_qno\','+(index-1)+')">Prev</button>'+
                        '<button type="button" class="btn btn-success quiz_theme_btn quiz_theme_right_btn" onClick="finishQuizTemp(\''+quiz_id+'\',this,'+'\''+quiz_name+'\')">Finish</button>'+
                        '</div>';

                     $('.'+quiz_id+'_qns_placeholder').append(qns_views);
        }
        else
        {
             var qns_views = '<div class="qns_container '+quiz_id+index+'" style="display:none">'+
                            '<p class="qns_text">'+q.question+'</p>'+
                            '<div class="q_options_container">'+
                                '<div class="quiz_opt">'+
                                    '<label class="radio-inline">'+
                                        '<input type="radio" name="options'+quiz_id+index+'" value="a" onClick="recordOptionInput(\''+quiz_id+'\','+q.id+',\'a\')">'+opt[0]+
                                     '</label>'+
                                '</div>'+
                                '<div class="quiz_opt">'+
                                    '<label class="radio-inline">'+
                                        '<input type="radio" name="options'+quiz_id+index+'" value="b" onClick="recordOptionInput(\''+quiz_id+'\','+q.id+',\'b\')" >'+opt[1]+
                                     '</label>'+
                                '</div>'+
                                '<div class="quiz_opt">'+
                                    '<label class="radio-inline">'+
                                        '<input type="radio" name="options'+quiz_id+index+'" value="c" onClick="recordOptionInput(\''+quiz_id+'\','+q.id+',\'c\')">'+opt[2]+
                                     '</label>'+
                                '</div>'+
                                '<div class="quiz_opt">'+
                                    '<label class="radio-inline">'+
                                    '<input type="radio" name="options'+quiz_id+index+'" value="d" onClick="recordOptionInput(\''+quiz_id+'\','+q.id+',\'d\')">'+opt[3]+
                                     '</label>'+
                                '</div>'+
                            '</div>'+
                        '<button type="button" class="btn btn-default" style="margin:10px;" onClick="change_qn(\''+quiz_id+index+'\',\''+quiz_id+(index-1)+'\',\''+quiz_id+'_span_qno\','+(index-1)+')">Prev</button>'+
                        '<button type="button" class="btn btn-success quiz_theme_btn quiz_theme_right_btn" onClick="change_qn(\''+quiz_id+index+'\',\''+quiz_id+(index+1)+'\',\''+quiz_id+'_span_qno\','+(index+1)+')">Next</button>'+
                        '</div>';

                     $('.'+quiz_id+'_qns_placeholder').append(qns_views);
        }
    });
	
	$('.'+quiz_id+'_qns_placeholder').append(qns_array[qns_index]);

          }
       },
    
        error: function()
        { 
            swal({
            title: "Something went wrong, please try again later",
            type: "error",
            confirmButtonText: "OK"          
      });
        }

   });


}

function change_qn(tohide,toshow,qno_container,qno)
{
  $('.'+tohide).hide();
  $('.'+toshow).show();
  $('.'+qno_container).text(qno+1);
}

function finishQuizTemp(quiz_id,finish_btn,quiz_name)
{
  $(finish_btn).prop("disabled", true);
  finishQuiz(quiz_id,function(msg){

    if(msg.result==1){

    	$(finish_btn).prop("disabled", false);
        var qns_structure = 

          '<section class="quiz_container '+quiz_id+'_info">'+
            '<div class="container" style="width:100%">'+
                '<div class="row">'+
                         '<div class="panel panel-default quiz_qns_panel">'+
                                '<div class="panel-body" style="display:flex;padding:20px;">'+
                                '<div style="margin:auto">'+
                                  '<div class="quiz_info_msg">'+
                                  '<p>Your Score <strong>'+msg.message+'</strong></p>'+
                                  '</div>'+
                          '</div>'+
                '</div>'+
            '</div>'+
        '</section>';
      //$('.'+quiz_id+'_qns_placeholder').remove();
      //$('#lb-'+quiz_id).append(qns_structure); 
      $('#lb-'+quiz_id).empty();
      load_leader_board(quiz_id,quiz_name); 
    }
    else
    {
      $(finish_btn).prop("disabled", false);
      swal({
            title: "Something went wrong, please try again later",
            type: "error",
            confirmButtonText: "OK"          
      });
    }

  });
}

function recordOptionInput(quizId, questionId, choosenOption){
  options[quizId]['questions'].forEach(function(item, index){
    if(item === questionId)
      options[quizId]['options'][index] = choosenOption;
      console.log(options[quizId]['questions']);
      console.log(options[quizId]['options']);
  });
}

function finishQuiz(quizId, callback)
{
   var quiz_data = new Object();

    quiz_data.quiz_id = quizId;
    quiz_data.finish = 1; 

    quiz_data.questions = options[quizId]['questions'].toString();
    quiz_data.options = options[quizId]['options'].toString();
    
    $.ajax({
         type: "POST",
         url: "/api/quiz",
         dataType: 'json',
         data: quiz_data,
         success: function(msg)
         {        
              callback(msg);
         },
          error: function()
          { 
            var emsg = new Object();
            emsg.result = 0;
            emsg.error_code = 0;
            emsg.error_message = "something went wrong, please try again later";
              callback(emsg);
          }

     });
}

