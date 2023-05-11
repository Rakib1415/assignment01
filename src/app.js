const express = require('express');

const app = express();

app.get('/api/generateRandom', (req, res) => {
    const {start, end} = req.query;
    console.log(req.query)
    const startNum = parseInt(start);
    const endNum = parseInt(end);
    const value = calculateRandomInt(startNum, endNum);
    
    if(isNaN(value)){
        res.status(422).json({
            message : 'Invalid value with start and end number',
            start : req.query.start,
            end : req.query.end
        });
        
    }else{
        res.status(200).json({
            message : 'success',
            value 
        });
    }
    
})

app.listen(4000, () => console.log('listening on port 3000'));

const calculateRandomInt = (start, end) => {
        return Math.floor(Math.random() * (end - start + 1)) + start;
}