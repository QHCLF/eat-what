<template>
    <div class="star" :class="starType">
        <span v-for="(itemClass, index) in itemClasses"
              :key="index"
              :class="itemClass"
              class="starItem">
        </span>
    </div>
</template>

<script>
    const LENGTH = 5;
    const CLS_ON = 'on';
    const CLS_HALF = 'half';
    const CLS_OFF = 'off';
    export default{
        name: "star",
        props: {
            size: {
                type: Number
            },
            score: {
                type: Number
            }
        },
        data(){
            return{}
        },
        computed: {
             starType(){
                 return "star-" + this.size;
            },
            itemClasses(){
                let resule = [];
                let score = Math.floor(this.score * 2) / 2;
                let hasDecimal = score % 1 !== 0;
                let inter = Math.floor(score);
                for(let i=0;i<inter;i++){
                    resule.push(CLS_ON);
                }
                if (hasDecimal){
                    resule.push(CLS_HALF);
                }
                while(resule.length < LENGTH){
                    resule.push(CLS_OFF);
                }

                return resule;

            }
        }
    }
</script>

<style lang="stylus">
    @import "../../assets/stylus/mixin.styl";
    .star
        font-size 0
        .starItem
            display inline-block
            background-repeat no-repeat
        &.star-48
            .starItem
                width 20px
                height 20px
                margin-right 22px
                background-size 20px 20px
                &:last-child
                    margin-right 0
                &.on
                    bg-image('star48_on')
                &.half
                    bg-image('star48_half')
                &.off
                    bg-image('star48_off')
        &.star-36
            .starItem
                width 15px
                height 15px
                margin-right 6px
                background-size 15px 15px
                &:last-child
                    margin-right 0
                &.on
                    bg-image('star36_on')
                &.half
                    bg-image('star36_half')
                &.off
                    bg-image('star36_off')
        &.star-24
            .starItem
                width 10px
                height 10px
                margin-right 3px
                background-size 10px 10px
                &:last-child
                    margin-right 0
                &.on
                    bg-image('star24_on')
                &.half
                    bg-image('star24_half')
                &.off
                    bg-image('star24_off')



</style>
