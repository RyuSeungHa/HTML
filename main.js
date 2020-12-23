
(() => {

    let yoffset;
    let currentScene;
    let prevScrollHeight;
    let enterScene;

    const sceneInfo = [

        //Yoffset 현재 머물러있는 스크롤값을 확인할 수 있음
        // sceneInfo의 전체적인 값은 못바꾸지만
        // 안에있는 오브젝트 값은 바꿀 수 있다.
        // 키값은 변경못하지만 밸류값은 변경 가능.
        {//0번 섹션
            type: 'sticky',
            heightNum: 5,
            scrollHeight: 0, // 스크롤의 총 높이 - max 높이값을 저장하기위한 변수
            objs: {
                container: document.querySelector('#scroll-section-0'),
                messageA: document.querySelector('#scroll-section-0 .main-message.a'),
                messageB: document.querySelector('#scroll-section-0 .main-message.b'),
                messageC: document.querySelector('#scroll-section-0 .main-message.c'),
                messageD: document.querySelector('#scroll-section-0 .main-message.d'),
                canvas : document.querySelector('#video-canvas-0'),
                context : document.querySelector('#video-canvas-0').getContext('2d'),
            },
            value:{
                messageA_opacity_in:[0,1,{start:0.1,end:0.2}],
                messageA_opacity_out:[1,0,{start:0.25,end:0.3}],
                messageB_opacity_in:[0,1,{start:0.3,end:0.4}],
                messageB_opacity_out:[1,0,{start:0.45,end:0.5}],
                messageC_opacity_in:[0,1,{start:0.5,end:0.6}],
                messageC_opacity_out:[1,0,{start:0.65,end:0.7}],
                messageD_opacity_in:[0,1,{start:0.7,end:0.8}],
                messageD_opacity_out:[1,0,{start:0.85,end:0.9}],
                messageA_translate_in:[20,0,{start:0.1, end:0.2}],
                messageB_translate_in:[20,0,{start:0.3, end:0.4}],
                messageC_translate_in:[20,0,{start:0.5, end:0.6}],
                messageD_translate_in:[20,0,{start:0.7, end:0.8}],
                messageA_translate_out:[0,-20,{start:0.25, end:0.3}],
                messageB_translate_out:[0,-20,{start:0.45, end:0.5}],
                messageC_translate_out:[0,-20,{start:0.65, end:0.7}],
                messageD_translate_out:[0,-20,{start:0.85, end:0.9}],
                totalImg:300,
                videoImg : [],
                ImgSequence : [0,299,{start:0,end:1}],
                canvas_opacity_out:[1,0,{start:0.8,end:1}]

            }
        },
        {//1번 섹션
            type: 'normal',
            heightNum: 5,
            scrollHeight: 0,
            objs: {
                container: document.querySelector('#scroll-section-1'),
            }
        },
        {//2번 섹션
            type: 'sticky',
            heightNum: 5,
            scrollHeight: 0, // 스크롤의 총 높이 - max 높이값을 저장하기위한 변수
            objs: {
                container: document.querySelector('#scroll-section-2'),
                messageA: document.querySelector('#scroll-section-2 .desc-message.a'),
                messageB: document.querySelector('#scroll-section-2 .desc-message.b'),
                messageC: document.querySelector('#scroll-section-2 .desc-message.c'),
                pinB: document.querySelector('#scroll-section-2 .pin.b'),
                pinC: document.querySelector('#scroll-section-2 .pin.c'),
                canvas : document.querySelector('#video-canvas-2'),
                context : document.querySelector('#video-canvas-2').getContext('2d'),
            },
            value: {
                messageA_opacity_in: [0, 1, { start: 0.15, end: 0.2 }],
                messageB_opacity_in: [0, 1, { start: 0.5, end: 0.55 }],
                messageC_opacity_in: [0, 1, { start: 0.77, end: 0.82 }],
                messageA_opacity_out: [1, 0, { start: 0.3, end: 0.35 }],
                messageB_opacity_out: [1, 0, { start: 0.58, end: 0.63 }],
                messageC_opacity_out: [1, 0, { start: 0.85, end: 0.9 }],
                messageA_translate_in: [20, 0, { start: 0.15, end: 0.2 }],
                messageB_translate_in: [30, 0, { start: 0.5, end: 0.55 }],
                messageC_translate_in: [30, 0, { start: 0.77, end: 0.82 }],
                messageA_translate_out: [0, -20, { start: 0.3, end: 0.35 }],
                messageB_translate_out: [0, -20, { start: 0.58, end: 0.63 }],
                messageC_translate_out: [0, -20, { start: 0.85, end: 0.9 }],
                pinB_scaleY_in:[0.5,1,{ start: 0.5, end: 0.55 }],
                pinC_scaleY_in:[0.5,1,{start: 0.77, end: 0.82 }],
                pinB_scaleY_out:[1,0.5,{ start: 0.58, end: 0.63 }],
                pinC_scaleY_out:[1,0.5,{ start: 0.85, end: 0.9 }],
                totalImg:960,
                videoImg : [],
                ImgSequence : [0,959,{start:0,end:1}],
                canvas_opacity_in:[0,1,{start:0,end:0.1}],
                canvas_opacity_out:[1,0,{start:0.8,end:1}],
               
            }

        },
        {//3번 섹션
            type: 'sticky',
            heightNum: 6,
            scrollHeight: 0, // 스크롤의 총 높이 - max 높이값을 저장하기위한 변수
            objs: {
                caption:document.querySelector('.canvas-caption'),
                container: document.querySelector('#scroll-section-3'),
                canvas : document.querySelector('.blend-elem-canvas'),
                context : document.querySelector('.blend-elem-canvas').getContext('2d'),
                imagePath:['blend-1.jpg','blend-2.jpg'],
            },
            value: {
                rectOpacity:[0, 1, { start: 0, end: 0}],
                rectTransform:[20, 0, { start: 0, end: 0}],
                rectScale:[0, 0, { start: 0, end: 0}],
                rectBlend:[0, 0, { start: 0, end: 0}],
                endWindow:0,
                videoImg:[],
                rectLX:[0, 0, { start: 0, end: 0}],
                rectRX:[0, 0, { start: 0, end: 0}],
            }

        }
    ];

    function setlayout() {
      
        for (let i = 0; i < sceneInfo.length; i++) {
            if (sceneInfo[i].type === 'sticky') {
                sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
            }
            else if (sceneInfo[i].type === 'normal') {
                sceneInfo[i].scrollHeight = sceneInfo[i].objs.container.offsetHeight;
            }
            sceneInfo[i].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
        }

        yoffset = window.pageYOffset;
        let totalscrollHeight = 0;
        for (let i = 0; i < sceneInfo.length; i++) {
            totalscrollHeight += sceneInfo[i].scrollHeight;//여태까지의 섹션스크롤값을 빼주기 위해 totalscrollHeight에 값을 저장해놓음.
            if (totalscrollHeight >= yoffset) {
                currentScene = i;
                break;
            }
        }
        document.body.setAttribute('id', `show-section-${currentScene}`);
        const heightRatio = window.innerHeight/sceneInfo[0].objs.canvas.height;
        sceneInfo[0].objs.canvas.style.transform = `translate3d(-50%,-50%,0) scale(${heightRatio})`; 
        //scale:사진을 높이에 따라 동적으로 줄여줌
        //translate3d(-50%,-50%,0) : css에서 top: 50%, left: 50%으로 밀어준 화면을 가운데 정렬 시켜줌
        sceneInfo[2].objs.canvas.style.transform = `translate3d(-50%,-50%,0) scale(${heightRatio})`; 
       
    }

    function scrollAnimation() {
        const currentSceneYOffset = yoffset - prevScrollHeight; //현재 씬의 스크롤값 씬이 바뀔때마다 초기화.
        const scrollHeight = sceneInfo[currentScene].scrollHeight; // 현재 씬의 스크롤 높이값
        const offsetRatio = currentSceneYOffset / scrollHeight; // 현재 씬의 스크롤 퍼센트값 
        const value = sceneInfo[currentScene].value; // 현재 씬의 value 객체들.
        const objs = sceneInfo[currentScene].objs;
      
        if (yoffset > 44) {
            document.body.classList.add('second-nav-sticky')
        }else{
            document.body.classList.remove('second-nav-sticky')
        }
        switch (currentScene) {
            case 0:
            const lmageindex = parseInt(calcValue(currentSceneYOffset,value.ImgSequence));
            objs.context.drawImage(value.videoImg[lmageindex],0,0);
            objs.canvas.style.opacity = calcValue(currentSceneYOffset,value.canvas_opacity_out);

                if (offsetRatio<0.22) {
                    objs.messageA.style.opacity = calcValue(currentSceneYOffset,value.messageA_opacity_in);    
                    objs.messageA.style.transform = `translateY(${calcValue(currentSceneYOffset,value.messageA_translate_in)}%)`;
                }else{
                    objs.messageA.style.opacity = calcValue(currentSceneYOffset,value.messageA_opacity_out);    
                    objs.messageA.style.transform = `translateY(${calcValue(currentSceneYOffset,value.messageA_translate_out)}%)`;
                }
                if (offsetRatio<0.42) {
                    objs.messageB.style.opacity = calcValue(currentSceneYOffset,value.messageB_opacity_in);    
                    objs.messageB.style.transform = `translateY(${calcValue(currentSceneYOffset,value.messageB_translate_in)}%)`;
                }else{
                    objs.messageB.style.opacity = calcValue(currentSceneYOffset,value.messageB_opacity_out);
                    objs.messageB.style.transform = `translateY(${calcValue(currentSceneYOffset,value.messageB_translate_out)}%)`;    
                }
                if (offsetRatio<0.62) {
                    objs.messageC.style.opacity = calcValue(currentSceneYOffset,value.messageC_opacity_in);    
                    objs.messageC.style.transform = `translateY(${calcValue(currentSceneYOffset,value.messageC_translate_in)}%)`;
                }else{
                    objs.messageC.style.opacity = calcValue(currentSceneYOffset,value.messageC_opacity_out);    
                    objs.messageC.style.transform = `translateY(${calcValue(currentSceneYOffset,value.messageC_translate_out)}%)`;
                }
                if (offsetRatio<0.82) {
                    objs.messageD.style.opacity = calcValue(currentSceneYOffset,value.messageD_opacity_in);    
                    objs.messageD.style.transform = `translateY(${calcValue(currentSceneYOffset,value.messageD_translate_in)}%)`;
                }else{
                    objs.messageD.style.opacity = calcValue(currentSceneYOffset,value.messageD_opacity_out);    
                    objs.messageD.style.transform = `translateY(${calcValue(currentSceneYOffset,value.messageD_translate_out)}%)`;
                }
                break;
            case 1:
                break;
            case 2:
                const lmageindex2 = parseInt(calcValue(currentSceneYOffset,value.ImgSequence));
                objs.context.drawImage(value.videoImg[lmageindex2],0,0);
                if (offsetRatio<0.55) {
                    objs.canvas.style.opacity = calcValue(currentSceneYOffset,value.canvas_opacity_in);
                }else{
                    objs.canvas.style.opacity = calcValue(currentSceneYOffset,value.canvas_opacity_out);
                }
                if (offsetRatio<0.22) {
                    objs.messageA.style.opacity = calcValue(currentSceneYOffset,value.messageA_opacity_in);    
                    objs.messageA.style.transform = `translateY(${calcValue(currentSceneYOffset,value.messageA_translate_in)}%)`;
                }else{
                    objs.messageA.style.opacity = calcValue(currentSceneYOffset,value.messageA_opacity_out);    
                    objs.messageA.style.transform = `translateY(${calcValue(currentSceneYOffset,value.messageA_translate_out)}%)`;
                }
                if (offsetRatio<0.57 ) {
                    objs.messageB.style.opacity = calcValue(currentSceneYOffset,value.messageB_opacity_in);    
                    objs.messageB.style.transform = `translateY(${calcValue(currentSceneYOffset,value.messageB_translate_in)}%)`;
                    objs.pinB.style.transform = `scaleY(${calcValue(currentSceneYOffset,value.pinB_scaleY_in)})`
                                                                //scaleY은 %가 안들어감
                }else{
                    objs.messageB.style.opacity = calcValue(currentSceneYOffset,value.messageB_opacity_out);
                    objs.messageB.style.transform = `translateY(${calcValue(currentSceneYOffset,value.messageB_translate_out)}%)`;    
                    objs.pinB.style.transform = `scaleY(${calcValue(currentSceneYOffset,value.pinB_scaleY_out)})`
                }
                if (offsetRatio<0.84) {
                    objs.messageC.style.opacity = calcValue(currentSceneYOffset,value.messageC_opacity_in);    
                    objs.messageC.style.transform = `translateY(${calcValue(currentSceneYOffset,value.messageC_translate_in)}%)`;
                    objs.pinC.style.transform = `scaleY(${calcValue(currentSceneYOffset,value.pinC_scaleY_in)})`
                }else{
                    objs.messageC.style.opacity = calcValue(currentSceneYOffset,value.messageC_opacity_out);    
                    objs.messageC.style.transform = `translateY(${calcValue(currentSceneYOffset,value.messageC_translate_out)}%)`;
                    objs.pinC.style.transform = `scaleY(${calcValue(currentSceneYOffset,value.pinC_scaleY_out)})`
                }

                if (offsetRatio>0.8) {
                    const widthRatio = window.innerWidth / sceneInfo[3].objs.canvas.width; // 윈도우 화면에 사진 가로를 맞춤
                    const heightRatio = window.innerHeight / sceneInfo[3].objs.canvas.height; // 윈도우 화면에 사진 높이를 맞춤
                    let scaleRatio;

                    if (widthRatio>=heightRatio) {
                        scaleRatio=widthRatio
                    }else{
                        scaleRatio=heightRatio
                    }
                    sceneInfo[3].objs.canvas.style.transform = `scale(${scaleRatio})`;
                    sceneInfo[3].objs.context.drawImage(sceneInfo[3].value.videoImg[0],0,0);

                    const widthOfimage = document.body.offsetWidth / scaleRatio; // 사진의 실제 가로
                    // const heightOfimage = document.body.offsetHeight / scaleRatio; // 사진의 실제 높이

                    const whiteRect = widthOfimage * 0.15 // 임의의 박스를 만듦.

                    sceneInfo[3].value.rectLX[0] = (sceneInfo[3].objs.canvas.width - widthOfimage ) / 2; 
                    //canvas의 원래 크기에서 사진의 실제 가로를 빼고 ÷2를 해주면 한쪽의 x좌표가 나옴.
                    sceneInfo[3].value.rectLX[1] = sceneInfo[3].value.rectLX[0] - whiteRect;
                    sceneInfo[3].value.rectRX[0] = sceneInfo[3].value.rectLX[0] + widthOfimage - whiteRect;
                    sceneInfo[3]. value.rectRX[1] = sceneInfo[3].value.rectRX[0] + whiteRect;

                
                sceneInfo[3].objs.context.fillStyle = 'white';
                sceneInfo[3].objs.context.fillRect(sceneInfo[3].value.rectLX[0],0,parseInt(whiteRect),sceneInfo[3].objs.canvas.height)
                sceneInfo[3].objs.context.fillRect(sceneInfo[3].value.rectRX[0],0,parseInt(whiteRect),sceneInfo[3].objs.canvas.height)
            }
                break;
                case 3:
                    const widthRatio = window.innerWidth / objs.canvas.width; // 윈도우 화면에 사진 가로를 맞춤
                    const heightRatio = window.innerHeight / objs.canvas.height; // 윈도우 화면에 사진 높이를 맞춤
                    let scaleRatio;

                    if (widthRatio>=heightRatio) {
                        scaleRatio=widthRatio
                    }else{
                        scaleRatio=heightRatio
                    }
                    objs.canvas.style.transform = `scale(${scaleRatio})`;
                    objs.context.drawImage(value.videoImg[0],0,0);

                    const widthOfimage = document.body.offsetWidth / scaleRatio; // 사진의 실제 가로
                    // const heightOfimage = document.body.offsetHeight / scaleRatio; // 사진의 실제 높이

                    const whiteRect = widthOfimage * 0.15 // 임의의 박스를 만듦.

                    value.rectLX[0] = (objs.canvas.width - widthOfimage ) / 2; 
                    //canvas의 원래 크기에서 사진의 실제 가로를 빼고 ÷2를 해주면 한쪽의 x좌표가 나옴.
                    value.rectLX[1] = value.rectLX[0] - whiteRect;
                    value.rectRX[0] = value.rectLX[0] + widthOfimage - whiteRect;
                    value.rectRX[1] = value.rectRX[0] + whiteRect;

                    if (!value.endWindow) {
                        value.rectLX[2].start = 0.05;
                        value.rectRX[2].start = 0.05;
                        value.endWindow = objs.canvas.offsetTop + (objs.canvas.height - objs.canvas.height * scaleRatio)/2;
                        value.rectLX[2].end = value.endWindow/scrollHeight;
                        value.rectRX[2].end = value.endWindow/scrollHeight;
                    }
                    
                    if (offsetRatio < value.rectLX[2].end) {
                        objs.canvas.classList.remove('sticky');
                    }else{
                        objs.canvas.classList.add('sticky');
                        objs.canvas.style.top = `-${(objs.canvas.height - objs.canvas.height * scaleRatio)/2}px`;

                        value.rectBlend[0] = 0; // 맨처음 그려지는 높이
                        value.rectBlend[1] = objs.canvas.height; // 총 그려지는 높이
                        value.rectBlend[2].start = value.rectRX[2].end; // 시작하는 부분. 위에가 끝나자 마자 시작하기때문에.
                        value.rectBlend[2].end = value.rectBlend[2].start+0.2; 
                        // 현재 씬의 중간에서 시작하기 때문에 value.rectBlend[2].start에서 20%를 내렸을때 끝나게함.
                        let blendHeight = objs.canvas.height - calcValue(currentSceneYOffset,value.rectBlend);
                        // 점점 그려지는 값을 구하기 위해서 전체높이에서 그려진 높이를 빼줌
                        objs.context.drawImage(value.videoImg[1],
                            0,blendHeight,objs.canvas.width,calcValue(currentSceneYOffset,value.rectBlend),
                            0,blendHeight,objs.canvas.width,calcValue(currentSceneYOffset,value.rectBlend),
                            )
                            if (offsetRatio > value.rectBlend[2].end) {
                                objs.canvas.style.marginTop = 0;
                                value.rectScale[0] = scaleRatio; // 이미 작아진 스케일값
                                value.rectScale[1] = document.body.offsetWidth / (objs.canvas.width*1.7); // 더 작게 만들 스케일값 
                                value.rectScale[2].start = value.rectBlend[2].end;
                                value.rectScale[2].end = value.rectScale[2].start + 0.2;

                                objs.canvas.style.transform = `scale(${calcValue(currentSceneYOffset,value.rectScale)})`;
                            }
                            if (offsetRatio > value.rectScale[2].end && value.rectScale[2].end>0) {
                                objs.canvas.classList.remove('sticky');
                                objs.canvas.style.marginTop = `${scrollHeight * 0.4}px`;

                                value.rectTransform[2].start = value.rectScale[2].end;
                                value.rectTransform[2].end =  value.rectTransform[2].start + 0.1;
                                value.rectOpacity[2].start = value.rectScale[2].end + 0.05;
                                value.rectOpacity[2].end = value.rectOpacity[2].start + 0.1;

                                objs.caption.style.opacity = calcValue(currentSceneYOffset,value.rectOpacity);
                                objs.caption.style.transform =`translate3d(0,${calcValue(currentSceneYOffset,value.rectTransform)}%,0)`;
                            }
                    }

                    objs.context.fillStyle = 'white';
                    objs.context.fillRect(parseInt(calcValue(currentSceneYOffset,value.rectLX)),0,parseInt(whiteRect),objs.canvas.height)
                    objs.context.fillRect(parseInt(calcValue(currentSceneYOffset,value.rectRX)),0,parseInt(whiteRect),objs.canvas.height)
                    break;
            default:
                break;
        }
    }

    function setImg() {
        let img ;
        for(let i = 0; i<sceneInfo[0].value.totalImg; i++){
            img = new Image();
            img.src = `video/001/IMG_${6726+ i }.JPG`;
            sceneInfo[0].value.videoImg.push(img);
        }
        for(let i = 0; i<sceneInfo[2].value.totalImg; i++){
            img = new Image();
            img.src = `video/002/IMG_${7027+ i }.JPG`;
            sceneInfo[2].value.videoImg.push(img);
        }
        for(let i of sceneInfo[3].objs.imagePath){
            img = new Image();
            img.src = i;
            sceneInfo[3].value.videoImg.push(img);
        }
    }
    setImg();

    function calcValue(currentyOffset, value){
        let rv;
        // 현재 씬에서 스크롤된 범위를 비율로 구하기
        let scrollHeight = sceneInfo[currentScene].scrollHeight;
        let scrollRatio = currentyOffset / scrollHeight;
        if(value.length === 3){
        // start ~ end 사이에 애니메이션 실행
            const partStart = scrollHeight * value[2].start;
            const partEnd = scrollHeight * value[2].end;
            const partScrollHeight = partEnd - partStart; 
            if(currentyOffset>=partStart && currentyOffset<=partEnd){
                rv = (currentyOffset-partStart)/partScrollHeight * (value[1]-value[0]) + value[0];
            }else if(currentyOffset < partStart){
                rv = value[0];
            }else if(currentyOffset > partEnd){
                rv = value[1];
            }
        }else{
            rv = scrollRatio * (value[1]-value[0]) + value[0];
            
        }
        return rv;
    }
    function Loop() {
        enterScene = false;
        prevScrollHeight = 0;
        for (let i = 0; i < currentScene; i++) {
            prevScrollHeight += sceneInfo[i].scrollHeight;
        }
        if (yoffset > sceneInfo[currentScene].scrollHeight + prevScrollHeight) {
            enterScene = true;
            currentScene++;
            document.body.setAttribute('id', `show-section-${currentScene}`);
        }
        else if (yoffset < prevScrollHeight) {
            if (currentScene === 0) { return }
            enterScene = true;
            currentScene--;
            document.body.setAttribute('id', `show-section-${currentScene}`);
           
        }
        if (enterScene) { return }
        scrollAnimation()
    }

   

    window.addEventListener('load', ()=>{
        setlayout();
        document.body.classList.remove('before-load');
        setlayout();
        sceneInfo[0].objs.context.drawImage(sceneInfo[0].value.videoImg[0],0,0);
        sceneInfo[2].objs.context.drawImage(sceneInfo[2].value.videoImg[0],0,0);

        document.querySelector('.loading').addEventListener('transitionend',(e)=>{
            document.querySelector('.temp').removeChild(e.currentTarget);
        });

        window.addEventListener('scroll', function () {
            yoffset = parseInt(pageYOffset)
            Loop();
        });
        
    window.addEventListener('resize', ()=>{
        window.location.reload();
    });
    })

})();
// var 쓰는순간 계속 덮어씌워짐 같은 변수이름을 사용 할 수 있음
// let 변수를 같은 이름으로 선언할 수 없음 값은 계속 변경 가능
// const 변수를 같은 이름으로 선언할 수 없음 값도 계속 변경 불가능

// html 시작시 즉시 실행하는법. 바로 펑션을 씀
// (function() {

// })();