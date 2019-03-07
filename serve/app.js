const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const pool=require('./pool')
//创建服务器
var server=express()
server.listen(3000,()=>{
    console.log("服务器已启动")
})
server.use(cors({
    origin:["http://127.0.0.1:5500",
  "http://localhost:5500"],
    credentials:true
}))
server.use(express.static('public'))

server.use(bodyParser.urlencoded({
    extended:false
}))


//注册
server.post("/register",(req,res)=>{
 //2:获取参数 
 var uname = req.body.uname;       
 var upwd = req.body.upwd;
 var email = req.body.email;
 var phone = req.body.phone;
 var card = req.body.card;
 //3:创建sql语句
 var sql = "INSERT INTO gjqt_user VALUES";
     sql+="(null,?,?,?,?,?)";
 //4:发送sql语句并且返回返回结果
 pool.query(sql,[uname,upwd,email,phone,card],(err,result)=>{
    if(err)throw err;
    //判断执行insert语句影响行数
    if(result.affectedRows>0){
      res.send({code:1,msg:"注册成功"});
    }else{
      res.send({code:-1,msg:"注册失败"});
    }
 })

});


//购买页面轮播图片  
server.get("/buyList",(req,res)=>{
   //1:将轮播图中所需图片 复制public/img
   //2:查询
   var list = [
     {id:1,img_url:"http://127.0.0.1:3000/image/lb_img_1.jpg"},
     {id:2,img_url:"http://127.0.0.1:3000/image/lb_img_2.jpg"},
     {id:3,img_url:"http://127.0.0.1:3000/image/lb_img_3.jpg"},
     {id:4,img_url:"http://127.0.0.1:3000/image/lb_img_4.jpg"},
   ];
   res.send(list); 
});