import {Link, BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import {useState} from "react";

const Home = (props)=>{
    return (
        <div>home</div>
    )
}

const Index = (props)=>{
    const initState = [
        {id:1,title:"标题一"},
        {id:2,title:"标题二"},
        {id:3,title:"标题三"},
        {id:4,title:"标题四"},
        {id:5,title:"标题五"},
    ];
    const [state, setState] = useState(initState);
    console.log(props.history)
    return (
        <div>
            <ul>
                {state.map((item,index)=>(
                    <li key={index}><Link to={`/list/${item.id}`}>{item.id} {item.title}</Link></li>
                ))}
            </ul>
        </div>
    )
}

const List = (props)=>{
    console.log(props)
    const [state, setState] = useState({id: props.match.params.id});
    return (
        <div>list,id:{state.id}</div>
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
