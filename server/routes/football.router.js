const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

// API Variables
const s2 = process.env.s2
const swid = process.env.swid
const leagueId = process.env.leagueId
const year = 2022
const headers = {
    "Connection": "keep-alive",
    "Accept": "application/json, text/plain, */*",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
    'X-Fantasy-Filter': '“filterActive”:null',
    "x-fantasy-platform": "kona-PROD-1dc40132dc2070ef47881dc95b633e62cebc9913",
    "x-fantasy-source": "kona"
}
const cookies = {
    "SWID": swid,
    "espn_s2": s2
}
// const url = `https://fantasy.espn.com/apis/v3/games/ffl/leagueHistory/${leagueId}?view=mDraftDetail&view=mSettings&view=mTeam&view=modular&view=mNav&seasonId=${year}`
const url = `https://fantasy.espn.com/apis/v3/games/ffl/seasons/${year}/players?scoringPeriodId=0&view=players_wl`

router.get('/', (req, res) => {
    axios.get(url, cookies, headers).then(response => {
        res.send(response.data)
        console.log(response.data.length)
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    // POST route code here
});

module.exports = router;
