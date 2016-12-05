/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function submit_kuis(a)
{
        
	 var jwb=ambilJawab(a);
	 var result=0; var sum=10; var option; var benar=0;
     var num1 = document.radioForm.soal1;
	 var num2 = document.radioForm.soal2;
	 var num3 = document.radioForm.soal3;
	 var num4 = document.radioForm.soal4;
	 var num5 = document.radioForm.soal5;
	 var num6 = document.radioForm.soal6;
	 var num7 = document.radioForm.soal7;
	 var num8 = document.radioForm.soal8;
	 var num9 = document.radioForm.soal9;
	 var num10 = document.radioForm.soal10;

    
           if (num1[jwb[0]].checked)
                { document.getElementById("1").innerHTML="<div id='benar'>Jawaban Anda Benar</div>";
                  result +=10; benar++;
                  
                } 
           else
                {

                    document.getElementById("1").innerHTML="<div id='salah'>Jawaban anda salah</div><div id='solusi'>Jawaban yang benar adalah ("+change(jwb[0])+")</div>";
                }
                
	   
           if (num2[jwb[1]].checked)
                { document.getElementById("2").innerHTML="<div id='benar'>Jawaban Anda Benar</div>";
                  result +=10; benar++;
                } 
           else
                {
                     
                    document.getElementById("2").innerHTML="<div id='salah'>Jawaban anda salah</div><div id='solusi'>Jawaban yang benar adalah ("+change(jwb[1])+")</div>";
                }
                
	   
           if (num3[jwb[2]].checked)
                { document.getElementById("3").innerHTML="<div id='benar'>Jawaban Anda Benar</div>";
                  result +=10; benar++;
                } 
           else
                 {
                    
                    document.getElementById("3").innerHTML="<div id='salah'>Jawaban anda salah</div><div id='solusi'>Jawaban yang benar adalah ("+change(jwb[2])+")</div>";
                }
	   
           if (num4[jwb[3]].checked)
                { document.getElementById("4").innerHTML="<div id='benar'>Jawaban Anda Benar</div>";
                  result +=10; benar++;
                } 
           else
                 {
                    
                    document.getElementById("4").innerHTML="<div id='salah'>Jawaban anda salah</div><div id='solusi'>Jawaban yang benar adalah ("+change(jwb[3])+")</div>";
                }
	   
           if (num5[jwb[4]].checked)
                { document.getElementById("5").innerHTML="<div id='benar'>Jawaban Anda Benar</div>";
                  result +=10; benar++;
                } 
           else
                 {
                    
                    document.getElementById("5").innerHTML="<div id='salah'>Jawaban anda salah</div><div id='solusi'>Jawaban yang benar adalah ("+change(jwb[4])+")</div>";
                }
	   
           if (num6[jwb[5]].checked)
                { document.getElementById("6").innerHTML="<div id='benar'>Jawaban Anda Benar</div>";
                  result +=10; benar++;
                } 
           else
                 {
                   
                    document.getElementById("6").innerHTML="<div id='salah'>Jawaban anda salah</div><div id='solusi'>Jawaban yang benar adalah ("+change(jwb[5])+")</div>";
                }
	   
           if (num7[jwb[6]].checked)
                { document.getElementById("7").innerHTML="<div id='benar'>Jawaban Anda Benar</div>";
                  result +=10; benar++;
                } 
           else
                 {
                    
                    document.getElementById("7").innerHTML="<div id='salah'>Jawaban anda salah</div><div id='solusi'>Jawaban yang benar adalah ("+change(jwb[6])+")</div>";
                }
	   
           if (num8[jwb[7]].checked)
                { document.getElementById("8").innerHTML="<div id='benar'>Jawaban Anda Benar</div>";
                  result +=10; benar++;
                } 
           else
                 {
                     
                    document.getElementById("8").innerHTML="<div id='salah'>Jawaban anda salah</div><div id='solusi'>Jawaban yang benar adalah ("+change(jwb[7])+")</div>";
                }
	   
           if (num9[jwb[8]].checked)
                { document.getElementById("9").innerHTML="<div id='benar'>Jawaban Anda Benar</div>";
                  result +=10; benar++;
                } 
           else
                 {
                   
                    document.getElementById("9").innerHTML="<div id='salah'>Jawaban anda salah</div><div id='solusi'>Jawaban yang benar adalah ("+change(jwb[8])+")</div>";
                }
	   
           if (num10[jwb[9]].checked)
                { document.getElementById("10").innerHTML="<div id='benar'>Jawaban Anda Benar</div>";
                  result +=10; benar++;
                } 
           else
                 {
                    
                    document.getElementById("10").innerHTML="<div id='salah'>Jawaban anda salah</div><div id='solusi'>Jawaban yang benar adalah ("+change(jwb[9])+")</div>";
                }
           	   
               
          var salah = sum - benar;      
		  score = (result/sum)*10;
          document.getElementById("hasil").innerHTML="<div><br><br>Hasil yang anda peroleh adalah : </div><br>";
          document.getElementById("result").innerHTML="<div id='score'>Score anda = "+score+"<div>";   
          document.getElementById("result3").innerHTML="<div><input type='text' maxlength='20' disabled='true' value='Benar = "+benar+"' /><br><input type='text' maxlength='20' disabled='true' value='Salah = "+salah+"' /></div>"; 
}

/*
function reset()
{
    alert("Data sudah direset");
    document.getElementById("hasil").innerHTML="";
    document.getElementById("result").innerHTML="";
    document.getElementById("result3").innerHTML="";
}
 */

function ambilJawab(a)
{
		/* Kuis */
        var kuis    = [2,1,0,0,2,3,1,0,3,4];        
        /* end */

        /* Kuis */
        if(a==="soalkuis")
            return kuis;
        /* end */
}

function change(a)
{
    switch (a)
    {
        case 0: return 'a'; break;
        case 1: return 'b'; break;
        case 2: return 'c'; break;
        case 3: return 'd'; break;
        case 4: return 'e'; break;
    }
}
