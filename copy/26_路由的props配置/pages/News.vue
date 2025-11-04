<template>
  <div class="news">
    <!-- 导航区 -->
    <ul>
      <li v-for="news in newsList" :key="news.id">
        <!-- 第一种写法： to的字符串写法 -->
        <!-- <RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`">{{ news.title }}</RouterLink> -->

        <!-- 第二种写法：to的对象写法 -->
        <RouterLink :to="{
          name: 'xiang',
          query: {
            id: news.id,
            title: news.title,
            content: news.content,
          }
        }">
          {{ news.title }}
        </RouterLink>
      </li>
    </ul>
    <!-- 展示区 -->
    <div class="news-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts" name="News">
import { reactive } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const newsList = reactive([
  { id: 'n01', title: '工间动一动', content: '工作间隙，活动活动筋骨，放松眼睛，缓解疲劳。' },
  { id: 'n02', title: '中交一公院', content: '中交一公院位于陕西省西安市雁塔区科技四路' },
  { id: 'n03', title: '城建事业部', content: '城建事业部包含4个子部门' },
  { id: 'n04', title: 'BIM中心', content: 'BIM中心致力于建筑信息模型技术的应用与推广' },
])
</script>

<style scoped>
/* 新闻 */
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.news ul {
  margin-top: 30px;
  /* list-style: none; */
  padding-left: 10px;
}

.news li>a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: #64967E;
  text-shadow: 0 0 1px rgb(0, 84, 0);
}

.news li::marker {
  color: #64967E;
}

.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>