function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
       ./images/dribbble001.jpg
       ./images/dribbble002.jpg
       ./images/dribbble003.jpg
       ./images/dribbble004.jpg
       ./images/dribbble005.jpg
       ./images/dribbble006.jpg
       ./images/dribbble007.jpg
       ./images/dribbble008.jpg
       ./images/dribbble009.jpg
       ./images/dribbble010.jpg
       ./images/dribbble011.jpg
       ./images/dribbble012.jpg
       ./images/dribbble013.jpg
       ./images/dribbble014.jpg
       ./images/dribbble015.jpg
       ./images/dribbble016.jpg
       ./images/dribbble017.jpg
       ./images/dribbble018.jpg
       ./images/dribbble019.jpg
       ./images/dribbble020.jpg
       ./images/dribbble021.jpg
       ./images/dribbble022.jpg
       ./images/dribbble023.jpg
       ./images/dribbble024.jpg
       ./images/dribbble025.jpg
       ./images/dribbble026.jpg
       ./images/dribbble027.jpg
       ./images/dribbble028.jpg
       ./images/dribbble029.jpg
       ./images/dribbble030.jpg
       ./images/dribbble031.jpg
       ./images/dribbble032.jpg
       ./images/dribbble033.jpg
       ./images/dribbble034.jpg
       ./images/dribbble035.jpg
       ./images/dribbble036.jpg
       ./images/dribbble037.jpg
       ./images/dribbble038.jpg
       ./images/dribbble039.jpg
       ./images/dribbble040.jpg
       ./images/dribbble041.jpg
       ./images/dribbble042.jpg
       ./images/dribbble043.jpg
       ./images/dribbble044.jpg
       ./images/dribbble045.jpg
       ./images/dribbble046.jpg
       ./images/dribbble047.jpg
       ./images/dribbble048.jpg
       ./images/dribbble049.jpg
       ./images/dribbble050.jpg
       ./images/dribbble051.jpg
       ./images/dribbble052.jpg
       ./images/dribbble053.jpg
       ./images/dribbble054.jpg
       ./images/dribbble055.jpg
       ./images/dribbble056.jpg
       ./images/dribbble057.jpg
       ./images/dribbble058.jpg
       ./images/dribbble059.jpg
       ./images/dribbble060.jpg
       ./images/dribbble061.jpg
       ./images/dribbble062.jpg
       ./images/dribbble063.jpg
       ./images/dribbble064.jpg
       ./images/dribbble065.jpg
       ./images/dribbble066.jpg
       ./images/dribbble067.jpg
       ./images/dribbble068.jpg
       ./images/dribbble069.jpg
       ./images/dribbble070.jpg
       ./images/dribbble071.jpg
       ./images/dribbble072.jpg
       ./images/dribbble073.jpg
       ./images/dribbble074.jpg
       ./images/dribbble075.jpg
       ./images/dribbble076.jpg
       ./images/dribbble077.jpg
       ./images/dribbble078.jpg
       ./images/dribbble079.jpg
       ./images/dribbble080.jpg
       ./images/dribbble081.jpg
       ./images/dribbble082.jpg
       ./images/dribbble083.jpg
       ./images/dribbble084.jpg
       ./images/dribbble085.jpg
       ./images/dribbble086.jpg
       ./images/dribbble087.jpg
       ./images/dribbble088.jpg
       ./images/dribbble089.jpg
       ./images/dribbble090.jpg
       ./images/dribbble091.jpg
       ./images/dribbble092.jpg
       ./images/dribbble093.jpg
       ./images/dribbble094.jpg
       ./images/dribbble095.jpg
       ./images/dribbble096.jpg
       ./images/dribbble097.jpg
       ./images/dribbble098.jpg
       ./images/dribbble099.jpg
       ./images/dribbble100.jpg
       ./images/dribbble101.jpg
       ./images/dribbble102.jpg
       ./images/dribbble103.jpg
       ./images/dribbble104.jpg
       ./images/dribbble105.jpg
       ./images/dribbble106.jpg
       ./images/dribbble107.jpg
       ./images/dribbble108.jpg
       ./images/dribbble109.jpg  
   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 300;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
