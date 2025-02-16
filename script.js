window.addEventListener('DOMContentLoaded', () => {
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
  const context = canvas.getContext("2d"); // nhi smjhe 
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0001.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0002.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0003.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0004.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0005.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0006.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0007.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0008.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0009.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0010.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0011.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0012.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0013.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0014.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0015.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0016.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0017.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0018.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0019.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0020.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0021.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0022.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0023.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0024.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0025.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0026.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0027.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0028.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0029.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0030.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0031.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0032.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0033.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0034.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0035.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0036.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0037.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0038.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0039.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0040.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0041.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0042.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0043.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0044.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0045.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0046.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0047.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0048.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0049.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0050.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0051.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0052.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0053.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0054.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0055.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0056.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0057.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0058.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0059.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0060.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0061.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0062.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0063.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0064.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0065.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0066.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0067.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0068.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0069.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0070.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0071.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0072.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0073.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0074.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0075.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0076.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0077.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0078.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0079.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0080.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0081.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0082.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0083.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0084.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0085.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0086.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0087.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0088.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0089.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0090.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0091.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0092.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0093.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0094.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0095.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0096.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0097.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0098.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0099.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0100.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0101.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0102.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0103.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0104.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0105.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0106.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0107.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0108.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0109.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0110.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0111.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0112.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0113.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0114.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0115.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0116.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0117.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0118.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0119.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0120.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0121.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0122.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0123.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0124.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0125.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0126.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0127.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0128.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0129.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0130.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0131.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0132.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0133.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0134.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0135.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0136.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0137.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0138.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0139.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0140.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0141.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0142.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0143.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0144.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0145.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0146.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0147.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0148.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0149.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0150.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0151.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0152.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0153.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0154.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0155.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0156.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0157.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0158.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0159.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0160.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0161.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0162.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0163.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0164.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0165.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0166.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0167.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0168.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0169.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0170.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0171.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0172.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0173.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0174.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0175.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0176.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0177.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0178.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0179.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0180.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0181.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0182.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0183.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0184.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0185.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0186.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0187.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0188.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0189.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0190.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0191.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0192.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0193.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0194.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0195.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0196.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0197.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0198.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0199.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0200.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0201.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0202.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0203.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0204.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0205.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0206.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0207.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0208.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0209.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0210.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0211.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0212.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0213.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0214.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0215.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0216.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0217.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0218.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0219.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0220.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0221.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0222.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0223.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0224.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0225.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0226.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0227.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0228.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0229.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0230.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0231.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0232.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0233.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0234.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0235.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0236.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0237.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0238.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0239.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0240.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0241.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0242.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0243.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0244.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0245.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0246.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0247.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0248.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0249.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0250.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0251.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0252.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0253.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0254.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0255.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0256.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0257.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0258.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0259.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0260.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0261.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0262.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0263.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0264.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0265.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0266.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0267.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0268.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0269.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0270.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0271.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0272.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0273.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0274.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0275.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0276.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0277.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0278.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0279.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0280.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0281.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0282.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0283.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0284.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0285.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0286.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0287.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0288.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0289.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0290.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0291.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0292.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0293.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0294.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0295.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0296.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0297.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0298.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0299.png
       https://raw.githubusercontent.com/NPC-MARIMO/Cyperfiction/refs/heads/main/male0300.png
   `;
    return data.split("\n")[index]; // nhi smjhe
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
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  
  
  let i = 10;
  let j = 20;
  
  if(i<j){
    console.log("small")
  }
  else if(i==j){
    console.log("equal")
  }
  else{
    console.log("larger")
  }
})