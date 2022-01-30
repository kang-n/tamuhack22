const execSync = require ('child_process').execSync

export default async function handler(req, res) {
    console.log(req.query)
    const ans = await execSync(`python stocksignal/stocksignal.py ${req.query.stock}`);
    
    if(ans && ans.toString("utf8").includes('Buy')){
        res.status(200).json({ generatedResponse: 'Buy' })
    }
    else if(ans && ans.toString("utf8").includes('Sell')) {
        res.status(200).json({ generatedResponse: 'Sell' })
    }
}