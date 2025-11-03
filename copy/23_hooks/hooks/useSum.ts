import { ref, onMounted , computed } from 'vue';

export default function () {
    //  数据
    let sum = ref(0);

    // 方法
    function add() {
        sum.value += 1;
    }

    let bigSum= computed(()=>{
        return sum.value * 10;
    })

    onMounted(()=>{
        add();
    })

    return {
        sum,
        add,
        bigSum
    }
}