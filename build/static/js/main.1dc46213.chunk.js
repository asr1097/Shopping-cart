(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{19:function(A,I,Q){},22:function(A,I,Q){},23:function(A,I,Q){},24:function(A,I,Q){},25:function(A,I,Q){},26:function(A,I,Q){},27:function(A,I,Q){},29:function(A,I,Q){},30:function(A,I,Q){},31:function(A,I,Q){},32:function(A,I,Q){"use strict";Q.r(I);var e=Q(1),g=Q.n(e),C=Q(12),E=Q.n(C),B=Q(7),t=Q(6),n=Q(4),a=Q(5),c=Q(2),s=Q.p+"static/media/cart.f97128bf.png",i=(Q(19),Q(0)),r=function(A){return Object(i.jsxs)("nav",{children:[Object(i.jsx)(a.b,{to:"/",children:Object(i.jsx)("li",{children:"Home"})}),Object(i.jsx)(a.b,{to:"/shop",children:Object(i.jsx)("li",{children:"Shop"})}),Object(i.jsx)(a.b,{to:"/about",children:Object(i.jsx)("li",{children:"About"})}),Object(i.jsx)(a.b,{className:"cart",to:"/cart",children:Object(i.jsxs)("li",{className:"cartDiv",children:[Object(i.jsx)("img",{src:s,alt:"Cart"}),Object(i.jsxs)("span",{className:"cartCount",children:["(",A.length,")"]})]})})]})},l=Q(11),d=Q.n(l),o=Q(13),u=(Q(22),function(A){var I;return I="$"!==A.price.charAt(0)?"$"+A.price:A.price,Object(i.jsxs)("div",{className:"item",children:[Object(i.jsx)("img",{src:A.img,alt:"Shoe"}),Object(i.jsx)("label",{className:"nameLabShop",children:A.name}),Object(i.jsx)("label",{className:"priceLabShop",children:I}),Object(i.jsx)("button",{id:A.id,onClick:A.handleAdd,children:"ADD TO CART"})]})}),j=(Q(23),function(){return Object(i.jsx)("div",{className:"loader"})}),m=(Q(24),function(A){var I=Object(e.useState)([]),Q=Object(n.a)(I,2),g=Q[0],C=Q[1],E=function(I){var Q=I.target.id;Q=parseInt(Q);var e=g.find((function(A){return A.id===Q}));A.addToCart(e)},B=function(){var A=Object(o.a)(d.a.mark((function A(){var I,Q,e;return d.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,fetch("https://shoes-collections.p.rapidapi.com/shoes",{method:"GET",headers:{"x-rapidapi-host":"shoes-collections.p.rapidapi.com","x-rapidapi-key":"1144e66123msha04579d5096ccbdp1a6417jsn9749c1a59fe0"}});case 2:return I=A.sent,A.next=5,I.json();case 5:Q=A.sent,C(Q),e=JSON.stringify(Q),localStorage.setItem("data",e);case 9:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}();return Object(e.useEffect)((function(){if(localStorage.length>0){var A=localStorage.getItem("data");return A=JSON.parse(A),void C(A)}B()}),[]),Object(i.jsx)("div",{className:"shopMain",children:Object(i.jsx)("div",{className:"shopDiv",children:0===g.length?Object(i.jsx)(j,{}):Object(i.jsx)("div",{className:"itemsDiv",children:g.map((function(A){return Object(i.jsx)(u,{id:A.id,img:A.image,name:A.name,price:A.price,handleAdd:E},A.id)}))})})})}),h=(Q(25),function(){return Object(i.jsxs)("div",{className:"homeContent",children:[Object(i.jsx)("h1",{className:"welcome",children:"Welcome!"}),Object(i.jsx)("p",{className:"quote",children:"Good shoes take you good places."})]})}),b=(Q(26),function(){return Object(i.jsx)("div",{className:"aboutContent",children:Object(i.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})}),v=Q.p+"static/media/plus.82e687e3.png",f=Q.p+"static/media/delete.1394d6fe.png",p=(Q(27),function(A){return Object(i.jsxs)("div",{className:"cartItem",children:[Object(i.jsx)("img",{src:A.img,alt:"shoe"}),Object(i.jsxs)("div",{className:"nameAndPriceDiv",children:[Object(i.jsx)("label",{className:"nameLab",children:A.name}),Object(i.jsx)("label",{className:"priceLab",children:A.price})]}),Object(i.jsxs)("div",{className:"btnsDiv",children:[Object(i.jsxs)("div",{className:"valueDiv",children:[Object(i.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAcZklEQVR4Xu3dW4wc1ZkA4Bl7xpdxTxjfWCNsLREi2DEyESAIirTLPq217IKESERk8hBFPPAGT4ny7EUKz6BFPPDCKgqI3QdYYouX1e6yEuIiR7I2LFquNiQRAWPj8XUuvefvTFlNMzPdM+nqrqnztVTqW3VVne/8df46p6u6R0bcCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIElhMYxfN1gdOnT+8aGxs702g0Liznc+7cuXXp/ZiaHfOFazF1LqKYt/0znZ/v9vzKMrds2dI5ryolQIBAJQVSm1nknM42sv312PZo1+bjweXLl+e3bt2qneuhRiX0hJSCbGIhAY+n+8bo6Ojl8fHx07OzszOnTp3a/MYbb9x8/PjxfRcvXtyQ3p9N01zEWZpmFqZ4rQi4MI0k3xmw8X4xRaC2P+9XsPZ0INBs9mt1S0ZY6SvoIbaHMUsdyj2IMlS53Vlp+Vc6/2rjsiyzzuWudj29OLQn7c42Mp7HLeYpknmrrZ1PtxtuuGH61ltv/eO11157anJy8uymTZuiDXbrEFht5dUC8uzZs5Pr0y0luGtSgfakXvkfLl26NJKS94EXXnjh719//fVvf/jhh43PP/9859zc3PqZmZmNbQUvEnLxUntAd3PtJfhrYbxEIVZa/m6ei9VBnf2UjUAdBLrt11dGM1MHazqNRp7Ytm3bb/bt2/ff99xzz3/dfffdJ3fv3r3sKGodkJShB4EzZ85clYZyvpWmfenxzSlh35gS+U8ff/zx3+zYseMrveeNGzfG0WBnj9pzJmJADIiBkmMg+lxpKkZG4/5CSvDHDx48+P2nn356Zw/NvVnqLJCG2McvXLiwP31X/k9ffPHFw+n5d99///1DjzzyyO+uueaa1g46MTHRjO+nI5jSEHwzJXU7bsk7roMmB41iQAwsFgPr1q1rbtiwoZlGUVvD8en5xXR/JvXWf/7KK6/sqnO+UrYeBNLQ+lQaSv+r6enp/WkoffKJJ57414UTL5rp+xnJW/IWA2JADFQoBhZ66q0OVkypmY+R07MPPPDADz/++OPJHpp9s9RVIPXKd6Th9sk03L7zpZde+snevXtbO2/0yuNoMA3ptI4GI4ji+cKRoR28Qju43pzenBiofwxEWxxtcCTxuI86j/tom1Ov/VwaTX330KFD9x47dmxbXfOVcnURKC6fSMM1995xxx1xYkVzamqqFSwLR39XHkfgaDjq33CoY3UsBqoZA9EmR6cqknvRUy8Se3pvJiX1/3nooYfufPPNN+OKJbccBT799NPx++677z8iMCJYYqi9OAK0Y1dzx1Yv6kUMiIGi4xXnNi202TPbt2//9eHDh7+VYy4rylxc+5elwcsvv/yDt9566ztF4dMQ/Ei65DFLC4UmQIDAWhKI39Mo2uzUIVufzon6myNHjhxMlxpvWUvl6Oe2Zp3Qn3/++R9+9NFH30hDOCMRHGnopp+2lkWAAAECJQmknnmr3U7JfCQNxUfjPf7aa6/96O23354qaZWVX2zWCf3dd9/9y6ihdGKFhF75ULWBBAgQ+LpAJPb0K54j6X4+/Z7I7hMnTmT7PXq2CT0NtW9N36HHL8RduaWferW/ECBAgMAaECi+Ho37hZ56XJ8+9sknn0joa6D++rqJ8QcsX3755dY4uotbDLvHLQ3d9HU9FkaAAAEC/ReItjva7dQrbw27x89zRxP+2Wefbe7/2tbGEsfWxmb2fyvPnz8/mY7qRuPILv1qXAzXtFaSfmSm/yuzRAIECBDoq0D7CcwLo6uR0Dek1zf1dUVraGHZDrmnOnI6+xoKVJtKgACBLgLFP1xmO8yac0Iv/nDFXkKAAAEC9RBo/X11+knvLC9ZyjmhF/9JXo8wVgoCBAgQCIEsk3kUPOeE3vl/5nYFAgQIECCwZgUk9DVbdTacAAECBBYRiM5alrecE7oh9yxDXqEJEKi5QLPRaGSZ1HNO6FHhznSv+Z6teAQIZCWQ9VepEnpWsa6wBAgQIFBXgdwTepbDMnUNZuUiQIBAzgI5J/Sodwk95+hXdgIECNRIQEKvUWUqCgECBDIXyPYa9Kj33BN65rGv+AQIECBQF4GcE3rWR3J1CWDlIECAAIE/CeSc0MUAAQIECNRPINvOmoRev2BWIgIECBDIUEBCz7DSFZkAAQI1FtBDr3HlLlc0l61lWvGKTYBAfQX8fWp961bJCBAgQCAfAT30fOpaSQkQIECAQP0EfIdevzpVIgIECBDIUEBCz7DSFZkAAQIE6icgodevTpWIAAECBDIUyD2hO8s9w6BXZAIECNRRIPeEXsc6VSYCBAgQyFAg94Suh55h0CsyAQL1Fmg0Glm27Tkn9CwrvN67sdIRIEAgX4GcE3pR6xJ7vvGv5AQI1E8g2zY994SebcXXbx9WIgIECOQtkHtCz7v2lZ4AAQIEaiMgodemKhWEAAECBJJAtiOvuSf0bCvebk+AAAEC9RLIPaHXqzaVhgABAgSy7ahJ6IKfAAECBAjUQCD3hJ7tkVwNYlcRCBAgsJhAtu167gnd7kCAAAECBGohIKHXohoVggABAgRyF5DQc48A5SdAgACBWghI6LWoRoUgQIAAgdwFJPTcI0D5CRAgQKAWAhJ6LapRIQgQIEAgdwEJPfcIUH4CBAjUS2C0XsXpvTQSeu9W5iRAgACB6gtI6NWvI1tIgAABAgS6CkjoXYnMQIAAAQIEqi8goVe/jvq+hVHp2VZ83zUtkAABAsMXyLpd9x368APQFhAgQIBA/wSy7ahJ6P0LIksiQIAAgeELSOjDr4OhbEG2FT8UbSslQIBA+QKj09PTWbbteujlB5c1ECBAgMDgBLJM5sGbc0LPttIHt19ZEwECBAYukO2JcTkn9IFHmRUSIECAQOkC2XbWck/o2VZ86buUFRAgQGDwAtn2znMfch98qFkjAQIECJQtkG1Sz7mHrnde9m5l+QQIEBi8QLZte84JffBhZo0ECBAgULaAhF62sOUTIECAAIEBCBhyHwCyVRAgQIAAAQIlCRhyLwnWYgkQIECAwCAFJPRBalsXAQIECJQt4Dv0soUtnwABAgQIEChPQA+9PFtLJkCAAIHBCzQHv8pqrFFCr0Y92AoCBAgQ6J9AlkldQu9fAFkSAQIECBAYmkDOCT3bEyeGFm1WTIAAgfIFsuydB2vOCT3KL6mXv3NZAwECBAYpEAk9y6See0IfZJBZFwECBAgQKE0g54Sud15aWFkwAQIEhiaQZe/ckLsh96HtcVZMgACBkgQMuZcEa7EECBAgQGCQAnrog9Su2LoMvVesQmwOAQIEVinQSuaNRiPLpJ7zd+hR75L5KvcaHyNAgEBFBbJM5lEXuSf0isajzSJAgAABAisTkNBX5mVuAgQIECBQSQEJvZLVYqMIECBAgMDKBCT0lXmZmwABAgSqLeA79GrXj60jQIAAAQIElhPQQxcfBAgQIFAngWyvXso9oWdb8XXae5WFAAECBFy2JgYIECBAgEAtBHLvoUclZnsCRS0iWCEIECBAoCUgoQsEAgQIECBQAwEJvQaVqAgECBAgcEUg21HXnBO6E+K0AAQIECBQG4GcE3pUoqRem1BWEAIECLQE9NAFAgECBAgQqIHAfA3KsKoi5N5DXxWaDxEgQIBAJQWid66HXsmqKX+jsq348mmtgQABAkMRmBvKWiuw0mx76KOjo61kvn79+tl16/7EkF4bKR5XoG5sAgECBAgsIVC019Fmj42NFXNFuz6bK1q2CX3Dhg1R6fNzc3Nj4+PjI/Pz862EHvduBAgQIFBtgaK9bjabI7Ozs9F+z6fkfjl10i5Ve8vL27psE/rmzZsvpwC4XPTMIzjajvLKE7dkAgQIEPizBYrR1OI+JfK56JBt3Ljx4p+98DW6gGwT+pYtWy5eddVV/5fqrRlHd24ECBAgsPYEoocenbGF0dVLqV0/v/ZK0Z8tzjahX3311af37dv3nykQLhQJfWZmpj+qlkKAAAECpQqkr0tby49EHr30dL9u06ZNH+3fv/9cqSuu8MKzTei7d+8+lxL6K5OTkx9GLz0N11S4mmwaAQIECLQLFF+TRjKP78/Te7O7du369717957JVSrbhB4Vfv/99x+//vrrj6aHM3GUF0M3U1NTX4sF36/nunsoNwECwxaI9nexaWJionUyXOqVj1y6dCkS+u9vv/32f7npppuyTejDrquhr//JJ5/85nXXXferNPQ+nc58b/0oQTriuzLF5W3FFO+ZGIgBMSAGBhcD7W1wZ3ucvi9vppPgTqf6+MM/pNvRo0e/3iMbepaxAQMVeOyxx25OR3v/G0M2qYfeStpF4ERyX7hmXTJ3QCMGxIAYGHAMLJXQo21OX5lGMv/izjvv/MmLL764c6CJw8qqKfDee+9tvOuuu36ctu7UwqVsV3baCKYIHEfkgzsiZ81aDIiBIgaWSOjzaUQ1htZP79mz5x+feeaZ3dXMLrZqKAIpILal28/Syk+kBB5nScYplK3euYSucZFgxIAYGE4MLJLQZ9JrF1J9fJymXxw6dGjPUJKGlVZb4Lnnnpt48MEHD6Rr1P85JfHfp62NHyiIn4aN69n00hmIATEgBgYcAwsJfT7dtxJ5mj5N07+lq5T+9tFHH91e7awy2K3zf+CLeD/77LM7Dh8+fPCdd975u/T2d1PwbEtnwG9Kj+OqgH6ZVeWPYaqyHYONfGtbSmA18dCvfUKtfFWg3679Xt5q62sl29GM3wqJq5DSFCOnv200Gr9MHa8jTz311O9WuwF1/dxKYOtqsGi5jhw5su748eNTadr+6quv/vUHH3zwvZTY/yLNPJGm8TTFhetFgi8ci6P3uIQiHsd95+Pi+UqO9GMbi4a2/b7zcecyl/pce5k7G/Dlni/33mKx1P5at/eX26bivcWSTS8JqJd5lltHL++1W3fG1FLrX+nrZW1Hr8vt1gYs1Z4s186stA1a6fyxzd0+0+39oty9zNdLnBfztN/H42Iqtrn9tc7HnfMs95lelte5/s667qXsnXFULDPayaK9jH9RicfF87iP+TovoY6vPGNk9ELqTJ1KJyu/dssttxy98cYbTx44cOCzhx9+uPWz3W5fFVhJJWVtd+zYsfUnT55stAViZ0MRlu0NdLcE3J4AFvtc+/ud9t2S8HKf7basbvW8kuTYbVllvj/s7Rzk+ge5rjLrbLFlV6WN6sd2rOTApnPebs8726PCspcDjKU+214fqyl/twOX5Q4iig7R7M6dO2fSH2idv+2227L9W9RB73TWR4AAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgsKjA/wOB6Vyp4GUnjAAAAABJRU5ErkJggg==",alt:"minus",className:"minusBtn",id:A.id,onClick:A.decrease}),Object(i.jsx)("input",{id:A.id,type:"number",min:"1",value:A.value,onChange:A.handleChange}),Object(i.jsx)("img",{src:v,alt:"plus",className:"plusBtn",id:A.id,onClick:A.increase})]}),Object(i.jsx)("img",{className:"deleteBtn",src:f,alt:"delete",id:A.id,onClick:A.handleRemove})]})]})}),O=Q(14),x=Q.n(O),N=(Q(29),function(A){var I=Object(c.f)();return Object(i.jsx)("div",{className:"cartDiv",children:Object(i.jsxs)("div",{className:"cartItems",children:[0!==A.cartItems.length?A.cartItems.map((function(I){return Object(i.jsx)(p,{img:I.image,name:I.name,price:I.price,value:I.value,id:I.id,handleChange:A.handleChange,handleRemove:A.handleRemove,increase:A.increase,decrease:A.decrease},x()())})):Object(i.jsxs)("div",{className:"emptyCart",children:[Object(i.jsx)("h1",{children:"Cart is empty"}),Object(i.jsx)("button",{onClick:function(){return I("/shop")},className:"shopBtn",children:"GO TO SHOP"})]}),0!==A.cartItems.length?Object(i.jsxs)("div",{className:"cashout",children:[Object(i.jsxs)("p",{className:"total",children:["Total: $",A.cartItems.reduce((function(A,I){return A+parseInt(I.price.slice(1,I.price.length))*parseInt(I.value)}),0)]}),Object(i.jsx)("button",{className:"buyBtn",onClick:function(){A.setCartItems([]),I("/checkout")},children:"BUY"})]}):null]})})}),k=(Q(30),function(){var A=Object(c.f)();return Object(i.jsxs)("div",{className:"checkoutDiv",children:[Object(i.jsx)("h1",{children:"Thanks for coming!"}),Object(i.jsx)("button",{onClick:function(){return A("/")},children:"GO BACK"})]})}),J=function(A){return Object(i.jsxs)(a.a,{children:[Object(i.jsx)(r,{length:A.cartItems.length}),Object(i.jsxs)(c.c,{children:[Object(i.jsx)(c.a,{path:"/",element:Object(i.jsx)(h,{})}),Object(i.jsx)(c.a,{path:"/shop",element:Object(i.jsx)(m,{addToCart:A.addToCart})}),Object(i.jsx)(c.a,{path:"/about",element:Object(i.jsx)(b,{})}),Object(i.jsx)(c.a,{path:"/cart",element:Object(i.jsx)(N,{cartItems:A.cartItems,handleChange:A.handleValueChange,handleRemove:A.handleRemove,increase:A.increase,decrease:A.decrease,setCartItems:A.setCartItems})}),Object(i.jsx)(c.a,{path:"/checkout",element:Object(i.jsx)(k,{})})]})]})};Q(31);var L=function(){var A=Object(e.useState)([]),I=Object(n.a)(A,2),Q=I[0],g=I[1],C=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,I=arguments.length>1?arguments[1]:void 0;if(A){var e=A.target.id;e=parseInt(e);var C=Q.findIndex((function(A){return A.id===e})),E=Q[C];E=Object(t.a)(Object(t.a)({},E),{},{value:E.value+1});var n=Q;n.splice(C,1,E),g(Object(B.a)(n))}else{var a=Object(t.a)(Object(t.a)({},I),{},{value:I.value+1}),c=Q.findIndex((function(A){return A.id===a.id})),s=Q;s.splice(c,1,a),g(Object(B.a)(s))}};return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(J,{addToCart:function(A){var I=Q.find((function(I){return I.id===A.id}));if(I)C(null,I);else{var e;e="$"!==A.price.charAt(0)?"$"+A.price:A.price;var E=Object(t.a)(Object(t.a)({},A),{},{value:1,price:e});g([].concat(Object(B.a)(Q),[E]))}},cartItems:Q,handleValueChange:function(A){var I=parseInt(A.target.id),e=parseInt(A.target.value),C=Q.findIndex((function(A){return A.id===I})),E=Q[C];E.value=e;var t=Q;t.splice(C,1,E),g(Object(B.a)(t))},handleRemove:function(A){var I=parseInt(A.target.id),e=Q.findIndex((function(A){return A.id===I})),C=Q;C.splice(e,1),g(Object(B.a)(C))},increase:C,decrease:function(A){var I=A.target.id;I=parseInt(I);var e=Q.findIndex((function(A){return A.id===I})),C=Q[e];if(1!==C.value){C=Object(t.a)(Object(t.a)({},C),{},{value:C.value-1});var E=Q;E.splice(e,1,C),g(Object(B.a)(E))}},setCartItems:g})})};E.a.render(Object(i.jsx)(g.a.StrictMode,{children:Object(i.jsx)(L,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.1dc46213.chunk.js.map