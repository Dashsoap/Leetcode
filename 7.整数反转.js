/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */

var reverse = function(x) {
    var max = Math.pow(2,31)
    var min = -max
    var zf = 0
    if (x>0) {
        zf = 1
    }else{
        x= x*-1 
    }
    x=x+""
    var n = x.split('').reverse().join(''); 
    if (zf==0) {
        n= "-"+n
        n=n*1
    }else{
        n=n*1
    }
   return n>max||n<min?0:n
};


// @lc code=end

