window.addEventListener('load', createChart);
window.addEventListener('resize', createChart);

function createChart(e){
    const days = document.querySelectorAll('.chart-values li');
    const tasks = document.querySelectorAll('.chart-bars li');
    const daysArray = [...days];
    /*
    NodeList >> Array 변환
        case 1:
            Array.from(days);
        case 2:
            const daysArray = [...days];
    */


    tasks.forEach( item => {
        /* TO-DO
            1. 시작일의 left 확인
            2. task bar width 확인
            3. left, width li css 지정
        */

        //0. 변수 지정
        const duration = item.dataset.duration.split('-');
        const startDate = duration[0];
        const endDate = duration[1];
        let left = 0,
            width = 0;

        //1. 시작일의 left 확인
        //startDate 1/2 - left 위치 값 확인하기
        if(startDate.endsWith('½')){
            //filter 사용하기 위해 days를 array로 변환. chart-values li 값이 data-duration과 같은지 
            const filteredArray = daysArray.filter(day => day.textContent == startDate.slice(0, -1));
            //시작일의 left값에 시작일의 절반 넓이 더해주기 (+1/2)
            left = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth/2;
        }
        else{
            const filteredArray = daysArray.filter(day => day.textContent == startDate);
            left = filteredArray[0].offsetLeft ;
        }

        //2. task bar width 확인
        //endDate 1/2 - width 값 확인하기
        if(endDate.endsWith('½')){
            //fri½ >> fri 값만 추출
            const filteredArray = daysArray.filter(day => day.textContent == endDate.slice(0, -1));
            console.log(filteredArray[0])
            width = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth/2 - left;
        }
        else{
            const filteredArray = daysArray.filter(day => day.textContent == endDate);
            width = filteredArray[0].offsetLeft + filteredArray[0].offsetWidth - left;
        }


        //3. left width li css
        item.style.left = `${left}px`;
        item.style.width = `${width}px`;
        if(e.type=='load'){
            item.style.backgroundColor = item.dataset.color;
            item.style.opacity = 1;
        }

    });//task forech

}//createChart