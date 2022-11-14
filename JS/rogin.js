//이현주
const sideBarbtn = document.querySelector(".sideBar");
const closesideBarBtn = document.querySelector(".closesideBar");
const section = document.querySelector(".moreInfo-icon");
const label = document.querySelector(".moreInfo");

// 클릭 시 사이드 메뉴 생성, 사이드버튼 사라짐
sideBarbtn.addEventListener("click", function () {
    section.style.left = 0;
});
  
// 클릭 시 사이드 메뉴 사라짐, 사이드바 버튼 생성
closesideBarBtn.addEventListener("click", function () {
    section.style.left = "-100%";
});

//접속 요일을 얻는 함수
function getWeekDayToday(){
    const now = new Date();
    const weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri','Sat'];
    const week = weekDay[now.getDay()];
    return week;
}

//접속 요일에 따른 메인 화면 세팅
function setMainforweekDay(){
    if( getWeekDayToday()== 'Sun' )
    {location.href = '../Components/일요웹툰/sunWebToonPage.html'}
    else if( getWeekDayToday() == 'Mon' )
    {location.href = "../Components/월요웹툰/monWebToonPage.html"}
    else if( getWeekDayToday() == 'Tue' )
    {location.href = "../Components/화요웹툰/tueWebToonPage.html"}
    else if( getWeekDayToday() == 'Wed' )
    {location.href = "../Components/수요웹툰/wednsWebToonPage.html"}
    else if( getWeekDayToday() == 'Thu' )
    {location.href = "../Components/목요웹툰/thursWebToonPage.html"}
    else if( getWeekDayToday() == 'Fri' )
    {location.href = "../Components/금요웹툰/friWebToonPage.html"}
    else if( getWeekDayToday() == 'Sat' )
    {location.href = "../Components/토요웹툰/saturWebToonPage.html"}
}

// 로그인
function Rogin(){
    const inputId =document.querySelector('#roginIdInput');
    const inputPw =document.querySelector('#roginPasswordInput');
    const person = {
        id: 'manager',
        pw: 123456
      };  
    if(inputId.value == person.id ||inputPw == person.pw){
        setMainforweekDay();
    }
    else if(inputId.value == ""){
        alert("아이디를 입력해 주세요.")
    }
    else if(inputPw.value == ""){
        alert("비밀번호를 입력해 주세요.")
    }
    else
    alert("정보가 옳지 않습니다.")
}
