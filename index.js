const five = require("johnny-five");
const board = new five.Board();



board.on("ready", function() {
    const lcd = new five.LCD({
                    pins: [7, 8, 9, 10, 11, 12]
                });
    const led = new five.Led(13);
    this.repl.inject({
        lcd: lcd
    });

    const express = require('express');
    const cors = require('cors')
    const app = express();
    const port = 3300

    app.use(cors());

    
    app.post('/led/:led',(req,res)=>{
        if(req.params.led == 'on'){
            led.on();
        }else{
            led.off();
        }
        res.send({'message':'ok!'});
    });

    app.post('/:message',(req,res)=>{
        let message = req.params.message;
        if(message.length > 32){
            res.send({'error':'message greater than 32 characters!'})
        }else{
            lcd.clear();
            if(message.length > 16){
                let x = message.slice(0,16);
                let y = message.slice(16,);
                lcd.cursor(0,0).print(x);
                lcd.cursor(1,0).print(y);
            }else{
                lcd.print(message);
            }
            res.send({'status':"ok"});
        }
        
    });


    app.listen(port,()=>{
        console.log(`Listening on port : ${port}`
    );

});





});



