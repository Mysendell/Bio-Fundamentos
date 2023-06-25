let keys  = {
    u: false,
    n: false,
    i: false,
    m: false,
    e: false,
    d: false 
};

addEventListener("keydown", (event) => {

    if (event.key === "u") {   
      keys.u = true;
    }
    if (event.key === "n") {
        keys.n = true;
    }
    if (event.key === "i") {
        keys.i = true;
    }
    if (event.key === "m") {
        keys.m = true;
    }
    if (event.key === "e") {
        keys.e = true;
    } 
    if (event.key === "d") {
      keys.d = true;
    }
  
  if(keys.u && keys.n && keys.i && keys.m && keys.e && keys.d){
    window.location.href = "easter.html";
  }
  
  });