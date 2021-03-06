let Toast = {};
Toast.install = function(Vue) {
    // 添加实例方法，调用的时候就是this.$toast();
    Vue.prototype.$toast = (options) => {

        let opt = {
            // 文本内容
            message : '',
            // Toast位置
            position : 'middle',//top,middle,bottom
            // 持续时间
            duration : 2000,
            // Toast的样式名
            className : '',
            // icon图标的样式名
            iconClass : ''
        };

        for ( let x in options ) {
            if ( options[x] !== '' ) {
                opt[x] = options[x];
            }
        }

        let toastTpl = Vue.extend({
            template : `<div class="pop-box">
                            <div class="pop-msg ${opt.className} position-${opt.position}" id="popMsg">
                                <div class="${opt.iconClass}"></div>
                                <div>${opt.message}</div>
                            </div>
                        </div>`
        });
        let tpl = new toastTpl().$mount().$el;
        document.body.appendChild(tpl);
        setTimeout( () => {
            document.querySelector('#popMsg').className += ' pop-out';
            setTimeout( () => {
                document.body.removeChild(tpl);
            }, 300);
        }, opt.duration);
        
    };
};

export default Toast;
