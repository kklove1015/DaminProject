//버튼 만들기
function createInfobtns() {
    //#023e8a
    const allBtn2= `
background: white !important;
width: 80px;
height: 40px;
color:#225ea7;
border-radius:15px !important;
z-index: 23435645675678 !important;
font-size: 15px !important;
margin-left:10px;
border:1px solid #225ea7;
cursor:Pointer;
`
const allBtn= `
color: #225ea7 !important;
	text-transform: uppercase;
	text-decoration: none;
	background: white;
	padding: 12px;
	border-radius: 5px;
	display: inline-block;
    cursor:pointer;
    margin-left:10px;
	border: 1px solid #225ea7;
	transition: all 0.4s ease 0s;
`

const changebtn2=`
background : #225ea7 !important;
width: 80px;
height: 40px;
color:white;
border-radius:15px !important;
z-index: 23435645675678 !important;
font-size: 15px !important;
margin-left:10px;
border:1px solid white;
cursor:Pointer;

`

const changebtn=`
background: #225ea7;
color : white;
border-radius: 5px;
padding:15px;
margin-left:10px;
border: 1px solid #225ea7;
cursor:pointer;
	letter-spacing: 1px;
	-webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
	-moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
	box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
	transition: all 0.4s ease 0s;
`


//const로 선언하여 재할당 제한

    //확장프로그램이 들어갈 div 생성 및 style 지정
    const htmlScanInfo = document.createElement('div');
    document.body.appendChild(htmlScanInfo)
    htmlScanInfo.style.position = "fixed";
    htmlScanInfo.style.right = "20px";
    htmlScanInfo.style.top = "5px";
    htmlScanInfo.className = "html-scan-info"
    htmlScanInfo.style.zIndex = "23435645675678"

    // 수집버튼생성
    const oneClick = document.createElement('button');
    oneClick.className = "copy-btn"
    oneClick.textContent = "수집";
    oneClick.style.cssText = allBtn

    oneClick.addEventListener('mouseover',(e)=>{
        oneClick.style.cssText = changebtn
    });
    oneClick.addEventListener('mouseout',(e)=>{
        oneClick.style.cssText = allBtn
    });

    oneClick.addEventListener('click', (e) => {
        e.stopPropagation();
        oneClick.textContent = "수집중";
        let all = document.querySelector('html').outerHTML.replace(oneClick.outerHTML + run.outerHTML, "");

        copyFunctionhtml(e, all)

        setTimeout(() => {
            oneClick.textContent = "수집";
            alert('수집이 완료되었습니다.');
        }, 500)
    })
    htmlScanInfo.appendChild(oneClick);

    
    // 닫기버튼생성
    const run = document.createElement('button');
    run.className = "run";
    run.style.cssText = allBtn;
    htmlScanInfo.appendChild(run);
    run.textContent = "닫기";

    run.addEventListener('mouseover',(e)=>{
        run.style.cssText = changebtn
    });
    run.addEventListener('mouseout',(e)=>{
        run.style.cssText = allBtn
    });

    run.addEventListener('click', (e) => {
        e.stopPropagation()
        Disable(e)
    })
}

// CSS 정보 가져오기
function getCss(element, property) {
    return window.getComputedStyle(element, null).getPropertyValue(property);
}

// HTML복사
function copyFunctionhtml(e, data) {

    const copyText = data;
    const textArea = document.createElement("textarea");
    //클립보드로 복사를 위해 textArea필드 생성 (hidden에는 복사 불가능) -> select()를 이용해야 하기때문
    textArea.style.position = "absolute";
    textArea.style.left = "-100%";
    //화면이 깜빡거리지 않도록 화면 밖에서 발생하도록 함
    textArea.value = copyText.replace("Copy Html", "");
    document.body.append(textArea);
    textArea.select();
    var returnValue = document.execCommand("copy");
    //클립보드 복사 메소드

    document.body.removeChild(textArea);
    //사용한 textArea 삭제
    if (!returnValue) { throw new Error('수집 실패'); }
    //수집 실패 시 에러 표시
}

// 확장프로그램 ON
function Enable() {
    var htmlBtns = window.document.querySelector(".html-scan-info");
    //버튼없을시 버튼생성
    if (!htmlBtns) {
        createInfobtns()
        var document = window.document;
        return true
    }
    return false;
};

//확장프로그램 OFF
function Disable(e) {
    var htmlScanInfo = window.document.querySelector(".html-scan-info");
    var document = window.document;

    //document와 html스캔정보 지우기
    if (htmlScanInfo) {
        document.body.removeChild(htmlScanInfo);
    }
};

if (Enable()) {} 
else {
    Disable()
}



