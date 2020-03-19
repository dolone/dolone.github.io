var vm = new Vue({
    el: '#content',
    data: {
        text: ""
    },
    created: function () {
        // leancloud
        var { Query, User } = AV;
        AV.init({
            appId: "KxlzNdB9jgsUzQ2T0bJ5uGUk-9Nh9j0Va",
            appKey: "2ixFgcplxugvEyMPBoqlMplS",
            serverURLs: "https://kxlzndb9.lc-cn-e1-shared.com"
        });

        var query = new AV.Query('notepad');
        query.get('5e72fb3d14de8e00084c04d1').then((res) => {
            var text = res.get('text')
            // console.log(text);
            this.text = text
        })
    },
    watch: {
        text: function (newText, oldText) {
            var query = new AV.Query('notepad');
            query.get('5e72fb3d14de8e00084c04d1').then((res) => {
                res.set('text', newText);
                res.save();
            })
        }
    }
})