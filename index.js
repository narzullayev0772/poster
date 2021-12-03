const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
// middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// mysql db connection
// const mysql = require("mysql");
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "maqola",
// });
// con.connect((err) => {
//   if (err) throw err;
//   console.log("connected");
// });

// function insert(username, text) {
//   con.query(
//     `insert into users(username,text) values('${username}','${text}')`,
//     function (err, result) {
//       if (err) throw err;
//       console.log("inserted post");
//     }
//   );
// }

var author,
  text;
app.post("/posts", async (req, res, next) => {
  author = req.body.author;
  text = req.body.text;
  // insert(author, text);
});
// var resultArray;
// app.get("/allpost", (req, res) => {
//   con.query("SELECT * FROM users", (err, rows) => {
//     if (err) throw err;
//     res.send(rows)
//   });
// });


app.post('/delete',async (req,res,next)=>{
  //   if(req.body.id){
  //   var sql = `DELETE FROM users WHERE id=${req.body.id}`;
  //   con.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log("Number of records deleted: " + req.body.id);
  // })}
  // console.log(req.body.id);
})

app.get('/',(req,res)=>{
  res.send("salom")
})




const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("connect");
});
