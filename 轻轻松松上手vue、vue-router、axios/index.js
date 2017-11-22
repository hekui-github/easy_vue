const express = require('express')
const app = express()
app.use(express.static(__dirname));
const foodlist = [{ name: '香菇青菜', isSelect: false }, { name: '冬瓜排骨', isSelect: false }, { name: '青椒肉丝', isSelect: false }, { name: '爆炒虾仁', isSelect: false }, { name: '红烧茄子', isSelect: false }]
app.get('/foodlist', function(req, res) {
    res.send(foodlist)
})
app.listen(8000)