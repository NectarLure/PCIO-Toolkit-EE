# Broken Link Check

检查对象：`public_expert_review_site/*.html`，包括中文页面与英文 `_en.html` 页面。  
检查方法：解析 HTML 中所有 `href` 和 `src` 相对链接，确认目标文件存在于 `public_expert_review_site/` 内部。

## 检查结果

未发现失效链接。

## 页面链接摘要

| 页面 | 主要内部链接类型 | 状态 |
|---|---|---|
| `index.html` | 导航链接、DSR流程图 | 正常 |
| `index_en.html` | 英文导航链接、DSR流程图、中文切换按钮 | 正常 |
| `artifact_overview.html` | 导航链接、架构图、PDCA图 | 正常 |
| `artifact_overview_en.html` | 英文导航链接、架构图、PDCA图、中文切换按钮 | 正常 |
| `module_demo.html` | 导航链接、界面图、统计图、风险矩阵图、报告图 | 正常 |
| `module_demo_en.html` | 英文导航链接、界面图、统计图、风险矩阵图、报告图、中文切换按钮 | 正常 |
| `evidence_package.html` | 导航链接、统计仪表盘图 | 正常 |
| `evidence_package_en.html` | 英文导航链接、统计仪表盘图、中文切换按钮 | 正常 |
| `case_p.html` | 导航链接、PCIO图表格式示例、风险矩阵图 | 正常 |
| `case_p_en.html` | 英文导航链接、PCIO图表格式示例、风险矩阵图、中文切换按钮 | 正常 |
| `case_t.html` | 导航链接、PCIO图表格式示例、风险矩阵图 | 正常 |
| `case_t_en.html` | 英文导航链接、PCIO图表格式示例、风险矩阵图、中文切换按钮 | 正常 |
| `expert_review.html` | 导航链接、空白评分表、CSV表、填写说明 | 正常 |
| `expert_review_en.html` | 英文导航链接、英文空白评分表、英文CSV表、英文填写说明、中文切换按钮 | 正常 |
| `downloads.html` | 导航链接、公开下载材料、公开专家审核材料包、公开检查文件 | 正常 |
| `downloads_en.html` | 英文导航链接、中英下载材料、公开专家审核材料包、中文切换按钮 | 正常 |

## 私有材料链接处理

公开版不保留指向论文初稿、内部投稿材料、内部专家评审方案或内部证据检查文件的有效链接。相关位置已改为：

> 该材料不在公开版本中提供，如需学术合作或专家审核材料，请联系作者。

## 绝对路径检查

未发现 HTML 页面使用本地绝对路径或文件协议路径。图片、样式、脚本、语言切换链接和下载材料均使用相对路径。
