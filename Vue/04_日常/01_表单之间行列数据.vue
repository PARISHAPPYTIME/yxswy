<template>
  <div class="text-list">
    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          align="center"
          label="XX"
          type="index"
          width="55">
      </el-table-column>
      <el-table-column
          align="center"
          label="XXXX"
          prop="pointsDeduction">
        <template slot-scope="scope">
          <text-transform-input v-model="scope.row.pointsDeduction" :cantWrite="cantWrite"/>
        </template>
      </el-table-column>
      <el-table-column
          align="center"
          label="XXXX"
          prop="deductionValue"
          width="100">
        <template slot-scope="scope">
          <text-transform-input v-model="scope.row.deductionValue" :cantWrite="cantWrite"/>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import TextTransformInput from './text-transform-input'

export default {
  name: 'TextList',
  props: {
    value: {
      type: String,
      default: '[]'
    },
    cantWrite: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    tableNum() {
      if (this.tableData && this.tableData.length > 0) {
        const arr = JSON.parse(JSON.stringify(this.tableData))
        const newArr = arr.splice(0, this.tableData.length - 1)
        return newArr.reduce((sum, pre) => {
          let v = 0
          if (typeof sum === 'object') {
            v = parseInt(sum.deductionValue === '' ? 0 : sum.deductionValue)
          } else {
            v = sum
          }
          const res = v + parseInt(pre.deductionValue === '' ? 0 : pre.deductionValue)
          return res
        })
      }
      return 0
    }
  },
  data() {
    return {
      tableData: [
        {deductionValue: '2'}
      ]
    }
  },
  watch: {
    tableNum: {
      immediate: true,
      handler: function (newValue) {
        if (this.tableData && this.tableData.length > 0) {
          this.tableData[this.tableData.length - 1].deductionValue = newValue
        }
      }
    }
  }
}
</script>
