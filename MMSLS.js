/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=15249640&pid=afaa99854200461684ec24c45b6aa6e4&tid=57653da5c7394f126d7923c9044b4dc1",
    "https://www.maimemo.com/share/page?uid=15249640&pid=afaa99854200461684ec24c45b6aa6e4&tid=57653da5c7394f126d7923c9044b4dc1",
    "https://www.maimemo.com/share/page?uid=15249640&pid=afaa99854200461684ec24c45b6aa6e4&tid=57653da5c7394f126d7923c9044b4dc1",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    "https://www.maimemo.com/share/page?uid=7843145&pid=ca39f8f3edeb43cdbc9875d1e16d90fd&tid=850afad56638d00cc5c40f22ae230b4a",
    "https://www.maimemo.com/share/page?uid=7843145&pid=ca39f8f3edeb43cdbc9875d1e16d90fd&tid=850afad56638d00cc5c40f22ae230b4a",
    "https://www.maimemo.com/share/page?uid=7843145&pid=ca39f8f3edeb43cdbc9875d1e16d90fd&tid=850afad56638d00cc5c40f22ae230b4a",
    "https://www.maimemo.com/share/page?uid=7843145&pid=ca39f8f3edeb43cdbc9875d1e16d90fd&tid=850afad56638d00cc5c40f22ae230b4a",
    "https://www.maimemo.com/share/page?uid=5390766&pid=ca39f8f3edeb43cdbc9875d1e16d90fd&tid=3d62514b09b9149e6f8c03bb940f259b",
    
    

  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
