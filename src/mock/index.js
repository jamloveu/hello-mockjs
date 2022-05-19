import Mock from "mockjs";

const { newsList } = Mock.mock({
    "newsList|10": [
        {
            id: "@increment",
            date: "@date(yyyy-MM-dd hh:mm:ss)",
            name: "@cname()",
            title: "@ctitle",
            address:"江苏省-苏州市-@cword(10)",
            paragraph:"江苏省-苏州市-@cparagraph(1,5)",
            img: "@image('50*50','#FF83FA','#FCFCFC','png','mono')",
            "string|2-4":"哈哈",
            "age|1-99":1
        },
    ],
});

// var getQuery = (url, name) => {
//     console.log(url, name);
//     const index = url.indexOf("?");
//     if (index !== -1) {
//         const queryStrArr = url.substr(index + 1).split("&");
//         for (var i = 0; i < queryStrArr.length; i++) {
//             const itemArr = queryStrArr[i].split("=");
//             console.log(itemArr);
//             if (itemArr[0] === name) {
//                 return itemArr[1];
//             }
//         }
//     }
//     return null;
// };

// 定义获取新闻列表的数据
// /api/get/news?pageinde1&pagesize=10
Mock.mock(/\/api\/get\/news/, "get", () => {
    return {
        status: 200,
        message: "获取新闻列表成功",
        list: newsList
    };
});

// 定义添加新闻的数据
Mock.mock("/api/add/news", "post", (options) => {
    const body = JSON.parse(options.body);
    console.log(body);
    newsList.push(
        Mock.mock({
            id: "@increment",
            title: body.title,
            content: body.content,
            img_url: "@image('50*50','#FF83FA','#FCFCFC','png','mono')",
            add_time: "@date(yyyy-MM-dd hh:mm:ss)",
        })
    );
    return {
        status: 200,
        message: "添加成功",
        list: newsList,
        total: newsList.length,
    };
});

// 定义删除新闻
Mock.mock("/api/delete/news", "post", (options) => {
    const body = JSON.parse(options.body);
    const index = newsList.findIndex((item) => {
        return item.id === body.id;
    });
    newsList.splice(index, 1);
    return {
        status: 200,
        message: "添加成功",
        list: newsList,
        total: newsList.length,
    };
});
