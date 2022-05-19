<template>
  <div class="hello">
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <h1>{{ msg }}</h1>
<!--    <div v-for="(item,index) in tableData" :key="index">-->
<!--      <div>{{ item }}</div>-->
<!--    </div>-->
    <el-row :gutter="24">
      <el-col :span="22" :offset="1">
        <el-table
            border
            :data="tableData"
            style="width: 100%">
          <el-table-column
              prop="date"
              label="日期"
              width="180">
          </el-table-column>
          <el-table-column
              prop="name"
              label="姓名"
              width="180">
          </el-table-column>
          <el-table-column
              prop="address"
              label="地址">
          </el-table-column>
          <el-table-column
              prop="title"
              label="姓名"
              width="180">
          </el-table-column>
          <el-table-column
              label="图片"
              width="180">
            <template slot-scope="scope">
              <el-image
                  style="width: 80px; height: 80px"
                  :src="scope.row.img"
                 ></el-image>
            </template>
          </el-table-column>
          <el-table-column
              prop="string"
              label="string"
              width="180">
          </el-table-column>
          <el-table-column
              prop="age"
              label="age"
              width="180">
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>

  </div>
</template>

<script>
const axios = require('axios');
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      tableData: []
    }
  },
  mounted() {
    this.getNews()
  },
  methods: {
    getNews(){
      axios.get('/api/get/news')
          .then((response)=> {
            // 处理成功情况
            let { data:{ list } } = response
            console.log(list);
            this.tableData = list
          })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
