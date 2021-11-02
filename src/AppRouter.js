import {Link, BrowserRouter as Router, Route} from "react-router-dom";

const Home = ()=>{
    return (
        <div>home</div>
    )
}

const Index = ()=>{
    const data = [
        {id:1,title:"标题一"},
        {id:2,title:"标题二"},
        {id:3,title:"标题三"},
        {id:4,title:"标题四"},
        {id:5,title:"标题五"},
    ];
    return (
        <div>
            <ul>
                {data.map((item,index)=>(
                    <li key={index}><Link to={`/list/${item.id}`}>{item.id} {item.title}</Link></li>
                ))}
            </ul>
        </div>
    )
}

const List = (props)=>{
    console.log(props)
    const {id} = props.match.params
    return (
        <div>list,id:{id}</div>
    )
}

export default function AppRouter(){
    return (
        <div>
            <Router>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/list/">列表</Link></li>
                </ul>
                <Route component={Home}/>
                <Route path="/" exact component={Index} />
                <Route path="/list/:id" exact component={List} />
            </Router>
        </div>
    )
}
