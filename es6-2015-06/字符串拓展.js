/**
 * 字符串拓展
 * ES6 加强了对Unicode支持， 码点区间\u0000～\uFFFF 之间的字符 0xFFFF
 */

"\u0061" // a

"\u20BB7" // js会理解成\u20BB+7, '₻7'

// ES6对这一点做出了改进，只要将码点放入大括号内，就可以正确解读该字符
"\u{20BB7}" // 𠮷 === "\uD83D\uDE80" true

"\u{41}\u{42}\u{43}"
// "ABC"

let hello = 123;
hell\u{6F} // 123

'\z' === 'z'  // true  ？？
'\172' === 'z' // true ？？
'\x7A' === 'z' // true 十六进制
'\u007A' === 'z' // true  unicode码
'\u{7A}' === 'z' // true  unicode码









