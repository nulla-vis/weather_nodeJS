//モジュール===============================================================================================================
const path = require('path');
const express = require('express');
const app = express();
const router = require('./router');

//ミドルウェア構成(基本)====================================================================================================
app.use(express.urlencoded({ extended: false})); //基本的なプロジェクト構成用
app.use(express.json()); //すべての解析（受信JSONデータ）を変換する
app.use('/public', express.static(path.join(__dirname,'/../public'))); //パブリックフォルダ内のすべてにアクセスするように「express」に指示する
app.set('views', __dirname + '/../views'); //Webブラウザにレンダリングするファイル
app.set('view engine', 'hbs'); //使用したいエンジンテンプレートを表示する

app.use('/',router); //すべてのルーティング

app.listen(3000, () => {
    console.log('The Server is now Runnin on Port 3000');
})