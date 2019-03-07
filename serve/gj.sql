SET NAMES UTF8;
DROP DATABASE IF EXISTS gjqt;
CREATE DATABASE gjqt CHARSET=UTF8;
USE gjqt;

#创建数据表gjqt_user;       #用户表，记载注册后的客户信息
CREATE TABLE gjqt_user (
  uid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,  #用户的ID
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16) NOT NULL UNIQUE,  #手机号码
  card  VARCHAR(18) UNIQUE   #身份证号
);
insert into gjqt_user values(null,"123","321","555","150622","33032718992154");

create table gjqt_banner(
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    url VARCHAR(128),
    sort VARCHAR(32)
);
INSERT INTO gjqt_banner values(NULL,"http://127.0.0.1:3000/image/lb_img_1.jpg",'杨'),
(NULL,"http://127.0.0.1:3000/image/lb_img_2.jpg",'杨'),
(NULL,"http://127.0.0.1:3000/image/lb_img_3.jpg",'杨'),
(NULL,"http://127.0.0.1:3000/image/lb_img_4.jpg",'杨');