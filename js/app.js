const element = (
<div>
    <header className="header">
        <div className="logo">
            <img src="img/logo.png" alt="" />
        </div>
        <div className="nav">
            <div className="header-right"><img src="img/nav1.png" alt="" /></div>
            <div className="header-right"><img src="img/nav2.png" alt="" /></div>
            <div className="header-right"><img src="img/nav3.png" alt="" /></div>
            <div className="header-right"><img src="img/nav4.png" alt="" /></div>
            <div className="header-right"><img src="img/nav5.png" alt="" /></div>
            <div className="header-right"><img src="img/nav6.png" alt="" /></div>
            <div className="header-right"><img src="img/nav7.png" alt="" /></div>
        </div>
    </header>
    <div className="content">
        <div className="left-nav">
            <ul className="nav-content">
                <li><img src="img/lnav1.png" alt="商品管理" />商品管理</li>
                <li><img src="img/lnav2.gif" alt="商家管理" />商家管理</li>
                <li><img src="img/lnav3.gif" alt="订单管理" />订单管理</li>
                <li><img src="img/lnav4.gif" alt="广告管理" />广告管理</li>
                <li><img src="img/lnav5.gif" alt="会员管理" />会员管理</li>
                <li><img src="img/lnav6.gif" alt="权限管理" />权限管理</li>
                <li><img src="img/lnav7.gif" alt="员工管理" />员工管理</li>
                <li><img src="img/lnav8.gif" alt="员工考勤" />员工考勤</li>
                <li><img src="img/lnav9.gif" alt="报表统计" />报表统计</li>
            </ul>
        </div>
        <div className="right-content">
            <div className="location">
                <img src="img/location.png" alt="当前位置"/><span>当前位置：</span>
            </div>
            <div className="detail">
                <form action="" id="det">

                </form>
            </div>
            <div className="foot">
                <span>车之翼</span>&nbsp;<span>版权所有</span>&nbsp;<span>All Rights Reserved</span>&nbsp;
                <span>[皖ICP备1503872号]</span>
            </div>
        </div>
    </div>
</div>
);

let memberInformation = [
    {mod: 0,num: 123456, name: "风筝1", phoneNum: 15888886666, idNum: 789787987879878798, location: "广东省", order: 88, expenditure: 880, joinTime: "2015.06.06"},
    {mod: 0,num: 123456, name: "风筝2", phoneNum: 15888886666, idNum: 789787987879878798, location: "广东省", order: 88, expenditure: 880, joinTime: "2015.06.06"},
    {mod: 0,num: 12345678, name: "风筝3", phoneNum: 15888886666, idNum: 789787987879878798, location: "广东省", order: 88, expenditure: 880, joinTime: "2015.06.06"},
    {mod: 0,num: 123456, name: "风筝4", phoneNum: 15888886666, idNum: 789787987879878798, location: "广东省", order: 88, expenditure: 880, joinTime: "2015.06.06"},
    {mod: 0,num: 123456, name: "风筝5", phoneNum: 15888886666, idNum: 789787987879878798, location: "广东省", order: 88, expenditure: 880, joinTime: "2015.06.06"},
    {mod: 0,num: 123456, name: "风筝6", phoneNum: 15888886666, idNum: 789787987879878798, location: "广东省", order: 88, expenditure: 880, joinTime: "2015.06.06"},
    {mod: 0,num: 123456, name: "风筝7", phoneNum: 15888886666, idNum: 789787987879878798, location: "广东省", order: 88, expenditure: 880, joinTime: "2015.06.06"}
];

class Table extends React.Component {
    constructor(){
        super();
        this.state = {
            memberInformation
        }
    }

    handleMod(index){
        this.state.memberInformation[index].mod=1;
        this.setState({
            memberInformation:this.state.memberInformation
        })
    }

    handleAff(index){

        let num=document.getElementById("inform-num").value;
        let name=document.getElementById("inform-name").value;
        let phoneNum=document.getElementById("inform-phoneNum").value;
        let idNum=document.getElementById("inform-idNum").value;
        let location=document.getElementById("inform-location").value;
        let order=document.getElementById("inform-order").value;
        let expenditure=document.getElementById("inform-expenditure").value;
        let joinTime=document.getElementById("inform-joinTime").value;
        this.state.memberInformation[index].num = num;
        this.state.memberInformation[index].name = name;
        this.state.memberInformation[index].phoneNum = phoneNum;
        this.state.memberInformation[index].idNum = idNum;
        this.state.memberInformation[index].location = location;
        this.state.memberInformation[index].order = order;
        this.state.memberInformation[index].expenditure = expenditure;
        this.state.memberInformation[index].joinTime= joinTime;
        this.state.memberInformation[index].mod = 0;
        this.setState({
            memberInformation:this.state.memberInformation
        });

    }

    del(index){
        alert(index);
        this.state.memberInformation.splice(index,1);
        this.setState({
            memberInformation:this.state.memberInformation
        })

    }

    render(){
        return(
            <div>
                <div className="add">
                    <span>会员编号</span><input type="text"/>
                    <span>会员名称</span><input type="text"/>
                    <span>手机号码</span><input type="text"/>
                    <span>身份证号</span><input type="text"/><br/>
                    <span>所在地</span><input type="text"/>
                    <span>订单数</span><input type="text"/>
                    <span>总消费额</span><input type="text"/>
                    <span>入会时间</span><input type="text"/>
                    <input type="button" defaultValue="添加会员"/>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>会员编号</th>
                        <th>会员名称</th>
                        <th>手机号码</th>
                        <th>身份证号</th>
                        <th>所在地</th>
                        <th>订单数</th>
                        <th>总消费额</th>
                        <th>入会时间</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.memberInformation.map((inform,id)=>{
                            if (inform.mod==0){
                                return(
                                    <tr key={id}>
                                        <td>{inform.num}</td>
                                        <td>{inform.name}</td>
                                        <td>{inform.phoneNum}</td>
                                        <td>{inform.idNum}</td>
                                        <td>{inform.location}</td>
                                        <td>{inform.order}</td>
                                        <td>{inform.expenditure}</td>
                                        <td>{inform.joinTime}</td>
                                        <td>
                                            <span className="modification" onClick={this.handleMod.bind(this,id)}>修改</span>
                                            <span className="del" onClick={this.del.bind(this,id)}>删除</span>
                                        </td>
                                    </tr>
                                )
                            }else {
                                return(
                                    <tr key={id}>
                                        <td><input id="inform-num" type="text" defaultValue={inform.num}/></td>
                                        <td><input id="inform-name" type="text" defaultValue={inform.name}/></td>
                                        <td><input id="inform-phoneNum" type="text" defaultValue={inform.phoneNum}/></td>
                                        <td><input id="inform-idNum" type="text" defaultValue={inform.idNum}/></td>
                                        <td><input id="inform-location" type="text" defaultValue={inform.location}/></td>
                                        <td><input id="inform-order" type="text" defaultValue={inform.order}/></td>
                                        <td><input id="inform-expenditure" type="text" defaultValue={inform.expenditure}/></td>
                                        <td><input id="inform-joinTime" type="text" defaultValue={inform.joinTime}/></td>
                                        <td>
                                            <span className="modification" onClick={this.handleAff.bind(this, id)}>确定</span>
                                        </td>
                                    </tr>
                                )
                            }

                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

ReactDOM.render(
    element,
    document.getElementById('app')
);

ReactDOM.render(
    <Table/>,
    document.getElementById('det')
);
