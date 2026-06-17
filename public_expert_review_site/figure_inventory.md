# Review Portal 图片清单

扫描来源：`assets/figures/`  
门户复制目录：`public_expert_review_site/assets/figures/`  
处理原则：只复制适合网页展示的 PNG 文件；SVG/TIF 视为源图或印刷版本，不在门户 HTML 中直接引用。所有已使用图片均采用相对路径 `assets/figures/文件名`。

## 图片库存

| 原始文件名 | 图片尺寸 | 初步判断的图片内容 | 建议放置页面 | 是否可能包含敏感信息 | 是否已复制到 `public_expert_review_site/assets/figures/` |
|---|---:|---|---|---|---|
| `Figure_1_DSR_PCIO_Toolkit_final.png` | 3600×2200 | DSR研究过程与PCIO Toolkit开发活动映射 | `index.html`：DSR研究过程 | 否；研究流程图，不含企业数据 | 是 |
| `Figure_1_DSR_PCIO_Toolkit_final.svg` | 1800×1100 | DSR研究过程源图/矢量版本 | 不直接放置；PNG版本已使用 | 否 | 否；已有PNG网页版 |
| `Figure_2_PCIO_Architecture_SCI.png` | 4800×3600 | PCIO Toolkit总体架构与数据流 | `artifact_overview.html`：工具包模块结构 | 否；架构图，不含企业数据 | 是 |
| `Figure_2_PCIO_Architecture_SCI.svg` | 2400×1800 | PCIO Toolkit总体架构源图/矢量版本 | 不直接放置；PNG版本已使用 | 否 | 否；已有PNG网页版 |
| `Figure_2_PCIO_Architecture_SCI_600dpi.tif` | 4800×3600 | PCIO Toolkit总体架构高分辨率印刷版本 | 不放置到网页 | 否 | 否；文件较大且有PNG网页版 |
| `Figure_3_PCIO_Input_Interface.png` | 3600×2400 | 企业画像与匿名问卷界面示例 | `module_demo.html`：问卷结构 | 否；显示匿名/合成演示内容 | 是 |
| `Figure_3_PCIO_Input_Interface_300dpi.tif` | 3600×2400 | 企业画像与匿名问卷界面高分辨率版本 | 不放置到网页 | 否；与PNG内容重复 | 否；文件较大且有PNG网页版 |
| `Figure_4_Statistical_Dashboard.png` | 3600×2500 | PCIO得分、统计仪表盘和分析输出示例 | `module_demo.html`、`evidence_package.html`、`case_p.html`、`case_t.html` | 否；合成/示例输出，但含统计与ROI情景字段，需边界图注 | 是 |
| `Figure_4_Statistical_Dashboard_300dpi.tif` | 3600×2500 | 统计仪表盘高分辨率版本 | 不放置到网页 | 否；与PNG内容重复 | 否；文件较大且有PNG网页版 |
| `Figure_5_Risk_Matrix.png` | 3600×2300 | 风险矩阵、KPI建议和ROI估算输出示例 | `module_demo.html`、`case_p.html`、`case_t.html` | 否；合成/示例输出，但含风险与KPI目标字段，需边界图注 | 是 |
| `Figure_5_Risk_Matrix_300dpi.tif` | 3600×2300 | 风险矩阵高分辨率版本 | 不放置到网页 | 否；与PNG内容重复 | 否；文件较大且有PNG网页版 |
| `Figure_6_Bilingual_Case_Report.png` | 3600×1660 | 中英双语个性化案例报告示例 | `module_demo.html`：报告导出示例 | 否；合成演示报告，但含合成改善数值，需明确不是绩效证据 | 是 |
| `Figure_6_Bilingual_Case_Report_300dpi.tif` | 3600×1660 | 双语报告高分辨率版本 | 不放置到网页 | 否；与PNG内容重复 | 否；文件较大且有PNG网页版 |
| `Figure_7_PDCA_Improvement_Plan.png` | 3600×1800 | PDCA改进计划、ROI情景和复测里程碑示例 | `artifact_overview.html`、`module_demo.html` | 否；合成演示输出，但含ROI情景，需明确不是ROI验证 | 是 |
| `Figure_7_PDCA_Improvement_Plan_300dpi.tif` | 3600×1800 | PDCA计划高分辨率版本 | 不放置到网页 | 否；与PNG内容重复 | 否；文件较大且有PNG网页版 |
| `Figure_8_Streamlit_Interface.png` | 3200×2200 | PCIO Toolkit中文界面/企业画像空表单示例 | `module_demo.html`：企业画像 | 否；空表单和通用提示，不含真实企业数据 | 是 |
| `Figure_8_Streamlit_Interface_300dpi.tif` | 3200×2200 | Streamlit界面高分辨率版本 | 不放置到网页 | 否；与PNG内容重复 | 否；文件较大且有PNG网页版 |

## 分类结论

- A. PCIO四层模型图：源目录中未发现单独的四层模型图；相关PCIO层级通过网页文字和统计/架构图辅助说明。
- B. DSR研究过程图：`Figure_1_DSR_PCIO_Toolkit_final.png` 已放入 `index.html`。
- C. 工具总体架构图/数据流图：`Figure_2_PCIO_Architecture_SCI.png` 已放入 `artifact_overview.html`。
- D. 问卷界面/企业画像截图：`Figure_3_PCIO_Input_Interface.png` 和 `Figure_8_Streamlit_Interface.png` 已放入 `module_demo.html`。
- E. PCIO得分图/统计图：`Figure_4_Statistical_Dashboard.png` 已放入 `module_demo.html`，并作为案例页输出格式示例放入 `case_p.html` 与 `case_t.html`。
- F. 风险矩阵图：`Figure_5_Risk_Matrix.png` 已放入 `module_demo.html`、`case_p.html` 和 `case_t.html`。
- G. KPI建议图：`Figure_5_Risk_Matrix.png` 含KPI建议区，已放入 `module_demo.html`、`case_p.html` 和 `case_t.html`。
- H. ROI情景图：`Figure_7_PDCA_Improvement_Plan.png` 已放入 `module_demo.html`，图注说明其为情景估算，不是ROI验证。
- I. PDCA流程图：`Figure_7_PDCA_Improvement_Plan.png` 已放入 `artifact_overview.html` 和 `module_demo.html`。
- J. 自动化测试截图/测试通过截图：源目录中未发现明确的自动化测试通过截图；`Figure_4_Statistical_Dashboard.png` 仅作为工具分析界面示例放入 `evidence_package.html`，未写作测试通过截图。

## 需人工确认图片

未发现无法识别内容的图片，因此未生成需人工判断的未放置图片页面。若后续加入新截图，应重新执行隐私和证据边界检查。
