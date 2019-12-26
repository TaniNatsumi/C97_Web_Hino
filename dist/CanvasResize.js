  // リサイズ処理
/*function glResize(){
    var glCanvas1 = document.getElementById('SAMPLE');
    var container = document.getElementById('wrap');

    container.style.width = "100%";
    container.style.height = "100%";
    container.style.margin = "0 auto 0 auto";

    // 元の画像サイズを保持
    var orgWidth  = glCanvas1.width;
    var orgHeight = glCanvas1.height;
    // 変更する画像サイズを指定
    glCanvas1.width = container.clientWidth;
    glCanvas1.height = container.clientHeight;
//    glCanvas1.height = orgHeight * (glCanvas1.width / orgWidth);
    // glでの表示サイズもCanvasに合わせる
    gl.viewport(0,0,glCanvas1.width, glCanvas1.height);
}
glResize();
*/