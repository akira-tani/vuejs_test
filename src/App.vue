<template>
  <div id="app">
    <div wrapper>
      <h1 title>TODOアプリ</h1>
      <div task--input>
        <label for="taskName">タスク名：</label>
        <input name="taskName" type="text" v-model="taskName" />
        <label for="taskTime">推定時間（分）：</label>
        <input name="taskTime" type="value" v-model="taskTime" />
      </div>
      <button @click="addTask">追加</button>
    </div>
    <table>
      <tr>
        <th>タスク</th>
        <th>推定時間（分）</th>
      </tr>
      <tr v-for="(item, index) in $store.state.task" :key="index">
        <td>{{ item.name }}</td>
        <td>{{ item.time }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskName: "",
      taskTime: "",
    }
  },
  methods: {
    addTask() {
      this.$store.commit("addItemToTask", { name: this.taskName ,  time: this.taskTime } );
    },
  },
};
</script>

<style>
th, td{
  width: 250px;
  text-align: left;
}
</style>