// Original kata: https://www.codewars.com/kata/514a677421607afc99000002

function getNames(data){
 // return data.map(function(item){item.name});
  console.log(data.map(data => data.name));
  return data.map(data => data.name);
}
