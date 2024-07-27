// var button = document.createElement("button");
// button.textContent = "切换";
// button.style.display = "none";
// button.className = 'beautiful-button'
// document.body.appendChild(button);
// var btn = false
// window.addEventListener('scroll', function (e) {
//   if (window.pageYOffset >= 100) {
//     button.style.display = "block";
//     return
//   } else if (window.pageYOffset == 0) {
//     button.style.display = "none";
//     return
//   }
// })

// button.addEventListener('click', function () {
//   if (btn) {
//     console.log(btn, 'btn1')
//     btn = false
//   } else {

//     console.log(btn, 'btn2')
//     btn = true
//   }
// })
// console.clear()
console.log("%cTgg", `color:orange ;margin-left:80px;font-size: 84px; text-shadow: 2px 2px 4px #ABDCFF;`);
console.log("%c💪🤏🤞🎈🤙🤟🤝", 'margin-left:70px;font-size:20px')

// 笔记侧边栏的标题
var firstLiElement = document.querySelectorAll('.sidebar-items li>.sidebar-item-children');

// 获取到所有标题元素Li
if (firstLiElement.length) {
  var liElements = Array.from(firstLiElement[0].children).filter((child) => child.tagName === 'LI');

  // 获取所有标题a标签
  var link = liElements.map(v => {
    v.querySelector('a').style.fontWeight = '800'
  })
}






// 特效球球函数
function Q() {
  // js点击特效  烟花球球
  // 点击导航切换页面时,特效会卡,做一层判断  在页面切换时不触发特效
  // 点击导航整块都不触发   移动端也一样
  var currentUrl = window.location.href;
  // 节流阀   在flag为1 也就是切换页面时  不触发特效函数
  var flag = null
  // console.log('点击了,跳转了')
  // 获取之前保存的URL地址
  var previousUrl = localStorage.getItem('previousUrl');
  if (currentUrl !== previousUrl) {
    // console.log('URL地址发送了变化!');
    flag = 1
    // 保存当前URL地址作为之前的记录
    localStorage.setItem('previousUrl', currentUrl);
  } else {
    flag = null
    // console.log('URL地址未发生变化。');
    clickEffect();//调用特效函数
  }
  function clickEffect() {
    if (flag == 1) {
      return
    }
    let balls = [];
    let longPressed = false;
    let longPress;
    let multiplier = 0;
    let width, height;
    let origin;
    let normal;
    let ctx;
    const colours = ["#F73859", "#14FFEC", "#00E0FF", "#FF99FE", "#FAF15D"];
    const canvas = document.createElement("canvas");
    // 解决上线后可能报错问题  本地没报错  但是不影响运行
    try {
      document.body.appendChild(canvas);
    } catch (error) {
      console.log(error, '小报错,问题不大')
    }
    canvas.setAttribute("style", "width: 100%; height: 100%; top: 0; left: 0; z-index: 99999; position: fixed; pointer-events: none;");
    const pointer = document.createElement("span");
    pointer.classList.add("pointer");
    try {
      document.body.appendChild(pointer);
    } catch (error) {
      console.log(error, '小报错,问题不大')
    }

    if (canvas.getContext && window.addEventListener) {
      ctx = canvas.getContext("2d");
      updateSize();
      window.addEventListener('resize', updateSize, false);
      loop();
      window.addEventListener("mousedown", function (e) {
        // 点击导航整块都不触发   移动端也一样
        if (e.screenY <= 155 || e.target.parentNode.className === 'navbar-item') {
          return
        }
        pushBalls(randBetween(10, 20), e.clientX, e.clientY);
        document.body.classList.add("is-pressed");
        longPress = setTimeout(function () {
          document.body.classList.add("is-longpress");
          longPressed = true;
        }, 500);
      }, false);
      window.addEventListener("mouseup", function (e) {
        // 点击导航整块都不触发
        if (e.screenY <= 155 || e.target.parentNode.className === 'navbar-item') {
          return
        }
        clearInterval(longPress);
        if (longPressed == true) {
          document.body.classList.remove("is-longpress");
          pushBalls(randBetween(50 + Math.ceil(multiplier), 100 + Math.ceil(multiplier)), e.clientX, e.clientY);
          longPressed = false;
        }
        document.body.classList.remove("is-pressed");
      }, false);
      window.addEventListener("mousemove", function (e) {
        // 点击导航整块都不触发
        if (e.screenY <= 155 || e.target.parentNode.className === 'navbar-item') {
          return
        }
        let x = e.clientX;
        let y = e.clientY;
        pointer.style.top = y + "px";
        pointer.style.left = x + "px";
      }, false);
    } else {
      console.log("canvas or addEventListener is unsupported!");
    }


    function updateSize() {
      canvas.width = window.innerWidth * 2;
      canvas.height = window.innerHeight * 2;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(2, 2);
      width = (canvas.width = window.innerWidth);
      height = (canvas.height = window.innerHeight);
      origin = {
        x: width / 2,
        y: height / 2
      };
      normal = {
        x: width / 2,
        y: height / 2
      };
    }
    class Ball {
      constructor(x = origin.x, y = origin.y) {
        this.x = x;
        this.y = y;
        this.angle = Math.PI * 2 * Math.random();
        if (longPressed == true) {
          this.multiplier = randBetween(14 + multiplier, 15 + multiplier);
        } else {
          this.multiplier = randBetween(6, 12);
        }
        this.vx = (this.multiplier + Math.random() * 0.5) * Math.cos(this.angle);
        this.vy = (this.multiplier + Math.random() * 0.5) * Math.sin(this.angle);
        // 小球大小
        this.r = randBetween(5, 9) + 3 * Math.random();
        this.color = colours[Math.floor(Math.random() * colours.length)];
      }
      update() {
        this.x += this.vx - normal.x;
        this.y += this.vy - normal.y;
        normal.x = -2 / window.innerWidth * Math.sin(this.angle);
        normal.y = -2 / window.innerHeight * Math.cos(this.angle);
        this.r -= 0.3;
        this.vx *= 0.9;
        this.vy *= 0.9;
      }
    }

    function pushBalls(count = 1, x = origin.x, y = origin.y) {
      for (let i = 0; i < count; i++) {
        balls.push(new Ball(x, y));
      }
    }

    function randBetween(min, max) {
      return Math.floor(Math.random() * max) + min;
    }

    function loop() {
      ctx.fillStyle = "rgba(255, 255, 255, 0)";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < balls.length; i++) {
        let b = balls[i];
        if (b.r < 0) continue;
        ctx.fillStyle = b.color;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2, false);
        ctx.fill();
        b.update();
      }
      if (longPressed == true) {
        multiplier += 0.2;
      } else if (!longPressed && multiplier >= 0) {
        multiplier -= 0.4;
      }
      removeBall();
      requestAnimationFrame(loop);
    }

    function removeBall() {
      for (let i = 0; i < balls.length; i++) {
        let b = balls[i];
        if (b.x + b.r < 0 || b.x - b.r > width || b.y + b.r < 0 || b.y - b.r > height || b.r < 0) {
          balls.splice(i, 1);
        }
      }
    }
  }
}

// 特效文字函数
function Z() {
  // js点击特效  出现文字特效
  var a_idx = 0;

  function getRandom(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  jQuery(document).ready(function ($) {
    $("body").click(function (e) {
      var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善");
      var $i = $("<span/>").text(a[a_idx]);
      a_idx = (a_idx + 1) % a.length;
      var x = e.pageX,
        y = e.pageY;
      $i.css({
        "z-index": 99999,
        "top": y - 20,
        "left": x,
        "position": "absolute",
        "font-weight": "bold",
        "color": `rgb(${getRandom(255, 0)},${getRandom(255, 0)},${getRandom(255, 0)})`,
        "user-select": 'none',
        "cursor": 'default'
      });
      $("body").append($i);
      $i.animate({
        "top": y - 180,
        "opacity": 0
      },
        1500,
        function () {
          $i.remove();
        });
    });
  });

}

// 默认启用球球函数
Q()
// Z()