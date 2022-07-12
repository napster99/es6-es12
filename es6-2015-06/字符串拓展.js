/**
 * 字符串拓展
 * ES6 加强了对Unicode支持， 码点区间\u0000～\uFFFF 之间的字符 0xFFFF
 * Mustache 库
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


/**
 * JSON.stringify()的改造， JSON数据必须是UTF-8编码
 * UTF-8标准规定，0xD800到0xDFFF之间的码点，不能单独使用，必须配对使用，\uD834\uDF06是两个码点，但是必须放在一起配对使用，代表字符𝌆
 * 为了确保返回的是合法的 UTF-8 字符，ES2019 改变了JSON.stringify()的行为。如果遇到0xD800到0xDFFF之间的单个码点，或者不存在的配对形式，它会返回转义字符串
 */
 JSON.stringify('\u{D834}') // ""\\uD834""

function compile(template){
  const evalExpr = /<%=(.+?)%>/g;
  const expr = /<%([\s\S]+?)%>/g;

  template = template
    .replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`')
    .replace(expr, '`); \n $1 \n  echo(`');

  template = 'echo(`' + template + '`);';

  let script =
  `(function parse(data){
    let output = "";

    function echo(html){
      output += html;
    }

    ${ template }

    return output;
  })`;

  return script;
}


/**
 * 标签模板 tagged template
 */

alert`hello` === alert(['hello'])

function getAge(age) {
  console.log(age, age instanceof Array)
}

getAge`444` // age => [4444]

let a = 5;
let b = 10;

tag`Hello ${ a + b } world ${ a * b }`;   // 如果模板字符里面有变量，就不是简单的调用了，而是会将模板字符串先处理成多个参数，再调用函数。
// 等同于
tag(['Hello ', ' world ', ''], 15, 50);


let a = 5;
let b = 10;

function tag(s, v1, v2) {
  console.log(s[0]);
  console.log(s[1]);
  console.log(s[2]);
  console.log(v1);
  console.log(v2);

  return "OK";
}
tag`Hello ${ a + b } world ${ a * b}`;
// "Hello "
// " world "
// ""
// 15
// 50
// "OK"


// “标签模板”的一个重要应用，就是过滤 HTML 字符串，防止用户输入恶意内容。
let message =
  SaferHTML`<p>${sender} has sent you a message.</p>`;

function SaferHTML(templateData) {
  let s = templateData[0];
  for (let i = 1; i < arguments.length; i++) {
    let arg = String(arguments[i]);

    // Escape special characters in the substitution.
    s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

    // Don't escape special characters in the template.
    s += templateData[i];
  }
  return s;
}



