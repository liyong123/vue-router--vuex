<template>
<!-- 用less样式写的Alert组件 -->
    <div class="alert">
        <!-- 遮罩 -->
        <div class="zhezhao">
            <div class="alertMain">
                <div class="title">
                    提示
                </div>
                <div class="content">
                    即将删除某个内容
                </div>
                <div class="btnList">
                    <div @click="cancelEvent" class="btn cancel">取消</div>
                    <div @click="confirmEvent" class="btn confirm">确定</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'alert',
    props: ['title', 'content', 'cancelEvent', 'confirmEvent']
}
</script>
<style lang="less" scoped>
    /* 主题颜色 */
    @theme-color: skyblue;
    /* 默认字体 */
    @default-size: 18px;
    /* 字体颜色 */
    @font-color: #fff;
    /* 遮罩透明度 */
    @zzOpacity: 0.6;

    /* 满屏变量 */
    .fullScreen() {
        width: 100vw;
        height: 100vh;
        display: flex;
    }
    /* 默认内边距变量 */
    .defaultPadding() {
        padding: 10px;
    }
    /* 默认按钮样式变量, padding默认20px */
    .button(@padding: 20px) {
        padding: @padding;
        text-align: center;
    }
    .alert {
        .fullScreen();
        .zhezhao {
            .fullScreen();
            background: rgba(0, 0, 0, @zzOpacity);
            justify-content: center;
            align-items: center;
        }
        .alertMain {
            width: 600px;
            height: 400px;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            position: relative;
            .title {
                font-size: @default-size;
                height: 50px;
                background-color: @theme-color;
                color: @font-color;
                .defaultPadding();
                line-height: 50px;
                text-align: left;
            }
            .content {
                font-size: @default-size;
                .defaultPadding();
            }
            .btnList {
                position: absolute;
                left: 0;
                bottom: 0;
                display: flex;
                width: 100%;
            }
            .btn {
                .button(@padding: 16px);
                cursor: pointer;
                flex: 1 1 0.5%
            }
            .cancel {
                background-color: #fafafa;
            }
            .confirm {
                background-color: @theme-color;
            }
        }
    }
</style>