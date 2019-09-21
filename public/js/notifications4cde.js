function load_notification($ntfs, el,el2)
{
  $.ajax({
    url:'/api/notifications',
    type:'POST',
    success:function(res){
      // Alert.render(res);

      var display_notifications=Math.random();
      var res = JSON.parse(res);
      
      if(res.result==1 && res.message.length > 0)
      {
          

          res.message.forEach(function(item){

            
            // New Connection Notification
            if(item.action =="conn_req"){

              var ntfsHTML =
                "<div class='ntfs-list-item' style='border-bottom:1px solid #f4f4f4;width:100%;background-color:white;margin:7px 0px;'>"+
                    "<div style='width:100%;padding-top:3px'>"+
                      "<div class='profile_img' style='width:20%;float:left;padding-top:4px;padding-left:4px;text-align:center;'>"+
                            "<a href='/"+item.sender_uname+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                                "<img src='/public/uploads/"+item.sender_image+"profilepic' height='30px' width='30px' style='border-radius: 50%;'/>"+
                            "</a>"+
                      "</div>"+
                      "<div style='width:80%;float:left;padding-top:2px; padding-bottom:6px; padding-right: 5px;'>"+
                          "<a href='/"+item.sender_uname+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                              "<span'>"+
                                    "<strong>"+
                                          item.sender_fname+
                                    "</strong>"+
                                    " started following you."+
                              "</span>"+
                          "</a>"+
                          "<div style='margin-top: 6px;margin-left: -5px; display:none;'>"+
                              "<a href='javascript:void(0)'><img class='ntfsNR' src='/public/img/accept.svg' style='width:25px;' onclick='acceptNtfs(\""+item.sender_uname+"\",\""+item.sender_fname+"\"); hideParent(this);'/></a>"+
                              "<a href='javascript:void(0)' style='margin-left: 4px;'><img class='ntfsNR' src='/public/img/reject.svg' style='width:25px;' onclick='rejectNtfs(\""+item.sender_uname+"\"); hideParent(this);'/></a>"+
                          "</div>"+
                     "</div>"+
                     "</div>"+
                       "<div style='clear:both;padding-bottom: 9px;'></div>"+
                     "</div>"+
                   "</div>" ;
              $(el).append(ntfsHTML);

            }


            // When user accepts the request "notification"
            else if(item.action=="connected"){
              var ntfsHTML =
                "<div class='ntfs-list-item' style='border-bottom:1px solid #f4f4f4;width:100%;background-color:white;margin:7px 0px;'>"+
                    "<div style='width:100%;padding-top:3px'>"+
                      "<div class='profile_img' style='width:20%;float:left;padding-top:4px;padding-left:4px;text-align:center;'>"+
                          "<a href='/"+item.sender_uname+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                                "<img src='/public/uploads/"+item.sender_image+"profilepic' height='30px' width='30px' style='border-radius: 50%;'/>"+
                          "</a>"+ 
                        "</div>"+
                        "<div style='width:80%;float:left;padding-top:2px; padding-bottom:6px; padding-right: 5px;'>"+
                          "<a href='/"+item.sender_uname+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                              "<span>"+
                                    "<strong>"+
                                    item.sender_fname+
                                    "</strong>"+
                                    " is added to your network"+
                              "</span>"+
                           "</a>"+
                          "</br>"+
                          "<div id ='date_info' style='padding-top:5px;color:grey;font-size:12px'>"+
                               time_ago(item.created_on)+

                          "</div>"+
                        "</div>"+
                    "</div>"+
                      "<div style='clear:both;padding-bottom: 9px;'></div>"+
                    "</div>"+
                  "</div>" ;
              $(el).append(ntfsHTML);

            }


            // When a new project is posted "notification"

            else if(item.action == "new_project"){

              var ntfsHTML =
                "<div class='ntfs-list-item' style='border-bottom:1px solid #f4f4f4;width:100%;background-color:white;margin:7px 0px;'>"+
                    "<div style='width:100%;padding-top:3px'>"+
                      "<div class='profile_img' style='width:20%;float:left;padding-top:4px;padding-left:4px;text-align:center;'>"+
                        "<a href='/"+item.sender_uname+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<img src='/public/uploads/"+item.sender_image+"profilepic' height='30px' width='30px' style='border-radius: 50%;'/>"+
                      "</a>"+
                        "</div>"+
                        "<div style='width:80%;float:left;padding-top:2px; padding-bottom:6px; padding-right: 5px;'>"+
                          "<a href='/"+item.post_title_id+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<span>"+
                                "<strong>"+item.sender_fname+
                                "</strong>"+
                                " started a new project \""+
                                "<strong>"+item.post_title+" </strong>\""+
                                // "\" in "+
                                // "<strong>"+
                                //   item.magz_name+
                                // "</strong>"+
                              "</span>"+
                            "</a>"+
                            "</br>"+
                            "<div id='date_info'style='padding-top:5px;color:grey;font-size:12px'>"+
                             time_ago(item.created_on)+
                            "</div>"+
                        "</div>"+
                      "</div>"+
                    "<div style='clear:both;padding-bottom: 9px;'></div>"+
                  "</div>" ;
              $(el).append(ntfsHTML);

            }


            else if(item.action == "new_oppor"){

              var ntfsHTML =
                "<div class='ntfs-list-item' style='border-bottom:1px solid #f4f4f4;width:100%;background-color:white;margin:7px 0px;'>"+
                    "<div style='width:100%;padding-top:3px'>"+
                      "<div class='profile_img' style='width:20%;float:left;padding-top:4px;padding-left:4px;text-align:center;'>"+
                        "<a href='/"+item.sender_uname+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<img src='/public/uploads/"+item.sender_image+"profilepic' height='30px' width='30px' style='border-radius: 50%;'/>"+
                      "</a>"+
                        "</div>"+
                        "<div style='width:80%;float:left;padding-top:2px; padding-bottom:6px; padding-right: 5px;'>"+
                          "<a href='/"+item.post_title_id+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<span>"+
                                "<strong>"+item.sender_fname+
                                "</strong>"+
                                " created an opportunity \"<strong>"+
                                item.post_title+
                                "\"</strong>"+
                                // "<strong>"+
                                //   item.magz_name+
                                // "</strong>"+
                              "</span>"+
                            "</a>"+
                            "</br>"+
                            "<div id='date_info'style='padding-top:5px;color:grey;font-size:12px'>"+
                             time_ago(item.created_on)+
                            "</div>"+
                        "</div>"+
                      "</div>"+
                    "<div style='clear:both;padding-bottom: 9px;'></div>"+
                  "</div>" ;
              $(el).append(ntfsHTML);

            }

            else if(item.action == "new_story"){

              var ntfsHTML =
                "<div class='ntfs-list-item' style='border-bottom:1px solid #f4f4f4;width:100%;background-color:white;margin:7px 0px;'>"+
                    "<div style='width:100%;padding-top:3px'>"+
                      "<div class='profile_img' style='width:20%;float:left;padding-top:4px;padding-left:4px;text-align:center;'>"+
                        "<a href='/"+item.sender_uname+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<img src='/public/uploads/"+item.sender_image+"profilepic' height='30px' width='30px' style='border-radius: 50%;'/>"+
                      "</a>"+
                        "</div>"+
                        "<div style='width:80%;float:left;padding-top:2px; padding-bottom:6px; padding-right: 5px;'>"+
                          "<a href='/"+item.post_title_id+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<span>"+
                                "<strong>"+
                           item.sender_fname+
                                "</strong>"+
                                " published \""+
                                item.post_title+
                                "\" in "+
                                "<strong>"+
                               item.magz_name+
                                "</strong>"+
                              "</span>"+
                            "</a>"+
                            "</br>"+
                            "<div id='date_info' style='padding-top:5px;color:grey;font-size:12px'>"+
                             time_ago(item.created_on)+
                            "</div>"+
                        "</div>"+
                      "</div>"+
                    "<div style='clear:both;padding-bottom: 9px;'></div>"+
                  "</div>" ;
              $(el).append(ntfsHTML);

            }

            else if(item.action == "new_event"){
              var ntfsHTML =
                "<div class='ntfs-list-item' style='border-bottom:1px solid #f4f4f4;width:100%;background-color:white;margin:7px 0px;'>"+
                    "<div style='width:100%;padding-top:3px'>"+
                      "<div class='profile_img' style='width:20%;float:left;padding-top:4px;padding-left:4px;text-align:center;'>"+
                        "<a href='/"+item.sender_uname+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<img src='/public/uploads/"+item.sender_image+"profilepic' height='30px' width='30px' style='border-radius: 50%;'/>"+
                      "</a>"+
                        "</div>"+
                        "<div style='width:80%;float:left;padding-top:2px; padding-bottom:6px; padding-right: 5px;'>"+
                          "<a href='/"+item.post_title_id+"'style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<span>"+
                                "<strong>"+
                                item.sender_fname+
                                "</strong>"+
                                " scheduled an event \"<strong>"+
                                item.post_title+
                                "\" </strong> in "+
                                "<strong>"+
                                item.magz_name+
                                "</strong>"+
                              "</span>"+
                            "</a>"+
                            "</br>"+
                            "<div id='date_info' style='padding-top:5px;color:grey;font-size:12px'>"+
                             time_ago(item.created_on)+
                            "</div>"+
                        "</div>"+
                      "</div>"+
                    "<div style='clear:both;padding-bottom: 9px;'></div>"+
                  "</div>" ;
              $(el).append(ntfsHTML);

            }

             else if(item.action =="new_disc"){

              var ntfsHTML =
                "<div class='ntfs-list-item' style='border-bottom:1px solid #f4f4f4;width:100%;background-color:white;margin:7px 0px;'>"+
                    "<div style='width:100%;padding-top:3px'>"+
                      "<div class='profile_img' style='width:20%;float:left;padding-top:4px;padding-left:4px;text-align:center;'>"+
                        "<a href='/"+item.sender_uname+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<img src='/public/uploads/"+item.sender_image+"profilepic' height='30px' width='30px' style='border-radius: 50%;'/>"+
                        "</a>"+
                        "</div>"+
                        "<div style='width:80%;float:left;padding-top:2px; padding-bottom:6px; padding-right: 5px;'>"+
                          "<a href='/discussions/"+item.post_title_id+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<span'>"+
                                "<strong>"+
                                item.sender_fname+
                                "</strong>"+
                              " started discussion on <strong>"+
                              item.post_title.substring(0,10)+"....</strong>"+
                              "</span>"+
                            "</a>"+
                            "</br>"+
                            "<div style='padding-top:5px;color:grey;font-size:12px'>"+
                             time_ago(item.created_on)+
                            "</div>"+
                        "</div>"+
                      "<div id='date_info' style='clear:both;padding-bottom: 9px;'></div>"+
                    "</div>"+
                  "</div>" ;
              $(el).append(ntfsHTML);
            }

             else if(item.action=="new_news"){
              var ntfsHTML =
                "<div class='ntfs-list-item' style='border-bottom:1px solid #f4f4f4;width:100%;background-color:white;margin:7px 0px;'>"+
                    "<div style='width:100%;padding-top:3px'>"+
                      "<div class='profile_img' style='width:20%;float:left;padding-top:4px;padding-left:4px;text-align:center;'>"+
                        "<a href='/"+item.sender_uname+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<img src='/public/uploads/"+item.sender_image+"profilepic' height='30px' width='30px' style='border-radius: 50%;'/>"+
                        "</a>"+
                        "</div>"+
                        "<div style='width:80%;float:left;padding-top:2px; padding-bottom:6px; padding-right: 5px;'>"+
                          "<a href='/"+item.magz_code+"/updates' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<span'>"+
                                "News from "+
                                "<strong>"+
                            item.sender_fname+
                                "</strong>"+
                                " on <strong>"+
                                (item.post_title.substring(0,10))+"....</strong>"+
                              "</span>"+
                            "</a>"+
                            "</br>"+
                            "<div id='date_info' style='padding-top:5px;color:grey;font-size:12px'>"+
                             time_ago(item.created_on)+
                            "</div>"+
                        "</div>"+
                      "<div style='clear:both;padding-bottom: 9px;'></div>"+
                    "</div>"+
                  "</div>" ;
              $(el).append(ntfsHTML);
            }


            else if(item.action == "like2post"){
              var ntfsHTML =
                "<div class='ntfs-list-item' style='border-bottom:1px solid #f4f4f4;width:100%;background-color:white;margin:7px 0px;'>"+
                    "<div style='width:100%;padding-top:3px'>"+
                      "<div class='profile_img' style='width:20%;float:left;padding-top:4px;padding-left:4px;text-align:center;'>"+
                        "<a href='/"+item.sender_uname+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<img src='/public/uploads/"+item.sender_image+"profilepic' height='30px' width='30px' style='border-radius: 50%;'/>"+
                      "</a>"+
                        "</div>"+
                        "<div style='width:80%;float:left;padding-top:2px; padding-bottom:6px; padding-right: 5px;'>"+
                          "<a href='/"+item.post_title_id+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<span>"+
                                "<strong>"+
                            item.sender_fname+
                                "</strong>"+
                                (item.action_count> 1 ?  " and " + (item.action_count - 1) + " others" : "") +
                                 " like your <strong>" +
                                  "\""+
                                item.post_title+
                                "\" </strong>"+
                              "</span>"+
                            "</a>"+
                            "</br>"+
                            "<div id='date_info' style='padding-top:5px;color:grey;font-size:12px'>"+
                             time_ago(item.created_on)+
                            "</div>"+
                        "</div>"+
                      "</div>"+
                    "<div style='clear:both;padding-bottom: 9px;'></div>"+
                  "</div>" ;
              $(el).append(ntfsHTML);
            }

            else if(item.action == "like2project"){
              var ntfsHTML =
                "<div class='ntfs-list-item' style='border-bottom:1px solid #f4f4f4;width:100%;background-color:white;margin:7px 0px;'>"+
                    "<div style='width:100%;padding-top:3px'>"+
                      "<div class='profile_img' style='width:20%;float:left;padding-top:4px;padding-left:4px;text-align:center;'>"+
                        "<a href='/"+item.sender_uname+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<img src='/public/uploads/"+item.sender_image+"profilepic' height='30px' width='30px' style='border-radius: 50%;'/>"+
                      "</a>"+
                        "</div>"+
                        "<div style='width:80%;float:left;padding-top:2px; padding-bottom:6px; padding-right: 5px;'>"+
                          "<a href='/"+item.post_title_id+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<span>"+
                                "<strong>"+
                            item.sender_fname+
                                "</strong>"+
                                (item.action_count> 1 ?  " and " + (item.action_count - 1) + " others" : "") +
                                 " like your project <strong>" +
                                  "\" "+
                                item.post_title+
                                "\"</strong>"+
                              "</span>"+
                            "</a>"+
                            "</br>"+
                            "<div id='date_info' style='padding-top:5px;color:grey;font-size:12px'>"+
                             time_ago(item.created_on)+
                            "</div>"+
                        "</div>"+
                      "</div>"+
                    "<div style='clear:both;padding-bottom: 9px;'></div>"+
                  "</div>" ;
              $(el).append(ntfsHTML);
            }
            else if(item.action == "like2event"){
              var ntfsHTML =
                "<div class='ntfs-list-item' style='border-bottom:1px solid #f4f4f4;width:100%;background-color:white;margin:7px 0px;'>"+
                    "<div style='width:100%;padding-top:3px'>"+
                      "<div class='profile_img' style='width:20%;float:left;padding-top:4px;padding-left:4px;text-align:center;'>"+
                        "<a href='/"+item.sender_uname+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<img src='/public/uploads/"+item.sender_image+"profilepic' height='30px' width='30px' style='border-radius: 50%;'/>"+
                      "</a>"+
                        "</div>"+
                        "<div style='width:80%;float:left;padding-top:2px; padding-bottom:6px; padding-right: 5px;'>"+
                          "<a href='/"+item.post_title_id+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<span>"+
                                "<strong>"+
                            item.sender_fname+
                                "</strong>"+
                                (item.action_count> 1 ?  " and " + (item.action_count - 1) + " others" : "") +
                                 " like the event <strong>" +
                                  "\""+
                                item.post_title+
                                "\"</strong> "+
                              "</span>"+
                            "</a>"+
                            "</br>"+
                            "<div id='date_info' style='padding-top:5px;color:grey;font-size:12px'>"+
                             time_ago(item.created_on)+
                            "</div>"+
                        "</div>"+
                      "</div>"+
                    "<div style='clear:both;padding-bottom: 9px;'></div>"+
                  "</div>" ;
              $(el).append(ntfsHTML);
            }
            else if(item.action == "like2oppor"){
              var ntfsHTML =
                "<div class='ntfs-list-item' style='border-bottom:1px solid #f4f4f4;width:100%;background-color:white;margin:7px 0px;'>"+
                    "<div style='width:100%;padding-top:3px'>"+
                      "<div class='profile_img' style='width:20%;float:left;padding-top:4px;padding-left:4px;text-align:center;'>"+
                        "<a href='/"+item.sender_uname+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<img src='/public/uploads/"+item.sender_image+"profilepic' height='30px' width='30px' style='border-radius: 50%;'/>"+
                      "</a>"+
                        "</div>"+
                        "<div style='width:80%;float:left;padding-top:2px; padding-bottom:6px; padding-right: 5px;'>"+
                          "<a href='/"+item.post_title_id+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<span>"+
                                "<strong>"+
                            item.sender_fname+
                                "</strong>"+
                                (item.action_count> 1 ?  " and " + (item.action_count - 1) + " others" : "") +
                                 " interested your opportunity <strong>" +
                                  "\""+
                                item.post_title+
                                "\"</strong>"+
                              "</span>"+
                            "</a>"+
                            "</br>"+
                            "<div id='date_info' style='padding-top:5px;color:grey;font-size:12px'>"+
                             time_ago(item.created_on)+
                            "</div>"+
                        "</div>"+
                      "</div>"+
                    "<div style='clear:both;padding-bottom: 9px;'></div>"+
                  "</div>" ;
              $(el).append(ntfsHTML);
            }


            // Discussion notifications
            else if(item.action == "cmnt2post"){

              var ntfsHTML =
                "<div class='ntfs-list-item' style='border-bottom:1px solid #f4f4f4;width:100%;background-color:white;margin:7px 0px;'>"+
                    "<div style='width:100%;padding-top:3px'>"+
                      "<div class='profile_img' style='width:20%;float:left;padding-top:4px;padding-left:4px;text-align:center;'>"+
                        "<a href='/"+item.sender_uname+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<img src='/public/uploads/"+item.sender_image+"profilepic' height='30px' width='30px' style='border-radius: 50%;'/>"+
                        "</a>"+
                        "</div>"+
                        "<div style='width:80%;float:left;padding-top:2px; padding-bottom:6px; padding-right: 5px;'>"+
                          "<a href='/"+item.post_title_id+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<span'>"+
                                "<strong>"+
                            item.sender_fname+
                                "</strong>"+
                                " commented on <strong>"+
                                "\""+
                               item.post_title+
                               "\"</strong>"+
                              "</span>"+
                            "</a>"+
                            "</br>"+
                            "<div id='date_info' style='padding-top:5px;color:grey;font-size:12px'>"+
                             time_ago(item.created_on)+
                            "</div>"+
                        "</div>"+
                      "<div style='clear:both;padding-bottom: 9px;'></div>"+
                    "</div>"+
                  "</div>" ;

              $(el).append(ntfsHTML);
            }

            else if(item.action == "cmnt2event"){
              var ntfsHTML =
                "<div class='ntfs-list-item' style='border-bottom:1px solid #f4f4f4;width:100%;background-color:white;margin:7px 0px;'>"+
                    "<div style='width:100%;padding-top:3px'>"+
                      "<div class='profile_img' style='width:20%;float:left;padding-top:4px;padding-left:4px;text-align:center;'>"+
                        "<a href='/"+item.sender_uname+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<img src='/public/uploads/"+item.sender_image+"profilepic' height='30px' width='30px' style='border-radius: 50%;'/>"+
                        "</a>"+
                        "</div>"+
                        "<div style='width:80%;float:left;padding-top:2px; padding-bottom:6px; padding-right: 5px;'>"+
                          "<a href='/"+item.post_title_id+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<span'>"+
                                "<strong>"+
                            item.sender_fname+
                                "</strong>"+
                                " commented on event <strong>"+
                                "\""+
                               item.post_title+
                               "\"</strong>"+
                              "</span>"+
                            "</a>"+
                            "</br>"+
                            "<div id='date_info' style='padding-top:5px;color:grey;font-size:12px'>"+
                             time_ago(item.created_on)+
                            "</div>"+
                        "</div>"+
                      "<div style='clear:both;padding-bottom: 9px;'></div>"+
                    "</div>"+
                  "</div>" ;
              $(el).append(ntfsHTML);
            }

            else if(item.action == "cmnt2project"){
              var ntfsHTML =
                "<div class='ntfs-list-item' style='border-bottom:1px solid #f4f4f4;width:100%;background-color:white;margin:7px 0px;'>"+
                    "<div style='width:100%;padding-top:3px'>"+
                      "<div class='profile_img' style='width:20%;float:left;padding-top:4px;padding-left:4px;text-align:center;'>"+
                        "<a href='/"+item.sender_uname+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<img src='/public/uploads/"+item.sender_image+"profilepic' height='30px' width='30px' style='border-radius: 50%;'/>"+
                        "</a>"+
                        "</div>"+
                        "<div style='width:80%;float:left;padding-top:2px; padding-bottom:6px; padding-right: 5px;'>"+
                          "<a href='/"+item.post_title_id+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<span'>"+
                                "<strong>"+
                            item.sender_fname+
                                "</strong>"+
                                " commented on project <strong>"+
                                "\""+
                               item.post_title+
                               "\"</strong>"+
                              "</span>"+
                            "</a>"+
                            "</br>"+
                            "<div id='date_info' style='padding-top:5px;color:grey;font-size:12px'>"+
                             time_ago(item.created_on)+
                            "</div>"+
                        "</div>"+
                      "<div style='clear:both;padding-bottom: 9px;'></div>"+
                    "</div>"+
                  "</div>" ;
              $(el).append(ntfsHTML);
            }

            else if(item.action == "cmnt2oppor"){
              var ntfsHTML =
                "<div class='ntfs-list-item' style='border-bottom:1px solid #f4f4f4;width:100%;background-color:white;margin:7px 0px;'>"+
                    "<div style='width:100%;padding-top:3px'>"+
                      "<div class='profile_img' style='width:20%;float:left;padding-top:4px;padding-left:4px;text-align:center;'>"+
                        "<a href='/"+item.sender_uname+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<img src='/public/uploads/"+item.sender_image+"profilepic' height='30px' width='30px' style='border-radius: 50%;'/>"+
                        "</a>"+
                        "</div>"+
                        "<div style='width:80%;float:left;padding-top:2px; padding-bottom:6px; padding-right: 5px;'>"+
                          "<a href='/"+item.post_title_id+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<span'>"+
                                "<strong>"+
                            item.sender_fname+
                                "</strong>"+
                                " commented on opportunity <strong>"+
                                "\""+
                               item.post_title+
                               "\"</strong>"+
                              "</span>"+
                            "</a>"+
                            "</br>"+
                            "<div id='date_info' style='padding-top:5px;color:grey;font-size:12px'>"+
                             time_ago(item.created_on)+
                            "</div>"+
                        "</div>"+
                      "<div style='clear:both;padding-bottom: 9px;'></div>"+
                    "</div>"+
                  "</div>" ;
              $(el).append(ntfsHTML);
            }

            else if(item.action == "cmnt2disc"){
              var ntfsHTML =
                "<div class='ntfs-list-item' style='border-bottom:1px solid #f4f4f4;width:100%;background-color:white;margin:7px 0px;'>"+
                    "<div style='width:100%;padding-top:3px'>"+
                      "<div class='profile_img' style='width:20%;float:left;padding-top:4px;padding-left:4px;text-align:center;'>"+
                        "<a href='/"+item.sender_uname+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<img src='/public/uploads/"+item.sender_image+"profilepic' height='30px' width='30px' style='border-radius: 50%;'/>"+
                        "</a>"+
                        "</div>"+
                        "<div style='width:80%;float:left;padding-top:2px; padding-bottom:6px; padding-right: 5px;'>"+
                          "<a href='/"+item.post_title_id+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<span'>"+
                                "<strong>"+
                            item.sender_fname+
                                "</strong>"+
                                " commented on discussion <strong>"+
                                "\""+
                               item.post_title+
                               "\"</strong>"+
                              "</span>"+
                            "</a>"+
                            "</br>"+
                            "<div id='date_info' style='padding-top:5px;color:grey;font-size:12px'>"+
                             time_ago(item.created_on)+
                            "</div>"+
                        "</div>"+
                      "<div style='clear:both;padding-bottom: 9px;'></div>"+
                    "</div>"+
                  "</div>" ;
              $(el).append(ntfsHTML);
            }

            else if(item.action == "cmnt2cmnt"){
              var ntfsHTML =
                "<div class='ntfs-list-item' style='border-bottom:1px solid #f4f4f4;width:100%;background-color:white;margin:7px 0px;'>"+
                    "<div style='width:100%;padding-top:3px'>"+
                      "<div class='profile_img' style='width:20%;float:left;padding-top:4px;padding-left:4px;text-align:center;'>"+
                        "<a href='/"+item.sender_uname+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<img src='/public/uploads/"+item.sender_image+"profilepic' height='30px' width='30px' style='border-radius: 50%;'/>"+
                        "</a>"+
                        "</div>"+
                        "<div style='width:80%;float:left;padding-top:2px; padding-bottom:6px; padding-right: 5px;'>"+
                          "<a href='/"+item.post_title_id+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<span'>"+
                                "<strong>"+
                            item.sender_fname+
                                "</strong>"+
                                " replied to the comment on <strong>"+
                                "\""+
                                item.post_title+
                                "\"</strong>"+
                              "</span>"+
                            "</a>"+
                            "</br>"+
                            "<div id='date_info' style='padding-top:5px;color:grey;font-size:12px'>"+
                             time_ago(item.created_on)+
                            "</div>"+
                        "</div>"+
                      "<div style='clear:both;padding-bottom: 9px;'></div>"+
                    "</div>"+
                  "</div>" ;
              $(el).append(ntfsHTML);
            }

            else if(item.action =="like2cmnt"){
              var ntfsHTML =
                "<div class='ntfs-list-item' style='border-bottom:1px solid #f4f4f4;width:100%;background-color:white;margin:7px 0px;'>"+
                    "<div style='width:100%;padding-top:3px'>"+
                      "<div class='profile_img' style='width:20%;float:left;padding-top:4px;padding-left:4px;text-align:center;'>"+
                        "<a href='/"+item.post_title_id+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<img src='/public/uploads/"+item.sender_image+"profilepic' height='30px' width='30px' style='border-radius: 50%;'/>"+
                        "</a>"+
                        "</div>"+
                        "<div style='width:80%;float:left;padding-top:2px; padding-bottom:6px; padding-right: 5px;'>"+
                          "<a href='/"+item.post_title_id+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<span'>"+
                                "<strong>"+
                            item.sender_fname+
                                "</strong>"+
                                " like your comment on <strong>"+
                                "\""+
                                  item.post_title+
                                  "\"</strong>"+
                              "</span>"+
                            "</a>"+
                            "</br>"+
                            "<div id='date_info' style='padding-top:5px;color:grey;font-size:12px'>"+
                             time_ago(item.created_on)+
                            "</div>"+
                        "</div>"+
                      "<div style='clear:both;padding-bottom: 9px;'></div>"+
                    "</div>"+
                  "</div>" ;
              $(el).append(ntfsHTML);
            }

            else if(item.action == "tkt_booked"){
              var ntfsHTML =
                "<div class='ntfs-list-item' style='border-bottom:1px solid #f4f4f4;width:100%;background-color:white;margin:7px 0px;'>"+
                    "<div style='width:100%;padding-top:3px'>"+
                      "<div class='profile_img' style='width:20%;float:left;padding-top:4px;padding-left:4px;text-align:center;'>"+
                        "<a href='/"+item.sender_uname+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<img src='/public/uploads/"+item.sender_image+"profilepic' height='30px' width='30px' style='border-radius: 50%;'/>"+
                      "</a>"+
                        "</div>"+
                        "<div style='width:80%;float:left;padding-top:2px; padding-bottom:6px; padding-right: 5px;'>"+
                          "<a href='/"+item.post_title_id+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<span>"+
                                "<strong>"+
                            item.sender_fname+
                                "</strong>"+
                                (item.action_count> 1 ?  " and " + (item.action_count - 1) + " others" : "") +
                                 " booked tickets for <strong>" +
                                  "\""+
                                item.post_title+
                                "\" </strong>"+
                              "</span>"+
                            "</a>"+
                            "</br>"+
                            "<div id='date_info' style='padding-top:5px;color:grey;font-size:12px'>"+
                             time_ago(item.created_on)+
                            "</div>"+
                        "</div>"+
                      "</div>"+
                    "<div style='clear:both;padding-bottom: 9px;'></div>"+
                  "</div>" ;
              $(el).append(ntfsHTML);
            }

            else if(item.action == "resp2oppor"){
              var ntfsHTML =
                "<div class='ntfs-list-item' style='border-bottom:1px solid #f4f4f4;width:100%;background-color:white;margin:7px 0px;'>"+
                    "<div style='width:100%;padding-top:3px'>"+
                      "<div class='profile_img' style='width:20%;float:left;padding-top:4px;padding-left:4px;text-align:center;'>"+
                        "<a href='/"+item.sender_uname+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<img src='/public/uploads/"+item.sender_image+"profilepic' height='30px' width='30px' style='border-radius: 50%;'/>"+
                      "</a>"+
                        "</div>"+
                        "<div style='width:80%;float:left;padding-top:2px; padding-bottom:6px; padding-right: 5px;'>"+
                          "<a href='/"+item.post_title_id+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<span>"+
                                "<strong>"+
                            item.sender_fname+
                                "</strong>"+
                                (item.action_count> 1 ?  " and " + (item.action_count - 1) + " others" : "") +
                                 " responded to your requirement <strong>" +
                                  "\""+
                                item.post_title+
                                "\" </strong>"+
                              "</span>"+
                            "</a>"+
                            "</br>"+
                            "<div id='date_info' style='padding-top:5px;color:grey;font-size:12px'>"+
                             time_ago(item.created_on)+
                            "</div>"+
                        "</div>"+
                      "</div>"+
                    "<div style='clear:both;padding-bottom: 9px;'></div>"+
                  "</div>" ;
              $(el).append(ntfsHTML);
            }

            else if(item.action == "p_featured"){
              var ntfsHTML =
                "<div class='ntfs-list-item' style='border-bottom:1px solid #f4f4f4;width:100%;background-color:white;margin:7px 0px;'>"+
                    "<div style='width:100%;padding-top:3px'>"+
                      "<div class='profile_img' style='width:20%;float:left;padding-top:4px;padding-left:4px;text-align:center;'>"+
                        "<a href='/"+item.sender_uname+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<img src='/public/uploads/"+item.sender_image+"profilepic' height='30px' width='30px' style='border-radius: 50%;'/>"+
                        "</a>"+
                        "</div>"+
                        "<div style='width:80%;float:left;padding-top:2px; padding-bottom:6px; padding-right: 5px;'>"+
                          "<a href='/"+item.post_title_id+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<span'>"+
                                "<strong> Congratulations, Your post </strong>"+
                                "  <strong>"+
                                "\""+
                               item.post_title+
                               "\" has been featured !!</strong>"+
                              "</span>"+
                            "</a>"+
                            "</br>"+
                            "<div id='date_info' style='padding-top:5px;color:grey;font-size:12px'>"+
                             time_ago(item.created_on)+
                            "</div>"+
                        "</div>"+
                      "<div style='clear:both;padding-bottom: 9px;'></div>"+
                    "</div>"+
                  "</div>" ;
              $(el).append(ntfsHTML);
            }


            else if(item.action == "p_approved"){
              var ntfsHTML =
                "<div class='ntfs-list-item' style='border-bottom:1px solid #f4f4f4;width:100%;background-color:white;margin:7px 0px;'>"+
                    "<div style='width:100%;padding-top:3px'>"+
                      "<div class='profile_img' style='width:20%;float:left;padding-top:4px;padding-left:4px;text-align:center;'>"+
                        "<a href='/"+item.sender_uname+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<img src='/public/uploads/"+item.sender_image+"profilepic' height='30px' width='30px' style='border-radius: 50%;'/>"+
                        "</a>"+
                        "</div>"+
                        "<div style='width:80%;float:left;padding-top:2px; padding-bottom:6px; padding-right: 5px;'>"+
                          "<a href='/"+item.post_title_id+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<span'>"+
                                "<strong> Congratulations, Administrator approved </strong>"+
                                "  <strong>"+
                                "\""+
                               item.post_title+
                               "\"</strong>"+
                              "</span>"+
                            "</a>"+
                            "</br>"+
                            "<div id='date_info' style='padding-top:5px;color:grey;font-size:12px'>"+
                             time_ago(item.created_on)+
                            "</div>"+
                        "</div>"+
                      "<div style='clear:both;padding-bottom: 9px;'></div>"+
                    "</div>"+
                  "</div>" ;
              $(el).append(ntfsHTML);
            }

            else if(item.action == "p_removed"){
              var ntfsHTML =
                "<div class='ntfs-list-item' style='border-bottom:1px solid #f4f4f4;width:100%;background-color:white;margin:7px 0px;'>"+
                    "<div style='width:100%;padding-top:3px'>"+
                      "<div class='profile_img' style='width:20%;float:left;padding-top:4px;padding-left:4px;text-align:center;'>"+
                        "<a href='/"+item.sender_uname+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<img src='/public/uploads/"+item.sender_image+"profilepic' height='30px' width='30px' style='border-radius: 50%;'/>"+
                        "</a>"+
                        "</div>"+
                        "<div style='width:80%;float:left;padding-top:2px; padding-bottom:6px; padding-right: 5px;'>"+
                          "<a href='/"+item.post_title_id+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<span'>"+
                                "<strong> Sorry, We are unable to approve </strong>"+
                                "  <strong>"+
                                "\""+
                               item.post_title+
                               "\"</strong>"+
                              "</span>"+
                            "</a>"+
                            "</br>"+
                            "<div id='date_info' style='padding-top:5px;color:grey;font-size:12px'>"+
                             time_ago(item.created_on)+
                            "</div>"+
                        "</div>"+
                      "<div style='clear:both;padding-bottom: 9px;'></div>"+
                    "</div>"+
                  "</div>" ;
              $(el).append(ntfsHTML);
            }

            else if(item.action == "p_deleted"){
              var ntfsHTML =
                "<div class='ntfs-list-item' style='border-bottom:1px solid #f4f4f4;width:100%;background-color:white;margin:7px 0px;'>"+
                    "<div style='width:100%;padding-top:3px'>"+
                      "<div class='profile_img' style='width:20%;float:left;padding-top:4px;padding-left:4px;text-align:center;'>"+
                        "<a href='/"+item.sender_uname+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<img src='/public/uploads/"+item.sender_image+"profilepic' height='30px' width='30px' style='border-radius: 50%;'/>"+
                        "</a>"+
                        "</div>"+
                        "<div style='width:80%;float:left;padding-top:2px; padding-bottom:6px; padding-right: 5px;'>"+
                          "<a href='/"+item.post_title_id+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<span'>"+
                                "<strong> Administrator deleted </strong>"+
                                "  <strong>"+
                                "\""+
                               item.post_title+
                               "\"</strong>"+
                              "</span>"+
                            "</a>"+
                            "</br>"+
                            "<div id='date_info' style='padding-top:5px;color:grey;font-size:12px'>"+
                             time_ago(item.created_on)+
                            "</div>"+
                        "</div>"+
                      "<div style='clear:both;padding-bottom: 9px;'></div>"+
                    "</div>"+
                  "</div>" ;
              $(el).append(ntfsHTML);
            }

            else if(item.action == "join_tm_req"){
             
               var ntfsHTML =

                "<div class='ntfs-list-item' style='border-bottom:1px solid #f4f4f4;width:100%;background-color:white;margin:7px 0px;'>"+
                    "<div style='width:100%;padding-top:3px'>"+
                      "<div class='profile_img' style='width:20%;float:left;padding-top:4px;padding-left:4px;text-align:center;'>"+
                        "<a href='/"+item.sender_uname+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<img src='/public/uploads/"+item.sender_image+"profilepic' height='30px' width='30px' style='border-radius: 50%;'/>"+
                        "</a>"+
                        "</div>"+
                        "<div style='width:80%;float:left;padding-top:2px; padding-bottom:6px; padding-right: 5px;'>"+
                          "<a href='/"+item.post_title_id+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<span'>"+
                                "<strong>"+
                                 item.sender_fname+
                                "</strong>"+
                                " request you to join in a project <strong>"+
                                "\""+
                                  item.post_title+
                                  "\"</strong>"+
                              "</span>"+
                            "</a>"+
                            "</br>"+
                          "<div style='margin-top: 6px;margin-left: -5px;'>"+
                              "<a href='#'><img class='ntfsNR' src='/public/img/accept.svg' style='width:25px;' onclick='accept2tm(\""+item.post_title_id+"\",2); hideParent(this);'/></a>"+
                              "<a href='#' style='margin-left:4px;'><img class='ntfsNR' src='/public/img/reject.svg' style='width:25px;' onclick='reject2tm(\""+item.post_title_id+"\",1); hideParent(this);'/></a>"+
                          "</div>"+
                     "</div>"+
                     "</div>"+
                       "<div style='clear:both;padding-bottom: 9px;'></div>"+
                     "</div>"+
                   "</div>" ;
              $(el).append(ntfsHTML);

            }

             else if(item.action=="added2tm"){
              var ntfsHTML =
                "<div class='ntfs-list-item' style='border-bottom:1px solid #f4f4f4;width:100%;background-color:white;margin:7px 0px;'>"+
                    "<div style='width:100%;padding-top:3px'>"+
                      "<div class='profile_img' style='width:20%;float:left;padding-top:4px;padding-left:4px;text-align:center;'>"+
                          "<a href='/"+item.sender_uname+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                                "<img src='/public/uploads/"+item.sender_image+"profilepic' height='30px' width='30px' style='border-radius: 50%;'/>"+
                          "</a>"+ 
                        "</div>"+
                        "<div style='width:80%;float:left;padding-top:2px; padding-bottom:6px; padding-right: 5px;'>"+
                          "<a href='/"+item.post_title_id+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                              "<span>"+
                                    "<strong>Congratulations !!, You are now a member of a project \""+
                                    item.post_title+
                                    "\"</strong>"+
                              "</span>"+
                           "</a>"+
                          "</br>"+
                          "<div id ='date_info' style='padding-top:5px;color:grey;font-size:12px'>"+
                               time_ago(item.created_on)+

                          "</div>"+
                        "</div>"+
                    "</div>"+
                      "<div style='clear:both;padding-bottom: 9px;'></div>"+
                    "</div>"+
                  "</div>" ;
              $(el).append(ntfsHTML);

            }

            else if(item.action == "wishbday"){
              var ntfsHTML =
                "<div class='ntfs-list-item' style='border-bottom:1px solid #f4f4f4;width:100%;background-color:white;margin:7px 0px;'>"+
                    "<div style='width:100%;padding-top:3px'>"+
                      "<div class='profile_img' style='width:20%;float:left;padding-top:4px;padding-left:4px;text-align:center;'>"+
                        "<a href='/"+item.sender_uname+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<img src='/public/uploads/"+item.sender_image+"profilepic' height='30px' width='30px' style='border-radius: 50%;'/>"+
                      "</a>"+
                        "</div>"+
                        "<div onclick='$(\".bday-ts-modal\").toggleClass(\"is-visible\");' style='cursor:pointer;width:80%;float:left;padding-top:2px; padding-bottom:6px; padding-right: 5px;'>"+
                          "<a href='#' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<span>"+
                                "<strong>"+
                            item.sender_fname+
                                "</strong>"+
                                (item.action_count> 1 ?  " and " + (item.action_count - 1) + " others" : "") +
                                 " wishes you Happy Birthday !" +
                              "</span>"+
                            "</a>"+
                            "</br>"+
                            "<div id='date_info' style='padding-top:5px;color:grey;font-size:12px'>"+
                             time_ago(item.created_on)+
                            "</div>"+
                        "</div>"+
                      "</div>"+
                    "<div style='clear:both;padding-bottom: 9px;'></div>"+
                  "</div>" ;
              $(el).append(ntfsHTML);
            }

            else if(item.action == "wishbdayts"){
              var ntfsHTML =
                "<div class='ntfs-list-item' style='border-bottom:1px solid #f4f4f4;width:100%;background-color:white;margin:7px 0px;'>"+
                    "<div style='width:100%;padding-top:3px'>"+
                      "<div class='profile_img' style='width:20%;float:left;padding-top:4px;padding-left:4px;text-align:center;'>"+
                        "<a href='/"+item.sender_uname+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<img src='/public/uploads/"+item.sender_image+"profilepic' height='30px' width='30px' style='border-radius: 50%;'/>"+
                      "</a>"+
                        "</div>"+
                        "<div style='cursor:pointer;width:80%;float:left;padding-top:2px; padding-bottom:6px; padding-right: 5px;'>"+
                          "<a href='/"+item.sender_uname+"' style='width:100%;color:rgba(0,0,0,0.80);text-decoration:none;'>"+
                          "<span>"+
                                "<strong>"+
                            item.sender_fname+
                                "</strong>"+
                                 " Thanks for greeting me !! &#129303" +
                              "</span>"+
                            "</a>"+
                            "</br>"+
                            "<div id='date_info' style='padding-top:5px;color:grey;font-size:12px'>"+
                             time_ago(item.created_on)+
                            "</div>"+
                        "</div>"+
                      "</div>"+
                    "<div style='clear:both;padding-bottom: 9px;'></div>"+
                  "</div>" ;
              $(el).append(ntfsHTML);
            }


        $("#noti_Counter").hide();
        if(res.message.length >= 15)
          $(el2).show();
      })
      }
    },
    error:function(){
      $ntfs = false;
    }
  });


  function post_type(num)
  {
    if(num=='1')
    {
      return "story";
    }
    else if(num=='2')
    {
      return "event"
    }
    else if(num=='5')
    {
      return "project"
    }
  }

  function time_ago(timeStamp)
   {

    timeStamp = Date.parse(timeStamp);
    var now = new Date();
    secondsPast = (now.getTime() - timeStamp)/1000;
        if(secondsPast <=0)
        {
          return 'Just Now';
        }
        if(secondsPast < 60)
            {
              return parseInt(secondsPast) + ' sec ago';
            }
          if(secondsPast < 3600)
          {
              return parseInt(secondsPast/60) + ' min ago';
          }
          if(secondsPast < 86400)
          {
              return parseInt(secondsPast/3600) + ' hrs ago';
          }
          if(secondsPast <= 604800)
          {
              return parseInt(secondsPast/86400) + ' days ago';
          }

        if(secondsPast > 604800)
        {
        	timeStamp = new Date(timeStamp);
            day = timeStamp.getDate();
            month = timeStamp.toDateString().match(/ [a-zA-Z]*/)[0].replace(" ","");
            year = timeStamp.getFullYear() == now.getFullYear() ? "" :  " "+timeStamp.getFullYear();
            return day + " " + month + year;
        }
  }

}
