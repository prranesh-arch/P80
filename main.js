student_array = [];

 function submit()
{

var name_1 = document.getElementById("name_student_1").value;


student_array.push(name_1);


document.getElementById("display_name").innerHTML = student_array;



}

function sorting()
{
 student_array.sort();
 console.log("student_array");
document.getElementById("display_name").immerHTML = student_array;
}

function searching()
{
var s=document.getElementById("input").value;
var found=0;
var j;
for(j=0; j<student_array.length; j++)
{
if(s==student_array[j]){
    found=found+1;
}
 }
 document.getElementById("p2").innerHTML="name found"+found+" time/s";
 console.log("found name "+found+" time/s");
}

function showing()
{
 student_array.sort();
 console.log("student_array");
document.getElementById("display_name").immerHTML = student_array;
}