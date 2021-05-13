
class Player{

    constructor(){

    }

    //read playerCount info from database
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data)=>{
            playerCount = data.val();
        });
    }

    //write the value of playerCount into the database
    updateCount(count){

            database.ref('/').update({
            playerCount : count
        });
        
    }




}
