<template>
  <div class="app">
    <h3>~ Today I need to ~</h3>
    <div class="inp">
      <input type="text" placeholder="todo..." v-model.trim="todo" @keydown.enter="add">
      <button @click="add">submit</button>
    </div>
    <ul>
      <li v-for="(item, index) in items" :class="{ click: item.checked }" @click="end">
        <input type="checkbox" v-model="item.checked" v-show="!item.checked">
        <p @click="item.checked ? item.checked = false : item.checked = true">{{ item.text }}</p><span
          @click="del(index)">&times;</span>
      </li>
    </ul>
    <div class="foot">
      <span>{{ sum }}未完成</span>
      <div class="btn">
        <button v-show="this.arr.every(item => item.checked === false)" class="active" @click="render(0)">全部</button>
        <button v-for="(item, index) in btn" @click="selectBtn(index)" :class="{ active: selectedIndex === index }"
          v-show="clear()">{{ item }}</button>
        <button @click="clean" v-show="clear()">清空已完成</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      todo: "",
      count: 0,
      items: JSON.parse(localStorage.getItem("items")) || [{
        text: "123",
        checked: false
      },
      {
        text: "aaa",
        checked: false
      }, {
        text: "2222",
        checked: false
      }
      ],
      arr: [{
        text: "123",
        checked: false
      },
      {
        text: "aaa",
        checked: false
      }, {
        text: "2222",
        checked: false
      }
      ],
      btn: ["全部", "未完成", "已完成"],
      selectedIndex: 0,
    }
  },
  methods: {
    end() {
      this.arr = this.items
      this.selectedIndex = 0
      console.log(this.arr, this.selectedIndex)
    },
    render(selectedIndex) {
      if (selectedIndex === 0) {
        this.items = this.arr
      } else if (selectedIndex === 1) {
        this.items = this.arr.filter(item => {
          return item.checked === false
        })
      } else if (selectedIndex === 2) {
        this.items = this.arr.filter(item => {
          return item.checked === true
        })
      }
    },
    clean() {
      this.items = this.arr.filter(item => {
        return item.checked === false
      })
      this.arr = this.items
    },
    del(index) {
      this.items.splice(index, 1)
      this.arr = this.items
    },
    clear() {
      return this.arr.some(item => item.checked === true)
    },
    selectBtn(index, selectedIndex) {
      this.selectedIndex = index;
      this.render(this.selectedIndex)
    },
    add() {
      if (this.todo === "") {
        alert("不能为空")
        return;
      }
      this.items.push({
        text: this.todo,
        checked: false
      })
      this.arr = this.items
      this.todo = ""
    }
  },
  computed: {
    sum() {
      this.count = 0
      this.items.map(item => {
        if (!item.checked) {
          this.count++
        }
      })
      return this.count
    },

  },
  watch: {
    items: {
      handler() {
        localStorage.setItem("items", JSON.stringify(this.items))
      },
      deep: true
    },
    arr: {
      handler() {
        console.log(this.arr)
        console.log(this.arr.some(item => {
          console.log(item.checked)
          return item.checked === false
        }))
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style lang="scss">
body,
html {
  width: 100%;
  height: 100%;
  background: #E1B0AC;
}

.app {
  width: 350px;
  min-height: 400px;
  background: white;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h3 {
  text-align: center;
  margin-top: 50px;
}

.inp {
  display: flex;
}

.inp input {
  border: 0;
  border-bottom: 4px dotted #DB7957;
  outline: none;
  font-size: 20px;
  margin-right: 5px;
}

ul {
  padding: 0;
  flex: 1;
}

li {
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin: 10px 0;
  border-radius: 5px;
}

li p {
  flex: 1;
}

.foot {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.foot span {
  width: 100px;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
}

.btn button {
  border: 0;
  background: transparent;
  border-radius: 5px;
  height: 30px;
}

.btn button:hover {
  background: #DD7955 !important;
  color: white !important;
}

.active {
  background: #DD7955 !important;
  color: white !important;
}

.click {
  background: #D97C59;
  text-decoration: line-through;
}
</style>
