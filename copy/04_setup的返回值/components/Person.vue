<template>
  <div class="person">
  <h2>姓名：{{ name }}</h2>
  <h2>年龄:{{ age }}</h2>
  <button @click="changeName">修改名字</button>
  <button @click="changeAge">修改年龄</button>
  <button @click="showTel">查看联系方式</button>
  </div>
</template>
<script lang="ts">
export default {
  name: "Person",
  setup(){
    console.log('@@',this);    //setup函数中的this是undefined，Vue3中弱化this了
    
    // 数据，原来写在data中，此时的name age tel 都不是响应式数据
    let name ='张三'       // 此时的name不是响应式的
    let age='18'          // 此时的age不是响应式的
    let tel='13812345678'          //此时的tel不是响应式的

    // Methods
    function changeName(){
      console.log(1);
      name='zhang-san';     // 这样修改name页面没有变化
      console.log(name);     // name确实改了
    }
     function changeAge(){
      console.log(2);
      age+=1
    }
     function showTel(){
      console.log(3);
      alert(tel);
    }

    // 将数据、方法传递出去，模板才能用
    return {name,age,changeName,changeAge,showTel}

    // setup 的返回值也可以是一个渲染函数
    //  return ()=>'哈哈'; 
  }
};
</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
button{
    margin: 0 5px ;
}
</style>
