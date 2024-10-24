//setTimeout is used to execute a function after a specified delay (in milliseconds). It's useful for delaying code execution or creating time-based events.

setTimeout(function(){
    console.log("the delay time is 4sec")
},4000)
setTimeout(()=>{
    console.log("the delay time is 4sec")
},4000)
  