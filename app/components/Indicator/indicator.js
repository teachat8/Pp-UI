let Indicator = {};
Indicator.install = function(Vue) {
    
    Vue.prototype.$indicator = function(options={}) {

        let opt = {
            // 文本内容
            text : '',
            // 加载图标的类型 snake, fading-circle, double-bounce, triple-bounce
            spinnerType : 'snake',
        };

        for ( let x in options ) {
            if ( options[x] ) {
                opt[x] = options[x];
            }
        }

        let indicatorTpl = Vue.extend({
            template : `<div class="pop-box">
                            <div class="pop-msg" id="popMsg">
                                <div class="${opt.spinnerType}"></div>
                                <div class="loading-text">${opt.text}</div>
                            </div>
                        </div>`
        });
        // 挂载dom
        let tpl = new indicatorTpl().$mount().$el;
        document.body.appendChild(tpl);

        Vue.prototype.$indicator.close = () => {
            document.querySelector('#popMsg').className += ' pop-out';
                setTimeout( () => {
                    document.body.removeChild(tpl);
                }, 500);         
            }
    };
};

export default Indicator;
