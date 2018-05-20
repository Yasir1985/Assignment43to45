 //1. Show an alert box on click on a link.
 document.write("<h2>Program 1</h2>");
 function myAlert(){
	 alert("AOA User");
 }

 // -----------------------------------------------------------------------------------------------------------------

 //2. Display some Mobile images in browser. On click on an image Show the message in alert to user.
 
 function purchaseMobile(value){
 this.value=value;	 
	 alert("Thanks for purchasing a "+value+" phone from us");
 }

 // -----------------------------------------------------------------------------------------------------------------
/*
 // 3. Display 10 student records in table and each row should contain a delete button. If you click on a button to delete a record, entire row should be deleted.
var val=[];
for(i=0;i<10;i++){
val[i]=document.getElementById("del"+i).value;
}//for

function del(num){
var table=document.getElementById("mytable");
var rows=table.rows.length;
alert(num);
if(rows!==-1){
table.deleteRow(num+1);
}


/*value=num;
num=val[num];
counter=num;
alert("Button at index "+value+" is pressed "+num);
alert(num);
//alert(rows);

}//del
*/
// -----------------------------------------------------------------------------------------------------------------

 // 3. Display 10 student records in table and each row should contain a delete button. If you click on a button to delete a record, entire row should be deleted.

ide=["btn0","btn1","btn2","btn3","btn4","btn5","btn6","btn7","btn8","btn9"];
index=[0,1,2,3,4,5,6,7,8,9];
names=["Yasir Arsalan" ,"Imran" ,"Salman" ,"Kamran" , "Faheem" ,"Naeem" ,"Jameel" ,"Ibrahim" ,"Saleem" , "Danyal"];
cls=[12,12,10,11,8,7,9,10,8,7];
 
 function studentsRecord(){

   table=document.getElementById("tb").innerHTML="<tr><th>Index</th><th>Name</th><th>Class</th><th>Button</th></tr>";
     
   for( i = 0; i < names.length; i++){
	
table=document.getElementById("tb").innerHTML=(table+"<tr><td>"+index[i]+"</td><td>"+names[i]+"</td><td>"+cls[i]+"</td>"+"<td>\
<input type='Button' value='Delete' id="+ide[i]+" onclick='delRecords(id);'> </td></tr>");

    }//for
      	
 }//studentRecords
 
 function delRecords(id){
var v=document.getElementById(id);
//var p=Number(prompt("Enter Index Number"));
for(i=0;i<names.length;i++){
if(id==="btn"+[i]){
var ind=index.splice(i,1);
var del=names.splice(i,1);
var claas=cls.splice(i,1);
alert(id==="btn"+[i]);
}//if
}//for

 studentsRecord();
 } //delRecords
 
// -----------------------------------------------------------------------------------------------------------------
// 4. Display an image in browser. Change the picture on mouseover and set the first picture on mouseout.
  function changeFirstPic(){
var val=document.getElementById("pic");
val.src="browser_2.png";
}//changePic

function returnPic(){
var val=document.getElementById("pic");
val.src="browser_1.png";
}//changePic

// -----------------------------------------------------------------------------------------------------------------
// 5. Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter value in browser.
    counter=0;

	function incrementCounter(){
	ivalue=document.getElementById("ivalue");
	var text=document.getElementById("txt");
	text.value="";
	for(counter;;counter++){
    	counter++;

	text.value+=counter;
	//if(counter<=20)
	//counter++;
	break;
	}//for
	}//incrementCounter	

    function decrementCounter(){
	
	var dvalue=document.getElementById("dvalue");
	var text=document.getElementById("txt");
	text.value="";
	
	for(counter;counter>=0;counter--){
    text.value+=counter;
	if(counter!=0)
	counter--;
	break;
	}//for
	
	}//decrementCounter	
