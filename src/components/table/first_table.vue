<template>
    <div>
        <div class="table_content">
            <!-- 表格内容 -->
            <div class="tab_content">
                <p><span>开发商操作详情</span> <span>您所在的当前位置：首页 >> 开发商操作详情</span></p>
            </div>

            <div class="search">
                <form class="layui-form">
                    <div class="layui-form-item">
                        <div class="layui-inline">
                            <label class="layui-form-label select_title">信息类型:</label>
                            <div class="layui-input-inline">
                                <select name="quiz">
                                    <option value="">请选择信息类型</option>
                                    <option value="你工作的第一个城市">你工作的第一个城市</option>
                                    <option value="你的工号">你的工号</option>
                                    <option value="你最喜欢的老师">你最喜欢的老师</option>
                                </select>
                            </div>
                        </div>
                        <div class="layui-inline">
                            <label class="layui-form-label select_title">审批状态:</label>
                            <div class="layui-input-inline">
                                <select name="quiz">
                                    <option value="">请选择审批状态</option>
                                    <option value="你工作的第一个城市">你工作的第一个城市</option>
                                    <option value="你的工号">你的工号</option>
                                    <option value="你最喜欢的老师">你最喜欢的老师</option>
                                </select>
                            </div>
                        </div>
                        <button>新建</button>
                        <button>重置</button>
                    </div>

                </form>
            </div>

            <div class="table_box">
                <!-- 行 -->
                <div class="table_column table_title">
                    <!-- 列 -->
                    <div>
                        <input type="checkbox" name="like[write]" title="写作">
                    </div>
                    <div>序号</div>
                    <div>类型</div>
                    <div>名称</div>
                    <div>审批状态</div>
                    <div>审核时间</div>
                    <div>操作</div>
                </div>
                <div class="table_column">
                    <!-- 列 -->
                    <div>
                        <input type="checkbox" name="like[write]" title="写作">
                    </div>
                    <div>1</div>
                    <div>小区</div>
                    <div>xxx小区xxx小区xxx小区xxx小区xxx小区xxx小区xxx小区xxx小区</div>
                    <div style="color: #5692ED;">有效</div>
                    <div>2020-11-11 01：21</div>
                    <div><button>修改</button><button>删除</button></div>
                </div>
                <div class="table_column">
                    <!-- 列 -->
                    <div>
                        <input type="checkbox" name="like[write]" title="写作">
                    </div>
                    <div>2</div>
                    <div>小区</div>
                    <div>xxx小区</div>
                    <div style="color: #DB7272;">无效</div>
                    <div>2020-11-11 01：21</div>
                    <div><button>修改</button><button>删除</button></div>
                </div>
                <div class="table_column">
                    <!-- 列 -->
                    <div>
                        <input type="checkbox" name="like[write]" title="写作">
                    </div>
                    <div>3</div>
                    <div>小区</div>
                    <div>xxx小区</div>
                    <div style="color: #DB7272;">无效</div>
                    <div>2020-11-11 01：21</div>
                    <div><button>修改</button><button>删除</button></div>
                </div>
                <div class="table_column">
                    <!-- 列 -->
                    <div>
                        <input type="checkbox" name="like[write]" title="写作">
                    </div>
                    <div>4</div>
                    <div>小区</div>
                    <div>xxx小区</div>
                    <div style="color: #DB7272;">无效</div>
                    <div>2020-11-11 01：21</div>
                    <div><button>修改</button><button>删除</button></div>
                </div>
                <div class="table_column">
                    <!-- 列 -->
                    <div>
                        <input type="checkbox" name="like[write]" title="写作">
                    </div>
                    <div>5</div>
                    <div>小区</div>
                    <div>xxx小区</div>
                    <div style="color: #DB7272;">无效</div>
                    <div>2020-11-11 01：21</div>
                    <div><button>修改</button><button>删除</button></div>
                </div>
                <div class="table_column">
                    <!-- 列 -->
                    <div>
                        <input type="checkbox" name="like[write]" title="写作">
                    </div>
                    <div>6</div>
                    <div>小区</div>
                    <div>xxx小区</div>
                    <div style="color: #DB7272;">无效</div>
                    <div>2020-11-11 01：21</div>
                    <div><button>修改</button><button>删除</button></div>
                </div>
                <div class="table_column">
                    <!-- 列 -->
                    <div>
                        <input type="checkbox" name="like[write]" title="写作">
                    </div>
                    <div>7</div>
                    <div>小区</div>
                    <div>xxx小区</div>
                    <div style="color: #DB7272;">无效</div>
                    <div>2020-11-11 01：21</div>
                    <div><button>修改</button><button>删除</button></div>
                </div>
                <div class="table_column">
                    <!-- 列 -->
                    <div>
                        <input type="checkbox" name="like[write]" title="写作">
                    </div>
                    <div>8</div>
                    <div>小区</div>
                    <div>xxx小区</div>
                    <div style="color: #DB7272;">无效</div>
                    <div>2020-11-11 01：21</div>
                    <div><button>修改</button><button>删除</button></div>
                </div>
                <div class="table_column">
                    <!-- 列 -->
                    <div>
                        <input type="checkbox" name="like[write]" title="写作">
                    </div>
                    <div>9</div>
                    <div>小区</div>
                    <div>xxx小区</div>
                    <div style="color: #DB7272;">无效</div>
                    <div>2020-11-11 01：21</div>
                    <div><button>修改</button><button>删除</button></div>
                </div>
                <div class="table_column">
                    <!-- 列 -->
                    <div>
                        <input type="checkbox" name="like[write]" title="写作">
                    </div>
                    <div>10</div>
                    <div>小区</div>
                    <div>xxx小区</div>
                    <div style="color: #DB7272;">无效</div>
                    <div>2020-11-11 01：21</div>
                    <div><button>修改</button><button>删除</button></div>
                </div>
            </div>
            <div class="box">
                <div id="pagination3" class="page fl"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "first_table"
    }
</script>

<style scoped lang="scss">
@import "../../assets/css/table/first_table.css";
</style>