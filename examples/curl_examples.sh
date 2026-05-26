#!/bin/bash

# ============================================
# 蓝鹰AI网关 - cURL 调用示例
# BlueEagle AI Gateway - cURL Examples
# 
# 官方文档: https://ahg.codes
# ============================================

# 配置您的API密钥
API_KEY="YOUR_API_KEY"
BASE_URL="https://ahg.codes/v1"

echo "============================================"
echo "蓝鹰AI网关 - cURL 调用示例"
echo "BlueEagle AI Gateway - cURL Examples"
echo "============================================"

# ============ 示例1: 基础对话 ============
echo ""
echo "示例1: 基础对话 (GPT-4o)"
echo "--------------------------------------------"

curl -s "$BASE_URL/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $API_KEY" \
  -d '{
    "model": "gpt-4o",
    "messages": [
      {"role": "system", "content": "你是一个有帮助的助手。"},
      {"role": "user", "content": "请用一句话介绍Python编程语言。"}
    ]
  }' | jq '.'

# ============ 示例2: 流式输出 ============
echo ""
echo "示例2: 流式输出 (GPT-4o)"
echo "--------------------------------------------"

curl -s "$BASE_URL/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $API_KEY" \
  -d '{
    "model": "gpt-4o",
    "messages": [
      {"role": "user", "content": "请简单介绍人工智能。"}
    ],
    "stream": true
  }'

echo ""
echo "--------------------------------------------"

# ============ 示例3: Claude模型调用 ============
echo ""
echo "示例3: Claude 3.5 Sonnet 调用"
echo "--------------------------------------------"

curl -s "$BASE_URL/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $API_KEY" \
  -d '{
    "model": "claude-3-5-sonnet-20241022",
    "messages": [
      {"role": "user", "content": "什么是量子计算？"}
    ]
  }' | jq '.'

# ============ 示例4: Gemini模型调用 ============
echo ""
echo "示例4: Gemini 1.5 Pro 调用"
echo "--------------------------------------------"

curl -s "$BASE_URL/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $API_KEY" \
  -d '{
    "model": "gemini-1.5-pro",
    "messages": [
      {"role": "user", "content": "什么是机器学习？"}
    ]
  }' | jq '.'

# ============ 示例5: 获取可用模型列表 ============
echo ""
echo "示例5: 获取可用模型列表"
echo "--------------------------------------------"

curl -s "$BASE_URL/models" \
  -H "Authorization: Bearer $API_KEY" | jq '.'

# ============ 示例6: 图像生成 (DALL-E 3) ============
echo ""
echo "示例6: 图像生成 (DALL-E 3)"
echo "--------------------------------------------"

curl -s "$BASE_URL/images/generations" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $API_KEY" \
  -d '{
    "model": "dall-e-3",
    "prompt": "一只可爱的蓝色小猫在月光下看星星，数字艺术风格",
    "size": "1024x1024",
    "quality": "standard",
    "n": 1
  }' | jq '.'

echo ""
echo "============================================"
echo "示例执行完成！"
echo "============================================"
