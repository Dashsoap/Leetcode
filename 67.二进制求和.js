/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    function padLeft(str, len) {
        if (str.length < len) {
            while (str.length < len) {
                str = "0" + str
            }
        }
        return str
    }
    a.length>b.length?b=padLeft(b,a.length):a = padLeft(a,b.length)
    a = a.split("").reverse()
    a = a.map(function (item) {
        return +item
    })
    b = b.split("").reverse()
    b = b.map(function (item) {
        return +item
    })
    let len = a.length
    let carry  = 0
    anw = []
    a[len] = b[len] = 0
    console.log(a,b);
    
    for (let i = 0; i <= len; i++) {
       
            anw[i] = a[i]+b[i]+carry
            
            if (anw[i]==3){
                anw[i] = 1
                carry =1
            }else if(anw[i] ==2){
                anw[i] = 0
                carry =1
            }else{
                carry = 0
            }
        

    }
    if (anw[anw.length-1] == 0) {
        anw.pop()
    }
    return anw.reverse().join("")
};

//Your runtime beats 5.22 % of javascript submissions
//Your memory usage beats 11.11 % of javascript submissions (42.4 MB)

// @lc code=end

