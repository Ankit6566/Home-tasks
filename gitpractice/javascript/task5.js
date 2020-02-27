/*http://www.codewars.com/kata/calculating-with-functions*/
var array=Array(3);
var index=2;
function zero() {array[index--]=0;  return check();}
function one() {array[index--]=1;  return check();}
function two() {array[index--]=2;  return check();}
function three() {array[index--]=3;  return check();}
function four() {array[index--]=4;  return check();}
function five() {array[index--]=5;  return check();}
function six() {array[index--]=6;  return check();}
function seven() {array[index--]=7;  return check();}
function eight() {array[index--]=8;  return check();}
function nine() {array[index--]=9;  return check();}

function plus() {array[index--]='+';}
function minus() {array[index--]='-';}
function times() {array[index--]= '*';}
function dividedBy() {array[index--]='/';}

function check()
{
if(index==-1){
 index=2;
 if(array[1]=='+')
 return array[0]+array[2];
 if(array[1]=='-')
 return array[0]-array[2];
 if(array[1]=='*')
 return array[0]*array[2];
 if(array[1]=='/')
 return Math.floor(array[0]/array[2]);

}
 }
