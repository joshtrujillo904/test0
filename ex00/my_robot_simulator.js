function my_robot_simulator(letter_string){
    var result = "";
    var x=0;
    var y=0;
    var bearing ="north";
    for (var index=0; index<letter_string.length;index++){
        if(letter_string[index] == 'A'){
            if(bearing == "north"){
                y--;
            }
            else if(bearing == "south"){
                y++;
            }
            else if(bearing == "west"){
                x--;
            }
            else if(bearing == "east"){
                x++;
            }
        }
        else if(letter_string[index] == 'R'){
            console.log("current value should be R, it is " + letter_string[index]);
            if(bearing == "north"){
                bearing = "east";
            }
            else if(bearing == "south"){
                bearing = "west";
            }
            else if(bearing == "west"){
                bearing = "north";
            }
            else if(bearing == "east"){
                bearing = "south";
            }
        }
        else if(letter_string[index] == 'L'){
            console.log("current value should be L, it is " + letter_string[index]);
            if(bearing == "north"){
                bearing = "west";
            }
            else if(bearing == "south"){
                bearing = "east";
            }
            else if(bearing == "west"){
                bearing = "south";
            }
            else if(bearing == "east"){
                bearing = "north";
            }
        }
    }
    result = "{x: "+x+", y: "+y+", bearing: '"+bearing+"'}";
    return result;
}

console.log(my_robot_simulator("RAALALL"));