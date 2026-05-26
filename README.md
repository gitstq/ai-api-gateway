<div align="center">

# 🦅 蓝鹰AI网关 | BlueEagle AI Gateway

[![Stars](https://img.shields.io/github/stars/gitstq/ai-api-gateway?style=social)](https://github.com/gitstq/ai-api-gateway)
[![API倍率](https://img.shields.io/badge/API倍率-0.09x-brightgreen)](https://ahg.codes)
[![充值比例](https://img.shields.io/badge/充值比例-1:1-blue)](https://ahg.codes)
[![原生号池](https://img.shields.io/badge/号池-原生官方-orange)](https://ahg.codes)
[![OpenAI兼容](https://img.shields.io/badge/OpenAI-完全兼容-success)](https://ahg.codes)

**🚀 全球顶尖大模型统一API网关 | 一站式接入所有主流AI模型**

**💎 1:1充值比例 | 0.09x极致性价比 | 官方原生号池**

[🌐 官方网站](https://ahg.codes) · [📖 文档](https://ahg.codes) · [💬 联系我们](https://ahg.codes)

[English](#english) | [中文](#中文)

---

</div>

<a name="中文"></a>

## 📖 项目简介

**蓝鹰AI网关** 是一个专业的AI大模型统一API网关服务，让您通过一个API密钥即可访问全球顶尖AI模型，包括 **OpenAI GPT全系列**、**Anthropic Claude全系列**、**Google Gemini全系列** 等。

### 🎯 为什么选择我们？

| 特性 | 蓝鹰AI网关 | 官方直充 | 其他中转 |
|------|-----------|---------|---------|
| **价格** | 官方价9% (0.09x) | 100% | 30-50% |
| **充值比例** | 1:1 (充1元=1美元额度) | 1:1 | 1:0.5-0.8 |
| **号池质量** | 100%原生官方号池 | 官方 | 共享/掺假 |
| **稳定性** | 多账号负载均衡+毫秒级故障切换 | 单点 | 不稳定 |
| **迁移成本** | 零代码迁移 | - | 需改造 |

---

## ✨ 核心优势

### 💰 极致性价比
- **0.09x消耗倍率**：仅为官方定价的9%，节省高达91%成本
- **1:1充值比例**：充1元人民币 = 1美元官方额度，无汇率损失
- **按量计费**：用多少付多少，额度永久有效、不清零

### 🔐 原生官方号池
- **100%原生官方账号**，无掺假、无共享、无二次中转
- 独享账号资源，响应速度与官方一致
- 完整支持所有模型功能，无任何限制

### ⚡ 企业级稳定性
- 多账号智能负载均衡
- 毫秒级自动故障切换
- 99.9%服务可用性保障

### 🔧 零代码迁移
- 完全兼容OpenAI接口规范
- 只需修改 `base_url`，即可无缝切换
- 支持所有主流SDK和工具

---

## 📋 支持模型

### 已支持模型

| 厂商 | 模型系列 | 具体模型 |
|------|---------|---------|
| **OpenAI** | GPT-4 | gpt-4, gpt-4-turbo, gpt-4o, gpt-4o-mini |
| | GPT-3.5 | gpt-3.5-turbo, gpt-3.5-turbo-16k |
| | DALL-E | dall-e-3, dall-e-2 |
| **Anthropic** | Claude 3.5 | claude-3-5-sonnet-20241022, claude-3-5-sonnet-latest |
| | Claude 3 | claude-3-opus, claude-3-sonnet, claude-3-haiku |
| **Google** | Gemini 2.0 | gemini-2.0-flash-exp |
| | Gemini 1.5 | gemini-1.5-pro, gemini-1.5-flash |
| | Gemini 1.0 | gemini-pro |
| **Antigravity** | - | antigravity-1 |

### 即将支持

- 🔄 **DeepSeek** - 国产大模型新星
- 🔄 **通义千问** - 阿里云大模型
- 🔄 **Llama 3** - Meta开源大模型
- 🔄 **更多模型持续接入中...**

---

## 🚀 快速开始

### 1. 获取API密钥

访问 [ahg.codes](https://ahg.codes) 注册账号，即可获得测试额度。

### 2. 修改API配置

只需将您的OpenAI SDK配置中的 `base_url` 修改为：

```
https://ahg.codes/v1
```

### 3. 调用示例

#### Python 示例

```python
from openai import OpenAI

client = OpenAI(
    api_key="YOUR_API_KEY",  # 替换为您的API密钥
    base_url="https://ahg.codes/v1"  # 蓝鹰网关地址
)

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": "你是一个有帮助的助手。"},
        {"role": "user", "content": "你好，请介绍一下你自己。"}
    ]
)

print(response.choices[0].message.content)
```

#### Node.js 示例

```javascript
import OpenAI from 'openai';

const client = new OpenAI({
    apiKey: 'YOUR_API_KEY',  // 替换为您的API密钥
    baseURL: 'https://ahg.codes/v1'  // 蓝鹰网关地址
});

const response = await client.chat.completions.create({
    model: 'gpt-4o',
    messages: [
        { role: 'system', content: '你是一个有帮助的助手。' },
        { role: 'user', content: '你好，请介绍一下你自己。' }
    ]
});

console.log(response.choices[0].message.content);
```

#### cURL 示例

```bash
curl https://ahg.codes/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "gpt-4o",
    "messages": [
      {"role": "system", "content": "你是一个有帮助的助手。"},
      {"role": "user", "content": "你好，请介绍一下你自己。"}
    ]
  }'
```

---

## 💰 充值与计费

### 充值比例：1:1

| 充值金额 | 获得额度 | 官方等值 |
|---------|---------|---------|
| ¥100 | $100 额度 | $100 |
| ¥500 | $500 额度 | $500 |
| ¥1000 | $1000 额度 | $1000 |

### 消耗倍率：0.09x

| 模型 | 官方价格 | 蓝鹰价格 | 节省 |
|------|---------|---------|------|
| GPT-4o | $5.00/1M tokens | $0.45/1M tokens | 91% |
| GPT-4 Turbo | $10.00/1M tokens | $0.90/1M tokens | 91% |
| Claude 3.5 Sonnet | $3.00/1M tokens | $0.27/1M tokens | 91% |
| Gemini 1.5 Pro | $3.50/1M tokens | $0.32/1M tokens | 91% |

### 计费示例

假设您使用 GPT-4o 处理 100万 tokens：
- **官方价格**：$5.00
- **蓝鹰价格**：$5.00 × 0.09 = **$0.45**
- **节省**：$4.55 (91%)

---

## ⚔️ 竞品对比

| 对比项 | 蓝鹰AI网关 | 官方直充 | 其他中转平台 |
|-------|-----------|---------|-------------|
| **价格倍率** | 0.09x | 1.0x | 0.3-0.5x |
| **充值比例** | 1:1 | 1:1 | 1:0.5-0.8 |
| **号池类型** | 原生官方 | 官方 | 共享/掺假 |
| **稳定性** | 多账号负载均衡 | 单点 | 不稳定 |
| **迁移成本** | 零代码 | - | 需改造 |
| **测试额度** | ✅ 免费 | ❌ 无 | 部分 |
| **额度有效期** | 永久有效 | 永久有效 | 限时 |

---

## 📞 联系与支持

- 🌐 **官方网站**：[https://ahg.codes](https://ahg.codes)
- 📧 **技术支持**：通过官网联系客服
- 💬 **问题反馈**：通过官网提交工单

---

## ⚠️ 免责声明

本项目仅供学习和研究目的。使用本服务时，请遵守相关法律法规和OpenAI、Anthropic、Google等服务提供商的使用条款。本服务不存储、不分析、不泄露用户的任何对话内容。用户需自行承担使用本服务产生的一切责任。

---

<div align="center">

**⭐ 如果这个项目对您有帮助，请给我们一个Star！**

Made with ❤️ by [BlueEagle Team](https://ahg.codes)

</div>

---

<a name="english"></a>

## 📖 Introduction

**BlueEagle AI Gateway** is a professional unified API gateway for AI large language models, allowing you to access the world's top AI models with a single API key, including **OpenAI GPT series**, **Anthropic Claude series**, **Google Gemini series**, and more.

### 🎯 Why Choose Us?

| Feature | BlueEagle AI Gateway | Official | Others |
|---------|---------------------|----------|--------|
| **Price** | 9% of official (0.09x) | 100% | 30-50% |
| **Exchange Rate** | 1:1 (¥1 = $1 credit) | 1:1 | 1:0.5-0.8 |
| **Account Pool** | 100% Native Official | Official | Shared/Fake |
| **Stability** | Multi-account load balance | Single point | Unstable |
| **Migration** | Zero code change | - | Required |

---

## ✨ Key Features

### 💰 Ultimate Cost Performance
- **0.09x consumption rate**: Only 9% of official pricing, save up to 91%
- **1:1 exchange rate**: ¥1 CNY = $1 USD credit, no exchange loss
- **Pay-as-you-go**: Credits never expire

### 🔐 Native Official Account Pool
- **100% native official accounts**, no sharing, no reselling
- Dedicated account resources with official-level response speed
- Full support for all model features without restrictions

### ⚡ Enterprise-Grade Stability
- Multi-account intelligent load balancing
- Millisecond automatic failover
- 99.9% service availability guarantee

### 🔧 Zero Code Migration
- Fully compatible with OpenAI API specification
- Simply change `base_url` for seamless switching
- Supports all mainstream SDKs and tools

---

## 📋 Supported Models

### Currently Supported

| Provider | Model Series | Specific Models |
|----------|-------------|-----------------|
| **OpenAI** | GPT-4 | gpt-4, gpt-4-turbo, gpt-4o, gpt-4o-mini |
| | GPT-3.5 | gpt-3.5-turbo, gpt-3.5-turbo-16k |
| | DALL-E | dall-e-3, dall-e-2 |
| **Anthropic** | Claude 3.5 | claude-3-5-sonnet-20241022, claude-3-5-sonnet-latest |
| | Claude 3 | claude-3-opus, claude-3-sonnet, claude-3-haiku |
| **Google** | Gemini 2.0 | gemini-2.0-flash-exp |
| | Gemini 1.5 | gemini-1.5-pro, gemini-1.5-flash |
| | Gemini 1.0 | gemini-pro |
| **Antigravity** | - | antigravity-1 |

### Coming Soon

- 🔄 **DeepSeek** - Rising Chinese LLM
- 🔄 **Qwen** - Alibaba Cloud LLM
- 🔄 **Llama 3** - Meta Open Source LLM
- 🔄 **More models coming...**

---

## 🚀 Quick Start

### 1. Get Your API Key

Visit [ahg.codes](https://ahg.codes) to register and get free trial credits.

### 2. Update Your Configuration

Simply change the `base_url` in your OpenAI SDK configuration to:

```
https://ahg.codes/v1
```

### 3. Code Examples

#### Python Example

```python
from openai import OpenAI

client = OpenAI(
    api_key="YOUR_API_KEY",  # Replace with your API key
    base_url="https://ahg.codes/v1"  # BlueEagle Gateway URL
)

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Hello, please introduce yourself."}
    ]
)

print(response.choices[0].message.content)
```

#### Node.js Example

```javascript
import OpenAI from 'openai';

const client = new OpenAI({
    apiKey: 'YOUR_API_KEY',  // Replace with your API key
    baseURL: 'https://ahg.codes/v1'  // BlueEagle Gateway URL
});

const response = await client.chat.completions.create({
    model: 'gpt-4o',
    messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: 'Hello, please introduce yourself.' }
    ]
});

console.log(response.choices[0].message.content);
```

#### cURL Example

```bash
curl https://ahg.codes/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "gpt-4o",
    "messages": [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "Hello, please introduce yourself."}
    ]
  }'
```

---

## 💰 Pricing & Billing

### Exchange Rate: 1:1

| Payment Amount | Credits Received | Official Equivalent |
|---------------|------------------|---------------------|
| ¥100 | $100 credit | $100 |
| ¥500 | $500 credit | $500 |
| ¥1000 | $1000 credit | $1000 |

### Consumption Rate: 0.09x

| Model | Official Price | BlueEagle Price | Savings |
|-------|---------------|-----------------|---------|
| GPT-4o | $5.00/1M tokens | $0.45/1M tokens | 91% |
| GPT-4 Turbo | $10.00/1M tokens | $0.90/1M tokens | 91% |
| Claude 3.5 Sonnet | $3.00/1M tokens | $0.27/1M tokens | 91% |
| Gemini 1.5 Pro | $3.50/1M tokens | $0.32/1M tokens | 91% |

---

## 📞 Contact & Support

- 🌐 **Official Website**: [https://ahg.codes](https://ahg.codes)
- 📧 **Technical Support**: Contact via website
- 💬 **Issue Feedback**: Submit ticket via website

---

## ⚠️ Disclaimer

This project is for learning and research purposes only. When using this service, please comply with relevant laws and regulations and the terms of service of OpenAI, Anthropic, Google, and other service providers. This service does not store, analyze, or disclose any user conversation content. Users are solely responsible for any consequences arising from the use of this service.

---

<div align="center">

**⭐ If this project helps you, please give us a Star!**

Made with ❤️ by [BlueEagle Team](https://ahg.codes)

</div>
