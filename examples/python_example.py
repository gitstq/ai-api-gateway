"""
蓝鹰AI网关 - Python 调用示例
BlueEagle AI Gateway - Python Example

官方文档: https://ahg.codes
"""

from openai import OpenAI

# ============ 基础配置 ============
# 替换为您的API密钥
API_KEY = "YOUR_API_KEY"
BASE_URL = "https://ahg.codes/v1"

# 初始化客户端
client = OpenAI(
    api_key=API_KEY,
    base_url=BASE_URL
)

# ============ 示例1: 基础对话 ============
def basic_chat():
    """基础对话示例"""
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": "你是一个有帮助的助手。"},
            {"role": "user", "content": "请用Python写一个Hello World程序。"}
        ]
    )
    print("基础对话结果:")
    print(response.choices[0].message.content)
    print("-" * 50)

# ============ 示例2: 流式输出 ============
def stream_chat():
    """流式输出示例"""
    print("流式输出结果:")
    stream = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "user", "content": "请介绍一下人工智能的发展历史。"}
        ],
        stream=True
    )
    for chunk in stream:
        if chunk.choices[0].delta.content:
            print(chunk.choices[0].delta.content, end="", flush=True)
    print("\n" + "-" * 50)

# ============ 示例3: 多轮对话 ============
def multi_turn_chat():
    """多轮对话示例"""
    messages = [
        {"role": "system", "content": "你是一个专业的Python编程助手。"},
        {"role": "user", "content": "什么是装饰器？"}
    ]
    
    # 第一轮
    response1 = client.chat.completions.create(
        model="gpt-4o",
        messages=messages
    )
    print("第一轮对话:")
    print(response1.choices[0].message.content)
    
    # 添加助手回复和用户追问
    messages.append({"role": "assistant", "content": response1.choices[0].message.content})
    messages.append({"role": "user", "content": "请给我一个具体的代码示例。"})
    
    # 第二轮
    response2 = client.chat.completions.create(
        model="gpt-4o",
        messages=messages
    )
    print("\n第二轮对话:")
    print(response2.choices[0].message.content)
    print("-" * 50)

# ============ 示例4: 使用Claude模型 ============
def claude_chat():
    """Claude模型调用示例"""
    response = client.chat.completions.create(
        model="claude-3-5-sonnet-20241022",
        messages=[
            {"role": "user", "content": "请解释一下量子计算的基本原理。"}
        ]
    )
    print("Claude模型结果:")
    print(response.choices[0].message.content)
    print("-" * 50)

# ============ 示例5: 使用Gemini模型 ============
def gemini_chat():
    """Gemini模型调用示例"""
    response = client.chat.completions.create(
        model="gemini-1.5-pro",
        messages=[
            {"role": "user", "content": "什么是机器学习？请简单介绍。"}
        ]
    )
    print("Gemini模型结果:")
    print(response.choices[0].message.content)
    print("-" * 50)

# ============ 示例6: 图像生成 (DALL-E) ============
def generate_image():
    """图像生成示例"""
    response = client.images.generate(
        model="dall-e-3",
        prompt="一只可爱的蓝色小猫在月光下看星星，数字艺术风格",
        size="1024x1024",
        quality="standard",
        n=1
    )
    print("生成的图像URL:")
    print(response.data[0].url)
    print("-" * 50)

# ============ 主函数 ============
if __name__ == "__main__":
    print("=" * 50)
    print("蓝鹰AI网关 - Python 调用示例")
    print("BlueEagle AI Gateway - Python Example")
    print("=" * 50)
    
    # 运行示例
    basic_chat()
    # stream_chat()  # 取消注释以运行流式输出示例
    # multi_turn_chat()  # 取消注释以运行多轮对话示例
    # claude_chat()  # 取消注释以运行Claude示例
    # gemini_chat()  # 取消注释以运行Gemini示例
    # generate_image()  # 取消注释以运行图像生成示例
