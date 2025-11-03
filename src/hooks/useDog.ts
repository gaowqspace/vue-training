import { reactive, onMounted } from 'vue';
import axios from 'axios';

export default function () {
    //  数据
    let dogList = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_6275.jpg'
    ])

    // 方法
    async function getDog() {
        try {
            let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random');
            console.log(result.data.message);
            dogList.push(result.data.message);
        } catch (error) {
            alert('error');
        }
    }

    onMounted(()=>{
        getDog();
    })

    return { dogList, getDog };
}