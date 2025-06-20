# 美团运营考试系统

## 项目概述

本项目是一个基于Web的美团运营考试系统，用于测试用户对美团外卖运营知识的掌握程度。系统包含三个主要模块：首页、考试模式和复习模式。系统采用纯前端实现，无需后端服务器支持，可直接在浏览器中运行。

## 功能特点

### 首页 (index.html)
- 系统入口，提供考试模式和复习模式的导航
- 简洁美观的界面设计
- 显示系统基本信息和使用说明

### 考试模式 (exam.html)
- 随机从题库中抽取20道题目（15道选择题和5道判断题）
- 题目随机排序，每次考试题目不同
- 实时显示答题进度和剩余时间
- 支持答题卡功能，方便跳转到任意题目
- 考试结束后自动评分，显示得分和正确率
- 提供答案解析，帮助学习和理解

### 复习模式 (review.html)
- 展示完整题库内容，便于系统学习
- 按题型分类展示（选择题和判断题）
- 可查看答案和解析
- 支持分页浏览

## 技术实现

- **前端技术**：HTML5, CSS3, JavaScript (ES6+)
- **UI框架**：Tailwind CSS
- **数据存储**：内置JSON格式题库
- **响应式设计**：适配不同屏幕尺寸

## 项目结构

```
├── index.html          # 系统首页
├── exam.html           # 考试模式页面
├── review.html         # 复习模式页面
├── 题库120.txt          # 原始题库文本文件
├── 美团代运营考试.html    # 参考文件
├── 美团代运营考试.zip     # 项目备份文件
├── 美团运营完整流程.txt   # 美团运营知识参考资料
├── 美团运营手册.txt      # 美团运营知识参考资料
├── 商家群消息专业回复.txt # 美团运营知识参考资料
├── 考试系统规则文档.mdc   # 系统规则说明文档
├── 题库生成器.mdc        # 题库生成工具说明文档
└── 题库模板.js          # 题库模板文件
```

## 题库说明

系统内置题库包含：
- **选择题**：70道
- **判断题**：40道
- **总题量**：110道

题库内容涵盖美团外卖运营的各个方面，包括但不限于：
- 天天神券使用规则
- 点金推广策略
- 铂金展位投放
- 套餐搭配原则
- 商家运营技巧
- 客户服务标准
- 价格策略调整
- 评价回复技巧

## UI设计特色

系统采用现代化的UI设计，具有以下特点：

1. **统一的设计语言**
   - 三个页面（首页、考试、复习）采用统一的设计风格
   - 一致的色彩方案：以橙色为主色调，绿色为辅助色
   - 统一的组件样式：按钮、卡片、导航栏等保持一致性

2. **现代化视觉效果**
   - 渐变色背景和按钮
   - 卡片悬浮效果和微妙阴影
   - 平滑过渡动画
   - 响应式布局，适配不同设备

3. **用户体验优化**
   - 清晰的导航结构
   - 居中对齐的标题，提升品牌识别度
   - 直观的操作界面
   - 醒目的按钮和交互元素

4. **性能优化**
   - 轻量级CSS实现，不影响加载速度
   - 渐进式加载内容
   - 优化的动画效果，不影响页面性能

## 使用指南

### 系统启动
1. 直接在浏览器中打开 `index.html` 文件
2. 点击相应按钮进入考试模式或复习模式

### 考试模式操作
1. 点击"开始考试"按钮进入考试页面
2. 系统随机生成20道题目（15道选择题和5道判断题）
3. 答题过程中可通过"上一题"、"下一题"按钮或答题卡导航
4. 答完所有题目后点击"提交"按钮结束考试
5. 查看考试结果和答案解析
6. 可点击"重新考试"按钮再次测试

### 复习模式操作
1. 点击"复习模式"按钮进入复习页面
2. 浏览完整题库内容
3. 点击题目可查看答案和解析
4. 使用分页功能浏览更多题目

## 系统要求

- 现代浏览器（Chrome, Firefox, Safari, Edge等）
- 支持JavaScript
- 建议屏幕分辨率不低于1024×768

## 维护与更新

### 题库更新方法
如需更新题库，可修改 `exam.html` 和 `review.html` 文件中的题库数据部分。题库采用JSON格式，结构如下：

```javascript
// 选择题格式
{
    id: 数字ID,
    type: "choice",
    question: "题目内容",
    options: [
        "选项A",
        "选项B",
        "选项C",
        "选项D"
    ],
    correct: 正确选项索引(0-3),
    explanation: "解析内容"
}

// 判断题格式
{
    id: 数字ID,
    type: "truefalse",
    question: "题目内容",
    isTrue: true/false,
    explanation: "解析内容"
}
```

### 界面定制
可通过修改HTML和CSS代码自定义界面样式和布局。主要样式定义在各HTML文件的`<style>`标签中。

## 注意事项

- 本系统为纯前端实现，不保存考试记录
- 刷新页面或关闭浏览器将丢失当前考试进度
- 考试时间默认为30分钟，可在代码中调整

## 版权信息

本项目仅供学习和培训使用，题库内容基于美团外卖运营知识整理。 