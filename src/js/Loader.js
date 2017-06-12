
/*=============================================
=            Loader            =
=============================================*/

function Loader(id){
    this.id = id;
    this.resetId = "";
}

/*
 * Start the Progress based on data 
 */
Loader.prototype.startProgress = function(start, finish, duration){
    
    console.log(start + " - " + finish + " - " + duration);

    var width = start;
    var duration = duration;
    var finish = finish;

    if(this.resetId){
        document.getElementById(this.resetId).setAttribute("disabled","disabled");
    }

    var id = setInterval(callback, duration);
   
    function callback(){
        if(width == finish){
            clearInterval(id);
            newLoader.showSuccess();
        }else{
            width++; 
            newLoader.changePercent(width, id);
        }            
    }


}

/*
 * Show Success Message After 100% completed
 */
Loader.prototype.showSuccess = function(){
    //Show Success Message
    document.querySelector(".featherlight #"+ this.id + " .progress-percent").className += " hide";
    document.querySelector(".featherlight #"+ this.id + " .completed").className = "completed";
    document.querySelector(".featherlight #"+ this.id + " .progress-bar").className += " complete";
}

/*
 * Update Percentage Change Value
 */
Loader.prototype.changePercent = function(val, intervalId){
   
    //Set Progress Bar Value
    var progressBar = document.querySelector(".featherlight #"+ this.id + " .progress-bar");
    if(!progressBar){
        clearInterval(intervalId);
        if(this.resetId){
            document.getElementById(this.resetId).removeAttribute("disabled");
        }        
        return;
    }
    progressBar.style.width = val+'%';
    progressBar.setAttribute("aria-valuenow",val);

    //Set Progress Label Value
    document.querySelector(".featherlight #"+ this.id + " .progress-percent .count").innerHTML = val;
}

