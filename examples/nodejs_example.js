/**
 * 蓝鹰AI网关 - Node.js 调用示例
 * BlueEagle AI Gateway - Node.js Example
 * 
 * 官方文档: https://ahg.codes
 */

import OpenAI from 'openai';

// ============ 基础配置 ============
const API_KEY = 'YOUR_API_KEY';  // 替换为您的API密钥
const BASE_URL = 'https://ahg.codes/v1';

// 初始化客户端
const client = new OpenAI({
    apiKey: API_KEY,
    baseURL: BASE_URL
});

// ============ 示例1: 基础对话 ============
async function basicChat() {
    const response = await client.chat.completions.create({
        model: 'gpt-4o',
        messages: [
            { role: 'system', content: '你是一个有帮助的助手。' },
            { role: 'user', content: '请用JavaScript写一个Hello World程序。' }
        ]
    });
    console.log('基础对话结果:');
    console.log(response.choices[0].message.content);
    console.log('-'.repeat(50));
}

// ============ 示例2: 流式输出 ============
async function streamChat() {
    console.log('流式输出结果:');
    const stream = await client.chat.completions.create({
        model: 'gpt-4o',
        messages: [
            { role: 'user', content: '请介绍一下人工智能的发展历史。' }
        ],
        stream: true
    });
    
    for await (const chunk of stream) {
        process.stdout.write(chunk.choices[0]?.delta?.content || '');
    }
    console.log('\n' + '-'.repeat(50));
}

// ============ 示例3: 多轮对话 ============
async function multiTurnChat() {
    const messages = [
        { role: 'system', content: '你是一个专业的JavaScript编程助手。' },
        { role: 'user', content: '什么是闭包？' }
    ];
    
    // 第一轮
    const response1 = await client.chat.completions.create({
        model: 'gpt-4o',
        messages: messages
    });
    console.log('第一轮对话:');
    console.log(response1.choices[0].message.content);
    
    // 添加助手回复和用户追问
    messages.push({ role: 'assistant', content: response1.choices[0].message.content });
    messages.push({ role: 'user', content: '请给我一个具体的代码示例。' });
    
    // 第二轮
    const response2 = await client.chat.completions.create({
        model: 'gpt-4o',
        messages: messages
    });
    console.log('\n第二轮对话:');
    console.log(response2.choices[0].message.content);
    console.log('-'.repeat(50));
}

// ============ 示例4: 使用Claude模型 ============
async function claudeChat() {
    const response = await client.chat.completions.create({
        model: 'claude-3-5-sonnet-20241022',
        messages: [
            { role: 'user', content: '请解释一下量子计算的基本原理。' }
        ]
    });
    console.log('Claude模型结果:');
    console.log(response.choices[0].message.content);
    console.log('-'.repeat(50));
}

// ============ 示例5: 使用Gemini模型 ============
async function geminiChat() {
    const response = await client.chat.completions.create({
        model: 'gemini-1.5-pro',
        messages: [
            { role: 'user', content: '什么是机器学习？请简单介绍。' }
        ]
    });
    console.log('Gemini模型结果:');
    console.log(response.choices[0].message.content);
    console.log('-'.repeat(50));
}

// ============ 示例6: 图像生成 (DALL-E) ============
async function generateImage() {
    const response = await client.images.generate({
        model: 'dall-e-3',
        prompt: '一只可爱的蓝色小猫在月光下看星星，数字艺术风格',
        size: '1024x1024',
        quality: 'standard',
        n: 1
    });
    console.log('生成的图像URL:');
    console.log(response.data[0].url);
    console.log('-'.repeat(50));
}

// ============ 主函数 ============
async function main() {
    console.log('='.repeat(50));
    console.log('蓝鹰AI网关 - Node.js 调用示例');
    console.log('BlueEagle AI Gateway - Node.js Example');
    console.log('='.repeat(50));
    
    try {
        await basicChat();
        // await streamChat();  // 取消注释以运行流式输出示例
        // await multiTurnChat();  // 取消注释以运行多轮对话示例
        // await claudeChat();  // 取消注释以运行Claude示例
        // await geminiChat();  // 取消注释以运行Gemini示例
        // await generateImage();  // 取消注释以运行图像生成示例
    } catch (error) {
        console.error('错误:', error.message);
    }
}

main();
