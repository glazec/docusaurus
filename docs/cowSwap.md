# CowSwap

![CowSwap Banner](/img/cowSwap.png)

[CowSwap](https://cowswap.exchange/#/) 是 [Gnosis](https://gnosis.io/) 在正式推出 GPV2（Gnosis Protocol V2) 前的一次尝试。未来这些新功能也会集成到 [Balancer](https://balancer.finance/) 中。 CowSwap 使用链下撮合交易的方式。在不采用流动性提供者的情况下 CowSwap 为用户提供低手续费的代币兑换服务。

### ⚙️ 使用流程

使用 CowSwap 进行代币兑换的流程与其他 DEX 差别不大。选好交易对后，点击 Approve Allowance，允许合约使用你选定的代币。这一步所有 DEX 都有，需要上链，并收取一定的 Gas Fee。令 CowSwap 独特的是交易的最后一步。Approve Allowance 成功上链以后，点击 Swap 只需要进行签名，不需要上链，也就是说不像其他 DEX 一样需要 Gas Fee。

需要注意的时目前 CowSwap 是 **Alpha** 阶段，CowSwap 提供了 **90%** 的 Gas Fee 补贴和 **0** 协议费用。

[图片来源](https://www.youtube.com/watch?v=2btaQ9IMtwA&ab_channel=%E6%97%81%E7%99%BD%E5%90%9B)

## 🔨 原理

与我们之前介绍的 Uniswap 等 DEX 不同，CowSwap 不采用 AMM（Auto Market Maker）。基于 GPV2 的 CowSwap 更像是采用 Orderbook 的路线。

为了节省 Gas Fee，交易的撮合在线下完成。如果交易不能成功结算，CowSwap 会调用 Uniswap 等 DEX 进行交易。用户只要提供一份签名，多个 Solver 便会在链下为用户寻找最好的结算方式，并通过 CowSwap API 进行提交。

GPV2 会奖励提供最佳结算方式的 Solver。通过 CowSwap 的验证后，用户的交易便会进行结算。由于是链下撮合交易，**失败的交易并不需要用户支付 Gas Fee**。

除了低 Gas Fee，撮合交易，P2P 的另一个好处就是对于 MEV（矿工通过对交易排序来获取额外利益） 有更强的抵御能力。与传统 DEX 通过滑点防止 MEV 攻击不同，CowSwap 的点对点交易具有很强的顺序性。这样矿工就很难通过操纵交易打包顺序来提取例利润。

P.S. 关于 MEV 可以阅读[这篇文章](https://pdaian.com/blog/mev-wat-do/)

### 💠 去中心化

区块链的确不是万能的。它的低效，高昂的手续费被人诟病。因此链上和链下结合是一个非常好的选项，但保证链下运算的去中心化的非常麻烦。GPV2 计划从中心化一步步转为去中心化。

Solver 负责在链下寻找最佳的结算方式。因为 GPV2 担心 Solver 会互相串通，不提供最佳的而是对 Solver 自己最有利的结算方式。GPV2 计划先对 Solver 采用白名单机制，白名单的审核权利将交给社区。GPV2 计划在未来放开对 Solver 身份的限制。任何用户只要质押指定数量的 GNO 便可以成为 Solver。

对于链下 Orderbook API，GPV2 将实现一个去中心化的 P2P 网络。为了严格的去中心化，链下的设计变得繁琐了起来。

🧐 或许在未来我们可以看到链上和链下结合的跨链交易所。链下交易的撮合可以用户节省在多条链上链的费用。

### 📔 相关阅读

[GPV2 road to decentralization](https://forum.gnosis.io/t/gpv2-road-to-decentralization/1245)

[Introducing Gnosis Protocol V2 and Balancer-Gnosis-Protocol](https://blog.gnosis.pm/introducing-gnosis-protocol-v2-and-balancer-gnosis-protocol-f693b2938ae4)

import Coin from '../src/components/coin'

<Coin />
