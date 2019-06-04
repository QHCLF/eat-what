<template>
    <div id="Header">
        <div class="content-wrapper">
            <div class="avatar">
                <img :src="seller.avatar" width="64" height="64">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div class="support" v-if="seller.supports" @click="showDetail">
                    <span class="icon" v-bind:class="classMap[seller.supports[0].type]"></span>
                    <span class="text">
                        {{seller.supports[0].description}}
                    </span>
                </div>
            </div>
            <div class="support-count" v-if="seller.supports">
               <span class="count">
                    {{seller.supports.length}}个
               </span>
                <i class="iconfont icon-right"></i>
            </div>
        </div>
        <div class="bulletin-wrapper" >
            <span class="bulletin-title"></span>
            <span class="bulletin-text">
                {{seller.bulletin}}
            </span>
            <i class="iconfont icon-right"></i>
        </div>
        <div class="background">
            <img :src="seller.avatar" width="100%" height="100%">
        </div>
        <div class="detail" v-show="detailShow" >
            <div class="detail-wrapper clearfix">
                <div class="detail-main">
                    <h1 class="name">{{seller.name}}</h1>
                    <star :size="24" :score="seller.score"></star>
                </div>
            </div>
            <div class="detail-close">
                <i class="iconfont icon-close2"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import star from '../star/Star'
    import axios from 'axios/index';
    export default {
        name: "Header",
        data(){
            return{
                seller: {
                    type: Object
                },
                detailShow: false
            }
        },
        methods:{
            async getData(){
                let detail = await axios.get('/data/data.json');
                this.seller = detail.data.seller;
            },
            showDetail(){
                this.detailShow = true;
            }
        },
        async mounted() {
            await this.getData();
        },
        created() {
            this.classMap = ['decrease', 'discount','guarantee','invoice','special'];
        },
        components:{
            star
        }
    }
</script>

<style lang="stylus" scoped>
    @import "../../assets/stylus/mixin.styl";
    @import '//at.alicdn.com/t/font_1227783_ga38vkp5qpj.css';
    #Header
        position relative
        color #fff
        background-color rgba(7, 17, 27, 0.5)
        overflow hidden
        .content-wrapper
            padding 24px 12px 18px 24px
            font-size 0
            .avatar
                display inline-block
                vertical-align top
                img
                    border-radius 2px
            .content
                display inline-block
                margin-left 16px
                font-size 14px
                .title
                    margin 2px 0 8px 0
                    .brand
                        display inline-block
                        vertical-align top
                        width 30px
                        height 18px
                        bg-image('brand')
                        background-size 30px 18px
                        background-repeat no-repeat
                    .name
                        margin-left 6px
                        font-size 16px
                        line-height 18px
                        font-weight bold
                .description
                    margin-bottom 10px
                    line-height 12px
                    font-size 12px
                .support
                    .icon
                        display inline-block
                        vertical-align top
                        width 12px
                        height 12px
                        margin-right 4px
                        background-size 12px 12px
                        background-repeat no-repeat
                        &.decrease
                            bg-image('decrease_1')
                        &.discount
                            bg-image('discount_1')
                        &.guarantee
                            bg-image('guarantee_1')
                        &.invoice
                            bg-image('invoice_1')
                        &.special
                            bg-image('special_1')


                    .text
                        line-height 12px
                        font-size 10px



            .support-count
                position absolute
                right 12px
                bottom 48px
                padding 0 8px
                height 24px
                line-height 24px
                border-radius 14px
                background-color rgba(0, 0, 0, 0.2)
                text-align center
                .count
                    font-size 10px
                .icon-right
                    font-size 20px


        .bulletin-wrapper
            position relative
            height 28px
            line-height 28px
            padding 0 22px 0 22px
            white-space normal
            overflow hidden
            text-overflow ellipsis
            background rgba(7, 17, 27, 0.2)
            .bulletin-title
                display inline-block
                vertical-align top
                margin-top 8px
                width 22px
                height 12px
                bg-image('bulletin')
                background-size 22px 12px
                background-repeat no-repeat
            .bulletin-text
                vertical-align top
                margin 0 4px
                font-size 10px
            .icon-right
                position absolute
                font-size 10px
                right 12px
                top -1px

        .background
            position absolute
            top 0
            left 0
            width 100%
            height 100%
            z-index -1
            filter blur(10px)

        .detail
            position fixed
            top 0
            left 0
            z-index 100
            width 100%
            height 100%
            overflow auto
            background-color rgba(7, 17, 27, 0.8);
            .detail-wrapper
                width 100%
                min-height 100%
                .detail-main
                    margin-top 64px
                    padding-bottom  64px
                    .name
                        line-height 16px
                        text-align center
                        font-size 16px
                        font-weight 700
            .detail-close
                position relative
                width 32px
                height 32px
                margin -64px auto 0 auto
                clear both
                .icon-close2
                    font-size 32px

</style>
