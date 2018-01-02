let MessageBox = {};
MessageBox.install = function(Vue) {
    // 添加实例方法，调用的时候就是this.$messageBox();
    Vue.prototype.$messageBox = (options) => {

        let opt = {
            // 提示框的标题
            title : '',
            // 文本内容
            message : '',

            // 是否显示确认按钮
            showConfirmButton : true,
            // 是否显示取消按钮            
            showCancelButton : true,
            // 确认按钮的文本
            confirmButtonText : '确定',

            // 确认按钮的类名
            confirmButtonClass : '',
            // 取消按钮的文本
            cancelButtonText : '取消',
            // 取消按钮的类名
            cancelButtonClass : '',
            // 是否在点击遮罩时关闭提示框
            closeOnClickModal : true,

            // 点击确定按钮的回调事件
            sureCb() {},

            // 点击取消按钮的回调事件            
            cancelCb() {}
        };

        for ( let x in options ) {
            if ( options[x] !== '' ) {
                opt[x] = options[x];
            }
        }

        let messageBoxTpl = Vue.extend({
            template : `<div class="pp-box" id="ppBox">
                            <div class="pp-bg"></div>
                            <div class="pp-message" id="ppMessage">
                                <div class="pp-title">${opt.title}</div>
                                <div class="pp-content">${opt.message}</div>
                                <div class="pp-btns">
                                    <button class="cancel-btn ${opt.cancelButtonClass}" id="cancelBtn">${opt.cancelButtonText}</button>
                                    <button class="sure-btn ${opt.confirmButtonClass}" id="confirmBtn">${opt.confirmButtonText}</button>
                                </div>            
                            </div>
                        </div>`
        });
        let tpl = new messageBoxTpl().$mount().$el;
        document.body.appendChild(tpl);

        let ppBox = document.querySelector('#ppBox'),
            ppMessage = ppBox.querySelector('#ppMessage'),
            confirmBtn = ppBox.querySelector('#confirmBtn'),
            cancelBtn = ppBox.querySelector('#cancelBtn');

        if ( !opt.showCancelButton ) {
            cancelBtn.style.display = 'none';
        }
        confirmBtn.onclick = function() {
            ppMessage.className += ' pp-out';
            setTimeout( () => {
                document.body.removeChild(tpl);
                opt.sureCb();
            }, 100);              
        };
        cancelBtn.onclick = function() {
            ppMessage.className += ' pp-out';
            setTimeout( () => {
                document.body.removeChild(tpl);
                opt.cancelCb();
            }, 100);              
        };
    };
};

export default MessageBox;
