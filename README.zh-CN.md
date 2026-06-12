# Silora 欧洲市场综合冲刺项目

这是一个为期两周的实践型学习项目，帮助你同时训练：

- 使用 Codex 规划、开发、调试、审查和复盘
- 欧洲 B2B 市场分析与精准客户开发
- Figma 营销网页设计
- HTML、CSS 和 JavaScript 网页开发
- Git、GitHub 与网站发布

项目围绕虚构品牌 **Silora Works** 展开。它演示一家硅胶 ODM/OEM
工厂如何向欧洲买家介绍可定制食品收纳产品。

> 重要：项目中的工厂能力、认证、产能、客户、MOQ 和产品性能都是
> 学习占位内容。没有经过真实验证前，不能用于正式销售或对外宣传。

## 在线成果

- [工厂英文官网](https://wytkathy.github.io/silicone-europe-sprint/)
- [产品营销落地页](https://wytkathy.github.io/silicone-europe-sprint/product.html)
- [GitHub 项目仓库](https://github.com/Wytkathy/silicone-europe-sprint)
- [可编辑 Figma 设计稿](https://www.figma.com/design/dxvmo3dt9BDLzjWYsEIVh0)

## 你应该如何学习

这个项目已经提供了完整范例，但你的目标不是浏览成品，而是逐步理解、
修改和重建它。

每天使用以下学习循环：

1. 阅读当天任务和相关文件。
2. 先自己尝试研究、设计或修改代码。
3. 让 Codex 检查你的工作，而不是立即替你完成全部内容。
4. 修正问题，并向 Codex解释你为什么这样修改。
5. 记录当天学会的概念、遇到的问题和第二天行动。

推荐对 Codex 使用下面的提示词：

```text
目标：
背景：
我目前的理解：
约束：
完成标准：

请作为我的教练。先让我尝试下一个小步骤，再检查并解释我的错误。
除非我真的卡住，否则不要直接替我完成整个任务。
```

## 14 天学习路线

完整任务位于
[`curriculum/14-day-sprint.md`](curriculum/14-day-sprint.md)。

- [DAY1 制造工厂市场分析入门课（Word）](DAY1/DAY1_制造工厂市场分析入门课.docx)
- [DAY1 课程正文（Markdown）](DAY1/市场分析入门课.md)

| 阶段 | 主要内容 | 预期成果 |
|---|---|---|
| 第 1–3 天 | 市场方向、HTML/CSS、Figma 基础、资料来源 | 理解项目结构并能修改简单页面 |
| 第 4–5 天 | 客户价值主张、网页结构和视觉系统 | 能解释官网每个区域的商业目的 |
| 第 6–8 天 | 官网开发、响应式布局与质量优化 | 能理解和修改工厂官网 |
| 第 9–10 天 | 深度客户研究与产品落地页设计 | 能根据目标客户选择页面表达 |
| 第 11–12 天 | 落地页开发与个性化开发信 | 能完成客户研究到沟通内容的转换 |
| 第 13–14 天 | 测试、发布、独立实战与复盘 | 能独立完成一个简化营销首屏 |

建议每天投入：

- `3 小时`：欧洲市场与客户开发
- `2 小时`：Figma 与视觉设计
- `5 小时`：HTML、CSS 和 JavaScript
- `1 小时`：Codex调试与审查
- `1 小时`：整理知识和复盘

## 项目文件导航

### 市场与销售

- [`research/market-analysis.md`](research/market-analysis.md)  
  解释为什么首个训练市场选择德国，以及理想客户和评分方法。

- [`research/target-accounts.csv`](research/target-accounts.csv)  
  包含 30 家欧洲目标客户、公开来源、机会假设和优先级。

- [`research/deep-profiles.md`](research/deep-profiles.md)  
  包含 10 家重点客户档案，以及独立研究新客户的模板。

- [`sales/outreach-playbook.md`](sales/outreach-playbook.md)  
  包含角色价值主张、个性化开发信、跟进节奏和异议练习。

### 网页与设计

- [`site/index.html`](site/index.html)  
  工厂英文官网首页的 HTML 结构。

- [`site/product.html`](site/product.html)  
  LoopSeal 产品营销落地页。

- [`site/styles.css`](site/styles.css)  
  两个网页共用的颜色、排版、布局和响应式样式。

- [`site/app.js`](site/app.js)  
  移动菜单和演示表单的基础 JavaScript 交互。

- [Figma 设计稿](https://www.figma.com/design/dxvmo3dt9BDLzjWYsEIVh0)  
  包含官网与产品页的桌面端、移动端画板。

### 学习与检查

- [`checklists/quality-checklists.md`](checklists/quality-checklists.md)  
  市场研究、开发信、Figma 和网页质量检查清单。

- [`AGENTS.md`](AGENTS.md)  
  Codex 在这个项目中需要长期遵守的工作规范。

- [`IMPLEMENTATION.md`](IMPLEMENTATION.md)  
  已完成内容、验证结果和当前已知限制。

## 在电脑上运行网页

打开终端并进入项目文件夹：

```bash
cd /Users/qwe/Desktop/Codex/silicone-europe-sprint
npm run dev
```

然后在浏览器访问：

- 官网：`http://localhost:4173/site/`
- 产品页：`http://localhost:4173/site/product.html`

停止本地服务器时，在终端按 `Control + C`。

## 修改网页后的检查流程

每次完成一系列修改后运行：

```bash
npm run typecheck
npm test
npm run build
```

这些命令分别用于：

- `npm run typecheck`：检查 JavaScript 语法
- `npm test`：检查页面安全声明、基础无障碍和客户表数量
- `npm run build`：将可发布网页复制到 `dist/`

还需要亲自在浏览器中检查：

- 手机和桌面宽度是否正常
- 是否出现横向滚动
- 菜单、按钮、FAQ 和演示表单是否正常
- 页面内容是否符合目标客户需求
- 是否出现未经验证的工厂或产品声明

## 使用 Git 保存修改

查看当前修改：

```bash
git status
```

保存一次有意义的修改：

```bash
git add .
git commit -m "描述这次修改"
git push origin main
```

不要在不理解修改内容时直接运行 `git add .`。先使用 `git status` 和
`git diff` 检查文件变化。

## 更新公开网站

公开网页使用 `gh-pages` 分支，来源是构建后的 `dist/` 文件夹。

完成网页修改并通过检查后：

```bash
npm run build
git add .
git commit -m "描述这次网页更新"
git push origin main
git subtree push --prefix dist origin gh-pages
```

GitHub Pages 通常需要几十秒完成更新。公开网址保持不变。

## 欧洲客户开发的使用原则

目标客户表和开发信只是研究训练，不代表这些公司正在寻找供应商。

正式联系客户前必须：

- 重新访问官方来源，确认信息仍然准确
- 将事实和商业机会假设分开
- 不猜测客户的采购需求、联系人或现有供应商情况
- 不承诺未经工厂确认的认证、MOQ、交期或产品性能
- 确认目标市场适用的隐私、营销和产品合规要求
- 对每一封开发信进行人工审核

## 建议的第一个练习

不要立即重写整个网站。先完成下面的小练习：

1. 阅读市场分析并用自己的话解释为什么选择德国厨房用品市场。
2. 打开工厂官网，指出首屏的目标客户和行动号召。
3. 在 `site/index.html` 中修改一段文字。
4. 运行类型检查、测试和构建。
5. 在手机宽度下检查页面。
6. 向 Codex解释你的修改如何帮助欧洲 B2B 买家。

完成后，再进入课程的第 2 天。
