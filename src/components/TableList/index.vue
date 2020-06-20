<template>
    <div>
        <el-table :data="data" border style="width: 100%" align='center'>
            <el-table-column align='center' :prop="item.name" :label="item.label" v-for='(item,key) in titlelist' :key='key'>
            </el-table-column>
            <el-table-column align='center' label="操作">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row,key)" type="text" size="middle" v-for='(item,key) in action' :key='key'>{{item}}</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div style="text-align:right;padding-top: 10px;">
            <el-pagination :total="total" @size-change="sizeChange"  @current-change="currentChange" 
            :current-page="currentPage" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" >
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    name: 'tableList',
    data() {
        return {
            currentPage: 1,
            pageSize: 10
        }
    },
    //父组件向子组件传递数据
    props: ['titlelist', 'data', 'action','total'],
    mounted: function() {
    },
    methods: {
        //切换每页显示条数
        sizeChange(val) {
            this.pageSize = val;
            this.currentPage = 1;
            //$emit-子组件向父组件传递数据
            this.$emit('getPageSize', val, this.currentPage);
        },
        //切换当前页
        currentChange(val) {
            this.currentPage = val;
            this.$emit('getCurrentPage', val);
        }, 
        handleClick(s, i) {
            this.$emit('getaction', s, i);
        }
    }
}
</script>
<style>
.el-table th {
    text-align: center;
}
.el-table tbody tr td:first-child {
    text-align: center;
}
</style>
