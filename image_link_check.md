# Review Portal 图片链接检查

检查日期：2026-06-17  
检查范围：`public_expert_review_site/*.html` 与 `public_expert_review_site/assets/figures/`

## HTML图片引用检查

| HTML页面 | 图片引用 | 文件是否存在 | 说明 |
|---|---|---:|---|
| `index.html` | `assets/figures/Figure_1_DSR_PCIO_Toolkit_final.png` | 是 | DSR研究过程图，用于研究设计说明。 |
| `artifact_overview.html` | `assets/figures/Figure_2_PCIO_Architecture_SCI.png` | 是 | 工具总体架构与数据流图。 |
| `artifact_overview.html` | `assets/figures/Figure_7_PDCA_Improvement_Plan.png` | 是 | PDCA与ROI情景示例；图注已说明为合成演示输出。 |
| `module_demo.html` | `assets/figures/Figure_8_Streamlit_Interface.png` | 是 | 企业画像界面空表单/通用提示示例。 |
| `module_demo.html` | `assets/figures/Figure_3_PCIO_Input_Interface.png` | 是 | 企业画像与匿名问卷界面示例。 |
| `module_demo.html` | `assets/figures/Figure_4_Statistical_Dashboard.png` | 是 | PCIO得分与统计仪表盘示例。 |
| `module_demo.html` | `assets/figures/Figure_5_Risk_Matrix.png` | 是 | 风险矩阵输出示例。 |
| `module_demo.html` | `assets/figures/Figure_5_Risk_Matrix.png` | 是 | KPI建议输出示例，同一图片中包含KPI区域。 |
| `module_demo.html` | `assets/figures/Figure_7_PDCA_Improvement_Plan.png` | 是 | ROI情景估算与PDCA计划示例。 |
| `module_demo.html` | `assets/figures/Figure_6_Bilingual_Case_Report.png` | 是 | 双语报告导出示例。 |
| `evidence_package.html` | `assets/figures/Figure_4_Statistical_Dashboard.png` | 是 | 技术评价/分析界面示例，不是绩效证据。 |
| `case_p.html` | `assets/figures/Figure_4_Statistical_Dashboard.png` | 是 | PCIO基线图表输出格式示例，不是案例P原始截图。 |
| `case_p.html` | `assets/figures/Figure_5_Risk_Matrix.png` | 是 | 风险矩阵输出格式示例，不是案例P真实现场风险定级。 |
| `case_p.html` | `assets/figures/Figure_5_Risk_Matrix.png` | 是 | KPI建议输出格式示例，不表示案例P已有KPI改善。 |
| `case_t.html` | `assets/figures/Figure_4_Statistical_Dashboard.png` | 是 | PCIO基线图表输出格式示例，不是案例T原始截图。 |
| `case_t.html` | `assets/figures/Figure_5_Risk_Matrix.png` | 是 | 风险矩阵输出格式示例，不是案例T真实现场风险定级。 |
| `case_t.html` | `assets/figures/Figure_5_Risk_Matrix.png` | 是 | KPI建议输出格式示例，不表示案例T已有运营改善。 |

## 缺失图片检查

未发现缺失图片。所有 HTML 中的 `<img>` 引用均能解析到 `public_expert_review_site/assets/figures/` 下的实际文件。

## 绝对路径检查

未发现本地绝对路径、文件协议路径或以根目录开头的图片引用。所有 HTML 图片引用均使用相对路径：

```text
assets/figures/文件名
```

## 潜在隐私风险检查

未发现真实企业名称、人员信息、真实设备编号、车牌、客户名称、供应商名称、精确地址或罐区安防细节进入图片引用或图注。

仍需注意的非隐私风险：

- `Figure_6_Bilingual_Case_Report.png` 包含合成演示数值，可能被误读为真实绩效结果；已在图注中声明为合成演示报告，不表示部署后绩效改善。
- `Figure_7_PDCA_Improvement_Plan.png` 包含ROI情景和复测里程碑，可能被误读为真实ROI实现；已在图注中声明ROI仅为情景估算，不代表真实收益验证。
- `Figure_4_Statistical_Dashboard.png` 包含统计仪表盘和ROI字段，可能被误读为量表效度或绩效证据；已在图注中声明不表示真实组织部署后改善或量表效度已完成验证。
- `Figure_5_Risk_Matrix.png` 包含风险和KPI目标示例，可能被误读为案例P/案例T真实现场结果；已在案例页图注中声明为输出格式示例。

## 结论

图片缺失问题已修复。当前门户页面引用的图片均已复制到 `public_expert_review_site/assets/figures/`，且均使用相对路径。图片使用仍需遵守DSR证据边界：合成/示例图只用于说明人工制品结构和模块输出形式，不得写成真实部署、绩效提升或ROI实现证据。
