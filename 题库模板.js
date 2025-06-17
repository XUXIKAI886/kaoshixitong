// 考试题目数据
const questions = [
    // 选择题部分
    {
        id: 1,
        type: "choice",
        question: "这是第一道选择题的题目？",
        options: [
            "选项A内容",
            "选项B内容",
            "选项C内容",
            "选项D内容"
        ],
        correct: 1, // 索引从0开始，此处表示选项B正确
        explanation: "这里是对正确答案的解释说明。"
    },
    {
        id: 2,
        type: "choice",
        question: "这是第二道选择题的题目？",
        options: [
            "选项A内容",
            "选项B内容",
            "选项C内容",
            "选项D内容"
        ],
        correct: 0, // 索引从0开始，此处表示选项A正确
        explanation: "这里是对正确答案的解释说明。"
    },
    // 这里添加更多选择题...
    {
        id: 10,
        type: "choice",
        question: "这是第十道选择题的题目？",
        options: [
            "选项A内容",
            "选项B内容",
            "选项C内容",
            "选项D内容"
        ],
        correct: 3, // 索引从0开始，此处表示选项D正确
        explanation: "这里是对正确答案的解释说明。"
    },
    
    // 判断题部分
    {
        id: 11,
        type: "truefalse",
        question: "这是第一道判断题的题目。",
        isTrue: true, // 表示正确答案是"正确"
        explanation: "这里是对判断题答案的解释说明。"
    },
    {
        id: 12,
        type: "truefalse",
        question: "这是第二道判断题的题目。",
        isTrue: false, // 表示正确答案是"错误"
        explanation: "这里是对判断题答案的解释说明。"
    },
    // 这里添加更多判断题...
    {
        id: 20,
        type: "truefalse",
        question: "这是第十道判断题的题目。",
        isTrue: true, // 表示正确答案是"正确"
        explanation: "这里是对判断题答案的解释说明。"
    }
];

/* 
使用说明：
1. 复制此文件中的questions数组
2. 替换美团代运营考试.html中的questions数组
3. 确保每题格式正确，特别是:
   - 选择题的correct值是从0开始的索引
   - 判断题的isTrue值是布尔值(true或false)
   - 所有字符串中的引号需要正确转义
4. 题目ID应连续编号
*/ 