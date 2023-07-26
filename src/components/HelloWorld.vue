<template>
    <div class="con">
        <el-container style="height: 500px; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <el-menu :default-openeds="[]">
                   
                    <el-submenu v-for="(v, i) in itemCard" :key="i" :index="i + 1">
                        <template slot="title"><i class="el-icon-message"></i>{{ v.cardname }}</template>
                        <el-menu-item-group v-for="(va, j) in v.items" :key="j">
                            <template slot="title">{{ va.itemTitle }}</template>
                            <el-menu-item v-for="(val, k) in va.group" :key="k" :index="'(i+1)' + '-' + '(j+1)'">{{ val }}</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>

            <el-container>
                <el-header style="text-align: right; font-size: 12px">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>王小龙devCxy</span>
                </el-header>

                <el-main>
                    <el-table :data="tableData">
                        <el-table-column prop="date" label="日期" width="140">
                        </el-table-column>
                        <el-table-column prop="name" label="姓名" width="120">
                        </el-table-column>
                        <el-table-column prop="address" label="地址">
                        </el-table-column>
                    </el-table>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>


<script>
export default {
    components: {},
    computed: {
        stor() {
            return '123'
            // return this.$store.state.devaloperName;
        }
    },
    data() {
        const item = {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        };
        return {
            tableData: Array(20).fill(item),
            itemCard: [
                {
                    cardname: "导航1",
                    items: [
                        { 
                            itemTitle: "分组一", 
                            group: ['选项一', '选项二'] 
                        }, 
                        { 
                            itemTitle: "分组二", 
                            group: ['选项一', '选项二', '选项三'] 
                        }, 
                    ]
                },
                {
                    cardname: "导航2",
                    items: [
                        { 
                            itemTitle: "分组一", 
                            group: ['选项一', '选项二'] 
                        }, 
                        { 
                            itemTitle: "分组二", 
                            group: ['选项一', '选项二', '选项三'] 
                        }, 
                    ]
                },
            ]
        }
    },
    methods: {
        fun() {
            // this.axios({
            //     method:"post",
            //     url:'/testdata'
            // }).then((data)=>{
            //     console.log(data)
            // })
        }
    }
}
</script>


<style scoped>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
}

.el-aside {
    color: #333;
}
</style>