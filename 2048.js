
function getRandom(){                              // on obtient 2 ou 4
    var num=Math.random();
    if(num < 0.9) return 2;  //probability 0.9
    else return 4;  //probability 0.1
}

$(document).ready(function startGame() {
    $("#boutonStart").click(function(){  
        $("#boutonStart").hide();               // cache le bouton Start quand on commence
        do {
            var randomcell = Math.floor((Math.random() * 16) + 1); //obtenir chiffre rdm entre 1 et 16
           }
        while ($('#' + randomcell).text() != '')  // trouver case vide
        $("#"+randomcell).append(getRandom());    // on ajoutre 2ou4 dans une random cell. 
        do {
            var randomcell = Math.floor((Math.random() * 16) + 1);
           }     
        while ($('#' + randomcell).text() != '') // on ajoute 2 ou 4 dans une autre random cell.
        $("#"+randomcell).append(getRandom());
    });

    $(document).keydown(function(e) {
        console.log("ok key log")
        if(e.keyCode == 37){
            console.log("ok left")
            //LEFT ligne 1//
            if ($('#13').is(':empty')){  // si case vide: rien
                console.log('ifleft1')  
            }    
            else if  ($('#13').text() == $('#9').text()){
                    console.log(String(parseInt($('#9').text(), 10) + parseInt($('#13').text(), 10)));
                    $('#9').text(String(parseInt($('#9').text(), 10) + parseInt($('#13').text(), 10)));
                    $('#13').text("");
                } 
                  
                else 
                $("#9").text($("#13").text()) //sinon remplacement de la valeur de 13 dana la 9
                $("#13").text("");            
                console.log('elseleft1')  
              
            if ($('#9').is(':empty')){
                console.log('ifleft2')  
            }   
              else  if ($('#9').text() == $('#5').text()){
                    $('#5').text(String(parseInt($('#5').text(), 10) + parseInt($('#9').text(), 10)));
                    $('#9').text("");

                }            
              
                else 
                $("#5").text($("#9").text())
                $("#9").text("");
                console.log('elseleft2')

            if ($('#5').is(':empty')){
            }
               else if ($('#5').text() == $('#1').text()){
                    $('#1').text(String(parseInt($('#1').text(), 10) + parseInt($('#5').text(), 10)));
                    $('#5').text("");
                }               
              
                else 
                $("#1").text($("#5").text())
                $("#5").text("");
                console.log('elseleft3')  


              //LEFT ligne 2//
            if ($('#14').is(':empty')){
                                
                }
                else  if ($('#14').text() == $('#10').text()){
                    $('#10').text(String(parseInt($('#10').text(), 10) + parseInt($('#14').text(), 10)));
                    $('#10').text("");

                }           
                  else 
                  $("#10").text($("#14").text())
                  $("#14").text("");    
            
            if ($('#10').is(':empty')){
                                
                }
                
                else  if ($('#10').text() == $('#6').text()){
                    $('#6').text(String(parseInt($('#6').text(), 10) + parseInt($('#10').text(), 10)));
                    $('#10').text("");

                }  
                  else 
                  $("#6").text($("#10").text())
                  $("#10").text("");  
            
            if ($('#6').is(':empty')){
                                
                }
                else  if ($('#6').text() == $('#2').text()){
                    $('#2').text(String(parseInt($('#2').text(), 10) + parseInt($('#6').text(), 10)));
                    $('#6').text("");

                }  
                  else 
                  $("#2").text($("#6").text())
                  $("#6").text("");   

            //LEFT ligne 3 //

            if ($('#15').is(':empty')){
                                
                }
                else  if ($('#15').text() == $('#11').text()){
                    $('#11').text(String(parseInt($('#11').text(), 10) + parseInt($('#15').text(), 10)));
                    $('#15').text("");

                }  
                  else 
                  $("#11").text($("#15").text())
                  $("#15").text("");    

            if ($('#11').is(':empty')){
                                
                }
                else  if ($('#11').text() == $('#7').text()){
                    $('#7').text(String(parseInt($('#7').text(), 10) + parseInt($('#11').text(), 10)));
                    $('#11').text("");

                }  
                  else 
                  $("#7").text($("#11").text())
                  $("#11").text("");  
                  
            if ($('#7').is(':empty')){
                                
                }
                else  if ($('#7').text() == $('#3').text()){
                    $('#3').text(String(parseInt($('#3').text(), 10) + parseInt($('#7').text(), 10)));
                    $('#7').text("");

                }  
                  else 
                  $("#3").text($("#7").text())
                  $("#7").text("");
            
            // LEFT ligne 4 //
            if ($('#16').is(':empty')){
                                
            }
            else  if ($('#16').text() == $('#12').text()){
                $('#12').text(String(parseInt($('#12').text(), 10) + parseInt($('#16').text(), 10)));
                $('#16').text("");

            }  
              else {
              $("#12").text($("#16").text())
              $("#16").text("");    
              }

            if ($('#12').is(':empty')){
                            
            }
            else  if ($('#12').text() == $('#8').text()){
                $('#8').text(String(parseInt($('#8').text(), 10) + parseInt($('#12').text(), 10)));
                $('#12').text("");

            }  
              else 
              $("#8").text($("#12").text())
              $("#12").text("");  
              
        if ($('#8').is(':empty')){
                            
            }
            else  if ($('#8').text() == $('#4').text()){
                $('#4').text(String(parseInt($('#4').text(), 10) + parseInt($('#8').text(), 10)));
                $('#8').text("");

            }  
              else {
              $("#4").text($("#8").text())
              $("#8").text("");
            
            }    
        }      

 
            



        if (e.keyCode == 38){
            console.log("ok up")
            // UP colonne 4 //
            if ($('#16').is(':empty')){  // si case vide: rien
                console.log('ifup1')                                                             
              }
              else  if ($('#16').text() == $('#15').text()){
                $('#15').text(String(parseInt($('#15').text(), 10) + parseInt($('#16').text(), 10)));
                $('#16').text("");

            }  
                else 
                $("#15").text($("#16").text()) //sinon remplacement de la valeur de 13 dana la 9
                $("#16").text("");            // case 13 vidée
                console.log('elseup1')     

            if ($('#15').is(':empty')){
                console.log('ifup2')      
              }
              else  if ($('#15').text() == $('#14').text()){
                $('#14').text(String(parseInt($('#14').text(), 10) + parseInt($('#15').text(), 10)));
                $('#15').text("");

            }  
                else 
                $("#14").text($("#15").text())
                $("#15").text("");
                console.log('elseup2')

            if ($('#14').is(':empty')){
                console.log('ifup3') 
              }
              else  if ($('#14').text() == $('#13').text()){
                $('#13').text(String(parseInt($('#13').text(), 10) + parseInt($('#14').text(), 10)));
                $('#14').text("");

            }  
                else 
                $("#13").text($("#14").text())
                $("#14").text("");
                console.log('elseup3')   
                
        // UP colonne 3 //
        
        if ($('#12').is(':empty')){  
                                                                        
          }
          else  if ($('#12').text() == $('#11').text()){
            $('#11').text(String(parseInt($('#11').text(), 10) + parseInt($('#12').text(), 10)));
            $('#12').text("");

        }  
            else 
            $("#11").text($("#12").text()) 
            $("#12").text("");            
                 
        if ($('#11').is(':empty')){
                 
          }
          else  if ($('#11').text() == $('#10').text()){
            $('#10').text(String(parseInt($('#10').text(), 10) + parseInt($('#11').text(), 10)));
            $('#11').text("");

        }  
            else 
            $("#10").text($("#11").text())
            $("#11").text("");
            
        if ($('#10').is(':empty')){
            
          }
          else  if ($('#10').text() == $('#9').text()){
            $('#9').text(String(parseInt($('#9').text(), 10) + parseInt($('#10').text(), 10)));
            $('#10').text("");

        }  
            else 
            $("#9").text($("#10").text())
            $("#10").text("");                      

          // UP Colonne 2 //

          if ($('#8').is(':empty')){  
                                                                        
        }
        else  if ($('#8').text() == $('#7').text()){
            $('#7').text(String(parseInt($('#7').text(), 10) + parseInt($('#8').text(), 10)));
            $('#8').text("");

        }  
          else 
          $("#7").text($("#8").text()) 
          $("#8").text("");            
               
        if ($('#7').is(':empty')){
               
        }
        else  if ($('#7').text() == $('#6').text()){
            $('#6').text(String(parseInt($('#6').text(), 10) + parseInt($('#7').text(), 10)));
            $('#7').text("");

        }  
          else 
          $("#6").text($("#7").text())
          $("#7").text("");
          
        if ($('#6').is(':empty')){
          
        }
        else  if ($('#6').text() == $('#5').text()){
            $('#5').text(String(parseInt($('#5').text(), 10) + parseInt($('#6').text(), 10)));
            $('#6').text("");

        }  
          else 
          $("#5").text($("#6").text())
          $("#6").text("");                  
        
        // UP colonne 1 //

        if ($('#4').is(':empty')){  
                                                                        
        }
        else  if ($('#4').text() == $('#3').text()){
            $('#3').text(String(parseInt($('#3').text(), 10) + parseInt($('#4').text(), 10)));
            $('#4').text("");

        }  
          else 
          $("#3").text($("#4").text()) 
          $("#4").text("");            
               
        if ($('#3').is(':empty')){
               
        }
        else  if ($('#3').text() == $('#2').text()){
            $('#2').text(String(parseInt($('#2').text(), 10) + parseInt($('#3').text(), 10)));
            $('#3').text("");

        }  
          else 
          $("#2").text($("#3").text())
          $("#3").text("");
          
        if ($('#2').is(':empty')){
          
        }
        else  if ($('#2').text() == $('#1').text()){
            $('#1').text(String(parseInt($('#1').text(), 10) + parseInt($('#2').text(), 10)));
            $('#2').text("");

        }  
          else {
          $("#1").text($("#2").text())
          $("#2").text("");                  
        }
        
    }

        
        if (e.keyCode == 39){
            console.log("ok right")

            // RIGHT ligne 1 // 
            if ($('#1').is(':empty')){  
                console.log('ifright1')                                                                             
            }
            else  if ($('#1').text() == $('#5').text()){
                $('#5').text(String(parseInt($('#5').text(), 10) + parseInt($('#1').text(), 10)));
                $('#1').text("");

            }  
              else 
              $("#5").text($("#1").text()) //sinon remplacement de la valeur de 13 dana la 9
              $("#1").text("");            // case 13 vidée
              console.log('elseright1') 

          if ($('#5').is(':empty')){
            console.log('ifright2')   
            }
            else  if ($('#5').text() == $('#9').text()){
                $('#9').text(String(parseInt($('#9').text(), 10) + parseInt($('#5').text(), 10)));
                $('#5').text("");

            }  
              else 
              $("#9").text($("#5").text())
              $("#5").text("");
              console.log('elseright2')

          if ($('#9').is(':empty')){
            console.log('ifright3')            
            }
            else  if ($('#9').text() == $('#13').text()){
                $('#13').text(String(parseInt($('#13').text(), 10) + parseInt($('#9').text(), 10)));
                $('#9').text("");

            }  
              else 
              $("#13").text($("#9").text())
              $("#9").text("")
              console.log('elseright3')

              // Right ligne 2 //
            if ($('#2').is(':empty')){  
                                                                      
            }
            else  if ($('#2').text() == $('#6').text()){
                $('#6').text(String(parseInt($('#6').text(), 10) + parseInt($('#2').text(), 10)));
                $('#2').text("");

            }  
              else 
              $("#6").text($("#2").text()) 
              $("#2").text("");            
             
          if ($('#6').is(':empty')){
               
            }
            else  if ($('#6').text() == $('#10').text()){
                $('#10').text(String(parseInt($('#10').text(), 10) + parseInt($('#6').text(), 10)));
                $('#6').text("");

            }  
              else 
              $("#10").text($("#6").text())
              $("#6").text("");
             
          if ($('#10').is(':empty')){
                     
            }
            else  if ($('#10').text() == $('#14').text()){
                $('#14').text(String(parseInt($('#14').text(), 10) + parseInt($('#10').text(), 10)));
                $('#10').text("");

            }  
              else 
              $("#14").text($("#10").text())
              $("#10").text("")

            // RIGHT ligne 3 //

            if ($('#3').is(':empty')){  
                                                                      
            }
            else  if ($('#3').text() == $('#7').text()){
                $('#7').text(String(parseInt($('#7').text(), 10) + parseInt($('#3').text(), 10)));
                $('#3').text("");

            }  
              else 
              $("#7").text($("#3").text()) 
              $("#3").text("");            
             
            if ($('#7').is(':empty')){
               
            }
            else  if ($('#7').text() == $('#11').text()){
                $('#11').text(String(parseInt($('#11').text(), 10) + parseInt($('#7').text(), 10)));
                $('#7').text("");

            }  
              else 
              $("#11").text($("#7").text())
              $("#7").text("");
             
            if ($('#11').is(':empty')){
                     
            }
            else  if ($('#11').text() == $('#15').text()){
                $('#15').text(String(parseInt($('#15').text(), 10) + parseInt($('#11').text(), 10)));
                $('#11').text("");

            }  
              else 
              $("#15").text($("#11").text())
              $("#11").text("")
              
         // RIGHT ligne 4 // 

         if ($('#4').is(':empty')){  
                                                                      
        }
        else  if ($('#4').text() == $('#8').text()){
            $('#8').text(String(parseInt($('#8').text(), 10) + parseInt($('#4').text(), 10)));
            $('#4').text("");

        }  
          else 
          $("#8").text($("#4").text()) 
          $("#4").text("");            
         
        if ($('#8').is(':empty')){
           
        }
        else  if ($('#8').text() == $('#12').text()){
            $('#12').text(String(parseInt($('#12').text(), 10) + parseInt($('#8').text(), 10)));
            $('#8').text("");

        }  
          else 
          $("#12").text($("#8").text())
          $("#8").text("");
         
        if ($('#12').is(':empty')){
                 
        }
        else  if ($('#12').text() == $('#16').text()){
            $('#16').text(String(parseInt($('#16').text(), 10) + parseInt($('#12').text(), 10)));
            $('#12').text("");

        }  
          else 
          $("#16").text($("#12").text())
          $("#12").text("")
        }



        if (e.keyCode == 40){
            console.log("ok down")
            // DOWN colonne 1 
            if ($('#1').is(':empty')){  
                console.log('ifdown1')                                                            
            }
            else  if ($('#1').text() == $('#2').text()){
                $('#2').text(String(parseInt($('#2').text(), 10) + parseInt($('#1').text(), 10)));
                $('#1').text("");

            }  
              else 
              $("#2").text($("#1").text()) 
              $("#1").text("");            
              console.log('elsedown1') 

            if ($('#2').is(':empty')){
            console.log('ifdown2')              
            }
            else  if ($('#2').text() == $('#3').text()){
                $('#3').text(String(parseInt($('#3').text(), 10) + parseInt($('#2').text(), 10)));
                $('#2').text("");

            }  
              else 
              $("#3").text($("#2").text())
              $("#2").text("");
              console.log('elsedown2') 

            if ($('#3').is(':empty')){
            console.log('ifdown3')       
            }
            else  if ($('#3').text() == $('#4').text()){
                $('#4').text(String(parseInt($('#4').text(), 10) + parseInt($('#3').text(), 10)));
                $('#3').text("");

            }  
              else 
              $("#4").text($("#3").text())
              $("#3").text("")
              console.log('elsedown3') 

            // DOWN Colonne 2 //

              if ($('#5').is(':empty')){  
                                                                            
            }
            else  if ($('#5').text() == $('#6').text()){
                $('#6').text(String(parseInt($('#6').text(), 10) + parseInt($('#5').text(), 10)));
                $('#5').text("");

            }  
              else 
              $("#6").text($("#5").text()) 
              $("#5").text("");           
               

            if ($('#6').is(':empty')){
                          
            }
            else  if ($('#6').text() == $('#7').text()){
                $('#7').text(String(parseInt($('#7').text(), 10) + parseInt($('#6').text(), 10)));
                $('#6').text("");

            }  
              else 
              $("#7").text($("#6").text())
              $("#6").text("");               

            if ($('#7').is(':empty')){
                   
            }
            else  if ($('#7').text() == $('#8').text()){
                $('#8').text(String(parseInt($('#8').text(), 10) + parseInt($('#7').text(), 10)));
                $('#7').text("");

            }  
              else 
              $("#8").text($("#7").text())
              $("#7").text("")   
              
              // DOWN colonne 3 //

            if ($('#9').is(':empty')){  
                                                                            
            }
            else  if ($('#9').text() == $('#10').text()){
                $('#10').text(String(parseInt($('#10').text(), 10) + parseInt($('#9').text(), 10)));
                $('#9').text("");

            }  
              else 
              $("#10").text($("#9").text()) 
              $("#9").text("");           
               

            if ($('#10').is(':empty')){
                          
            }
            else  if ($('#10').text() == $('#11').text()){
                $('#11').text(String(parseInt($('#11').text(), 10) + parseInt($('#10').text(), 10)));
                $('#10').text("");

            }  
              else 
              $("#11").text($("#10").text())
              $("#10").text("");               

            if ($('#11').is(':empty')){
                   
            }
            else  if ($('#11').text() == $('#12').text()){
                $('#12').text(String(parseInt($('#12').text(), 10) + parseInt($('#11').text(), 10)));
                $('#11').text("");

            }  
              else 
              $("#12").text($("#11").text())
              $("#11").text("")

            // DOWN Colonne 4

              if ($('#13').is(':empty')){  
                                                                            
            }
            else  if ($('#13').text() == $('#14').text()){
                $('#14').text(String(parseInt($('#13').text(), 10) + parseInt($('#13').text(), 10)));
                $('#13').text("");

            }  
              else 
              $("#14").text($("#13").text()) 
              $("#13").text("");           
               

            if ($('#14').is(':empty')){
                          
            }
            else  if ($('#14').text() == $('#15').text()){
                $('#15').text(String(parseInt($('#15').text(), 10) + parseInt($('#14').text(), 10)));
                $('#14').text("");

            }  
              else 
              $("#15").text($("#14").text())
              $("#14").text("");               

            if ($('#15').is(':empty')){
                   
            }
            else  if ($('#15').text() == $('#16').text()){
                $('#16').text(String(parseInt($('#15').text(), 10) + parseInt($('#15').text(), 10)));
                $('#15').text("");

            }  
              else 
              $("#16").text($("#15").text())
              $("#15").text("")
            
            

        }
      

        do {
            var randomcell = Math.floor((Math.random() * 16) + 1);
           }     
        while ($('#' + randomcell).text() != '') // on ajoute 2 ou 4 dans une autre random cell.
        $("#"+randomcell).append(getRandom());
     });
        
    $("#boutonReset").click(function(){  
    $( ".column" ).empty();
    $("#boutonStart").show();
    });
   
});


            /*var idx = 13;
           // var move = 0;
            //while ( move < 4) { contient 2e while, idx += 13; move++;}
            //for (j = 0; j < 4; j++)
            //{
                while ($('#'+(idx-4)).text() == "")
                {
                    $("#"+(idx - 4)).text($('#'+idx).text());
                    $('#'+idx).text("");
                    idx -= 4;
                }
            //    idx -= 4;
            //}*/