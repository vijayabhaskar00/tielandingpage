


// Get the modal
var modal = document.getElementById('login_popup');

// Get the button that opens the modal
var btn = document.getElementById("login_btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("login_close")[0];

if(localStorage.getItem("open_login_popup")==1)
{
  modal.style.display = "block";
  localStorage.setItem("open_login_popup", 0);
}

function error_message(msg)
{
	$('.error_message_container').empty();
	$('.error_message_container').append("* "+msg);
	$('.error_message_container').css("color","red");
}

function error_clear()
{
	$('.error_message_container').empty();
}

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
    console.log("entered");
    $('#first_text_field').focus();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
   modal.style.display = "none";
   $('.otp_verification').hide();
   $('.confirm_login').hide();
   $('.signup_user_info').hide();
   $('.forgot_password').hide();
   $('.new_password_setup').hide();
   $('.success_reset').hide();
   $('.otp_details').empty();
   $('.welcome_login').hide();
   error_clear();
   $('#first_text_field').val("");
   $('.confirm_login').show();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var selected_way;


$('.signup_link_btn').click(function(){
  $('.confirm_login').hide();
  $('.welcome_login').show();
});


$('#login_change_btn').click(function(){
  $('.confirm_login').show();
  $('.welcome_login').hide();
});

$('#next_btn').click(function(event){

	event.preventDefault();
	var inputField= $('#first_text_field').val();
  var email_regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var mobile_regex = /^[0]?[789]\d{9}$/;
  var email_verify = new Object();
  var mobile_verify = new Object();

  if (email_regex.test(inputField) == true && inputField.length !== 0) 
  {   
      // send ajax call for email
     email_verify.email = inputField;
     email_verify.src = "signup";
     selected_way = email_verify.email;
     $('#next_btn').prop("disabled", true);
     $('.stu_loader').fadeIn();

     $.ajax({
     type: "POST",
     url: "/api/register",
     dataType: 'json',
     data: email_verify,
     success: function(msg)
     {
        $('#next_btn').prop("disabled", false);
        $('.stu_loader').fadeOut();
        //do register with email
     		if(msg.result == 1)               
        {

      		error_clear(); 
          $('.welcome_login').hide();
          $('.otp_verification').show();
          $('#confirm_email_signup').val(email_verify.email);
          register_user();
        }
        else if(msg.result == 0 && msg.error_code == 100)
        {
           error_clear();
           error_message(msg.error_message);
        }

        else
        {
        	   error_message("Invalid Email!!")
        } 

      },
      error: function()
      {
          $('#next_btn').prop("disabled", false);
          $('.stu_loader').fadeOut();
          
          swal({
            title: "something went wrong, please try again",
            type: "error",
            confirmButtonText: "OK"          
         });
      }

	 });

  }

     //Mobile input field Validation

  else if (mobile_regex.test(inputField) == true && inputField.length !== 0) 
  {
     $('#next_btn').prop("disabled", true);
     $('.stu_loader').fadeIn();
  	// send ajax call for mobile
     mobile_verify.mobile = inputField;
     mobile_verify.src = "signup";
     selected_way = mobile_verify.mobile;

     $.ajax({
     type: "POST",
     url: "/api/register",
     dataType: 'json',
     data: mobile_verify,
     success: function(msg)
     {
        $('#next_btn').prop("disabled", false);
        $('.stu_loader').fadeOut();        
   		  if(msg.result == 1)               
        {
        		error_clear();
            //do register with email 
            $('.welcome_login').hide();
            $('.otp_verification').show();
            $('#confirm_email_signup').val(mobile_verify.mobile);
            register_user();
        }
        else
        {
        	error_message(msg.error_message);

        } 

      },
      error: function()
      {
        $('#next_btn').prop("disabled", false);
        $('.stu_loader').fadeOut();   
          swal({
          title: "something went wrong, please try again",
          type: "error",
          confirmButtonText: "OK"          
           });
      }
    });
  }

  else
  {
  	// error handling
  	error_message("Invalid Input!!")
  }
});
        
var otp = new Object();
        
function register_user()
{

	otp.src = "otpverify";	
	
	//confirm_password
}

//otp_verify_btn

$('#otp_verify_btn').click(function(event)
{
	event.preventDefault();	
	otp.otp = $('#otp_verfiy').val();
	send_otp();
});


function send_otp()
{
   $('#otp_verify_btn').prop("disabled", true);
   $('.stu_loader').fadeIn();
	$.ajax({
   type: "POST",
   url: "/api/register",
   dataType: 'json',
   data: otp,
   success: function(msg)
   {        

      $('#otp_verify_btn').prop("disabled", false);
      $('.stu_loader').fadeOut();

   		if(msg.result == 1)               
        {
        	error_clear();
        	$('.otp_verification').hide();
         	$('.signup_user_info').show();  
        }

        else
        {
        	error_message("Invalid OTP !!")
        	//error handling !!
        } 

    },

    error: function()
    {
        $('#otp_verify_btn').prop("disabled", false);
        $('.stu_loader').fadeOut(); 

        swal({
        title: "something went wrong, please try again",
        type: "error",
        confirmButtonText: "OK"          
        });
    }

 	});
}

var user_info = new Object();

$('#signup_btn').click(function(){

	event.preventDefault();	
	user_info.fname = $('#fname').val();
	user_info.pwd = $('#new_password').val();
	user_info.stu_id = "";
	user_info.src = "newpwd";
	user_info.magz_code = "";
	complete_signup();
});

function complete_signup()
{
  $('#signup_btn').prop("disabled", true);
  $('.stu_loader').fadeIn(); 

	$.ajax({
   type: "POST",
   url: "/api/register",
   dataType: 'json',
   data: user_info,
   success: function(msg)
   {
   
    $('#signup_btn').prop("disabled", false);
    $('.stu_loader').fadeOut();         

 		if(msg.result == 1)               
      {
      	error_clear();
      	location.reload();
      }

      else
      {
      	error_message("Invalid Input !!")
      	//error handling !!
      } 
    },
    
    error: function()
    {
       $('#signup_btn').prop("disabled", false);
       $('.stu_loader').fadeOut();

       swal({
        title: "something went wrong, please try again",
        type: "error",
        confirmButtonText: "OK"          
        });
    }

 });
}



/// ------------------ login start -------------------------


var login_obj = new Object();

function login_user(src,value)
{
	
	if(src == "user_name")
	{
		login_obj.user_name = value;
	}
	else
	{
	  	login_obj.mobile = value;
	}	

}

$('#confirm_login_btn').click(function(event)
{
  event.preventDefault();
  login_obj.user_name = $('#confirm_email').val();
	login_obj.password = $('#confirm_login_password').val();
	send_login();
});

function send_login()
{
  $('#confirm_login_btn').prop("disabled", true);
  $('.stu_loader').fadeIn();

	$.ajax({
   type: "POST",
   url: "/api/login",
   dataType: 'json',
   data: login_obj,
   success: function(msg)
   {        
      $('#confirm_login_btn').prop("disabled", false);
      $('.stu_loader').fadeOut();
   		if(msg.result == 1)               
      {
         error_clear();
         location.reload();
      }

      else
      {

      	error_message("Invalid Credentials !!")
      	//error handling !!
      } 
    },
    error: function()
    {
        $('#confirm_login_btn').prop("disabled", false);
        $('.stu_loader').fadeOut(); 
        swal({
        title: "something went wrong, please try again",
        type: "error",
        confirmButtonText: "OK"          
         });
    }
 	});
}

/// --------------------------  login_end  -----------------------------------------------



/// ----------------------------Forgot Password ------------------------------------------


$('.forgot_password_link').click(function(event){
  $('.confirm_login').hide();
  $('.forgot_password').show();
})


$('#to_get_otp').click(function(event)
{
	var forgotEmailObj =new Object();
	forgotEmailObj.mobile_email = $('#forget_email_id').val();

  
	$('.stu_loader').fadeIn();
  $.ajax({
       type: "POST",
       url: "/api/resetpassword",
       dataType: 'json',
       data: forgotEmailObj,
       success: function(msg)
       {        
          $('.stu_loader').fadeOut();
       		if(msg.result == 1)               
            {
               error_clear();
               event.preventDefault();
               $('.otp_details').empty();
			         $('.otp_details').append("Your OTP was successfully sent to  \" "+forgotEmailObj.mobile_email+" \" ");
			         $('.forgot_password').hide();
			         $('.forgot_password_enter_otp').show();
            }

            else
            {

            	error_message("Invalid Credentials !!")
            	//error handling !!
            } 

        },
    
        error: function()
        { 
            $('.stu_loader').fadeOut();
            swal({
            title: "something went wrong, please try again",
            type: "error",
            confirmButtonText: "OK"          
      });
        }

 	 });

});


$('#otp_reset_verify_btn').click(function(event){
	event.preventDefault();
	var verifyPwdObj =new Object();
	verifyPwdObj.otp = $("#otp_reset_verfiy").val();
  $('.stu_loader').fadeIn();

	$.ajax({
       type: "POST",
       url: "/api/resetpassword",
       dataType: 'json',
       data: verifyPwdObj,
       success: function(msg)
       {        
        $('.stu_loader').fadeOut();
     		if(msg.result == 1)               
          {

            error_clear();
          	$('.forgot_password_enter_otp').hide();
          	$('.new_password_setup').show();

          }

          else
          {
          
          	error_message("Invalid Credentials !!")
          	//error handling !!
          } 

        },
        error: function()
        { 
            $('.stu_loader').fadeOut();
            swal({
            title: "something went wrong, please try again",
            type: "error",
            confirmButtonText: "OK"          
            });
        }
 	 });
});
  
var newPwdObj = new Object();

$('#reset_pwd_btn').click(function(event){

  event.preventDefault();
  newPwdObj.password = $('#new_pwd_setup').val();
  newPwdObj.password2 = $('#new_pwd_setup2').val();
  $('.stu_loader').fadeIn();

	$.ajax({
     type: "POST",
     url: "/api/resetpassword",
     dataType: 'json',
     data: newPwdObj,
     success: function(msg)
     {        
        $('.stu_loader').fadeOut();
     		if(msg.result == 1)               
        {
          error_clear();
          $('.new_password_setup').hide();
        	$('.success_reset').show();
        } 
        else
        {
        
        	error_message("Invalid Credentials !!")
        	//error handling !!
        } 

      },
      error: function()
      {
          $('.stu_loader').fadeOut(); 
          swal({
          title: "something went wrong, please try again",
          type: "error",
          confirmButtonText: "OK"          
          });
      }
 	 });
});



$('#re_login_btn').click(function()
{
    event.preventDefault();
    var open_popup = 1;
    localStorage.setItem("open_login_popup",1);
    window.location.reload();

});




