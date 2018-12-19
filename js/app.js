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

class Location extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            province: "",
            city: "",
            county: "",
            provinces: ['请选择', '北京', '安徽', '澳门', '福建', '甘肃', '广东', '广西'],
            cities: ['请选择'],
            counties: ['请选择']
        }
    }

    getCity(province) {

        var gc1 = [];
        gc1['安徽'] = ['合肥', '安庆', '蚌埠', '亳州', '巢湖', '池州', '滁州', '阜阳', '淮北', '淮南', '黄山', '六安', '马鞍山', '宿州', '铜陵', '芜湖', '宣城'];
        gc1['澳门'] = ['澳门'];
        gc1['北京'] = ['昌平', '朝阳区', '崇文', '大兴', '东城', '房山', '丰台', '海淀', '怀柔', '门头沟', '密云', '平谷', '石景山', '顺义', '通州区', '西城', '宣武', '延庆'];
        gc1['福建'] = ['福州', '龙岩', '南平', '宁德', '莆田', '泉州', '三明', '厦门', '漳州'];
        gc1['甘肃'] = ['兰州', '白银', '定西', '甘南', '嘉峪关', '金昌', '酒泉', '临夏', '陇南', '平凉', '庆阳', '天水', '武威', '张掖'];
        gc1['广东'] = ['广州', '潮州', '东莞', '佛山', '河源', '惠州', '江门', '揭阳', '茂名', '梅州', '清远', '汕头', '汕尾', '韶关', '深圳', '阳江', '云浮', '湛江', '肇庆', '中山', '珠海'];
        gc1['广西'] = ['桂林', '百色', '北海', '崇左', '防城港', '贵港', '河池', '贺州', '来宾', '柳州', '南宁', '钦州', '梧州', '玉林'];

        return gc1[province]

    }

    getCounty(province, city) {

        var gc2 = [];
        gc2['安徽'] = [];
        gc2['安徽']['合肥'] = ['长丰', '肥东', '肥西', '合肥市'];
        gc2['安徽']['安庆'] = ['安庆市', '枞阳', '怀宁', '潜山', '宿松', '太湖', '桐城', '望江', '岳西'];
        gc2['安徽']['蚌埠'] = ['蚌埠市', '固镇', '怀远', '五河'];
        gc2['安徽']['亳州'] = ['亳州市', '利辛', '蒙城', '涡阳'];
        gc2['安徽']['巢湖'] = ['巢湖市', '含山', '和县', '庐江', '无为'];
        gc2['安徽']['池州'] = ['池州市', '东至', '青阳', '石台'];
        gc2['安徽']['滁州'] = ['滁州市', '定远', '凤阳', '来安', '明光', '全椒', '天长'];
        gc2['安徽']['阜阳'] = ['阜南', '阜阳市', '界首', '临泉', '太和', '颍上'];
        gc2['安徽']['淮北'] = ['淮北市', '濉溪'];
        gc2['安徽']['淮南'] = ['凤台', '淮南市'];
        gc2['安徽']['黄山'] = ['黄山市', '祁门', '歙县', '休宁', '黟县'];
        gc2['安徽']['六安'] = ['霍邱', '霍山', '金寨', '六安市', '寿县', '舒城'];
        gc2['安徽']['马鞍山'] = ['当涂', '马鞍山市'];
        gc2['安徽']['宿州'] = ['砀山', '灵璧', '泗县', '宿州市', '萧县'];
        gc2['安徽']['铜陵'] = ['铜陵市', '铜陵县'];
        gc2['安徽']['芜湖'] = ['繁昌', '南陵', '芜湖市', '芜湖县'];
        gc2['安徽']['宣城'] = ['广德', '绩溪', '泾县', '旌德', '郎溪', '宁国', '宣城市'];
        gc2['澳门'] = [];
        gc2['澳门']['澳门'] = ['澳门'];
        gc2['北京'] = [];
        gc2['北京']['昌平'] = ['昌平'];
        gc2['北京']['朝阳区'] = ['朝阳区'];
        gc2['北京']['崇文'] = ['崇文'];
        gc2['北京']['大兴'] = ['大兴'];
        gc2['北京']['东城'] = ['东城'];
        gc2['北京']['房山'] = ['房山'];
        gc2['北京']['丰台'] = ['丰台'];
        gc2['北京']['海淀'] = ['海淀'];
        gc2['北京']['怀柔'] = ['怀柔'];
        gc2['北京']['门头沟'] = ['门头沟'];
        gc2['北京']['密云'] = ['密云'];
        gc2['北京']['平谷'] = ['平谷'];
        gc2['北京']['石景山'] = ['石景山'];
        gc2['北京']['顺义'] = ['顺义'];
        gc2['北京']['通州区'] = ['通州区'];
        gc2['北京']['西城'] = ['西城'];
        gc2['北京']['宣武'] = ['宣武'];
        gc2['北京']['延庆'] = ['延庆'];
        gc2['福建'] = [];
        gc2['福建']['福州'] = ['长乐', '福清', '福州市', '连江', '罗源', '闽侯', '闽清', '平潭', '永泰'];
        gc2['福建']['龙岩'] = ['长汀', '连城', '龙岩市', '上杭', '武平', '永定', '漳平'];
        gc2['福建']['南平'] = ['光泽', '建瓯', '建阳', '南平市', '浦城', '邵武', '顺昌', '松溪', '武夷山', '政和'];
        gc2['福建']['宁德'] = ['福安', '福鼎', '古田', '宁德市', '屏南', '寿宁', '霞浦', '柘荣', '周宁'];
        gc2['福建']['莆田'] = ['莆田市', '仙游'];
        gc2['福建']['泉州'] = ['安溪', '德化', '惠安', '金门', '晋江', '南安', '泉州市', '石狮', '永春'];
        gc2['福建']['三明'] = ['大田', '建宁', '将乐', '明溪', '宁化', '清流', '三明市', '沙县', '泰宁', '永安', '尤溪'];
        gc2['福建']['厦门'] = ['厦门市'];
        gc2['福建']['漳州'] = ['长泰', '东山', '华安', '龙海', '南靖', '平和', '云霄', '漳浦', '漳州市', '诏安'];
        gc2['甘肃'] = [];
        gc2['甘肃']['兰州'] = ['皋兰', '兰州市', '永登', '榆中'];
        gc2['甘肃']['白银'] = ['白银市', '会宁', '景泰', '靖远'];
        gc2['甘肃']['定西'] = ['定西市', '临洮', '陇西', '岷县', '通渭', '渭源', '漳县'];
        gc2['甘肃']['甘南'] = ['迭部', '合作', '临潭', '碌曲', '玛曲', '夏河', '舟曲', '卓尼'];
        gc2['甘肃']['嘉峪关'] = ['嘉峪关市'];
        gc2['甘肃']['金昌'] = ['金昌市', '永昌'];
        gc2['甘肃']['酒泉'] = ['阿克塞', '敦煌', '瓜州', '金塔', '酒泉市', '肃北', '玉门'];
        gc2['甘肃']['临夏'] = ['东乡族', '广河', '和政', '积石山', '康乐', '临夏市', '临夏县', '永靖'];
        gc2['甘肃']['陇南'] = ['成县', '宕昌', '徽县', '康县', '礼县', '两当', '陇南市', '文县', '西和'];
        gc2['甘肃']['平凉'] = ['崇信', '华亭', '泾川', '静宁', '灵台', '平凉市', '庄浪'];
        gc2['甘肃']['庆阳'] = ['合水', '华池', '环县', '宁县', '庆城', '庆阳市', '镇原', '正宁'];
        gc2['甘肃']['天水'] = ['甘谷', '秦安', '清水', '天水市', '武山', '张家川'];
        gc2['甘肃']['武威'] = ['古浪', '民勤', '天祝', '武威市'];
        gc2['甘肃']['张掖'] = ['高台', '临泽', '民乐', '山丹', '肃南', '张掖市'];
        gc2['广东'] = [];
        gc2['广东']['广州'] = ['从化', '广州市', '增城'];
        gc2['广东']['潮州'] = ['潮安', '潮州市', '饶平'];
        gc2['广东']['东莞'] = ['东莞'];
        gc2['广东']['佛山'] = ['佛山市'];
        gc2['广东']['河源'] = ['东源', '和平县', '河源市', '连平', '龙川', '紫金'];
        gc2['广东']['惠州'] = ['博罗', '惠东', '惠州市', '龙门'];
        gc2['广东']['江门'] = ['恩平', '鹤山', '江门市', '开平', '台山'];
        gc2['广东']['揭阳'] = ['惠来', '揭东', '揭西', '揭阳市', '普宁'];
        gc2['广东']['茂名'] = ['电白', '高州', '化州', '茂名市', '信宜'];
        gc2['广东']['梅州'] = ['大埔', '丰顺', '蕉岭', '梅县', '梅州市', '平远', '五华', '兴宁'];
        gc2['广东']['清远'] = ['佛冈', '连南', '连山', '连州', '清新', '清远市', '阳山', '英德'];
        gc2['广东']['汕头'] = ['南澳', '汕头市'];
        gc2['广东']['汕尾'] = ['海丰', '陆丰', '陆河', '汕尾市'];
        gc2['广东']['韶关'] = ['乐昌', '南雄', '仁化', '乳源', '韶关市', '始兴', '翁源', '新丰'];
        gc2['广东']['深圳'] = ['深圳市'];
        gc2['广东']['阳江'] = ['阳春', '阳东', '阳江市', '阳西'];
        gc2['广东']['云浮'] = ['罗定', '新兴', '郁南', '云安', '云浮市'];
        gc2['广东']['湛江'] = ['雷州', '廉江', '遂溪', '吴川', '徐闻', '湛江市'];
        gc2['广东']['肇庆'] = ['德庆', '封开', '高要', '广宁', '怀集', '四会', '肇庆市'];
        gc2['广东']['中山'] = ['中山市'];
        gc2['广东']['珠海'] = ['珠海市'];
        gc2['广西'] = [];
        gc2['广西']['桂林'] = ['恭城', '灌阳', '桂林市', '荔浦', '临桂', '灵川', '龙胜', '平乐', '全州', '兴安', '阳朔', '永福', '资源'];
        gc2['广西']['百色'] = ['百色市', '德保', '靖西', '乐业', '凌云', '隆林', '那坡', '平果', '田东', '田林', '田阳', '西林'];
        gc2['广西']['北海'] = ['北海市', '合浦'];
        gc2['广西']['崇左'] = ['崇左市', '大新', '扶绥', '龙州', '宁明', '凭祥', '天等'];
        gc2['广西']['防城港'] = ['东兴', '防城港市', '上思'];
        gc2['广西']['贵港'] = ['贵港市', '桂平', '平南'];
        gc2['广西']['河池'] = ['巴马', '大化', '东兰', '都安', '凤山', '河池市', '环江', '罗城', '南丹', '天峨', '宜州'];
        gc2['广西']['贺州'] = ['富川', '贺州市', '昭平', '钟山'];
        gc2['广西']['来宾'] = ['合山', '金秀', '来宾市', '武宣', '象州', '忻城'];
        gc2['广西']['柳州'] = ['柳城', '柳江', '柳州市', '鹿寨', '融安', '融水', '三江'];
        gc2['广西']['南宁'] = ['宾阳', '横县', '隆安', '马山', '南宁市', '上林', '武鸣'];
        gc2['广西']['钦州'] = ['灵山', '浦北', '钦州市'];
        gc2['广西']['梧州'] = ['苍梧', '岑溪', '蒙山', '藤县', '梧州市'];
        gc2['广西']['玉林'] = ['北流', '博白', '陆川', '容县', '兴业', '玉林市'];

        return gc2[province][city]

    }

    handleChange(name, e) {

        switch (name) {

            case "province":
                this.setState({
                    province: e.target.value,
                    cities: this.getCity(e.target.value),
                    city: this.getCity(e.target.value)[0],
                    counties: this.getCounty(e.target.value, this.getCity(e.target.value)[0])
                });
                break;

            case "city":
                this.setState({
                    city: e.target.value,
                    counties: this.getCounty(this.state.province, e.target.value),
                    county: this.getCounty(this.state.province, e.target.value)[0]
                });
                break;

            case "county":
                this.setState({
                    county: e.target.value
                });
                break;

            default:alert("child handleChange error")

        }


    }

    render() {

        let id = 0;

        return (
            <div>
                现居住地
                <select className="select-location" onChange={this.handleChange.bind(this, "province")}>
                    {this.state.provinces.map(province => (
                        <option value={province} key={id++}>{province}</option>
                    ))}
                </select>

                <select className="select-location" onChange={this.handleChange.bind(this, "city")}>
                    {this.state.cities.map(city => (
                        <option value={city} key={id++}>{city}</option>
                    ))}
                </select>

                <select className="select-location" onChange={this.handleChange.bind(this, "county")}>
                    {this.state.counties.map(county => (
                        <option value={county} key={id++}>{county}</option>
                    ))}
                </select>

            </div>

        )

    }

}

class Detail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name: 0, phone: 0, IDCard:0, nameStatus: "", phoneStatus: "", IDCardStatus: ""};
        this.checkPhoneNumber = this.checkPhoneNumber.bind(this)
        this.checkName = this.checkName.bind(this);
        this.checkIDCard = this.checkIDCard.bind(this);
        this.checkAll = this.checkAll.bind(this);
    }

    checkAll(){
        let a = this.state.name + this.state.IDCard + this.state.phone;
        if(a == 3){
            alert("提交成功！");
        }else {
            alert("提交失败！");
        }
    }

    reloadAll(){
        window.location.reload();
    }

    checkName(e)
    {
        let reg=/^[\u0391-\uFFE5]+$/;
        if (e.target.value.length == 0) {
            console.log("姓名不能为空!");
            this.setState({name: 0, nameStatus:"姓名不能为空！"});
        }else if (e.target.value!=""&&!reg.test(e.target.value)) {
            console.log('必须输入中文！');
            this.setState({name: 0, nameStatus:"必须输入中文！"});
        }else if (e.target.value.length==1||e.target.value.length>3) {
            console.log("请输入正确的姓名！");
            this.setState({name: 0, nameStatus:"请输入正确的姓名！"});
        }else {
            console.log("正确的姓名！");
            this.setState({name: 1, nameStatus:"正确的姓名！"});
        }
    }

    checkPhoneNumber(e){
        if(e.target.value.length==0)
        {
            console.log('手机号码不能为空！');
            this.setState({phone: 0, phoneStatus:" "});
        } else if(e.target.value.length!=11)
        {
            console.log('请输入有效的手机号码，需是11位！');
            this.setState({phone: 0, phoneStatus:"请输入有效的手机号码，需是11位！"});
        }
        let myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if(!myreg.test(e.target.value)) {
            console.log('请输入有效的手机号码！');
            this.setState({phone: 0, phoneStatus:"请输入有效的手机号码！"});
        }else{
            console.log('有效的手机号码！');
            this.setState({phone: 1, phoneStatus:"有效的手机号码！"});
        }
    }

    checkIDCard(e){
        if(/^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/.test(e.target.value)) {
            console.log('正确的身份证号！');
            this.setState({IDCard: 1, IDCardStatus: "正确的身份证号！"});
        } else {
            console.log('请输入正确的身份证号！');
            this.setState({IDCard: 0, IDCardStatus: "请输入正确的身份证号！"});
        }
    }

    render(){
        return(
            <div>
                <ul className="det">
                    <li><span>员工姓名</span><input type="text" className="input-text" onBlur={this.checkName}/><div className="checkPhoneNumber">{this.state.nameStatus}</div></li>
                    <li><span>性别</span><input type="radio" name="sex" value="male" defaultChecked className="input-radio"/><span>男</span><input type="radio" name="sex" value="female" className="input-radio" /><span>女</span></li>
                    <li className="phoneNumber"><span>手机号码</span><input type="text" className="input-text" onBlur={this.checkPhoneNumber} /><div className="checkPhoneNumber">{this.state.phoneStatus}</div></li>
                    <li><span>身份证号</span><input type="text" className="input-text" onBlur={this.checkIDCard}/><div className="checkIDCard">{this.state.IDCardStatus}</div></li>
                    <li>
                        <label>
                            所属部门
                            <select className="select-department">
                                <option value="none">请选择</option>
                                <option value="carWash">洗车部</option>
                                <option value="carRepairing">修车部</option>
                                <option value="sell">销售部</option>
                            </select>
                        </label>
                    </li>
                    <li>
                        <label className="date">
                            出身日期
                            <select className="select-date">
                                <option value="1990">1990年</option>
                                <option value="1991">1991年</option>
                                <option value="1992">1992年</option>
                                <option value="1993">1993年</option>
                                <option value="1994">1994年</option>
                                <option value="1995">1995年</option>
                                <option value="1996">1996年</option>
                                <option value="1997">1997年</option>
                                <option value="1998">1998年</option>
                                <option value="1999">1999年</option>
                            </select>
                            <select className="select-date">
                                <option value="01">01月</option>
                                <option value="02">02月</option>
                                <option value="03">03月</option>
                                <option value="04">04月</option>
                                <option value="05">05月</option>
                                <option value="06">06月</option>
                                <option value="07">07月</option>
                                <option value="08">08月</option>
                                <option value="09">09月</option>
                                <option value="10">10月</option>
                                <option value="11">11月</option>
                                <option value="12">12月</option>
                            </select>
                            <select className="select-date">
                                <option value="01">01日</option>
                                <option value="02">02日</option>
                                <option value="03">03日</option>
                                <option value="04">04日</option>
                                <option value="05">05日</option>
                                <option value="06">06日</option>
                                <option value="07">07日</option>
                                <option value="08">08日</option>
                                <option value="09">09日</option>
                                <option value="10">10日</option>
                                <option value="01">11日</option>
                                <option value="02">12日</option>
                                <option value="03">13日</option>
                                <option value="04">14日</option>
                                <option value="05">15日</option>
                                <option value="06">16日</option>
                                <option value="07">17日</option>
                                <option value="08">18日</option>
                                <option value="09">19日</option>
                                <option value="10">20日</option>
                                <option value="01">21日</option>
                                <option value="02">22日</option>
                                <option value="03">23日</option>
                                <option value="04">24日</option>
                                <option value="05">25日</option>
                                <option value="06">26日</option>
                                <option value="07">27日</option>
                                <option value="08">28日</option>
                                <option value="09">29日</option>
                                <option value="10">30日</option>
                            </select>
                        </label>
                    </li>
                    <li>
                        <label className="date">
                            入职日期
                            <select className="select-date">
                                <option value="1990">1990年</option>
                                <option value="1991">1991年</option>
                                <option value="1992">1992年</option>
                                <option value="1993">1993年</option>
                                <option value="1994">1994年</option>
                                <option value="1995">1995年</option>
                                <option value="1996">1996年</option>
                                <option value="1997">1997年</option>
                                <option value="1998">1998年</option>
                                <option value="1999">1999年</option>
                            </select>
                            <select className="select-date">
                                <option value="01">01月</option>
                                <option value="02">02月</option>
                                <option value="03">03月</option>
                                <option value="04">04月</option>
                                <option value="05">05月</option>
                                <option value="06">06月</option>
                                <option value="07">07月</option>
                                <option value="08">08月</option>
                                <option value="09">09月</option>
                                <option value="10">10月</option>
                                <option value="11">11月</option>
                                <option value="12">12月</option>
                            </select>
                            <select className="select-date">
                                <option value="01">01日</option>
                                <option value="02">02日</option>
                                <option value="03">03日</option>
                                <option value="04">04日</option>
                                <option value="05">05日</option>
                                <option value="06">06日</option>
                                <option value="07">07日</option>
                                <option value="08">08日</option>
                                <option value="09">09日</option>
                                <option value="10">10日</option>
                                <option value="01">11日</option>
                                <option value="02">12日</option>
                                <option value="03">13日</option>
                                <option value="04">14日</option>
                                <option value="05">15日</option>
                                <option value="06">16日</option>
                                <option value="07">17日</option>
                                <option value="08">18日</option>
                                <option value="09">19日</option>
                                <option value="10">20日</option>
                                <option value="01">21日</option>
                                <option value="02">22日</option>
                                <option value="03">23日</option>
                                <option value="04">24日</option>
                                <option value="05">25日</option>
                                <option value="06">26日</option>
                                <option value="07">27日</option>
                                <option value="08">28日</option>
                                <option value="09">29日</option>
                                <option value="10">30日</option>
                            </select>
                        </label>
                    </li>
                    <li><span>户籍所在地</span><input type="text" className="input-text" /></li>
                    <li>
                        <label id="location" className="date">

                        </label>
                    </li>
                    <li><span>详细地址</span><input type="text" className="input-text" /></li>
                    <li><span>月休息天数</span><input type="text" className="input-text" /></li>
                    <li>
                        <span className="workload">月任务量</span>
                        <select className="select-work">
                            <option value="carWash">洗车</option>
                            <option value="carRepairing">修车</option>
                            <option value="sell">销售</option>
                        </select>
                        <input type="text" className="input-m" />
                        <input type="button" value="添加"/>
                    </li>
                    <li><span>基本薪资</span><input type="text" className="input-text" /></li>
                    <li><span>备注</span><input type="text" className="input-text" /></li>
                </ul>
                <div className="but">
                    <input className="button" type="button" value="确定" onClick={this.checkAll}/>
                    <input className="button" type="button" value="重置" onClick={this.reloadAll}/>
                </div>
            </div>
        )
    }
}

let memberInformation = [
    {num: 123456, name: "风筝1", phoneNum: 15888886666, idNum: 789787987879878798, location: "广东省", order: 88, expenditure: 880, joinTime: "2015.06.06"},
    {num: 123456, name: "风筝2", phoneNum: 15888886666, idNum: 789787987879878798, location: "广东省", order: 88, expenditure: 880, joinTime: "2015.06.06"},
    {num: 123456, name: "风筝3", phoneNum: 15888886666, idNum: 789787987879878798, location: "广东省", order: 88, expenditure: 880, joinTime: "2015.06.06"},
    {num: 123456, name: "风筝4", phoneNum: 15888886666, idNum: 789787987879878798, location: "广东省", order: 88, expenditure: 880, joinTime: "2015.06.06"},
    {num: 123456, name: "风筝5", phoneNum: 15888886666, idNum: 789787987879878798, location: "广东省", order: 88, expenditure: 880, joinTime: "2015.06.06"},
    {num: 123456, name: "风筝6", phoneNum: 15888886666, idNum: 789787987879878798, location: "广东省", order: 88, expenditure: 880, joinTime: "2015.06.06"},
    {num: 123456, name: "风筝7", phoneNum: 15888886666, idNum: 789787987879878798, location: "广东省", order: 88, expenditure: 880, joinTime: "2015.06.06"}
];

class Table extends React.Component {
    constructor(){
        super();
        this.state = {
            memberInformation
        }
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
                                    <span className="modification">修改</span>
                                    <span className="del" onClick={this.del.bind(this,id)}>删除{id}</span>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
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

// ReactDOM.render(
//     <Location/>,
//     document.getElementById('location')
// );