import {useState, useEffect} from "react";

function App() {
    const [toDo, setTodo] = useState("");
    const [toDos, setTodos] = useState([]);
    const onChange = (event) => {
        setTodo(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if(toDo === ""){
            return;
        }
        //vanilla JS 였다면 toDo push나 toDo = 를 했겠지, 하지만 수정할 수 없다는것!! 그래서 modifier를 호출해서 넣어준다.
        //자 근데 ...이게 뭐냐면, console.log에 찍어보는걸로 하면,
        /*
        * const food = [1,2,3,4,5] 를 선언하고,
        * 6을 넣고 싶다면, 어떻게 할까?
        * [6,food] 이렇게?? 이렇게 하면 아웃풋은 [6, Array(5)] 6과 또 다른 배열을 만들어낸다,
        * 하지만  [6,...food] 해주면
        * 현재값을 포함하여 뒤에 이어붙여준다. 이렇게,, [6, 1, 2, 3, 4, 5]    currentArray 를 가져오는것.
        * */
        /* 아래 처럼 하면, 처음에는 useState값으로 인해 초기값은 없다가,
         * 추가해준것은 들어가고, 그리고 current 기준으로 또 추가되고 하면서 누적된다.
         * 아래는 값을 보내는 두가지의 방식이다
         **/
        
        //함수를 보내는방식
        setTodos(currentArray => [toDo,...currentArray]);
        //값을 보내는 방식
        setTodo("");

    };

    return (
        <div>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={toDo}
                    onChange={onChange}
                    placeholder="write your to do..."
                />
                <button>Add To Do</button>
            </form>
            <hr/>
            <ul>
                {toDos.map((item,index)=>(
                    <li key={index}>{item}</li>
                    )
                )}
            </ul>
        </div>
    );
}

export default App;
