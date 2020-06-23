/*
 * @lc app=leetcode.cn id=709 lang=javascript
 *
 * [709] 转换成小写字母
 */

// @lc code=start
/**
 * @param {string} str
 * @return {string}
 */
// var toLowerCase = function(str) {
//     const Low =["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
//     const High=["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]
//     const list = str.split("")
    
//     for (let i = 0; i < list.length; i++) {
//         if (High.indexOf(list[i])>0) {
//             list[i] = Low[High.indexOf(list[i])]
//         }else{
//             list[i]= list[i]
//         }
//     }
//     return list.join("")
// };

var toLowerCase = function(str) {
    return str.toLowerCase()
};

// @lc code=end

