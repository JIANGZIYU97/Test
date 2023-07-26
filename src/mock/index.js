var Mock=require("mockjs");

// 配置数据请求
Mock.mock("/testdata","post",require("./json/testdata.json"))