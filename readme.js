const fs = require('fs');

const path = require('path')
//배열 내 한국어 변환
const ChangeKor = (arr)=>{
    let result = [];
    for ( let i of arr){
        let newArr = i.map((i)=>{
            return encodeURIComponent(i);
        })
        result.push(newArr);
    }
    return result;
}

// URL 작성 함수
const MakeURL = (arr, newArr,subfolders) => {
    let result = [];

    for (let index = 0; index < newArr.length; index++) {
        const urls = newArr[index].map((i, innerIndex) => {
            return `* [${arr[index][innerIndex].replace(".md","")}](https://github.com/killthecardz/Obsidian/blob/main/${subfolders[index]}/${i})`;
        });
        result.push(urls);
    }

    return result;
}

//폴더 내 파일 가져오는 함수
const getFiles = (directory)=>{
    let result = [];
    for( let i of directory){
        result.push(fs.readdirSync(`./${i}`));
    }
    return result
}
//폴더 가져오는 함수
const getDir = ()=>{
    let items = fs.readdirSync("./");

        // 디렉토리만 필터링합니다.
        const subfolders = items.filter(item => {
            const itemPath = path.join("./", item);
            return fs.statSync(itemPath).isDirectory() && item !== ".git" && item !== "node_modules" && item !== ".obsidian";
        });
        return subfolders;
}

// 메인 함수
const main = ()=>{
    let subfolders =getDir();
    let arr =getFiles(subfolders);
    let newArr = ChangeKor(arr);
    let result=MakeURL(arr,newArr,subfolders);

    let output = `# My Programming Brain Blueprint 💾\n\n`;
    for (let i = 0; i < subfolders.length; i++) {
        output += `# 🧠 ${subfolders[i]}\n`; 
        output += result[i].join('\n') + '\n\n'; 
    }

    fs.writeFileSync('README.md', output);
    console.log("README 파일 수정/생성 완료")
}

main();


