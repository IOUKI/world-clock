const momentConfig = {
    format: 'YYYY/MM/DD_HH:mm:ss',
    list: [
        {
            area: '亞洲/台北',
            momentTimezone: 'Asia/Taipei',
        },
        {
            area: '美國/紐約',
            momentTimezone: 'America/New_York',
        },
        {
            area: '歐洲/倫敦',
            momentTimezone: 'Europe/London',
        },
        {
            area: '亞洲/東京',
            momentTimezone: 'Asia/Tokyo',
        },
        {
            area: '亞洲/上海',
            momentTimezone: 'Asia/Shanghai',
        },
        {
            area: '歐洲/巴黎',
            momentTimezone: 'Europe/Paris',
        },
        {
            area: '澳洲/雪梨',
            momentTimezone: 'Australia/Sydney',
        },
        {
            area: '加拿大/多倫多',
            momentTimezone: 'America/Toronto',
        },
        {
            area: '巴西/聖保羅',
            momentTimezone: 'America/Sao_Paulo',
        },
        {
            area: '印度/加爾各答',
            momentTimezone: 'Asia/Kolkata',
        },
        {
            area: '南非/約翰尼斯堡',
            momentTimezone: 'Africa/Johannesburg',
        },
        {
            area: '墨西哥/墨西哥城',
            momentTimezone: 'America/Mexico_City',
        }
    ]
}

function displayDateTime() {
    const doms = document.getElementsByClassName('displayDatetime')
    momentConfig.list.forEach((item, index) => {
        const datetime = moment().tz(item.momentTimezone).format(momentConfig.format).split('_')
        const element = `
        <div class="text-center">
            <div>
                ${item.area}
            </div>
            <div>
                ${datetime[0]}
            </div>
            <div>
                ${datetime[1]}
            </div>
        </div>
        `
        doms[index].innerHTML = element
    })
}

setInterval(() => {
    displayDateTime()
}, 500);