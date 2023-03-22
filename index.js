const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', function (req, res) {
  res.send('HI-Q')
})


app.get('/sound/:name', function (req, res) {      //:name 변수
    const { name } = req.params

    if(name == "kim"){
        res.json({'직급':'차장'})
    } 
    else if(name == "choi"){
        res.json({'직급':'과장'})        
    } 
    else {
        res.json({'직급':'알수없음'})        
    }
})



app.get('/user/:id', function (req, res) {      //:id 변수
    // const p = req.params                        // id 변수를 req로 받아서 파라미터에 아이디가 입력
    // console.log(p.id)
    const q = req.query                           // 쿼리 연결 http://localhost:3000/user/asdf?q=001&name=kim&age=50
    // console.log(q)
    console.log(q.age)

    // res.json({'직원':q.id})
    
    res.json({'직원나이':q.age})
     })

app.get('/boss', function (req, res) {
    res.send('<h1>회장</h1>')
  })
  
  app.get('/boss2', function (req, res) {
    res.send({'sound':'사장'})
  })

                 // 라우터 URL /boss를 한글로 넣으려면 URL 인코딩 필요 - 인코딩 사이트 활용(반대는 디코딩)
  
  app.get('/boss3', function (req, res) {
    res.json({'sound':'부사장'})
  })

  app.get('/web', function (req, res) {
    res.send("<a href='http://www.hiq.co.kr'>홈페이지")
  })

app.listen(3000)