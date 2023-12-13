import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchUsers} from "./store/reducers/ActionCreators";
import PostContainer from "./components/PostContainer";
import PostComponent2 from "./components/PostContainer2";

function App() {
    const {users, isLoading, error} = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div>
            <div style={{display: "flex"}}>
                <PostContainer/>
                <PostComponent2/>
            </div>
        </div>
    );
}

export default App;
