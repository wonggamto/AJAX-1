// const { getMaxListeners } = require("process")




console.log('我是main.js')
let n = 1
getCss.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            // 下载完成，但是不知道是成功还是失败，所以需要下面的代码进行判断
            if (request.status >= 200 && request.status < 300) { //只有2开头的状态码才表示成功
                //创建style标签
                const style = document.createElement('style')
                    //填写style内容
                style.innerHTML = request.response
                    //插入style到html
                document.head.appendChild(style)
            } else {
                alert('请求CSS失败')
            }
        }
        // console.log(request.readyState)
    }

    request.send()
}
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onload = () => {
        const js = document.createElement('script')
        js.innerHTML = request.response
        document.body.appendChild(js)
    }
    request.onerror = () => {
        console.log('2.js请求失败')
    }
    request.send()
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onload = () => {
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () => {
        console.log('3.html请求失败')
    }
    request.send()
}
getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML
            const text = (dom.getElementsByTagName('warning')[0].textContent)
            console.log(text.trim())
        }
    }
    request.send()
}
getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const obj = JSON.parse(request.response)
            myName.textContent = obj.name
            console.log(obj)
        }
    }
    request.send()
}
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n+1}.json`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li)
            });
            n += 1
        }
    }
    request.send()
}