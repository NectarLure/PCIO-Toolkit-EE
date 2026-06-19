# PCIO Expert Review Portal

这是一个用于 DSR 论文专家评审的轻量级中英双语静态网站。它不包含登录系统、不连接数据库、不上传专家评分，也不展示原始企业数据。

## 本地打开方式

方式一：直接双击或在浏览器中打开：

```text
public_expert_review_site/index.html
```

方式二：在项目根目录运行本地静态服务：

```bash
cd public_expert_review_site
python -m http.server 8080
```

然后访问：

```text
http://localhost:8080
```

中文页面右上角提供 `English` 按钮，英文页面右上角提供 `中文` 按钮，可在对应页面之间切换。

## 页面结构

- `index.html`：研究目的、DSR 定位、证据边界和专家审核流程。
- `artifact_overview.html`：PCIO 四层模型、诊断闭环、模块结构和设计原则。
- `module_demo.html`：模块输出结构演示，使用占位图和脱敏摘要。
- `evidence_package.html`：自动化测试、合成案例、真实 T0 案例和证据边界表。
- `case_p.html`：案例P流程生产型企业 T0 基线诊断。
- `case_t.html`：案例T罐区储运运营场景 T0 基线诊断。
- `expert_review.html`：空白专家评分表和开放式问题。
- `downloads.html`：专家审核材料清单和安全下载链接。

## 使用边界

本门户只服务于专家形成性审核。真实案例仅用于 T0 基线诊断和场景适配性讨论；合成案例仅用于流程测试和规则响应演示；自动化测试仅用于技术正确性、功能完整性和模块一致性说明；ROI 仅作为情景估算工具。

当前门户不支持声称部署后改善、因果效果、真实 ROI 实现或长期运行结果。
