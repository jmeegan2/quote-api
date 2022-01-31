
    init()

    function init() {

        var url = "https://api.kanye.rest"

        var data = ''

        $.get(url, function (data) {
            console.log(data)

        })
    }