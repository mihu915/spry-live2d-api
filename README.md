# 一. 概述：

该项目为 spry-live2d 的后端 API 服务，如果你需要自行搭建 spry-live2d 提供的所有服务，则需要配合前端代码使用，前端代码的使用可参考：[spry-live2d](https://github.com/mihu915/spry-live2d)，如果你已经了解如何使用前端项目代码，还需部署后端服务，则可参考以下部署方式。

# 二. 运行环境：

该项目的运行需依赖 nodejs 开发环境，如何搭建 node，请自行从网上查找方案，本文档不做讲解。

# 二. 项目部署：

将该仓库的代码 clone 至本地，cd 到项目根目录下。

1. 执行`npm install`安装项目依赖。
2. 本地环境下执行 `npm run dev` 将前台运行该项目，默认端口为 8181.并自动启动静态资源服务，无需再额外搭建静态资源服务器。
3. 云服务器环境下，在项目根目录中执行`npm run start`将后台运行该项目，并启动静态资源服务器
4. `npm run log` 查看执行日志
5. `npm run status` 查看执行状态
6. `npm run restart` 重启服务
7. `npm run stop` 停止服务

# 三.接口文档：

1.  `/model/get ` 根据模型 id 和皮肤 id 获取指定的模型数据。

    > - get 请求：参数 1：`model_id` 对应模型 id，参数 2： `textures_id` 对应皮肤 id。
    > - 示例：`/model/get?model_id=0&textures_id=0`  
    >   若你对这两个参数有什么疑问，请参考[spry-live2d](https://github.com/mihu915/spry-live2d)的第六项：模型 id 对应关系。

2.  `/model/list` 获取模型列表数据。

    > - get 请求，无参数

3.  `/model/next` 获取下一个模型数据，将根据当前模型的 id 返回下一个模型的第一个皮肤的数据。

    > - get 请求，参数 1：model_id 当前模型的 id

4.  `/textures/next` 根据当前模型的当前皮肤，获取下一个皮肤的数据。
    > - get 请求，参数 1：model_id 当前模型的 id，参数 2：textures_id 当前皮肤的 id

# 四.更新日志：
1. 模型可切换至下一个
2. 皮肤可切换至下一个
3. 获取模型数据列表

# 五.版权声明：
### 版本号：v1.0.0
本项目所使用的，用作展示的所有 Live2D 模型、图片、动作数据等版权均属于其原作者所有，本项目所提供的模型相关资源仅供参考和学习使用，未经作者许可不得使用于任何商业用途。

Live2D 官方网站：   
https://www.live2d.com/en/   
https://live2d.github.io

# 许可证
Released under the GNU General Public License v3     
http://www.gnu.org/licenses/gpl-3.0.html